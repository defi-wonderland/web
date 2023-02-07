import styled from "styled-components";

import {
  Ball,
  GradientTitle,
  SectionBackground,
  SPACING_128,
  SPACING_256,
  TABLET_MAX_WIDTH,
} from "~/components/common";

export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const HeroDivider = styled.div`
  position: relative;
  width: 100%;
  height: 22rem;
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

export const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
`;

export const BG_1 = styled(SectionBackground)`
  position: relative;
  width: 50%;
  margin: 0 auto;

  @media screen and (max-width: ${TABLET_MAX_WIDTH}) {
    width: 100%;
  }
`;

export const BG_2 = styled(SectionBackground)`
  position: relative;
  width: 38%;
`;

export const BG_3 = styled(SectionBackground)`
  position: relative;
  margin-left: auto;
  width: 38%;
  right: 0%;
`;

export const TitleContainer = styled.div`
  margin-top: 24rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ProjectTitle = styled(GradientTitle)`
  word-wrap: unset;
  width: 40rem !important;
`;

export const ProjectsContainer = styled.div`
  margin: 10rem 0 25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 0 ${SPACING_128};

  @media screen and (max-width: ${TABLET_MAX_WIDTH}) {
    padding: 0;
  }
`;
