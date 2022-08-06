import { FC } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 48px;
  padding: 0 2.5rem;
  height: 2.5rem;
  text-transform: uppercase;
  font-family: var(--font-medium-l);
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.33;
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
