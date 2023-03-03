import { FC } from 'react';
import styled from 'styled-components';

import {
  Section,
  Distortion,
  MOBILE_MAX_WIDTH,
  MainTitle,
} from "~/components/common";
import { useWindowDimensions } from "~/hooks/windowDimensions";

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

export const SDistortion = styled(Distortion)``;

export const HeroSection: FC = ({ ...props }) => {
  const { isMobile, isTablet } = useWindowDimensions();
  return (
    <>
      <StyledHeroSection
        full
        backgroundImage="/img/hero/hero-bg.jpg"
        {...props}
      >
        {!isMobile && (
          <Distortion
            text="TO HELP THE WEB3 ECOSYSTEM THRIVE"
            fontSize={isTablet ? 100 : 120}
          />
        )}
        {isMobile && (
          <div>
            <MainTitle fontSize={4.4}>
              TO HELP THE WEB3 ECOSYSTEM THRIVE
            </MainTitle>
          </div>
        )}
        <HeroDivider src="/img/hero/hero-bg-divider.png" />
      </StyledHeroSection>
    </>
  );
};
