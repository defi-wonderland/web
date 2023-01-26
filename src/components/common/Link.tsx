import { FC } from "react";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";
import styled, { css } from "styled-components";

const StyledLink = css`
  text-decoration: none;
  color: inherit;
`;

const ExternalLink = styled.a`
  ${StyledLink}

  &:hover {
    opacity: 87%;
  }
`;

const StyledRouterLink = styled(RouterLink)`
  ${StyledLink}

  &:hover {
    opacity: 87%;
  }
`;

export interface LinkProps extends RouterLinkProps {
  external?: boolean;
}

export const Link: FC<LinkProps> = ({
  to,
  target,
  external,
  children,
  ...props
}) => {
  if (external) {
    return (
      <ExternalLink target={target || "_blank"} href={to.toString()} {...props}>
        {children}
      </ExternalLink>
    );
  }

  return (
    <StyledRouterLink to={to} {...props}>
      {children}
    </StyledRouterLink>
  );
};
