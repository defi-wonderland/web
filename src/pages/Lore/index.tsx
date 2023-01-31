import styled from "styled-components";

import { PageContent } from "~/components/app";
import { ApproachSection } from "./ApproachSection";
import {
  Ball,
  MOBILE_MAX_WIDTH,
  SPACING_128,
  SPACING_192,
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
  margin-top: ${SPACING_128};
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
  top: ${SPACING_192};

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    top: 0rem;
  }
`;

const SBall = styled(Ball)`
  margin-top: -7rem;
`;

export function Lore() {
  return (
    <PageContent>
      <SBall />

      <HeroDivider>
        <LiquidDistortion text="WOND3RLAND IS NOT A PLACE," />
        <LiquidDistortion text="IT'S A FEELING WITHIN, A PROCESS." />
      </HeroDivider>
      <SCone src={CONE} alt="starts background" />

      <TextSection />

      <StyledApproachSection />
    </PageContent>
  );
}
