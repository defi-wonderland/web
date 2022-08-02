import { HTMLAttributeAnchorTarget } from "react";
import styled from "styled-components";

const StyledLink = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  color: inherit;
`;

interface LinkProps {
  href?: string | undefined;
  target?: HTMLAttributeAnchorTarget | undefined;
  children: any;
}

export const Link = ({ children, ...props }: LinkProps) => (
  <StyledLink {...props}>{children}</StyledLink>
);
