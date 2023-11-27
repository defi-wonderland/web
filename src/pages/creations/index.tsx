import styled from 'styled-components';

import {
  Ball,
  GradientTitle,
  MOBILE_MAX_WIDTH,
  SectionBackground,
  SPACING_128,
  TABLET_MAX_WIDTH,
} from '~/components/common';
import ProjectsList from './ProjectsList';
import { TitleContainer as TitleVideoBase } from '~/pages/landing/HeroSection';
import { partnerProjects, publicGoods } from '~/data/projects.json';
import VIDEO_CHROME from '~/assets/videos/creations.webm';
import VIDEO_SAFARI from '~/assets/videos/creations.mp4';
import Meatadata from '~/components/common/Meatadata';

export default function Creations() {
  return (
    <>
      <Meatadata title='Creations' />
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

const Divider = styled.div`
  background: linear-gradient(to right, rgba(14, 21, 44, 0) 0%, rgba(255, 255, 255, 0.5) 50%, rgba(14, 21, 44, 0) 100%);
  height: 2px;
  width: 100%;
`;

const TitleVideo = styled(TitleVideoBase)`
  margin-top: -8rem;

  & video {
    max-width: 600px;
  }
`;

const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HeroDivider = styled.div`
  position: relative;
  width: 100%;
  height: 30rem;
  bottom: 0;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 21rem;
  margin-bottom: 15rem;

  @media screen and (max-width: ${TABLET_MAX_WIDTH}) {
    margin-top: 12rem;
  }

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    margin-top: 16rem;
  }
`;

const Ball_1 = styled(Ball)`
  position: absolute;
  height: 10rem;
  width: 10rem;
  top: 24rem;
  left: 30%;
  transform: none;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    width: 6rem;
    top: 28rem;
    left: 10%;
  }
`;

const Ball_2 = styled(Ball)`
  position: absolute;
  height: 7rem;
  width: 7rem;
  top: 16rem;
  left: 90%;
  transform: none;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    transform: rotate(180deg);
    width: 8rem;
    top: 13rem;
  }
`;

const Ball_3 = styled(Ball)`
  position: absolute;
  height: 5rem;
  width: 5rem;
  top: -10rem;
  left: 25%;
  transform: none;
  opacity: 0.87;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    width: 4rem;
    top: -6rem;
    left: 15%;
    opacity: 0.7;
  }
`;

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
`;

const BG_1 = styled(SectionBackground)`
  position: relative;
  width: 50%;
  margin: 0 auto;

  @media screen and (max-width: ${TABLET_MAX_WIDTH}) {
    width: 100%;
  }
`;

const BG_2 = styled(SectionBackground)`
  position: relative;
  width: 38%;
`;

const BG_3 = styled(SectionBackground)`
  position: relative;
  margin-left: auto;
  width: 38%;
  right: 0%;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: ${TABLET_MAX_WIDTH}) {
    margin: 0 auto;
    margin-top: -3rem;
  }
`;

const ProjectTitle = styled(GradientTitle)`
  word-wrap: unset;
  width: 40rem !important;
`;

const ProjectsContainer = styled.div`
  margin: 10rem 0 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 0 ${SPACING_128};

  @media screen and (max-width: ${TABLET_MAX_WIDTH}) {
    padding: 0;
  }
`;

const MobileTitleContainer = styled.div`
  transform: rotate(-3deg);
`;
