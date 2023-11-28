import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';

import { FONT_DISPLAY, FONT_MEDIUM_L, MOBILE_MAX_WIDTH } from '~/components';

import Crown from '~/assets/crown_icon.svg';
import Key from '~/assets/key.png';
import members from '~/data/squad.json';

export default function Squad() {
  const [selectedItem, setSelectedItem] = useState(0);
  return (
    <>
      <TeamContainer>
        <CrownIcon src={Crown.src} />
        <TeamTitle>THE POWER OF THE PEOPLE</TeamTitle>
        <KeyContainer>
          <Keyhole src={Key.src} />
          <CarouselContainer
            showArrows={true}
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
          >
            {members.map((member) => (
              <NameContainer key={member.name}>
                <Name>{member.name}</Name>
                <Position>{member.position}</Position>
              </NameContainer>
            ))}
          </CarouselContainer>
        </KeyContainer>
      </TeamContainer>
    </>
  );
}

const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 12rem;
`;

const TeamTitle = styled.h1`
  font-family: ${FONT_DISPLAY};
  font-weight: 300;
  font-style: italic;
  line-height: 1.2;
  letter-spacing: 0.1rem;
  font-size: 12rem;
  text-transform: uppercase;
  text-align: center;

  background: linear-gradient(to right, #625cbf, #c55fa3, #fccc50);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    font-size: 6.4rem;
    padding: 1rem 5rem;
  }
`;

const CrownIcon = styled.img.attrs({ loading: 'lazy', alt: '' })`
  margin: 0 auto;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    width: 29rem;
  }
`;

const KeyContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
  overflow: hidden;
`;

const Keyhole = styled.img.attrs({ loading: 'lazy', alt: '' })`
  position: absolute;
  margin: 0 auto;
  top: 1rem;
  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    height: 24rem;
  }
`;

const CarouselContainer = styled(Carousel)`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 35rem;
  margin: 0 auto;

  & .carousel.carousel-slider,
  & .slider-wrapper.axis-horizontal {
    overflow: unset;
    width: 28rem;
  }

  & .slide.selected {
    opacity: 1;
    transform: unset;
    filter: unset;
  }

  & .slide {
    opacity: 0.4;
    transform: scale(0.8);
    filter: blur(3px);
  }

  & .control-arrow.control-prev {
    height: 7.2rem;
    width: 7.2rem;
    top: unset;
    bottom: -1.5rem;
    left: 9rem;
    opacity: 1;
    background-image: url('/img/arrow_left.svg') !important;

    &:hover {
      opacity: 0.8;
    }
  }

  & .control-arrow.control-next {
    height: 7.2rem;
    width: 7.2rem;
    top: unset;
    bottom: -1.5rem;
    right: 9rem;
    opacity: 1;
    background-image: url('/img/arrow.svg') !important;

    &:hover {
      opacity: 0.8;
    }
  }

  & .control-next::before,
  .control-prev::before {
    opacity: 0;
  }

  & .control-arrow.control-prev:hover,
  .control-arrow.control-next:hover {
    background-color: transparent;
  }

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    height: 12rem;
    margin: 10rem 0;

    & .control-arrow.control-prev {
      left: 9rem;
      bottom: -1.5rem;
    }

    & .control-arrow.control-next {
      right: 9rem;
      bottom: -1.5rem;
    }

    & .carousel.carousel-slider,
    & .slider-wrapper.axis-horizontal {
      overflow: unset;
      width: 20rem;
    }
  }
`;

const NameContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin: 0 auto;
  height: 55rem;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    height: 30rem;
  }
`;

const Name = styled.strong`
  font-family: ${FONT_MEDIUM_L};
  font-size: 2.4rem;
  line-height: 1.3;
  text-transform: uppercase;
  z-index: 1;
`;

const Position = styled.span`
  font-size: 2.2rem;
  z-index: 1;
  color: rgba(255, 255, 255, 0.65);
  padding: 0.8rem;
`;
