import { WonderTeamSection } from './TeamGrid.tsx';
import { BackgroundImg, Container, HeroDivider, TeamBall } from './Team.styles';
import VIDEO_CHROME from '~/assets/videos/video_chrome.webm';
import VIDEO_SAFARI from '~/assets/videos/video_safari.mp4';
import { TitleContainer } from '../Landing/HeroSection';

export function Team() {
  return (
    <>
      <BackgroundImg type='3' align='center' />
      <Container>
        <HeroDivider>
          <TitleContainer>
            <video autoPlay loop muted playsInline>
              <source src={VIDEO_CHROME} type='video/webm' />
              <source src={VIDEO_SAFARI} type='video/mp4; codecs="hvc1"' />
            </video>
          </TitleContainer>

          <TeamBall />
        </HeroDivider>
        <WonderTeamSection />
      </Container>
    </>
  );
}
