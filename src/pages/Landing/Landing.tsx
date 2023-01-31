import { useState } from "react";

import { Footer, Navbar } from "~/containers";
import { HeroSection } from "./HeroSection";
import { ContentSection } from "./ContentSection";
import { Intro } from "./Intro";

export function Landing() {
  const [seeIntro, setSeeIntro] = useState(false);
  return (
    <>
      {seeIntro && <Intro />}
      {!seeIntro && (
        <>
          <Navbar />
          <HeroSection />
          <ContentSection />
          <Footer />
        </>
      )}
    </>
  );
}
