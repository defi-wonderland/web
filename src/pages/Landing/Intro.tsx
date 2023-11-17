import { useState } from 'react';
import styled from 'styled-components';

import { Footer, Navbar, StarsBackground } from '~/containers';
import { Landing } from './Landing';
import { Intro } from './IntroMask/Intro';
import { MOBILE_MAX_WIDTH } from '~/components/common';
import { useStateContext } from '~/hooks/useStateContext';

export interface StyledContainerProps {
  showBackground: boolean;
}

const LandingContainer = styled.div<StyledContainerProps>`
  height: ${({ showBackground }) => (showBackground ? '100%' : '98vh')};
  overflow: hidden;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    height: ${({ showBackground }) => (showBackground ? '100%' : '60vh')};
  }
`;

export function IntroductionPage() {
  const { isIntroLoaded, setIsIntroLoaded } = useStateContext();
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {isLoaded && (
        <>
          <StarsBackground zIndex={isIntroLoaded ? 0 : 10} />
          <Navbar className={`fade-enter${isIntroLoaded ? '-active' : ''}`} />
          <LandingContainer showBackground={isIntroLoaded}>
            <Landing />
          </LandingContainer>
          {isIntroLoaded && <Footer />}
        </>
      )}
      <Intro
        onLoad={(e) => {
          const image = (e.target as HTMLImageElement).src;
          image.includes('key_shape') && setIsLoaded(true);
        }}
        showBackground={isIntroLoaded}
        setShowBackground={setIsIntroLoaded}
      />
    </>
  );
}
