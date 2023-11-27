import { FC } from 'react';
// import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Link from 'next/link';

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

const StyledRouterLink = styled(Link)`
  ${StyledLink}

  &:hover {
    opacity: 87%;
  }
`;

export interface LinkProps {
  external?: boolean;
  to: string;
  target?: string;
  children: React.ReactNode;
  className?: string;
}

export const SLink: FC<LinkProps> = ({ to, target, external, children, className, ...props }) => {
  if (external) {
    return (
      <ExternalLink className={className} target={target || '_blank'} href={to.toString()} {...props}>
        {children}
      </ExternalLink>
    );
  }

  return (
    <StyledRouterLink href={to} className={className} {...props}>
      {children}
    </StyledRouterLink>
  );
};
