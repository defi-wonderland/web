import { Footer, Navbar } from "~/containers";
import { HeroSection } from "./HeroSection";
import { ContentSection } from "./ContentSection";

export function Landing() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ContentSection />
      <Footer />
    </>
  );
}
