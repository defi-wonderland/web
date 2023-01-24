import { WonderTeamSection } from "./TeamGrid.tsx";
import { BackgroundImg, Container, HeroDivider, STitle } from "./Team.styles";
import TITLE from "~/assets/team_text.png";

export function Team() {
  return (
    <Container>
      <HeroDivider>
        <BackgroundImg type="2" align="center" />
        <STitle src={TITLE} />
      </HeroDivider>
      <WonderTeamSection />
    </Container>
  );
}
