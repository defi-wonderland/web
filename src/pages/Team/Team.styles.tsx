import styled from "styled-components";

import {
  CONTENT_INDEX,
  SectionBackground,
  SPACING_1152,
  SPACING_384,
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
`;

export const HeroDivider = styled.div`
  width: 100%;
  bottom: 0;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 320px;
`;

export const BackgroundImg = styled(SectionBackground)`
  z-index: 0;
`;
