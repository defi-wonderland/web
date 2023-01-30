import styled from "styled-components";

import {
  Button,
  FONT_DISPLAY,
  FONT_MEDIUM_L,
  SectionBackground,
  TABLET_MAX_WIDTH,
} from "~/components/common";

export const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  z-index: -1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BG_1 = styled(SectionBackground)`
  position: relative;
  width: 50%;
  margin: 0 auto;
  margin-top: 120rem;

  @media screen and (max-width: ${TABLET_MAX_WIDTH}) {
    width: 100%;
  }
`;

export const LandingContainer = styled.section`
  width: 100%;
  margin: 5rem auto 0;
  display: grid;
  grid-template-areas:
    "star title"
    "empty firstBlock"
    "empty landingDivider"
    "empty secondBlock"
    "icon secondTitle";
  width: auto;
`;

export const Title = styled.strong`
  font-family: ${FONT_MEDIUM_L};
  font-size: 2.4rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 1.6rem 0 1.6rem 4.4rem;
`;

export const FirstTitle = styled(Title)`
  grid-area: title;
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
`;

export const SecondTitle = styled(Title)`
  grid-area: secondTitle;
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
`;

export const Star = styled.img`
  width: 5rem;
  padding: 0 0.8rem;
  grid-area: star;
  height: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
`;

export const Icon = styled.img`
  grid-area: icon;
  width: 5rem;
  padding: 0 0.8rem;
  height: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
`;

export const FirstBlockContainer = styled.div`
  width: 100%;
  height: 100%;
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  grid-area: firstBlock;

  display: flex;
  flex-direction: row;
`;

export const SecondBlockContainer = styled.div`
  width: 100%;
  height: 100%;
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  grid-area: secondBlock;
`;

export const Divider = styled.div`
  grid-area: landingDivider;

  background-image: linear-gradient(
    to right,
    rgba(14, 21, 44, 1),
    rgba(252, 204, 80, 0.2) 40%,
    rgba(197, 95, 163, 0.15),
    rgba(98, 92, 191, 0.15),
    rgba(14, 21, 44, 1) 95%
  );
`;

export const DividerText = styled.p`
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

  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
`;

export const GradientText = styled(DividerText)`
  width: 50rem;
  border: none;
  text-align: left;
`;

export const TextContainer = styled.div`
  padding: 5rem 4rem;
  padding-right: 45rem;
`;

export const SButton = styled(Button)`
  margin: 4.5rem 10rem 5rem auto;
`;

export const Cone = styled.img`
  position: absolute;
  margin-top: 70rem;
  margin-left: 25%;
  width: 60%;
`;
