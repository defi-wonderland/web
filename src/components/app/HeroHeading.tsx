import { FC, useEffect } from "react";
import styled from "styled-components";
import useFontFaceObserver from "use-font-face-observer";

const StyledHeroHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: start;
  margin-top: var(--navbar-height);
  width: 64rem;
  max-width: calc(100% - var(--page-padding));
  z-index: 1;

  canvas {
    // width: 100% !important;
    // height: auto !important;
    // max-height: 30vh !important;
    // max-width: 100% !important;
    // height: 30vh !important;
  }
`;

export interface HeroHeadingProps {
  text: string;
  color?: string;
}

export const HeroHeading: FC<HeroHeadingProps> = ({
  text,
  color,
  ...props
}) => {
  const Blotter = (window as any).Blotter;
  let heroHeading: HTMLDivElement | null;

  const windowWidth = (window as any).innerWidth;
  const fontFamily = "SharpGrotesk-10";

  let size;

  if (windowWidth < 500) {
    size = (windowWidth * 120) / 1100;
  } else if (windowWidth < 1000) {
    size = (windowWidth * 120) / 1000;
  } else if (windowWidth < 1720) {
    size = 120;
  } else {
    size = (windowWidth * 120) / 1920;
  }

  var rawText = new Blotter.Text(text, {
    family: `${fontFamily}, arial`,
    size,
    paddingLeft: 30,
    paddingRight: 30,
    fill: color || "#FFFFFF",
  });
  const material = new Blotter.LiquidDistortMaterial();
  material.uniforms.uSpeed.value = 0.15;
  material.uniforms.uVolatility.value = 0.04;

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
      if (heroHeading && !heroHeading?.hasChildNodes()) {
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
