import {
  Container,
  HeroDivider,
  BG_1,
  BG_2,
  BG_3,
  TitleContainer,
  BackgroundContainer,
  ProjectTitle,
  ProjectsContainer,
} from './Portfolio.styles';
import { ProjectsList } from './ProjectsList';
import { Divider } from './ProjectsList/ProjectsList.styles';

export function Portfolio() {
  return (
    <>
      <Container>
        <BackgroundContainer>
          <BG_1 type='2' align='center' />
          <BG_2 type='1' align='left' />
          <BG_3 type='2' align='right' />
        </BackgroundContainer>
        <HeroDivider>
          {/* <Ball_1 />
          <Ball_2 />
          <Ball_3 /> */}
        </HeroDivider>

        <TitleContainer>
          <ProjectTitle title='What’s cooking?' />
        </TitleContainer>

        <ProjectsContainer>
          <Divider />
          <ProjectsList />
        </ProjectsContainer>
      </Container>
    </>
  );
}
