import { FC } from "react";
import styled from "styled-components";

const StyledBall = styled.div`
  width: 10vw;
  height: 10vw;
  position: fixed;
  left: 50%;
  top: 36%;
  transform: translate(-50%, -30%);
  background-image: url("/src/assets/img/ball.png");
  background-repeat: no-repeat;
  background-size: contain;
  z-index: var(--ball-index);
`;

export interface BallProps {}

export const Ball: FC<BallProps> = ({ ...props }) => {
  return <StyledBall {...props} />;
};
