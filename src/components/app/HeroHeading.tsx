import { FC, useEffect } from "react";
import styled from "styled-components";
import useFontFaceObserver from "use-font-face-observer";

const StyledHeroHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64rem;
  max-width: 95%;
  z-index: 1;

  canvas {
    height: auto !important;
    width: 100% !important;
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
  const fontFamily = "SharpGrotesk-10";
  let heroHeading: HTMLDivElement | null;

  var rawText = new Blotter.Text(text, {
    family: `${fontFamily}, arial`,
    size: size || 120,
    paddingLeft: 30,
    paddingRight: 30,
    fill: color || "#FFFFFF",
  });
  const material = new Blotter.LiquidDistortMaterial();
  material.uniforms.uSpeed.value = 0.15;
  material.uniforms.uVolatility.value = 0.02;

  // const material = new Blotter.RollingDistortMaterial();
  // material.uniforms.uSineDistortCycleCount.value = 0;
  // material.uniforms.uNoiseDistortVolatility.value = 8;
  // material.uniforms.uDistortPosition.value = [0, 0];

  const blotterText = new Blotter(material, { texts: rawText });
  const scope = blotterText.forText(rawText);
  const webFontsLoaded = useFontFaceObserver([{ family: fontFamily }]);

  // NOTE We wait until the DOM is loaded
  useEffect(() => {
    // NOTE The fonts are not included with use effect so we wait for them too
    document.fonts.ready.then(() => {
      if (!heroHeading?.hasChildNodes()) {
        scope.appendTo(heroHeading);
      }
    });
  }, [webFontsLoaded]);

  return (
    <StyledHeroHeading
      {...props}
      ref={(container) => (heroHeading = container)}
    />
  );
};
