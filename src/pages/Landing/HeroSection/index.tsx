import { FC } from "react";
import styled from "styled-components";

import { HeroHeading } from "~/components/app";
import { Section } from "~/components/common";

const HeroDivider = styled.img`
  position: absolute;
  width: 100%;
  bottom: 0;
  z-index: 0;
`;

const StyledHeroSection = styled(Section)``;

export interface HeroSectionProps {}

export const HeroSection: FC<HeroSectionProps> = ({ ...props }) => {
  return (
    <StyledHeroSection full backgroundImage="/img/hero/hero-bg.jpg" {...props}>
      <HeroHeading text="WE’RE ALL MAD HERE" />
      <HeroDivider src="/img/hero/hero-bg-divider.png" />
    </StyledHeroSection>
  );
};
