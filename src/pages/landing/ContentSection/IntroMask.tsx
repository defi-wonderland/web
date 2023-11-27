import { useEffect, useRef, useState } from 'react';
import Draggable from 'react-draggable';
import styled from 'styled-components';

import { MOBILE_MAX_WIDTH, NAVBAR_HEIGHT, NAVBAR_INDEX } from '~/components/common';

import LogoImage from '~/assets/Logo.svg';
import VLINE from '~/assets/dotted_line.svg';
import INTROKEY from '~/assets/intro_key.svg';

interface IntroProps {
  showBackground: boolean;
  setShowBackground: (value: boolean) => void;
  onLoad: (e: any) => void;
}

export default function Intro({ showBackground, setShowBackground, ...props }: IntroProps) {
  const [activateDragEffect, setDragEffect] = useState(false);
  const [backgroundEffect, setBackgroundEffect] = useState(0);
  const nodeRef = useRef(null);

  useEffect(() => {
    if (activateDragEffect) {
      sessionStorage.setItem('introLoaded', 'true');
      setShowBackground(true);
    }
  }, [activateDragEffect, setShowBackground]);

  return (
    <IntroContainer className={showBackground ? 'hide-intro' : ''} {...props}>
      <StyledNavbar>
        <Logo src={LogoImage.src} alt='Wonderland logo' backgroundEffect={backgroundEffect} />
      </StyledNavbar>
      <KeyContainer>
        <Mask backgroundEffect={backgroundEffect} />
        <Keyhole backgroundEffect={backgroundEffect} />
        <Mask2 backgroundEffect={backgroundEffect} />

        <DottedLine backgroundEffect={backgroundEffect} src={VLINE.src} alt='dotted line' />
        <Draggable
          axis='y'
          bounds={{ bottom: 0, top: -350 }}
          nodeRef={nodeRef}
          onStop={(event, node) => {
            if (node.lastY < -50) {
              setTimeout(() => {
                setDragEffect(true);
              }, 100);
            }
          }}
          onDrag={(event, node) => {
            setBackgroundEffect(-node.y / 350);
          }}
        >
          <KeyBox ref={nodeRef} backgroundEffect={backgroundEffect}>
            <Key ref={nodeRef} src={INTROKEY.src} alt='Key icon' />
          </KeyBox>
        </Draggable>
        <Text backgroundEffect={backgroundEffect}>Slide the key & step into Wonderland</Text>
      </KeyContainer>
    </IntroContainer>
  );
}

interface StyledContainerProps {
  backgroundEffect: number;
}

const IntroContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  justify-content: space-between;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    background-image: url('/img/hero/hero_mobile.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`;

const Logo = styled.img<StyledContainerProps>`
  pointer-events: none;
  opacity: ${(props) => 1 - props.backgroundEffect * 3};

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    width: 26rem;
  }
`;

const Keyhole = styled.img.attrs({
  src: '/img/key_shape.svg',
})<StyledContainerProps>`
  pointer-events: none;
  position: absolute;
  top: ${(props) => `${typeof window !== 'undefined' && -props.backgroundEffect * window?.innerHeight * 22}px`};
  height: ${(props) => `${100 + props.backgroundEffect * 4000}%`};
  opacity: ${(props) => 1 - props.backgroundEffect};
  background-color: rgba(255, 255, 255, 0.1);
  z-index: -1;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    top: ${(props) => typeof window !== 'undefined' && -props.backgroundEffect * window?.innerHeight * 22}px;
  }
`;

const DottedLine = styled.img<StyledContainerProps>`
  pointer-events: none;
  height: 19.5%;

  opacity: ${(props) => 1 - props.backgroundEffect * 10};
  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    height: 21%;
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
  z-index: 9;
  overflow: hidden;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    padding: 2.4rem;
  }
`;

const Text = styled.span<StyledContainerProps>`
  font-style: italic;
  font-size: 2.2rem;
  margin-top: 0.4rem;
  user-select: none;
  opacity: ${(props) => 1 - props.backgroundEffect * 3};
  z-index: 100;
  text-align: center;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    font-size: 2rem;
  }
`;

const StyledNavbar = styled.nav`
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
  background-image: linear-gradient(to bottom, var(--background-surface-primary) 25%, rgba(14, 21, 44, 0) 100%);
  grid-gap: 4rem;
  padding: 2rem 1rem;
  user-select: none;
  z-index: ${NAVBAR_INDEX};
`;

const KeyBox = styled.div<StyledContainerProps>`
  cursor: pointer;
  opacity: ${(props) => 1 - props.backgroundEffect * 3};
`;

const Key = styled.img`
  position: relative;
  z-index: -1;
  width: 7rem;
  pointer-events: none;
`;

const Mask = styled.div<StyledContainerProps>`
  background-color: #0e152c;
  position: absolute;
  height: 100%;
  width: 20%;
  top: 0;
  left: 0;
  display: ${(props) => (props.backgroundEffect > 0.01 ? 'none' : 'block')};
  opacity: ${(props) => 1 - props.backgroundEffect};
`;

const Mask2 = styled(Mask)<StyledContainerProps>`
  right: 0;
  left: unset;
`;
