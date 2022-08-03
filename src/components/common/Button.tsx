import { FC } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 99rem;
  padding: 1rem 4rem;
  text-transform: uppercase;
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
