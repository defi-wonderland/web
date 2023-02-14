import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";

import {
  FONT_DISPLAY,
  FONT_MEDIUM_L,
  MOBILE_MAX_WIDTH,
} from "~/components/common";

export const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 12rem;
`;

export const TeamTitle = styled.h1`
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

export const CrownIcon = styled.img`
  margin: 0 auto;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    width: 29rem;
  }
`;

export const KeyContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
`;

export const Keyhole = styled.img`
  position: absolute;
  margin: 0 auto;
  top: 1rem;
  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    height: 24rem;
  }
`;

export const ButtonsContainer = styled.div`
  width: 19rem;
  height: 7.2rem;
  display: flex;
  justify-content: space-between;
  margin: 3rem auto;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    width: 16rem;
    margin: 0rem auto;
  }
`;

export const ArrowIcon = styled.img`
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    width: 6rem;
  }
`;

export const CarouselContainer = styled(Carousel)`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 35rem;
  margin: 0 auto;

  & .control-arrow.control-prev {
    height: 7.2rem;
    width: 7.2rem;
    top: unset;
    bottom: 0rem;
    left: 9rem;
    background-image: url("/img/arrow_left.svg") !important;
  }

  & .control-arrow.control-prev:hover,
  .control-arrow.control-next:hover {
    background-color: transparent;
  }

  & .control-arrow.control-next {
    height: 7.2rem;
    width: 7.2rem;
    top: unset;
    bottom: 0rem;
    right: 9rem;
    background-image: url("/img/arrow.svg") !important;
  }

  & .control-next::before,
  .control-prev::before {
    opacity: 0;
  }

  & .carousel.carousel-slider {
    height: 56rem;
  }

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    height: 32rem;
    width: 25rem;

    & .control-arrow.control-prev {
      left: 4rem;
      bottom: 10.5rem;
    }

    & .control-arrow.control-next {
      right: 4rem;
      bottom: 10.5rem;
    }
  }
`;

export const NameContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 55rem;
  width: fit-content;
  margin: 0 auto;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    height: 30rem;
  }
`;

export const Name = styled.strong`
  font-family: ${FONT_MEDIUM_L};
  font-size: 2.4rem;
  text-transform: uppercase;
  z-index: 1;
`;

export const Position = styled.span`
  font-size: 1.8rem;
  z-index: 1;
  color: rgba(255, 255, 255, 0.65);
  padding: 0.8rem;
`;

export const PrevNameContainer = styled(NameContainer)`
  position: absolute;

  left: 0rem;
  opacity: 0.4;
  transform: scale(0.8);
  filter: blur(2px);

  display: flex;
  flex-direction: row;

  & div {
    width: 25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
  }

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    top: -30%;
    left: -6rem;

    & div {
      width: 14rem;
    }

    & div:nth-child(2) {
      display: none;
    }
  }
`;

export const NextNameContainer = styled(PrevNameContainer)`
  left: unset;
  right: 0rem;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    right: -6rem;
  }
`;
