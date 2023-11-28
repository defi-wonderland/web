import { FC } from 'react';
import styled from 'styled-components';
import { SPACING_530 } from './Variables';

type backgroundType = '1' | '2' | '3' | '4';
type backgroundAlignType = 'left' | 'center' | 'right';

const handleBackgroundType = (type: backgroundType) => {
  switch (type) {
    case '1':
      return '72%';
    case '2':
      return '68%';
    case '3':
      return '70%';
    case '4':
      return '71%';
    default:
      return '71%';
  }
};

const StyledSectionBackground = styled.div<{
  type: backgroundType;
  align: backgroundAlignType;
}>`
  position: absolute;
  width: ${SPACING_530};
  z-index: 0;

  ${({ align }) =>
    align === 'left' &&
    `
    left: -10%;
    left: max(calc((100vw - 100%) * -1), -29vw);
  `};
  ${({ align }) =>
    align === 'right' &&
    `
    right: -10%;
    right: max(calc((100vw - 100%) * -1), -29vw);
  `};

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(
      circle at 50% 50%,
      rgba(14, 21, 44, 0.16),
      var(--background-surface-primary) ${({ type }) => handleBackgroundType(type)}
    );
  }

  img {
    width: 100%;
    height: auto;
  }

  @media screen and (max-width: 665px) {
    left: initial;
    right: initial;
  }
`;

export interface SectionBackgroundProps {
  type: backgroundType;
  align: backgroundAlignType;
}

export const SectionBackground: FC<SectionBackgroundProps> = ({ type, align, ...props }) => {
  return (
    <StyledSectionBackground type={type} align={align} {...props}>
      <img src={`/img/ethos/00${type}_grad.jpg`} alt='' loading='lazy' />
    </StyledSectionBackground>
  );
};

const StyledSection = styled.section<{
  backgroundImage?: string;
  full?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  min-height: 100vh;
  position: relative;

  ${({ backgroundImage }) =>
    backgroundImage &&
    `
    background-image: url('${backgroundImage}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  `}

  @media screen and (max-width: 665px) {
    min-height: 80vh;
  }
`;

export interface SectionProps {
  backgroundImage?: string;
  full?: boolean;
  children?: any;
}

export const Section: FC<SectionProps> = ({ backgroundImage, full, children, ...props }) => {
  return (
    <StyledSection backgroundImage={backgroundImage} full={full} {...props}>
      {children}
    </StyledSection>
  );
};
