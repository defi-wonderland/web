import { WonderTeamSection } from "./TeamGrid.tsx";
import { BackgroundImg, Container, HeroDivider, TeamBall } from "./Team.styles";
import { LiquidDistortion } from "~/components/common/LiquidDistorsion";
import { StarsBackground } from "~/containers";

export function Team() {
  return (
    <>
      <StarsBackground />
      <BackgroundImg type="3" align="center" />
      <Container>
        <HeroDivider>
          <LiquidDistortion text="WOND3RLAND IS NOT A PLACE," />
          <LiquidDistortion text="IT'S A FEELING WITHIN, A PROCESS." />
          <TeamBall />
        </HeroDivider>
        <WonderTeamSection />
      </Container>
    </>
  );
}
