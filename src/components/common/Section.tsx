import { FC } from "react";
import styled from "styled-components";

const StyledSection = styled.section<{ backgroundImage?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative;

  &.right {
    align-items: flex-end;
  }

  ${({ backgroundImage }) =>
    backgroundImage &&
    `
    background-image: url('${backgroundImage}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  `}
`;

export interface SectionProps {
  backgroundImage?: string;
  className?: string;
  children?: any;
}

export const Section: FC<SectionProps> = ({
  backgroundImage,
  className,
  children,
  ...props
}) => {
  return (
    <StyledSection backgroundImage={backgroundImage} {...props}>
      {children}
    </StyledSection>
  );
};
