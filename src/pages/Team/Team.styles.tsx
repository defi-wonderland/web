import styled from 'styled-components';

import {
  Ball,
  CONTENT_INDEX,
  MOBILE_MAX_WIDTH,
  SectionBackground,
  SPACING_1152,
  SPACING_256,
  SPACING_384,
} from '~/components/common';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    width: 100%;
    padding: 0 1.6rem;
  }
`;

export const STitle = styled.img`
  width: ${SPACING_1152};
  height: ${SPACING_384};
  z-index: ${CONTENT_INDEX};
`;

export const HeroDivider = styled.div`
  width: 100%;
  bottom: 0;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: ${SPACING_256};

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    margin-top: 15.5rem;
  }
`;

export const BackgroundImg = styled(SectionBackground)`
  opacity: 0.7;
  position: absolute;
  display: flex;
  justify-content: center;
  width: 70%;
  margin: 7rem auto 0;
  z-index: -1;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    width: 100%;
    margin-top: 5rem;
  }
`;

export const TeamBall = styled(Ball)`
  height: 10rem;
  width: 10rem;
  position: static;
  transform: none;
  margin: 10rem auto 0;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    width: 6rem;
    margin: 4rem auto 0;
  }
`;
