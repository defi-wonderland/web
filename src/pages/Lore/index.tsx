import styled from "styled-components";

import { PageContent } from "~/components/app";
import { ApproachSection } from "./ApproachSection";
import {
  Ball,
  SPACING_192,
  SPACING_320,
  SPACING_512,
  SPACING_700,
} from "~/components/common";
import CONE from "~/assets/Cono_bola.png";
import TextSection from "./TextSection";
import { LiquidDistortion } from "~/components/common/LiquidDistorsion";

const StyledApproachSection = styled(ApproachSection)`
  padding: "3rem 0";
`;

const SCone = styled.img`
  width: ${SPACING_512};
  height: ${SPACING_700};
  margin-right: 15%;
  margin-top: ${SPACING_192};
`;

const HeroDivider = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: ${SPACING_320};
`;

export function Lore() {
  return (
    <PageContent>
      <Ball />

      <HeroDivider>
        <LiquidDistortion text={`WOND3RLAND IS NOT A PLACE,`} />
        <LiquidDistortion text={`IT'S A FEELING WITHIN, A PROCESS.`} />
      </HeroDivider>
      <SCone src={CONE} alt="starts background" />

      <TextSection />

      <StyledApproachSection />
    </PageContent>
  );
}
