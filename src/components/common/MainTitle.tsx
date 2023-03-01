import styled from "styled-components";

import { FONT_DISPLAY } from "./Variables";

interface TitleProps {
  fontSize?: number;
}
export const MainTitle = styled.h1<TitleProps>`
  font-family: ${FONT_DISPLAY};
  text-align: center;
  font-size: ${(props) => (props.fontSize ? props.fontSize : 5)}rem;
  width: max-content;
  margin: 0 auto;
`;
