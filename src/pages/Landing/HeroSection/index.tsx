import { FC } from "react";
import styled from "styled-components";

import { Section, Distortion, MOBILE_MAX_WIDTH } from "~/components/common";
import { useWindowDimensions } from "~/hooks/windowDimensions";

const HeroDivider = styled.img`
  position: absolute;
  width: 100%;
  bottom: 0;
  z-index: 0;
`;

const StyledHeroSection = styled(Section)`
  & div {
    position: absolute;
    width: 100%;
    top: 7rem;
    left: 0;
  }

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    top: -2rem;
    min-height: unset;
    height: 50rem;
    background-image: url("/img/hero/hero_mobile.png");
  }
`;

export const SDistortion = styled(Distortion)``;

export interface HeroSectionProps {}

export const HeroSection: FC<HeroSectionProps> = ({ ...props }) => {
  const { isMobile, isTablet } = useWindowDimensions();
  return (
    <>
      <StyledHeroSection
        full
        backgroundImage="/img/hero/hero-bg.jpg"
        {...props}
      >
        {!isMobile && (
          <SDistortion
            text="TO HELP THE WEB3 ECOSYSTEM THRIVE"
            fontSize={isTablet ? 100 : 120}
          />
        )}
        <HeroDivider src="/img/hero/hero-bg-divider.png" />
      </StyledHeroSection>

      {isMobile && (
        <SDistortion text="TO HELP THE WEB3 ECOSYSTEM THRIVE" fontSize={45} />
      )}
    </>
  );
};
