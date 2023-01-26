import {
  BackgroundImg,
  Container,
  HeroDivider,
  STitle,
  Ball_1,
  Ball_2,
  Ball_3,
} from "./Portfolio.styles";
import TITLE from "~/assets/portfolio_title.png";
import { ProjectsList } from "./ProjectsList";

export function Portfolio() {
  return (
    <>
      <BackgroundImg type="2" align="center" />
      <Container>
        <HeroDivider>
          <STitle src={TITLE} />
          <Ball_1 />
          <Ball_2 />
          <Ball_3 />
        </HeroDivider>
        <ProjectsList />
      </Container>
    </>
  );
}
