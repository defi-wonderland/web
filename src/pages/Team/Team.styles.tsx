import styled from "styled-components";

import {
  Ball,
  CONTENT_INDEX,
  MOBILE_MAX_WIDTH,
  SectionBackground,
  SPACING_1050,
  SPACING_1152,
  SPACING_256,
  SPACING_384,
} from "~/components/common";

export const Container = styled.div`
  max-width: 140rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    & {
      width: 100%;
      padding: 0 1.6rem;
    }
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
`;

export const BackgroundImg = styled(SectionBackground)`
  position: absolute;
  display: flex;
  justify-content: center;
  width: ${SPACING_1050};
  margin: 13.2rem auto 0;
  z-index: -1;
`;

export const TeamBall = styled(Ball)`
  height: 10rem;
  width: 10rem;
  position: static;
  transform: none;
  margin: 10rem auto 0;
`;
