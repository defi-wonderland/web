import { FC } from "react";
import styled from "styled-components";

const StyledRing = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  user-select: none;
  width: 32rem;
  max-width: calc(100% - var(--page-padding));

  img {
    width: 100%;

    &:first-child {
      z-index: var(--ring-a-index);
    }

    &:last-child {
    position: absolute;
    left: 0;
    top: 0;
    z-index: var(--ring-b-index);
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
