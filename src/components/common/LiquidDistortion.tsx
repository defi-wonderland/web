import { useEffect, useState } from "react";
import styled from "styled-components";
import FontFaceObserver from "fontfaceobserver";

// @ts-ignore
import { LiquidDistortionText } from "react-text-fun";

const Container = styled.div`
  canvas {
    margin: 0 auto;
  }

  #liquid-distortion-component {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

interface DistorsionProps {
  text: string;
  fontSize?: number;
  speed?: number;
  volatility?: number;
  color?: number;
  fontFamily?: string;
}

export const LiquidDistortion = ({
  text,
  fontSize,
  speed,
  volatility,
  color,
  fontFamily,
}: DistorsionProps) => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const font = new FontFaceObserver("SharpGrotesk-10");

  const windowWidth = (window as any).innerWidth;
  const defaultFontSize = 140;
  if (windowWidth < 500) {
    fontSize = 44;
  } else if (windowWidth < 1100) {
    fontSize = 60;
  }

  font.load().then(() => {
    setFontLoaded(true);
  });

  useEffect(() => {
    document.fonts.ready.then(() => {
      setShowTitle(true);
    });
  }, [fontLoaded]);

  return (
    <>
      {showTitle && (
        <Container>
          <LiquidDistortionText
            text={text}
            fontSize={fontSize || defaultFontSize}
            speed={speed || 0.1}
            volatility={volatility || 0.02}
            fill={color || "white"}
            fontFamily={fontFamily || "SharpGrotesk-10"}
            lineHeight={1.1}
            paddingLeft={20}
            paddingRight={20}
          />
        </Container>
      )}
    </>
  );
};
