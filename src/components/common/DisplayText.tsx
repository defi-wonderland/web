import { FC } from 'react';
import styled from 'styled-components';
import { FONT_DISPLAY, MOBILE_MAX_WIDTH } from './Variables';

const StyledDisplayText = styled.h1<{
  size: DisplaySize;
  gradient?: boolean;
}>`
  font-family: ${FONT_DISPLAY};
  font-weight: 300;
  font-style: italic;
  line-height: 1.25;
  letter-spacing: 0.1rem;

  ${({ size }) =>
    size === 'xl' &&
    `
    font-size: 7.5rem;
  `}
  ${({ size }) =>
    size === 'lg' &&
    `
    font-size: 6rem;
  `}
  ${({ size }) =>
    size === 'md' &&
    `
    font-size: 5rem;
  `}

  ${({ gradient }) =>
    gradient &&
    `
    p {
      width: fit-content;
      font-size: 12.8rem;
      letter-spacing: 0.4rem;
      line-height: 1;
      background: linear-gradient(to right, #625cbf, #c55fa3, #fccc50);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
      p {
        font-size: 6.4rem;
      }
    }

  `}
`;

type DisplaySize = 'xl' | 'lg' | 'md';

export interface DisplayTextProps {
  size?: DisplaySize;
  gradient?: boolean;
  children: any;
}

export const DisplayText: FC<DisplayTextProps> = ({ size, gradient, children, ...props }) => {
  return (
    <StyledDisplayText size={size ?? 'md'} gradient={gradient} {...props}>
      {children}
    </StyledDisplayText>
  );
};
