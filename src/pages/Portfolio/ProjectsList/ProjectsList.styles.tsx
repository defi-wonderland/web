import styled from "styled-components";
import { FONT_MEDIUM_L, FONT_SIZE_24 } from "~/components/common";

export const List = styled.div``;

export const ProjectContainer = styled.button`
  cursor: pointer;
  height: 15rem;
  padding: 2.4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Name = styled.strong`
  font-family: ${FONT_MEDIUM_L};
  font-size: ${FONT_SIZE_24};
  text-transform: uppercase;
  z-index: -1;
  color: white;
`;

export const Circle = styled.img`
  opacity: 0;
  z-index: -1;
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
