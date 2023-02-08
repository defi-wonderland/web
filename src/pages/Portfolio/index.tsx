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
  TitleContainer,
  ProjectTitle,
  ProjectsContainer,
  MobileTitleContainer,
} from "./Portfolio.styles";
import { ProjectsList } from "./ProjectsList";
import { Distortion } from "~/components/common/DistortionText";
import { Divider } from "./ProjectsList/ProjectsList.styles";
import { useWindowDimensions } from "~/hooks/windowDimensions";
import { StarsBackground } from "~/containers";

export function Portfolio() {
  const { isMobile } = useWindowDimensions();

  return (
    <>
      <Container>
        <StarsBackground />
        <BackgroundContainer>
          <BG_1 type="2" align="center" />
          <BG_2 type="1" align="left" />
          <BG_3 type="2" align="right" />
        </BackgroundContainer>
        <HeroDivider>
          {!isMobile && (
            <>
              <Distortion text="TOGETHER, WE WANT TO SUSTAINBLY BUILD A MORE INCLUSIVE" />
              <Distortion text="AND DECENTRALIZED FINANCIAL ECOSYSTEM." />
            </>
          )}

          {isMobile && (
            <MobileTitleContainer>
              <Distortion text="TOGETHER," fontSize={50} />
              <Distortion text="WE WANT TO SUSTAINBLY" fontSize={50} />
              <Distortion text="BUILD A MORE INCLUSIVE" fontSize={50} />
              <Distortion text="AND DECENTRALIZED" fontSize={50} />
              <Distortion text="FINANCIAL ECOSYSTEM" fontSize={50} />
            </MobileTitleContainer>
          )}
          <Ball_1 />
          <Ball_2 />
          <Ball_3 />
        </HeroDivider>

        <TitleContainer>
          <ProjectTitle title="THINGS THAT HAPPEN" />
        </TitleContainer>

        <ProjectsContainer>
          <Divider />
          <ProjectsList />
        </ProjectsContainer>
      </Container>
    </>
  );
}
