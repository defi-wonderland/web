import { FC } from "react";
import styled from "styled-components";

import { RING_A_INDEX, RING_B_INDEX, SPACING_320 } from "./Variables";

const StyledRing = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  user-select: none;
  width: ${SPACING_320};
  max-width: calc(100% - var(--page-padding));

  img {
    width: 100%;

    &:first-child {
<<<<<<< HEAD
      z-index: ${RING_B_INDEX};
=======
      z-index: ${RING_A_INDEX};
>>>>>>> b519e39471adb86f2f00a3c5e310a6a8c7d0a04b
    }

    &:last-child {
      position: absolute;
      left: 0;
      top: 0;
<<<<<<< HEAD
      z-index: ${RING_A_INDEX};
=======
      z-index: ${RING_B_INDEX};
>>>>>>> b519e39471adb86f2f00a3c5e310a6a8c7d0a04b
    }
  }
`;

export interface RingProps {
  type: "1" | "2";
}

export const Ring: FC<RingProps> = ({ type, ...props }) => {
  return (
    <StyledRing {...props}>
      <img src={`/img/ring/${type}-a.png`} alt="Ring part" />
      <img src={`/img/ring/${type}-b.png`} alt="Ring part" />
    </StyledRing>
  );
};
