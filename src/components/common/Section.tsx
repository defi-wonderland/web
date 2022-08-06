import { FC } from "react";
import styled from "styled-components";

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
`;

export interface SectionProps {
  backgroundImage?: string;
  full?: boolean;
  children?: any;
}

export const Section: FC<SectionProps> = ({
  backgroundImage,
  full,
  children,
  ...props
}) => {
  return (
    <StyledSection backgroundImage={backgroundImage} full={full} {...props}>
      {children}
    </StyledSection>
  );
};
