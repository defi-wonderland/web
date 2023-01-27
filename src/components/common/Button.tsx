import { FC } from "react";
import styled from "styled-components";

import {
<<<<<<< HEAD
  FONT_MEDIUM_L,
=======
>>>>>>> b519e39471adb86f2f00a3c5e310a6a8c7d0a04b
  SPACING_12,
  SPACING_16,
  SPACING_24,
  SPACING_40,
  SPACING_48,
} from "./Variables";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${SPACING_48};
  padding: ${SPACING_16} ${SPACING_40};
  height: ${SPACING_24};
  text-transform: uppercase;
<<<<<<< HEAD
  font-family: ${FONT_MEDIUM_L};
=======
  font-family: var(--font-medium-l);
>>>>>>> b519e39471adb86f2f00a3c5e310a6a8c7d0a04b
  font-size: ${SPACING_12};
  font-weight: 500;
  line-height: ${SPACING_16};
  letter-spacing: 0.2rem;
  cursor: pointer;

  border: 1px solid var(--text-light);
  color: var(--text-light);
  background: var(--background-surface-primary);

  transition: all 500ms ease-in-out;

  &:hover {
    background: white;
    color: black;
  }
`;

export interface ButtonProps {
  children?: any;
}

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
