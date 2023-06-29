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
  Ball_1,
  Ball_2,
  Ball_3,
  TitleVideo,
} from './Portfolio.styles';
import { ProjectsList } from './ProjectsList';
import { Divider } from './ProjectsList/ProjectsList.styles';
import { PARTNER_PROJECTS, PUBLIC_GOODS } from '~/constants/projects';
import VIDEO_CHROME from '~/assets/videos/portfolio.webm';
import VIDEO_SAFARI from '~/assets/videos/portfolio.mp4';

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
          <TitleVideo>
            <video autoPlay loop muted playsInline>
              <source src={VIDEO_CHROME} type='video/webm' />
              <source src={VIDEO_SAFARI} type='video/mp4; codecs="hvc1"' />
            </video>
          </TitleVideo>
          <Ball_1 />
          <Ball_2 />
          <Ball_3 />
        </HeroDivider>

        <TitleContainer>
          <ProjectTitle title='Partner projects' />
        </TitleContainer>
        <ProjectsContainer>
          <Divider />
          <ProjectsList projects={PARTNER_PROJECTS} />
        </ProjectsContainer>

        <TitleContainer>
          <ProjectTitle title='Public goods' />
        </TitleContainer>
        <ProjectsContainer>
          <Divider />
          <ProjectsList projects={PUBLIC_GOODS} />
        </ProjectsContainer>
      </Container>
    </>
  );
}
