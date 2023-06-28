import { FC } from 'react';
import styled from 'styled-components';

import { Section, MOBILE_MAX_WIDTH, MainTitle } from '~/components/common';
import { useWindowDimensions } from '~/hooks/windowDimensions';
import VIDEO_CHROME from '~/assets/videos/video_chrome.webm';
import VIDEO_SAFARI from '~/assets/videos/video_safari.mp4';

const HeroDivider = styled.img`
  position: absolute;
  width: 100%;
  bottom: 0;
  z-index: 0;
`;

const StyledHeroSection = styled(Section)`
  margin-bottom: 2.8rem;

  & div {
    position: absolute;
    width: 100%;
    top: 7rem;
    left: 0;
  }

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    top: 0rem;
    min-height: unset;
    height: 50rem;
    background-image: url('/img/hero/hero_mobile.png');

    & div {
      top: 10rem;
    }
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 8rem;

  & video {
    max-width: 890px;
    height: 100%;
  }

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    margin-top: 4rem;
  }
`;

export const HeroSection: FC = ({ ...props }) => {
  const { isMobile, isTablet } = useWindowDimensions();
  return (
    <>
      <StyledHeroSection full backgroundImage='/img/hero/hero-bg.jpg' {...props}>
        {!isMobile && (
          <TitleContainer>
            <video autoPlay loop muted playsInline>
              <source src={VIDEO_SAFARI} type='video/mp4; codecs="hvc1"' />
              <source src={VIDEO_CHROME} type='video/webm' />
            </video>
          </TitleContainer>
        )}
        {isMobile && (
          <div>
            <MainTitle fontSize={4.4}>TO HELP THE WEB3 ECOSYSTEM THRIVE</MainTitle>
          </div>
        )}
        <HeroDivider src='/img/hero/hero-bg-divider.png' />
      </StyledHeroSection>
    </>
  );
};
