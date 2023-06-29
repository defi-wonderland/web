import styled from 'styled-components';

import { MOBILE_MAX_WIDTH, NAVBAR_HEIGHT, NAVBAR_INDEX } from '~/components/common';

export interface StyledContainerProps {
  backgroundEffect: number;
}

export const IntroContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: space-between;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    background-image: url('/img/hero/hero_mobile.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`;

export const Logo = styled.img<StyledContainerProps>`
  pointer-events: none;
  opacity: ${(props) => 1 - props.backgroundEffect * 3};

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    width: 26rem;
  }
`;

export const Keyhole = styled.img.attrs({
  src: '/img/key_shape.svg',
})<StyledContainerProps>`
  pointer-events: none;
  position: absolute;
  top: ${(props) => `${-props.backgroundEffect * window.innerHeight * 22}px`};
  height: ${(props) => `${100 + props.backgroundEffect * 4000}%`};
  opacity: ${(props) => 1 - props.backgroundEffect};
  background-color: rgba(255, 255, 255, 0.1);
  z-index: -1;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    top: ${(props) => -props.backgroundEffect * window.innerHeight * 22}px;
  }
`;

export const DottedLine = styled.img<StyledContainerProps>`
  pointer-events: none;
  height: 19.5%;

  opacity: ${(props) => 1 - props.backgroundEffect * 10};
  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    height: 21%;
  }
`;

export const KeyContainer = styled.div`
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

export const Text = styled.span<StyledContainerProps>`
  font-style: italic;
  font-size: 2.2rem;
  margin-top: 0.4rem;
  user-select: none;
  opacity: ${(props) => 1 - props.backgroundEffect * 3};
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
  background-image: linear-gradient(to bottom, var(--background-surface-primary) 25%, rgba(14, 21, 44, 0) 100%);
  grid-gap: 4rem;
  padding: 2rem 1rem;
  user-select: none;
  z-index: ${NAVBAR_INDEX};
`;

export const KeyBox = styled.div<StyledContainerProps>`
  cursor: pointer;
  opacity: ${(props) => 1 - props.backgroundEffect * 3};
`;

export const Key = styled.img`
  position: relative;
  z-index: -1;
  width: 7rem;
`;

export const Mask = styled.div<StyledContainerProps>`
  background-color: #0e152c;
  position: absolute;
  height: 100%;
  width: 20%;
  top: 0;
  left: 0;
  display: ${(props) => (props.backgroundEffect > 0.01 ? 'none' : 'block')};
  opacity: ${(props) => 1 - props.backgroundEffect};
`;

export const Mask2 = styled(Mask)<StyledContainerProps>`
  right: 0;
  left: unset;
`;
