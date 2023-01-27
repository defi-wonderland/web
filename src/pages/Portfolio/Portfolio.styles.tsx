import styled from "styled-components";

import {
  Ball,
  CONTENT_INDEX,
  SectionBackground,
  SPACING_1152,
  SPACING_256,
  SPACING_384,
  TABLET_MAX_WIDTH,
} from "~/components/common";

export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const STitle = styled.img`
  width: ${SPACING_1152};
  height: ${SPACING_384};
  z-index: ${CONTENT_INDEX};
  margin-top: 10rem;

  @media screen and (max-width: ${TABLET_MAX_WIDTH}) {
    width: 90%;
  }
`;

export const HeroDivider = styled.div`
  position: relative;
  width: 100%;
  bottom: 0;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: ${SPACING_256};

  @media screen and (max-width: ${TABLET_MAX_WIDTH}) {
    margin-top: 12rem;
  }
`;

export const BackgroundImg = styled(SectionBackground)`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 70%;
  margin: 0 auto;
  z-index: -1;

  @media screen and (max-width: ${TABLET_MAX_WIDTH}) {
    width: 100%;
  }
`;

export const Ball_1 = styled(Ball)`
  position: absolute;
  height: 10rem;
  width: 10rem;
  top: 24rem;
  left: 30%;
  transform: none;
`;

export const Ball_2 = styled(Ball)`
  position: absolute;
  height: 7rem;
  width: 7rem;
  top: 16rem;
  left: 90%;
  transform: none;
`;

export const Ball_3 = styled(Ball)`
  position: absolute;
  height: 5rem;
  width: 5rem;
  top: -10rem;
  left: 25%;
  transform: none;
  opacity: 0.87;
`;
