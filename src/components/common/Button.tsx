import { FC } from 'react';
import styled from 'styled-components';

import { FONT_MEDIUM_L, SPACING_12, SPACING_16, SPACING_24, SPACING_40 } from './Variables';

const StyledButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${SPACING_16} ${SPACING_40};
  height: ${SPACING_24};
  text-transform: uppercase;
  font-family: ${FONT_MEDIUM_L};
  font-size: ${SPACING_12};
  font-weight: 500;
  line-height: ${SPACING_16};
  letter-spacing: 0.2rem;
  cursor: pointer;

  color: var(--text-light);
  background-color: transparent;

  &:before,
  &:after,
  .line-container .line,
  a {
    transition: all 200ms ease-in-out;
  }

  &:hover {
    .line-container .line,
    &:before,
    &:after {
      border-color: rgba(255, 255, 255, 0.6);
    }
  }

  &:hover a,
  &:hover span {
    opacity: 0.8;
  }

  & .line-container {
    margin: unset;
    width: 5rem;
    height: 2rem;
    position: absolute;
    display: flex;
    align-items: center;
    background: transparent;

    &:first-of-type {
      left: 0;
      transform: translateX(-50%);
    }

    &:last-of-type {
      right: 0;
      transform: translateX(50%);
    }

    & .line {
      width: 100%;
      display: block;
      height: 1px;
      background-color: white;
      border-bottom: 1px solid white;
      margin: 0 auto;
    }
  }

  &:before,
  &:after {
    content: '';
    width: 100%;
    position: absolute;
    border-radius: 4.8rem;
    height: 50%;
    margin: 0;
  }

  &:before {
    top: 0;
    border-top: 1px solid var(--text-light);
  }

  &:after {
    bottom: 0;
    border-bottom: 1px solid var(--text-light);
  }
`;

export interface ButtonProps {
  children?: any;
}

export const SideLine = () => {
  return (
    <span className='line-container'>
      <span className='line'></span>
    </span>
  );
};

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <>
      <StyledButton {...props}>
        <SideLine />
        {children}
        <SideLine />
      </StyledButton>
    </>
  );
};
