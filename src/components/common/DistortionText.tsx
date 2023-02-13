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
  fontSize?: number;
}

export const Distortion = ({ text, fontSize }: DistortionProps) => {
  const { ready } = useFontObserver();

  return (
    <>
      {ready && (
        <Container>
          <DistortionText
            text={text}
            fontSize={fontSize || 100}
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
