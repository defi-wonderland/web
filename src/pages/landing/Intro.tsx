import { useEffect, useState } from 'react';
import styled from 'styled-components';

import Landing from '~/pages/landing';
import Footer from '~/containers/Footer';
import StarsBackground from '~/containers/StarsBackground';
import Navbar from '~/containers/Navbar';
import Intro from './ContentSection/IntroMask';
import StyledPageView from '~/components/StyledPageView';

const LandingContainer = styled.div`
  overflow: hidden;
`;

export default function IntroductionPage() {
  const [isIntroLoaded, setIsIntroLoaded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const client = typeof window !== 'undefined' ? window : undefined;

  useEffect(() => {
    setTimeout(() => {
      if (client) setShowIntro(true);
    });
  }, [client]);

  useEffect(() => {
    const showBackground = sessionStorage.getItem('introLoaded') || '';
    if (showBackground === 'true') {
      setIsIntroLoaded(true);
    }
  }, []);

  return (
    <>
      {showIntro && (
        <StyledPageView>
          {isLoaded && (
            <>
              <StarsBackground zIndex={isIntroLoaded ? 0 : 10} />
              <Navbar className={`fade-enter${isIntroLoaded ? '-active' : ''}`} />
              <LandingContainer className={isIntroLoaded ? 'intro-loaded' : 'intro-not-loaded'}>
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
        </StyledPageView>
      )}
    </>
  );
}
