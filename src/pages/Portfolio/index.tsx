import {
  Container,
  HeroDivider,
  Ball_1,
  Ball_2,
  Ball_3,
  BG_1,
  BG_2,
  BG_3,
  BackgroundContainer,
} from "./Portfolio.styles";
import { ProjectsList } from "./ProjectsList";
import { Distortion } from "~/components/common/DistortionText";

export function Portfolio() {
  return (
    <>
      <BackgroundContainer>
        <BG_1 type="2" align="center" />
        <BG_2 type="1" align="left" />
        <BG_3 type="2" align="right" />
      </BackgroundContainer>
      <Container>
        <HeroDivider>
          <Distortion
            text={`TOGETHER, WE WANT TO SUSTAINBLY BUILD A MORE INCLUSIVE`}
          />
          <Distortion text={`AND DECENTRALIZED FINANCIAL ECOSYSTEM.`} />
          <Ball_1 />
          <Ball_2 />
          <Ball_3 />
        </HeroDivider>
        <ProjectsList />
      </Container>
    </>
  );
}
