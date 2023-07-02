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
} from './Creations.styles';
import { ProjectsList } from './ProjectsList';
import { Divider } from './ProjectsList/ProjectsList.styles';
import { partnerProjects, publicGoods } from '~/data/projects.json';
import VIDEO_CHROME from '~/assets/videos/creations.webm';
import VIDEO_SAFARI from '~/assets/videos/creations.mp4';

export function Creations() {
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
          <ProjectsList projects={partnerProjects} />
        </ProjectsContainer>

        <TitleContainer>
          <ProjectTitle title='Public goods' />
        </TitleContainer>
        <ProjectsContainer>
          <Divider />
          <ProjectsList projects={publicGoods} />
        </ProjectsContainer>
      </Container>
    </>
  );
}
