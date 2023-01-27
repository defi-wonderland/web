import {
  BackgroundImg,
  Container,
  HeroDivider,
  Ball_1,
  Ball_2,
  Ball_3,
} from "./Portfolio.styles";
import { ProjectsList } from "./ProjectsList";
import { LiquidDistortion } from "~/components/common/LiquidDistorsion";

export function Portfolio() {
  const volatility = 0.04;
  const speed = 0.08;
  const fontSize = 90;

  return (
    <>
      <BackgroundImg type="2" align="center" />
      <Container>
        <HeroDivider>
          <LiquidDistortion
            text={`TOGETHER, WE WANT TO SUSTAINBLY BUILD A MORE INCLUSIVE`}
            fontSize={fontSize}
            volatility={volatility}
            speed={speed}
          />
          <LiquidDistortion
            text={`AND DECENTRALIZED FINANCIAL ECOSYSTEM.`}
            fontSize={fontSize}
            volatility={volatility}
            speed={speed}
          />
          <Ball_1 />
          <Ball_2 />
          <Ball_3 />
        </HeroDivider>
        <ProjectsList />
      </Container>
    </>
  );
}
