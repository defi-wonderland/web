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
  LiquidDistortion,
} from "~/components/common";
import { useWindowDimensions } from "~/hooks/windowDimensions";
import CONE from "~/assets/Cono_bola.png";
import TextSection from "./TextSection";

const StyledApproachSection = styled(ApproachSection)`
  padding: "3rem 0";
`;

const SCone = styled.img`
  width: ${SPACING_512};
  height: ${SPACING_700};
  margin-right: 15%;
  margin-top: ${SPACING_128};

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    width: 25.6rem;
    height: 35rem;
    margin-left: -25%;
  }
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
    top: -14rem;
  }
`;

const SBall = styled(Ball)`
  margin-top: -7rem;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    width: 6rem;
    margin-top: -14rem;
  }
`;

const MobileTitleContainer = styled.div`
  transform: rotate(3deg);
`;

export function Lore() {
  const { isMobile } = useWindowDimensions();

  return (
    <PageContent>
      <SBall />

      <HeroDivider>
        {!isMobile && (
          <>
            <LiquidDistortion text="WOND3RLAND IS NOT A PLACE," />
            <LiquidDistortion text="IT'S A FEELING WITHIN, A PROCESS." />
          </>
        )}

        {isMobile && (
          <MobileTitleContainer>
            <LiquidDistortion text="WOND3RLAND" fontSize={65} />
            <LiquidDistortion text="IS NOT A PLACE," fontSize={65} />
            <LiquidDistortion text="IT'S A FEELING WITHIN," fontSize={65} />
            <LiquidDistortion text="A PROCESS." fontSize={65} />
          </MobileTitleContainer>
        )}
      </HeroDivider>
      <SCone src={CONE} alt="starts background" />

      <TextSection />

      <StyledApproachSection />
    </PageContent>
  );
}
