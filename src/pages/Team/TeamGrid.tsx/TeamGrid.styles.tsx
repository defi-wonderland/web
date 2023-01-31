import styled from "styled-components";
import {
  FONT_MEDIUM,
  FONT_MEDIUM_L,
  FONT_SIZE_18,
  FONT_SIZE_24,
  GradientTitle,
  Link,
} from "~/components/common";

export const TitleContainer = styled.div`
  margin-top: 175px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const WonderTitle = styled(GradientTitle)`
  word-wrap: unset;
  width: 40rem !important;
`;

export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 100px 0px;

  // TODO: improve members border
  grid-gap: 2px;
  background-color: rgba(255, 255, 255, 0.5);
`;

export const MemberContainer = styled.div`
  background-color: #0e152c;
  /* border: 1px solid rgba(255, 255, 255, 0.5); */
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 20rem;
  padding: 2.4rem;
  cursor: pointer;

  &:hover {
    background-image: radial-gradient(
        circle at 100% 50%,
        rgba(14, 21, 44, 0),
        #0e152c
      ),
      url("/img/lore/002_grad.jpg");
    background-size: cover;
    background-position: bottom;
  }
`;

export const Name = styled.strong`
  font-family: ${FONT_MEDIUM_L};
  font-size: ${FONT_SIZE_24};
  text-transform: uppercase;
  opacity: 1 !important;
  z-index: 100;
`;

export const Position = styled.p`
  font-family: ${FONT_MEDIUM};
  font-size: ${FONT_SIZE_18};
  color: rgba(255, 255, 255, 0.65);
  z-index: 1;
`;

export const SLink = styled(Link)`
  font-family: ${FONT_MEDIUM};
  font-size: ${FONT_SIZE_18};
  color: rgba(255, 255, 255, 0.65);
  z-index: 100;
`;

export const Divider = styled.canvas`
  background: linear-gradient(
    to right,
    rgba(14, 21, 44, 0) 0,
    rgba(255, 255, 255, 0.5) 100%
  );
  height: 2px;
  width: 60%;
`;
