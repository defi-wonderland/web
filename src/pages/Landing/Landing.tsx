import { Footer, Navbar } from "~/containers";
import { HeroSection } from "./HeroSection";
import { ContentSection } from "./ContentSection";
import { AnimationIn } from "~/components/common";

export function Landing() {
  return (
    <AnimationIn>
      <Navbar />
      <HeroSection />
      <ContentSection />
      <Footer />
    </AnimationIn>
  );
}
