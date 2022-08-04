import { FC, useEffect } from "react";
import styled from "styled-components";

const StyledHeroHeading = styled.div`
  height: 5rem;
  z-index: 1;

  canvas {
    height: 100% !important;
    width: auto !important;
  }
`;

export interface HeroHeadingProps {
  text: string;
  size?: number;
  color?: string;
}

export const HeroHeading: FC<HeroHeadingProps> = ({
  text,
  size,
  color,
  ...props
}) => {
  const Blotter = (window as any).Blotter;
  let heroHeading: any;

  var rawText = new Blotter.Text(text, {
    family: "arial",
    size: size || 42,
    fill: color || "#FFFFFF",
  });
  const material = new Blotter.LiquidDistortMaterial();
  material.uniforms.uSpeed.value = 0.05;
  material.uniforms.uVolatility.value = 0.02;

  // const material = new Blotter.RollingDistortMaterial();
  // material.uniforms.uSineDistortCycleCount.value = 0;
  // material.uniforms.uNoiseDistortVolatility.value = 8;
  // material.uniforms.uDistortPosition.value = [0, 0];

  const blotterText = new Blotter(material, { texts: rawText });
  const scope = blotterText.forText(rawText);

  useEffect(() => {
    scope.appendTo(heroHeading);
  }, []);

  return (
    <StyledHeroHeading
      {...props}
      ref={(c) => (heroHeading = c)}
    ></StyledHeroHeading>
  );
};
