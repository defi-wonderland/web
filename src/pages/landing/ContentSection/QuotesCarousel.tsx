import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { styled } from 'styled-components';
import { FONT_MEDIUM, MOBILE_MAX_WIDTH } from '~/components';
import QUOTES from '~/data/quotes.json';

export default function QuotesCarousel() {
  const [selectedItem, setSelectedItem] = useState(1);

  return (
    <Container>
      <CarouselContainer
        showArrows
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        selectedItem={selectedItem}
        onClickItem={(index: number) => {
          setSelectedItem(index);
        }}
        onChange={(index: number) => {
          setSelectedItem(index);
        }}
        infiniteLoop
      >
        {QUOTES.map((quote, i) => (
          <QuoteCard key={quote.author.name} data-previous={i === selectedItem - 1} data-next={i === selectedItem + 1}>
            <Quote>{quote.text}</Quote>
            <Divider />
            <AuthorContainer href={quote.link} target='_blank'>
              <img className='avatar' src={quote.author.avatar} alt={`${quote.author.name} avatar`} />
              <TextContainer>
                <Text>
                  {quote.author.name} / {quote.author.position}
                </Text>
                <Text>{quote.author.company}</Text>
              </TextContainer>
            </AuthorContainer>
            <img className='logo' src={quote.logo} alt={`${quote.author.company} logo`} />
          </QuoteCard>
        ))}
      </CarouselContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const QuoteCard = styled.div`
  position: relative;
  min-width: 42rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 4rem 3rem;

  background: rgba(255, 255, 255, 0);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: background 0.5s ease-in, backdrop-filter 0.5s ease-in;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    min-width: 100%;
  }
`;

const CarouselContainer = styled(Carousel)`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 42rem;
  margin: 6rem auto;

  & .carousel .slide img {
    &.avatar {
      width: 4.5rem;
      height: 4.5rem;
      border-radius: 50%;
    }

    &.logo {
      width: 10rem;
      height: 10rem;
      border-radius: 50%;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(50%, -50%);

      @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
        width: 10rem;
        height: 10rem;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }

  & .carousel.carousel-slider {
    overflow: unset;
  }

  & .slider-wrapper.axis-horizontal {
    overflow: unset;
    width: 36rem;
  }

  & .carousel .slider-wrapper {
    margin: unset;
  }

  & .slider {
    align-items: center;
  }

  & .slide.selected {
    opacity: 1;
    transform: unset;
    filter: unset;
    z-index: 1;

    & ${QuoteCard} {
      backdrop-filter: blur(30px);
      background: rgba(255, 255, 255, 0.05);
    }
  }

  & .slide {
    opacity: 0;
    transform: scale(0.3) translate3d(0, 0, 0); // translate3d fix blur cropped on Safari
    transition: opacity 0.3s, transform 0.3s;
    filter: blur(7px);

    &:has([data-previous='true']),
    &:has([data-next='true']) {
      opacity: 0.75;
      transform: scale(0.75) translate3d(0, 0, 0); // translate3d fix blur cropped on Safari
    }
  }

  & .control-arrow.control-prev {
    height: 7.2rem;
    width: 7.2rem;
    top: unset;
    bottom: -8.2rem;
    left: 35%;
    transform: translateX(-100%);
    opacity: 1;
    background-image: url('/img/arrow_left.svg');

    &:hover {
      opacity: 0.8;
      background-color: unset;
      background-image: url('/img/arrow_left.svg');
    }
  }

  & .control-arrow.control-next {
    height: 7.2rem;
    width: 7.2rem;
    top: unset;
    bottom: -8.2rem;
    left: 65%;
    opacity: 1;
    background-image: url('/img/arrow.svg');

    &:hover {
      opacity: 0.8;
      background-color: unset;
      background-image: url('/img/arrow.svg');
    }
  }

  & .control-next::before,
  .control-prev::before {
    opacity: 0;
  }

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    width: 100%;

    & .control-arrow.control-prev {
      bottom: -8.5rem;
    }

    & .control-arrow.control-next {
      bottom: -8.5rem;
    }

    & .carousel .slider-wrapper {
      width: 100%;
    }

    & .slider-wrapper.axis-horizontal {
      padding: 0 1rem;
    }
  }
`;

const Quote = styled.span`
  font-size: 1.5rem;
  line-height: 2.5rem;
  letter-spacing: 0.1rem;
  font-weight: 500;
  color: #fff;
  text-align: left;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    padding-top: 3rem;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 3rem 0 2rem;
`;

const AuthorContainer = styled.a`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  text-decoration: none;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
`;

const textStyles = `
  font-family: ${FONT_MEDIUM};
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 2.3rem;
  font-style: italic;
  letter-spacing: 0.1rem;
  color: #fff;
`;

const Text = styled.span`
  ${textStyles}
`;
