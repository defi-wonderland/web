import { WonderTeamSection } from "./TeamGrid.tsx";
import { BackgroundImg, Container, HeroDivider, TeamBall } from "./Team.styles";
import { LiquidDistortion } from "~/components/common/LiquidDistorsion";

export function Team() {
  return (
    <>
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
