import styled from "styled-components";

import { PageContent } from "~/components/app";
import { ApproachSection } from "./ApproachSection";
import {
  Ball,
  MOBILE_MAX_WIDTH,
  SPACING_192,
  SPACING_512,
  SPACING_700,
  LiquidDistortion,
} from "~/components/common";
import { useWindowDimensions } from "~/hooks/windowDimensions";
import TextSection from "./TextSection";
import Cone from "~/assets/cone.png";
import HoopTop from "~/assets/hoop-top.png";
import HoopBottom from "~/assets/hoop-bottom.png";

const StyledApproachSection = styled(ApproachSection)`
  padding: "3rem 0";
`;

const HeroDivider = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: ${SPACING_192};

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    top: 22rem;
  }
`;

const SBall = styled(Ball)`
  top: 21rem;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    top: 14rem;
    width: 6rem;
  }
`;

const MobileTitleContainer = styled.div`
  transform: rotate(3deg);
`;

const BackgroundContainer = styled.div`
  position: relative;
  width: ${SPACING_512};
  height: ${SPACING_700};
  right: 12rem;
  top: 20rem;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    width: 25.6rem;
    height: 35rem;
    right: 11rem;
    top: 12rem;
  }
`;

const SCone = styled.img`
  position: absolute;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    width: 30rem;
  }
`;

const SHoop = styled(SCone)`
  z-index: 10;
`;

export function Lore() {
  const { isMobile, isTablet } = useWindowDimensions();

  return (
    <PageContent>
      <HeroDivider>
        {!isMobile && (
          <>
            <LiquidDistortion
              text="WOND3RLAND IS NOT A PLACE,"
              fontSize={isTablet ? 90 : undefined}
            />
            <LiquidDistortion
              text="IT'S A FEELING WITHIN, A PROCESS."
              fontSize={isTablet ? 90 : undefined}
            />
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
      <BackgroundContainer>
        <SCone src={HoopTop} alt="starts background" />
        <SCone src={Cone} alt="starts background" />
        <SBall />
        <SHoop src={HoopBottom} alt="starts background" />
      </BackgroundContainer>

      <TextSection />

      <StyledApproachSection />
    </PageContent>
  );
}
