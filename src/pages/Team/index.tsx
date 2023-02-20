import { WonderTeamSection } from "./TeamGrid.tsx";
import { BackgroundImg, Container, HeroDivider, TeamBall } from "./Team.styles";
import { LiquidDistortion } from "~/components/common";
import { useWindowDimensions } from "~/hooks/windowDimensions";

export function Team() {
  const { isMobile } = useWindowDimensions();

  return (
    <>
      <BackgroundImg type="3" align="center" />
      <Container>
        <HeroDivider>
          <LiquidDistortion
            text="WOND3RLAND IS NOT A PLACE,"
            fontSize={isMobile ? 50 : 140}
          />
          <LiquidDistortion
            text="IT'S A FEELING WITHIN, A PROCESS."
            fontSize={isMobile ? 50 : 140}
          />
          <TeamBall />
        </HeroDivider>
        <WonderTeamSection />
      </Container>
    </>
  );
}
