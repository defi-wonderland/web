import { FC } from 'react';
import styled from 'styled-components';

import { Section, MOBILE_MAX_WIDTH } from '~/components';
import VIDEO_CHROME from '~/assets/videos/landing.webm';
import VIDEO_SAFARI from '~/assets/videos/landing.mp4';

const HeroSection: FC = ({ ...props }) => {
  return (
    <>
      <StyledHeroSection full backgroundImage='/img/hero/hero-bg.jpg' {...props}>
        <TitleContainer>
          <video autoPlay loop muted playsInline>
            <source src={VIDEO_CHROME} type='video/webm' />
            <source src={VIDEO_SAFARI} type='video/mp4; codecs="hvc1"' />
          </video>
        </TitleContainer>

        <HeroDivider src='/img/hero/hero-bg-divider.png' />
      </StyledHeroSection>
    </>
  );
};

export default HeroSection;

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
    width: 70%;
    height: 100%;
  }

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    margin-top: 4rem;

    & video {
      width: 85%;
    }
  }
`;
