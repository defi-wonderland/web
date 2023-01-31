import { useEffect, useState } from "react";
// @ts-ignore
import { DistortionText } from "react-text-fun";
import FontFaceObserver from "fontfaceobserver";

import styled from "styled-components";

export const Container = styled.div`
  canvas {
    margin: 0 auto;
  }

  #distortion-text-component {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

interface DistortionProps {
  text: string;
}

export const Distortion = ({ text }: DistortionProps) => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const font = new FontFaceObserver("SharpGrotesk-10");

  const windowWidth = (window as any).innerWidth;
  let fontSize = 100;
  if (windowWidth < 500) {
    fontSize = 34;
  } else if (windowWidth < 1100) {
    fontSize = 70;
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
          <DistortionText
            text={text}
            fontSize={fontSize}
            speed={0.7}
            fill={"white"}
            fontFamily={"SharpGrotesk-10"}
            lineHeight={1.1}
            rotation={45.0}
            distortX={0.2}
            distortY={0.5}
            noiseAmplitude={0.02}
            noiseVolatility={5}
            paddingLeft={20}
            paddingRight={20}
          />
        </Container>
      )}
    </>
  );
};
