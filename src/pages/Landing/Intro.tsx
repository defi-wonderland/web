import { useState } from "react";
import styled from "styled-components";

import { Footer, Navbar, StarsBackground } from "~/containers";
import { Landing } from "./Landing";
import { Intro } from "./IntroMask/Intro";
import { MOBILE_MAX_WIDTH } from "~/components/common";

export interface StyledContainerProps {
  showBackground: boolean;
}

const LandingContainer = styled.div<StyledContainerProps>`
  height: ${({ showBackground }) => (showBackground ? "100%" : "98vh")};
  overflow: hidden;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    height: ${({ showBackground }) => (showBackground ? "100%" : "60vh")};
  }
`;

export function IntroductionPage() {
  const [showBackground, setShowBackground] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {isLoaded && (
        <>
          <StarsBackground zIndex={showBackground ? 0 : 10} />
          <Navbar className={`fade-enter${showBackground ? "-active" : ""}`} />
          <LandingContainer showBackground={showBackground}>
            <Landing />
          </LandingContainer>
          {showBackground && <Footer />}
        </>
      )}
      <Intro
        onLoad={(e) => {
          const image = (e.target as HTMLImageElement).src;
          image.includes("key_shape") && setIsLoaded(true);
        }}
        showBackground={showBackground}
        setShowBackground={setShowBackground}
      />
    </>
  );
}
