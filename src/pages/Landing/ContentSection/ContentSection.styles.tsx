import styled from 'styled-components';

import {
  Button,
  CONTENT_INDEX,
  FONT_DISPLAY,
  FONT_MEDIUM_L,
  MOBILE_MAX_WIDTH,
  PAGE_MAX_WIDTH,
  SectionBackground,
  TABLET_MAX_WIDTH,
} from '~/components/common';

export const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  z-index: -1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: ${TABLET_MAX_WIDTH}) {
    right: -5rem;
  }
`;

export const BG_1 = styled(SectionBackground)`
  position: relative;
  width: 50%;
  margin: 0 auto;
  margin-top: 20rem;

  @media screen and (max-width: ${PAGE_MAX_WIDTH}) {
    margin-top: 40rem;
  }

  @media screen and (max-width: ${TABLET_MAX_WIDTH}) {
    width: 100%;
    margin-top: 10rem;
  }

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    position: absolute;
    width: 150%;
    margin-top: 110rem;
  }
`;

export const Cone = styled.img`
  position: absolute;
  margin-left: 25%;
  width: 90rem;

  @media screen and (max-width: ${TABLET_MAX_WIDTH}) {
    margin-right: -10rem;
    margin-top: 125rem;
  }

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    width: 120%;
    margin-right: unset;
    margin-left: -3.5rem;
  }
`;

export const LandingContainer = styled.section`
  width: 100%;
  padding: 5rem 7.5rem 10rem 2.5rem;
  position: relative;
  display: grid;
  grid-template-areas:
    'star title'
    'empty firstBlock'
    'empty landingDivider'
    'empty secondBlock'
    'icon secondTitle';
  grid-template-columns: 5rem auto;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    padding: 0;
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.strong`
  font-family: ${FONT_MEDIUM_L};
  font-size: 2.4rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 1.6rem 0 1.6rem 4.4rem;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    font-size: 1.8rem;
  }
`;

export const FirstTitle = styled(Title)`
  grid-area: title;
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);

  & img {
    display: none;
  }

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    & {
      padding: 0rem;
      border-left: none;
    }

    & img {
      display: block;
      padding: 1rem;
      margin-right: 1rem;
      border-bottom: none;
    }
  }
`;

export const Star = styled.img`
  width: 5rem;
  padding: 0 1rem;
  grid-area: star;
  height: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    display: none;
  }
`;

export const Icon = styled.img`
  grid-area: icon;
  width: 5rem;
  padding: 0 1.1rem;
  height: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.5);

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    display: none;
  }
`;

export const FirstBlockContainer = styled.div`
  width: 100%;
  height: 100%;
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  grid-area: firstBlock;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: ${TABLET_MAX_WIDTH}) {
    flex-direction: column;
    padding: 2.4rem 1.6rem;
    border-left: none;
  }
`;

export const SecondBlockContainer = styled.div`
  width: 100%;
  height: 100%;
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  grid-area: secondBlock;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    border-left: none;
  }
`;

export const Divider = styled.div`
  grid-area: landingDivider;
  z-index: ${CONTENT_INDEX};

  background-image: linear-gradient(
    to right,
    rgba(14, 21, 44, 1),
    rgba(252, 204, 80, 0.2) 40%,
    rgba(197, 95, 163, 0.15),
    rgba(98, 92, 191, 0.15),
    rgba(14, 21, 44, 1) 95%
  );

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    background-image: linear-gradient(
      to right,
      rgba(14, 21, 44, 1),
      rgba(252, 204, 80, 0.25) 30%,
      rgba(197, 95, 163, 0.25),
      rgba(14, 21, 44, 1) 95%
    );
  }
`;

export const DividerLine = styled.div`
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(255, 255, 255, 0.5) 50%,
    rgba(14, 21, 44, 0) 100%
  );
  height: 1px;
  width: 100%;
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

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    text-align: start;
    font-size: 6.4rem;
    padding: 2.4rem 3rem;
  }
`;

export const GradientText = styled(DividerText)`
  width: 50rem;
  border: none;
  text-align: left;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    width: fit-content;
    line-height: 1;
    padding: 0;
    padding-right: 1rem;
  }
`;

export const TextContainer = styled.div`
  padding: 5rem 4rem;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    padding: 0rem;
  }
`;

export const SButton = styled(Button)`
  margin: 4.5rem 8rem 5rem auto;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    margin: 6rem auto;
  }
`;

export const SecondTitle = styled(Title)`
  grid-area: secondTitle;
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.5);

  & img {
    display: none;
  }

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 0;
    border-left: none;

    & div {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100%;
      justify-content: start;
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    }

    & img {
      border-top: none;
      display: block;
      border-right: 1px solid rgba(255, 255, 255, 0.5);
      height: 6.4rem;
      width: 6.4rem;
      padding: 1.8rem;
      margin-right: 2rem;
    }
  }
`;

export const CommunityButton = styled(Button)`
  margin: 0 8rem 0 auto;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    margin: 3rem auto;
  }
`;
