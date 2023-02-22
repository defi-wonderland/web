import styled from "styled-components";
import {
  FONT_DISPLAY,
  FONT_MEDIUM,
  FONT_MEDIUM_L,
  FONT_SIZE_18,
  FONT_SIZE_24,
  Link,
  MOBILE_MAX_WIDTH,
  SPACING_320,
} from "~/components/common";
import KEY from "~/assets/join-key.svg";
import EYE from "~/assets/eye.svg";

export const TitleContainer = styled.div`
  margin-top: ${SPACING_320};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    margin-top: 0rem;
    flex-direction: column;
  }
`;

export const WonderTitle = styled.h1`
  word-wrap: unset;
  width: 40rem;
  font-family: ${FONT_DISPLAY};
  font-weight: 300;
  line-height: 1.2;
  letter-spacing: 0.1rem;
  font-size: 12.8rem;
  text-transform: uppercase;
  text-align: start;

  background: linear-gradient(to right, #625cbf, #c55fa3, #fccc50);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    text-align: center;
    font-size: 6.4rem;
    width: auto;
  }
`;

export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 100px 0px;

  & .member {
    border-right: 1px solid rgba(255, 255, 255, 0.4);
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  }

  & .member.member-2,
  & .member.member-5,
  & .member.member-8,
  & .member.member-11,
  & .member.member-14,
  & .member.member-17 {
    border-right: unset;
  }

  & .member.member-15,
  & .member.member-16,
  & .member.member-17 {
    border-bottom: unset;
  }

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    display: flex;
    flex-direction: column;
    grid-gap: 0.1rem;
    margin-top: 2rem;

    & .member {
      border: unset;
      border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    }
  }
`;

export const FlipCard = styled.button`
  background-color: transparent;
  position: relative;
  text-align: start;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
  padding: unset;

  &:active .flip-card-inner,
  &:focus .flip-card-inner {
    transform: rotate3d(1, -1, 0, 180deg);
  }
`;

export const FlipCardInner = styled.div`
  position: relative;
  transition: transform 0.6s;
  transform-style: preserve-3d;
`;

export const MemberContainerFront = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 20rem;
  width: 45rem;
  padding: 2.4rem;
  cursor: pointer;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;

  &:hover {
    background-image: radial-gradient(
        circle at 100% 0%,
        rgba(14, 21, 44, 0) 0%,
        rgba(14, 21, 44, 1) 85%
      ),
      url("/img/lore/002_grad.jpg");
    background-size: cover;
    background-position: bottom;
  }

  &:hover img {
    opacity: 1;
  }

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    & {
      height: 18rem;
      width: 100%;
    }
  }
`;

export const MemberContainerBack = styled(MemberContainerFront)`
  position: absolute;
  top: 0rem;
  background-image: radial-gradient(
      circle at 100% 0%,
      rgba(14, 21, 44, 0) 0%,
      rgba(14, 21, 44, 1) 85%
    ),
    url("/img/lore/002_grad.jpg");
  background-size: cover;
  background-position: bottom;
  transform: rotate3d(1, -1, 0, 180deg);

  & img {
    opacity: 1;
  }

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    top: 0rem;
    width: 100%;
  }
`;

export const Name = styled.strong`
  font-family: ${FONT_MEDIUM_L};
  font-size: ${FONT_SIZE_24};
  text-transform: uppercase;
  opacity: 1 !important;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    font-size: 2rem;
  }
`;

export const Position = styled.p`
  font-family: ${FONT_MEDIUM};
  font-size: ${FONT_SIZE_18};
  color: rgba(255, 255, 255, 0.65);
  z-index: 1;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    font-size: 1.6rem;
  }
`;

export const TwitterHandle = styled.span`
  font-family: ${FONT_MEDIUM};
  font-size: ${FONT_SIZE_18};
  color: rgba(255, 255, 255, 0.65);

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    font-size: 1.6rem;
  }
`;

export const Divider = styled.canvas`
  background: linear-gradient(
    to right,
    rgba(14, 21, 44, 0) 0,
    rgba(255, 255, 255, 0.5) 100%
  );
  height: 2px;
  width: 60%;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    background: linear-gradient(
      to bottom,
      rgba(14, 21, 44, 0) 0,
      rgba(255, 255, 255, 0.5) 100%
    );
    height: 8rem;
    width: 2px;
    margin-top: 3rem;
  }
`;

export const JoinContainer = styled(Link)`
  position: relative;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: radial-gradient(
    ellipse 50% 50%,
    rgba(255, 255, 255, 0.2),
    transparent
  );

  & p {
    font-size: 2.4rem;
  }
`;

export const KeyImage = styled.img.attrs({ src: KEY })`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
`;

export const EyeImage = styled(KeyImage).attrs({ src: EYE })`
  opacity: 0;
  bottom: 0;
  right: 0;
`;

export const MemberLink = styled(Link)`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  z-index: 1;
`;
