import styled from "styled-components";
import { FONT_MEDIUM_L, FONT_SIZE_24 } from "~/components/common";

export const List = styled.div``;

export const ProjectContainer = styled.button`
  cursor: pointer;
  height: 17rem;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  z-index: 10;
`;

export const Name = styled.strong`
  font-family: ${FONT_MEDIUM_L};
  font-size: ${FONT_SIZE_24};
  text-transform: uppercase;
  opacity: 1 !important;
  z-index: 100;
  color: white;

  &:hover {
    width: fit-content;
    background: linear-gradient(to right, #625cbf, #c55fa3, #fccc50);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
  }
`;

export const Divider = styled.canvas`
  background: linear-gradient(
    to right,
    rgba(14, 21, 44, 0) 0%,
    rgba(255, 255, 255, 0.5) 50%,
    rgba(14, 21, 44, 0) 100%
  );
  height: 2px;
  width: 100%;
`;
