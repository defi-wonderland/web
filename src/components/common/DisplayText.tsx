import { FC } from "react";
import styled from "styled-components";

const StyledDisplayText = styled.h1<{
  size: DisplaySize;
  gradient?: boolean;
}>`
  font-family: var(--font-display);
  font-weight: 300;
  font-style: italic;
  line-height: 1.25;
  letter-spacing: 0.1rem;

  ${({ size }) =>
    size === "xl" &&
    `
    font-size: 7.5rem;
  `}
  ${({ size }) =>
    size === "lg" &&
    `
    font-size: 6rem;
  `}
  ${({ size }) =>
    size === "md" &&
    `
    font-size: 5rem;
  `}

  ${({ gradient }) =>
    gradient &&
    `
    p {
      width: fit-content;
      font-size: 8rem;
      letter-spacing: 0.4rem;
      line-height: 1;
      background: linear-gradient(to right, #625cbf, #c55fa3, #fccc50);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  `}
`;

type DisplaySize = "xl" | "lg" | "md";

export interface DisplayTextProps {
  size?: DisplaySize;
  gradient?: boolean;
  children: any;
}

export const DisplayText: FC<DisplayTextProps> = ({
  size,
  gradient,
  children,
  ...props
}) => {
  return (
    <StyledDisplayText size={size ?? "md"} gradient={gradient} {...props}>
      {children}
    </StyledDisplayText>
  );
};
