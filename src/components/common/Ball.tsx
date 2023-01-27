import { FC } from "react";
import styled from "styled-components";

import { BALL_DIAMETER, BALL_INDEX } from "./Variables";

const StyledBall = styled.div`
  width: ${BALL_DIAMETER};
  height: ${BALL_DIAMETER};
  position: fixed;
  left: 50%;
  top: 36%;
  transform: translate(-50%, -36%);
  background-image: url("/img/ball.png");
  background-repeat: no-repeat;
  background-size: contain;
  z-index: ${BALL_INDEX};
`;

export interface BallProps {}

export const Ball: FC<BallProps> = ({ ...props }) => {
  return <StyledBall {...props} />;
};
