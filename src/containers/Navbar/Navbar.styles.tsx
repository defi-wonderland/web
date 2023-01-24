import styled from "styled-components";

import { Link, NAVBAR_HEIGHT, NAVBAR_INDEX } from "~/components/common";

export const StyledNavbar = styled.nav`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  top: 0;
  left: 0;
  width: 100vw;
  height: ${NAVBAR_HEIGHT};
  color: var(--text-light);
  background-image: linear-gradient(
    to bottom,
    var(--background-surface-primary) 25%,
    rgba(14, 21, 44, 0) 100%
  );
  grid-gap: 4rem;
  padding: 2rem 1rem;
  user-select: none;
  z-index: ${NAVBAR_INDEX};
`;

export const NavLink = styled(Link)<{ order?: number; disabled?: boolean }>`
  text-transform: uppercase;
  order: ${({ order }) => order ?? "initial"};
  width: 120px;
  text-align: center;
  margin: 0 30px;
  ${({ disabled }) =>
    disabled &&
    `
    pointer-events: none;
    opacity: .6;
  `};
`;

export const WonderLogo = styled(Link)`
  display: flex;
  order: 3;
  width: 4.25rem;

  img {
    width: 100%;
  }
`;
