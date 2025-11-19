import { useEffect, useRef, useState, useCallback } from 'react';
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';
import styled from 'styled-components';

import { MOBILE_MAX_WIDTH, NAVBAR_HEIGHT, NAVBAR_INDEX } from '~/components';

import LogoImage from '~/assets/Logo.svg';
import VLINE from '~/assets/dotted_line.svg';
import INTROKEY from '~/assets/intro_key.svg';

const ANIMATION_CONFIG = {
  DURATION: 300,
  COMPLETION_THRESHOLD: 0.5,
  KEY_MAX_DISTANCE: 350,
  WHEEL_SENSITIVITY: 1000,
  TOUCH_SENSITIVITY: 500,
  WHEEL_REVERT_DELAY: 500,
} as const;

interface IntroProps {
  showBackground: boolean;
  setShowBackground: (value: boolean) => void;
  onLoad: (e: any) => void;
}

export default function Intro({ showBackground, setShowBackground, ...props }: IntroProps) {
  // State for UI re-renders
  const [progress, setProgress] = useState(0);
  const [keyPosition, setKeyPosition] = useState({ x: 0, y: 0 });

  // Refs for internal logic (don't trigger re-renders)
  const nodeRef = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const progressRef = useRef(0);
  const isAnimatingRef = useRef(false);
  const keyPositionRef = useRef({ x: 0, y: 0 });
  const hasCompletedRef = useRef(false);

  // Utility functions with single source of truth - update both state and ref
  const updateProgress = useCallback((newProgress: number) => {
    setProgress(newProgress);
    progressRef.current = newProgress;
  }, []);

  const updateKeyPosition = useCallback((newPosition: { x: number; y: number }) => {
    setKeyPosition(newPosition);
    keyPositionRef.current = newPosition;
  }, []);

  const updateProgressAndKey = useCallback(
    (newProgress: number) => {
      const keyY = -newProgress * ANIMATION_CONFIG.KEY_MAX_DISTANCE;
      const newKeyPosition = { x: 0, y: keyY };

      updateProgress(newProgress);
      updateKeyPosition(newKeyPosition);
    },
    [updateProgress, updateKeyPosition],
  );

  const shouldRevert = useCallback(
    (currentProgress: number) => currentProgress > 0 && currentProgress < ANIMATION_CONFIG.COMPLETION_THRESHOLD,
    [],
  );

  const resetKeyPosition = useCallback(() => {
    const resetPosition = { x: 0, y: 0 };
    setKeyPosition(resetPosition);
    keyPositionRef.current = resetPosition;
  }, []);

  // Smooth animation back to initial state
  const animateToZero = useCallback(() => {
    if (isAnimatingRef.current) return;

    isAnimatingRef.current = true;
    const startProgress = progressRef.current;
    const startKeyY = keyPositionRef.current.y;
    const startTime = performance.now();
    const duration = ANIMATION_CONFIG.DURATION;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const animationProgress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - animationProgress, 3);
      const currentProgress = startProgress * (1 - easeOut);
      const currentKeyY = startKeyY * (1 - easeOut);

      updateProgress(currentProgress);
      const newKeyPosition = { x: 0, y: currentKeyY };
      updateKeyPosition(newKeyPosition);

      if (animationProgress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        isAnimatingRef.current = false;
        resetKeyPosition();
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  }, [updateProgress, updateKeyPosition, resetKeyPosition]);

  // Handle overlay completion - only execute once
  useEffect(() => {
    if (progress >= ANIMATION_CONFIG.COMPLETION_THRESHOLD && !hasCompletedRef.current) {
      hasCompletedRef.current = true;

      // Block scroll to prevent momentum issues
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';

      sessionStorage.setItem('introLoaded', 'true');
      setShowBackground(true);

      // Re-enable scroll after momentum dissipates
      setTimeout(() => {
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
      }, 1000);
    }
  }, [progress, setShowBackground]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let touchStartY = 0;
    let touchStartProgress = 0;
    let wheelTimeout: NodeJS.Timeout | null = null;

    // Debounced revert for wheel events
    const resetWheelTimeout = () => {
      if (wheelTimeout) {
        clearTimeout(wheelTimeout);
      }
      wheelTimeout = setTimeout(() => {
        if (shouldRevert(progressRef.current)) {
          animateToZero();
        }
      }, ANIMATION_CONFIG.WHEEL_REVERT_DELAY);
    };

    // Handle mouse wheel events
    const handleWheel = (event: WheelEvent) => {
      if (!showBackground) {
        event.preventDefault();
      }

      const wheelIncrement = event.deltaY / ANIMATION_CONFIG.WHEEL_SENSITIVITY;
      const newProgress = Math.max(0, Math.min(1, progressRef.current + wheelIncrement));

      updateProgress(newProgress);
      updateProgressAndKey(newProgress);
      resetWheelTimeout();
    };

    // Handle touch start - capture initial position
    const handleTouchStart = (event: TouchEvent) => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }

      touchStartY = event.touches[0].clientY;
      touchStartProgress = progressRef.current;
    };

    // Handle touch move - calculate progress from touch delta
    const handleTouchMove = (event: TouchEvent) => {
      if (!showBackground) {
        event.preventDefault();
      }

      const deltaY = touchStartY - event.touches[0].clientY;
      const touchIncrement = deltaY / ANIMATION_CONFIG.TOUCH_SENSITIVITY;
      const newProgress = Math.max(0, Math.min(1, touchStartProgress + touchIncrement));

      updateProgressAndKey(newProgress);
    };

    // Handle touch end - revert if not completed
    const handleTouchEnd = () => {
      if (shouldRevert(progressRef.current)) {
        animateToZero();
      }

      touchStartY = 0;
      touchStartProgress = 0;
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('touchstart', handleTouchStart, { passive: false });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (wheelTimeout) {
        clearTimeout(wheelTimeout);
      }
    };
  }, [animateToZero, shouldRevert, updateProgressAndKey, updateProgress, showBackground]);

  // Handle drag completion - complete or revert
  const handleOnStop = (_event: DraggableEvent, node: DraggableData) => {
    const dragProgress = Math.max(0, Math.min(1, -node.y / ANIMATION_CONFIG.KEY_MAX_DISTANCE));

    if (dragProgress >= ANIMATION_CONFIG.COMPLETION_THRESHOLD) {
      updateProgress(1);
    } else {
      animateToZero();
    }
  };

  // Handle drag movement - update progress and key position
  const handleOnDrag = (_event: DraggableEvent, node: DraggableData) => {
    const newProgress = Math.max(0, Math.min(1, -node.y / ANIMATION_CONFIG.KEY_MAX_DISTANCE));

    updateProgress(newProgress);
    updateKeyPosition({ x: node.x, y: node.y });
  };

  return (
    <IntroContainer ref={containerRef} className={showBackground ? 'hide-intro' : ''} {...props}>
      <StyledNavbar>
        <Logo src={LogoImage.src} alt='Wonderland logo' $progress={progress} />
      </StyledNavbar>

      <KeyContainer>
        <Mask $progress={progress} />
        <Keyhole $progress={progress} />
        <Mask2 $progress={progress} />

        <DottedLine $progress={progress} src={VLINE.src} alt='dotted line' />

        <Draggable
          axis='y'
          bounds={{ bottom: 0, top: -ANIMATION_CONFIG.KEY_MAX_DISTANCE }}
          nodeRef={nodeRef}
          position={keyPosition}
          onStop={handleOnStop}
          onDrag={handleOnDrag}
        >
          <KeyBox ref={nodeRef} $progress={progress}>
            <Key src={INTROKEY.src} alt='Key icon' />
          </KeyBox>
        </Draggable>

        <Text $progress={progress}>Slide the key & step into Wonderland</Text>
      </KeyContainer>
    </IntroContainer>
  );
}

interface StyledContainerProps {
  $progress: number;
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
  opacity: ${(props) => 1 - props.$progress * 3};

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    width: 26rem;
  }
`;

const Keyhole = styled.img.attrs({
  src: '/img/key_shape.svg',
})<StyledContainerProps>`
  pointer-events: none;
  position: absolute;
  top: ${(props) => `${typeof window !== 'undefined' && -props.$progress * window?.innerHeight * 22}px`};
  height: ${(props) => `${100 + props.$progress * 4000}%`};
  opacity: ${(props) => 1 - props.$progress};
  background-color: rgba(255, 255, 255, 0.1);
  z-index: -1;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    top: ${(props) => typeof window !== 'undefined' && -props.$progress * window?.innerHeight * 22}px;
  }
`;

const DottedLine = styled.img<StyledContainerProps>`
  pointer-events: none;
  height: 19.5%;

  opacity: ${(props) => 1 - props.$progress * 10};
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
  opacity: ${(props) => 1 - props.$progress * 3};
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
  opacity: ${(props) => 1 - props.$progress * 3};
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
  display: ${(props) => (props.$progress > 0.01 ? 'none' : 'block')};
  opacity: ${(props) => 1 - props.$progress};
`;

const Mask2 = styled(Mask)<StyledContainerProps>`
  right: 0;
  left: unset;
`;
