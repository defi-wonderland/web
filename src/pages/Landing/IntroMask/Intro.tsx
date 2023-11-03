import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Draggable from 'react-draggable';

import { StyledNavbar } from '~/containers/Navbar/Navbar.styles';
import {
  DottedLine,
  IntroContainer,
  Key,
  KeyBox,
  KeyContainer,
  Keyhole,
  Logo,
  Mask,
  Mask2,
  Text,
} from './Intro.styles';
import LogoImage from '~/assets/Logo.svg';
import VLINE from '~/assets/dotted_line.svg';
import INTROKEY from '~/assets/intro_key.svg';

interface IntroProps {
  showBackground: boolean;
  setShowBackground: (value: boolean) => void;
  onLoad: (e: any) => void;
}

export function Intro({ showBackground, setShowBackground, ...props }: IntroProps) {
  const [activateDragEffect, setDragEffect] = useState(false);
  const [backgroundEffect, setBackgroundEffect] = useState(0);
  const nodeRef = useRef(null);

  useEffect(() => {
    if (activateDragEffect) setShowBackground(true);
  }, [activateDragEffect, setShowBackground]);

  return (
    <IntroContainer className={showBackground ? 'hide-intro' : ''} {...props}>
      <StyledNavbar>
        <Logo src={LogoImage} alt='Wonderland logo' backgroundEffect={backgroundEffect} />
      </StyledNavbar>
      <KeyContainer>
        <Mask backgroundEffect={backgroundEffect} />
        <Keyhole backgroundEffect={backgroundEffect} />
        <Mask2 backgroundEffect={backgroundEffect} />

        <DottedLine backgroundEffect={backgroundEffect} src={VLINE} alt='dotted line' />
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
            <Key ref={nodeRef} src={INTROKEY} alt='Key icon' />
          </KeyBox>
        </Draggable>
        <Text backgroundEffect={backgroundEffect}>Slide the key & step into Wonderland</Text>
      </KeyContainer>
    </IntroContainer>
  );
}
