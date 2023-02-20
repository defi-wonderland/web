import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Draggable from "react-draggable";

import { AnimationIn } from "~/components/common";
import LogoImage from "~/assets/Logo.svg";
import VLINE from "~/assets/dotted_line.svg";
import INTROKEY from "~/assets/intro_key.svg";
import { StyledNavbar } from "~/containers/Navbar/Navbar.styles";
import {
  DottedLine,
  HeroDivider,
  IntroContainer,
  Key,
  KeyBox,
  KeyContainer,
  Keyhole,
  Logo,
  Mask,
  Mask2,
  SBackground,
  StyledHeroSection,
  Text,
} from "./Intro.styles";

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
        <SBackground backgroundEffect={backgroundEffect} />
        <Logo src={LogoImage} alt="Wonderland logo" />
      </StyledNavbar>
      {!showBackground && (
        <>
          <IntroContainer>
            <KeyContainer>
              <Mask backgroundEffect={backgroundEffect} />
              <Keyhole backgroundEffect={backgroundEffect} />
              <Mask2 backgroundEffect={backgroundEffect} />

              <DottedLine
                backgroundEffect={backgroundEffect}
                src={VLINE}
                alt="dotted line"
              />
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
                  setBackgroundEffect(-node.y / 350);
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
