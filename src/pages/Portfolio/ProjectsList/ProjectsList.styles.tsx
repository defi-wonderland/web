import styled from "styled-components";
import {
  FONT_MEDIUM_L,
  FONT_SIZE_24,
  GradientTitle,
  SectionBackground,
  SPACING_128,
  TABLET_MAX_WIDTH,
} from "~/components/common";

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

export const List = styled.div`
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

export const ProjectContainer = styled.div`
  height: 17rem;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Name = styled.strong`
  font-family: ${FONT_MEDIUM_L};
  font-size: ${FONT_SIZE_24};
  text-transform: uppercase;
  opacity: 1 !important;
  z-index: 100;
`;

export const Divider = styled.canvas`
  background: linear-gradient(
    to right,
    rgba(14, 21, 44, 0) 0%,
    rgba(255, 255, 255, 0.5) 50%,
    rgba(14, 21, 44, 0) 100%
  );
  height: 2px;
  width: 100%;
`;

export const SBackgroundImg = styled(SectionBackground)`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 50%;
  margin-top: 54rem;
  z-index: -1;
`;

export const SBackgroundImg2 = styled(SectionBackground)`
  right: 0%;
  display: flex;
  justify-content: center;
  width: 50%;
  margin-top: 80rem;
  z-index: -1;
`;
