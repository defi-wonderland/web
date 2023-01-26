import styled from "styled-components";

import { SectionBackground } from "~/components/common";

export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const STitle = styled.img`
  width: 1121px;
  height: 374px;
  z-index: 100;
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
