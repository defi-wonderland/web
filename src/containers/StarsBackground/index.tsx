import styled from "styled-components";
import "~/assets/css/bg.sass";

const StarsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;

  & div {
    border-radius: 100%;
  }
`;

export function StarsBackground() {
  return (
    <StarsContainer>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </StarsContainer>
  );
}
