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
} from './Portfolio.styles';
import { ProjectsList } from './ProjectsList';
import { Divider } from './ProjectsList/ProjectsList.styles';
import { useWindowDimensions } from '~/hooks/windowDimensions';
import { MainTitle, Distortion } from '~/components/common';

export function Portfolio() {
  const { isMobile } = useWindowDimensions();

  return (
    <>
      <Container>
        <BackgroundContainer>
          <BG_1 type='2' align='center' />
          <BG_2 type='1' align='left' />
          <BG_3 type='2' align='right' />
        </BackgroundContainer>
        <HeroDivider>
          {!isMobile && (
            <>
              <Distortion text='TOGETHER, WE WANT TO SUSTAINBLY BUILD A MORE INCLUSIVE' />
              <Distortion text='AND DECENTRALIZED FINANCIAL ECOSYSTEM.' />
            </>
          )}

          {isMobile && (
            <MobileTitleContainer>
              <MainTitle>TOGETHER,</MainTitle>
              <MainTitle>WE WANT TO SUSTAINBLY</MainTitle>
              <MainTitle>BUILD A MORE INCLUSIVE</MainTitle>
              <MainTitle>AND DECENTRALIZED</MainTitle>
              <MainTitle>FINANCIAL ECOSYSTEM</MainTitle>
            </MobileTitleContainer>
          )}
          <Ball_1 />
          <Ball_2 />
          <Ball_3 />
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
