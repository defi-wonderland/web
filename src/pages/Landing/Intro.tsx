import { useState } from "react";
import styled from "styled-components";

import { NAVBAR_HEIGHT, NAVBAR_INDEX, Section } from "~/components/common";
import LogoImage from "~/assets/Logo.png";
import KEYHOLE from "~/assets/key.png";
import VLINE from "~/assets/dotted_line.svg";
import INTROKEY from "~/assets/intro_key.svg";

const HeroDivider = styled.img`
  position: absolute;
  width: 100%;
  bottom: 0;
  z-index: 0;
`;

const StyledHeroSection = styled(Section)`
  align-items: flex-start;
`;

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  justify-content: space-between;
`;

const Logo = styled.img``;

const Keyhole = styled.img`
  width: 7rem;
`;

const DottedLine = styled.img`
  margin: 2rem;
`;

const Key = styled.img`
  cursor: pointer;
`;

const KeyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  padding-bottom: 8rem;
`;

const Text = styled.span`
  font-style: italic;
`;

export const StyledNavbar = styled.nav`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  top: 0;
  left: 0;
  width: 100%;
  height: ${NAVBAR_HEIGHT};
  color: var(--text-light);
  background-image: linear-gradient(
    to bottom,
    var(--background-surface-primary) 25%,
    rgba(14, 21, 44, 0) 100%
  );
  grid-gap: 4rem;
  padding: 2rem 1rem;
  user-select: none;
  z-index: ${NAVBAR_INDEX};
`;

export interface HeroSectionProps {}

export function Intro({ ...props }: HeroSectionProps) {
  const [seeBackground, setSeeBackground] = useState(false);

  return (
    <>
      <StyledNavbar>
        <Logo src={LogoImage} alt="Wonderland logo" />
      </StyledNavbar>
      {!seeBackground && (
        <>
          <IntroContainer>
            <KeyContainer>
              {/* Temporary icon */}
              <Keyhole src={KEYHOLE} alt="Wonderland logo" />

              <DottedLine src={VLINE} alt="Wonderland logo" />
              <Key
                src={INTROKEY}
                alt="Wonderland logo"
                onClick={() => setSeeBackground(true)}
              />
              <Text>Drag to discover Wonderland</Text>
            </KeyContainer>
          </IntroContainer>
        </>
      )}
      {seeBackground && (
        <>
          <StyledHeroSection
            full
            backgroundImage="/img/hero/hero-bg.jpg"
            {...props}
          >
            <HeroDivider src="/img/hero/hero-bg-divider.png" />
          </StyledHeroSection>
        </>
      )}
    </>
  );
}
