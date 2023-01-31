import { WonderTeamSection } from "./TeamGrid.tsx";
import {
  BackgroundImg,
  Container,
  HeroDivider,
  STitle,
  TeamBall,
} from "./Team.styles";
import TITLE from "~/assets/team_text.png";

export function Team() {
  return (
    <>
      <BackgroundImg type="3" align="center" />
      <Container>
        <HeroDivider>
          <STitle src={TITLE} />
          <TeamBall />
        </HeroDivider>
        <WonderTeamSection />
      </Container>
    </>
  );
}
