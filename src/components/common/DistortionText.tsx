import styled from "styled-components";
import { DistortionText } from "react-text-fun";

import { useFontObserver } from "~/hooks/useFontObserver";

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
  const { ready } = useFontObserver();

  const windowWidth = (window as any).innerWidth;
  let fontSize = 100;
  if (windowWidth < 500) {
    fontSize = 34;
  } else if (windowWidth < 1100) {
    fontSize = 70;
  }

  return (
    <>
      {ready && (
        <Container>
          <DistortionText
            text={text}
            fontSize={fontSize}
            speed={0.1}
            fill="white"
            fontFamily="SharpGrotesk-10"
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
