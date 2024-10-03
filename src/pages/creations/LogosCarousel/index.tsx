import { styled } from 'styled-components';
import { MOBILE_MAX_WIDTH, TABLET_MAX_WIDTH } from '~/components';
import { Carousel } from 'react-responsive-carousel';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { isMobile, isTablet } from '~/utils';

interface LogosCarouselProps {
  companies: string[];
  onChange?: (index: number) => void;
}

const carouselState = {
  desktop: {
    loop: 7,
    visibleItems: 9,
  },
  tablet: {
    loop: 5,
    visibleItems: 5,
  },
  mobile: {
    loop: 5,
    visibleItems: 3,
  },
};

const formatCompanyToFileName = (company: string) => company.toLowerCase().replace(/ /g, '-');

export default function LogosCarousel({ companies, onChange }: LogosCarouselProps) {
  const [loop, setLoop] = useState(carouselState.desktop.loop); // iterations of the logos
  const [visibleItems, setVisibleItems] = useState(carouselState.desktop.visibleItems); // number of logos visible

  const maxSize = useMemo(() => Math.ceil(visibleItems / 2), [visibleItems]); // max size of the logos
  const centerIndex = useMemo(() => Math.floor(visibleItems / 2), [visibleItems]); // index of the center logo
  const initialIndex = useMemo(() => visibleItems * Math.floor(loop / 2), [visibleItems, loop]); // start in the middle of the list, from index 0

  const items = useMemo(() => Array(loop).fill(companies).flat(), [loop, companies]); // repeat the companies to fill the loop
  const [selectedItem, setSelectedItem] = useState(initialIndex);

  // setSize is used to determine the size of the logos
  // if the index is the selected item, the size is the max size, Math.ceil(VISIBLE_ITEMS / 2)
  // otherwise, if the index is bigger or smaller than the selected item, the size is the module of the difference between selected item and index
  const setSize = (index: number, currIndex: number) => {
    if (index === currIndex) {
      return maxSize;
    }

    const diff = Math.abs(currIndex - index);
    if (diff > maxSize) return 0;

    return maxSize - diff;
  };

  const resetIndex = () => {
    setSelectedItem(initialIndex);
    if (onChange) onChange(0);
  };

  const handleChangeItem = (index: number) => {
    if (index === selectedItem) return;

    if (index === items.length - centerIndex) {
      resetIndex();
      return;
    }

    if (index === centerIndex - 1) {
      resetIndex();
      return;
    }

    setSelectedItem(index);
    if (onChange) onChange(index % companies.length); // get the index of the company
  };

  const setCarouselState = ({ loop, visibleItems }: { loop: number; visibleItems: number }) => {
    setLoop(loop);
    setVisibleItems(visibleItems);
  };

  const resizeCarousel = useCallback(() => {
    if (isTablet()) {
      setCarouselState(carouselState.tablet);
    } else if (isMobile()) {
      setCarouselState(carouselState.mobile);
    } else {
      setCarouselState(carouselState.desktop);
    }
  }, []);

  useEffect(() => {
    window && window.addEventListener('resize', resizeCarousel);

    resizeCarousel();

    return () => {
      window.removeEventListener('resize', resizeCarousel);
    };
  }, [resizeCarousel]);

  return (
    <Container>
      <CarouselContainer
        showArrows
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        selectedItem={selectedItem}
        onClickItem={handleChangeItem}
        onChange={handleChangeItem}
      >
        {items.map((company, i) => (
          <LogoContainer key={company} data-size={setSize(i, selectedItem) || 0} data-index={i}>
            <Logo src={`/img/logos/${formatCompanyToFileName(company || '')}.png`} alt={`${company} logo`} />
          </LogoContainer>
        ))}
      </CarouselContainer>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
`;

const LogoContainer = styled.div`
  width: 8rem;
  height: 8rem;
  opacity: 1;
  border-radius: 50%;
  overflow: hidden;
  will-change: width, height, opacity;
  transition: width 0.3s, height 0.3s, opacity 0.3s ease-in;

  &[data-size='4'] {
    width: 7rem;
    height: 7rem;
    opacity: 0.9;
  }

  &[data-size='3'] {
    width: 6rem;
    height: 6rem;
    opacity: 0.8;
  }

  &[data-size='2'] {
    width: 5rem;
    height: 5rem;
    opacity: 0.7;
  }

  &[data-size='1'] {
    width: 4rem;
    height: 4rem;
    opacity: 0.6;
  }

  &[data-size='0'] {
    width: 3rem;
    height: 3rem;
    opacity: 0;
    transition: width 0.3s, height 0.3s, opacity 0.2s;
  }

  @media screen and (max-width: ${TABLET_MAX_WIDTH}) {
    &[data-size='3'] {
      width: 8rem;
      height: 8rem;
      opacity: 1;
    }
    &[data-size='2'] {
      width: 6rem;
      height: 6rem;
      opacity: 0.9;
    }
    &[data-size='1'] {
      width: 4rem;
      height: 4rem;
      opacity: 0.8;
    }
  }

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    &[data-size='2'] {
      width: 7rem;
      height: 7rem;
      opacity: 1;
    }
    &[data-size='1'] {
      width: 5rem;
      height: 5rem;
      opacity: 0.9;
    }
  }
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const CarouselContainer = styled(Carousel)`
  position: relative;
  width: 100%;
  padding: 0 7.2rem;
  height: 10rem;
  overflow: hidden;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    padding: 0 5rem;
    width: 100%;
  }

  & .carousel.carousel-slider {
    height: 100%;
  }

  & .slider-wrapper.axis-horizontal {
    width: 5.2rem;
    height: 100%;
  }

  & .carousel .slider-wrapper {
    margin: unset;
    overflow: unset;
    transform: translateX(455%);

    @media screen and (max-width: ${TABLET_MAX_WIDTH}) {
      transform: translateX(283%);
    }

    @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
      transform: translateX(105%);
    }
  }

  & .slide {
    border: 1px solid transparent;
    padding: 0;
    margin: 0;
    position: relative;
  }

  & .slider {
    height: 100%;
    display: flex;
    align-items: center;
    gap: 2rem;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  & .control-arrow {
    position: absolute;
    height: 7.2rem;
    width: 7.2rem;
    top: 50%;
    transform: translateY(-50%);
    opacity: 1;
    flex-shrink: 0;
    z-index: 99;

    @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
      height: 5rem;
      width: 5rem;
      background-size: contain;
    }

    &:hover {
      opacity: 0.8;
      background-color: unset;
    }

    &.control-prev {
      left: 0;
      background-image: url('/img/arrow_left.svg');

      &:hover {
        background-image: url('/img/arrow_left.svg');
      }
    }

    &.control-next {
      right: 0;
      background-image: url('/img/arrow.svg');

      &:hover {
        background-image: url('/img/arrow.svg');
      }
    }
  }

  & .control-next::before,
  .control-prev::before {
    opacity: 0;
  }
`;
