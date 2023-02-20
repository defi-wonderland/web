import { StarsBackground } from "~/containers";
import { Intro } from "./IntroSection/Intro";

export function IntroductionPage() {
  return (
    <>
      <Intro />
      <StarsBackground zIndex={1} />
    </>
  );
}
