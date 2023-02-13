import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Draggable from "react-draggable";

import {
  AnimationIn,
  NAVBAR_HEIGHT,
  NAVBAR_INDEX,
  Section,
} from "~/components/common";
import LogoImage from "~/assets/Logo.svg";
import KEYHOLE from "~/assets/key.png";
import VLINE from "~/assets/dotted_line.svg";
import INTROKEY from "~/assets/intro_key.svg";
import { StarsBackground } from "~/containers";

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
`;

const Keyhole = styled.img`
  width: 4rem;
  pointer-events: none;
  opacity: 1;
`;

const DottedLine = styled.img`
  margin: 2rem;
  pointer-events: none;
`;

const KeyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  padding: 4rem;
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
`;

const Mask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`;

export function Intro() {
  const [seeBackground, setSeeBackground] = useState(false);
  const nodeRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (seeBackground) {
      setTimeout(() => {
        navigate("/landing");
      }, 1000);
    }
  }, [seeBackground]);

  const [background, setBackground] = useState(0);

  return (
    <AnimationIn>
      <StyledNavbar>
        <Logo src={LogoImage} alt="Wonderland logo" />
      </StyledNavbar>
      {!seeBackground && (
        <>
          <IntroContainer>
            <StarsBackground />
            <Mask
              style={{
                backgroundImage: `radial-gradient(
                  circle at 50% 50%,
                  rgba(255, 255, 255, 0.08), 
                  rgba(14, 21, 44, 1) ${background / 100}%
                )`,
              }}
            />
            <KeyContainer>
              <Keyhole
                src={KEYHOLE}
                alt="keyhole"
                style={{ opacity: `${1 - background / 500}` }}
              />

              <DottedLine src={VLINE} alt="dotted line" />
              <Draggable
                axis="y"
                bounds={{ bottom: 0, top: -350 }}
                nodeRef={nodeRef}
                onStop={(event, node) => {
                  if (node.lastY < -250) {
                    setSeeBackground(true);
                  }
                }}
                onDrag={(event, node) => {
                  setBackground(-node.y * 25);
                  console.log(background / 25);
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
        in={seeBackground}
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
