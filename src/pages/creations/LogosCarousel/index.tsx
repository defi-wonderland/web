import { useEffect, useMemo, useState } from 'react';
import { styled } from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import { MOBILE_MAX_WIDTH, TABLET_MAX_WIDTH } from '~/components';
import { useBreakpoints } from '~/hooks/useBreakpoints';

interface LogosCarouselProps {
  companies: string[];
  onChange: (index: number) => void;
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
  const [loop, setLoop] = useState(carouselState.desktop.loop);
  const [visibleItems, setVisibleItems] = useState(carouselState.desktop.visibleItems);

  const itemMaxSize = Math.ceil(visibleItems / 2);
  const centerIndex = Math.floor(visibleItems / 2);
  const initialIndex = visibleItems * Math.floor(loop / 2);

  const items = useMemo(() => Array(loop).fill(companies).flat(), [loop, companies]);
  const [selectedItem, setSelectedItem] = useState(initialIndex);

  const minIndex = centerIndex - 1;
  const maxIndex = items.length - centerIndex;

  const setCarouselState = ({ loop, visibleItems }: { loop: number; visibleItems: number }) => {
    setLoop(loop);
    setVisibleItems(visibleItems);
  };

  const { isMobile, isTablet } = useBreakpoints();

  const setItemSizeByIndex = (index: number, currIndex: number) => {
    if (index === currIndex) {
      return itemMaxSize;
    }

    const diff = Math.abs(currIndex - index);
    if (diff > itemMaxSize) return 0;

    return itemMaxSize - diff;
  };

  const resetIndex = () => {
    setSelectedItem(initialIndex);
    onChange(0);
  };

  const handleChangeItem = (index: number) => {
    if (index === selectedItem) return;

    if (index === maxIndex || index === minIndex) {
      resetIndex();
      return;
    }

    setSelectedItem(index);
    onChange(index % companies.length);
  };

  useEffect(() => {
    if (isTablet) {
      setCarouselState(carouselState.tablet);
    } else if (isMobile) {
      setCarouselState(carouselState.mobile);
    } else {
      setCarouselState(carouselState.desktop);
    }
  }, [isMobile, isTablet]);

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
          <LogoContainer key={company} data-size={setItemSizeByIndex(i, selectedItem) || 0} data-index={i}>
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
  will-change: width, height, opacity, transform;
  transition: width 0.3s, height 0.3s, opacity 0.3s ease-in, transform 0.2s ease-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

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
    cursor: pointer;

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
