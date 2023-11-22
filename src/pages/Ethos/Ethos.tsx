import styled from 'styled-components';

import { PageContent } from '~/components/app';
import { ApproachSection } from './ApproachSection';
import { Ball, DocumentHead, MOBILE_MAX_WIDTH, SPACING_192, SPACING_512, SPACING_700 } from '~/components/common';
import TextSection from './TextSection';
import Cone from '~/assets/cone.png';
import HoopTop from '~/assets/hoop-top.png';
import HoopBottom from '~/assets/hoop-bottom.png';
import VIDEO_CHROME from '~/assets/videos/ethos.webm';
import VIDEO_SAFARI from '~/assets/videos/ethos.mp4';
import { TitleContainer } from '../Landing/HeroSection';

const StyledApproachSection = styled(ApproachSection)`
  padding: '3rem 0';
`;

const HeroDivider = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: ${SPACING_192};

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    top: 22rem;
  }
`;

const SBall = styled(Ball)`
  top: 21rem;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    top: 14rem;
    width: 6rem;
  }
`;

const BackgroundContainer = styled.div`
  position: relative;
  width: ${SPACING_512};
  height: ${SPACING_700};
  right: 12rem;
  top: 20rem;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    width: 25.6rem;
    height: 35rem;
    right: 11rem;
    top: 12rem;
  }
`;

const SCone = styled.img`
  position: absolute;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    width: 30rem;
  }
`;

const SHoop = styled(SCone)`
  z-index: 10;
`;

const STitleContainer = styled(TitleContainer)`
  margin-top: 0rem;
  & video {
    width: 80%;
  }
`;

export function Ethos() {
  return (
    <PageContent>
      <DocumentHead name='Ethos' />

      <HeroDivider>
        <STitleContainer>
          <video autoPlay loop muted playsInline>
            <source src={VIDEO_CHROME} type='video/webm' />
            <source src={VIDEO_SAFARI} type='video/mp4; codecs="hvc1"' />
          </video>
        </STitleContainer>
      </HeroDivider>
      <BackgroundContainer>
        <SCone src={HoopTop} alt='starts background' />
        <SCone src={Cone} alt='starts background' />
        <SBall />
        <SHoop src={HoopBottom} alt='starts background' />
      </BackgroundContainer>

      <TextSection />

      <StyledApproachSection />
    </PageContent>
  );
}
