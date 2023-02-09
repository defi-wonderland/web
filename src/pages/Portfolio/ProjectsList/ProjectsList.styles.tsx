import styled from "styled-components";
import { FONT_MEDIUM_L, FONT_SIZE_24 } from "~/components/common";

export const List = styled.div``;

export const ProjectContainer = styled.button`
  cursor: pointer;
  min-height: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ProjectHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 15rem;
  padding: 2.4rem;
  position: relative;

  &:hover strong {
    width: fit-content;
    background: linear-gradient(to right, #625cbf, #c55fa3, #fccc50);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
  }

  &:hover img,
  &:hover div {
    opacity: 1;
  }
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

export const Divider = styled.div`
  background: linear-gradient(
    to right,
    rgba(14, 21, 44, 0) 0%,
    rgba(255, 255, 255, 0.5) 50%,
    rgba(14, 21, 44, 0) 100%
  );
  height: 2px;
  width: 100%;
`;

export const ProjectDescription = styled.div`
  max-width: 75vw;
  height: 100%;
  display: flex;
  flex-direction: row;

  & span {
    font-size: 1.8rem;
    padding: 1rem 2rem 5rem 0;
  }
`;

export const ProjectImage = styled.img`
  width: 14rem;
  height: 14rem;
  background-color: white;
  padding: 1rem;
  margin: 1rem 5rem 5rem 5rem;
`;

export const HLine = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  width: 90px;
  height: 1px;
  position: absolute;
  right: 55px;
  opacity: 0;
`;

export const VLine = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  width: 1px;
  height: 32px;
  position: absolute;
  right: 100px;
  opacity: 0;
`;
