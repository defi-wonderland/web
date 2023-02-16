import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Draggable from "react-draggable";

import {
  AnimationIn,
  MOBILE_MAX_WIDTH,
  NAVBAR_HEIGHT,
  NAVBAR_INDEX,
  Section,
} from "~/components/common";
import LogoImage from "~/assets/Logo.svg";
import VLINE from "~/assets/dotted_line.svg";
import INTROKEY from "~/assets/intro_key.svg";
import { StarsBackground } from "~/containers";

export interface StyledContainerProps {
  backgroundEffect: number;
}

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
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  z-index: 1;

  background-image: url("/img/hero/hero-bg.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const Logo = styled.img`
  pointer-events: none;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    width: 26rem;
  }
`;

const Keyhole = styled.div<StyledContainerProps>`
  pointer-events: none;
  opacity: ${(props) => 1 - props.backgroundEffect / 20};
  position: absolute;
  width: 100%;
  height: 100%;
  top: -1rem;
  background-image: url("/img/intro_bg.png");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  z-index: -1;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    background-size: cover;
  }
`;

const DottedLine = styled.img`
  pointer-events: none;
  height: 20%;
  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    height: 22%;
  }
`;

const KeyContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  padding-bottom: 2.4rem;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    padding: 2.4rem;
  }
`;

const Text = styled.span`
  font-style: italic;
  font-size: 1.8rem;
  margin-top: 0.4rem;
  user-select: none;
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

const KeyBox = styled.div`
  cursor: pointer;
`;

const Key = styled.img`
  position: relative;
  z-index: -1;
  width: 7rem;
`;

const Mask = styled.div<StyledContainerProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;

  background-image: radial-gradient(
    circle at 50% 55%,
    rgba(255, 255, 255, 0.08),
    rgba(14, 21, 44, 1) ${(props) => props.backgroundEffect / 4 || 0}%
  );
`;

export function Intro() {
  const [showBackground, setShowBackground] = useState(false);
  const [backgroundEffect, setBackgroundEffect] = useState(0);
  const nodeRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (showBackground) {
      setTimeout(() => {
        navigate("/landing");
      }, 1000);
    }
  }, [showBackground]);

  return (
    <AnimationIn>
      <StyledNavbar>
        <Logo src={LogoImage} alt="Wonderland logo" />
      </StyledNavbar>
      {!showBackground && (
        <>
          <IntroContainer>
            <StarsBackground />
            <Mask backgroundEffect={backgroundEffect} />
            <KeyContainer>
              <Keyhole backgroundEffect={backgroundEffect} />

              <DottedLine src={VLINE} alt="dotted line" />
              <Draggable
                axis="y"
                bounds={{ bottom: 0, top: -350 }}
                nodeRef={nodeRef}
                onStop={(event, node) => {
                  if (node.lastY < -250) {
                    setShowBackground(true);
                  }
                }}
                onDrag={(event, node) => {
                  setBackgroundEffect(-node.y);
                }}
              >
                <KeyBox ref={nodeRef}>
                  <Key ref={nodeRef} src={INTROKEY} alt="Key icon" />
                </KeyBox>
              </Draggable>
              <Text>Drag to discover Wonderland</Text>
            </KeyContainer>
          </IntroContainer>
        </>
      )}

      <CSSTransition
        in={showBackground}
        classNames="fade"
        timeout={400}
        appear
        unmountOnExit
      >
        <StyledHeroSection full backgroundImage="/img/hero/hero-bg.jpg">
          <HeroDivider src="/img/hero/hero-bg-divider.png" />
        </StyledHeroSection>
      </CSSTransition>
    </AnimationIn>
  );
}
