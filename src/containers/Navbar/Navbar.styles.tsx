import styled from "styled-components";

import {
  FONT_SIZE_20,
  Link,
  MOBILE_MAX_WIDTH,
  NAVBAR_HEIGHT,
  NAVBAR_INDEX,
} from "~/components/common";

export const LogoContainer = styled.div`
  order: 3;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    & {
      width: 100%;
      padding: 0 1rem;
      display: flex;
      justify-content: space-between;
      order: 1;
    }
  }
`;

export const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: none;
  padding: 0;

  &:hover {
    opacity: 87%;
  }

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    & {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const StyledNavbar = styled.nav`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  top: 0;
  left: 0;
  width: 100%;
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

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    & {
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: start;
      grid-gap: 2rem;
      height: fit-content;
    }
  }
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

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    & {
      font-size: ${FONT_SIZE_20};
    }
  }
`;

export const WonderLogo = styled(Link)`
  display: flex;
  width: 6.4rem;

  img {
    width: 100%;
  }

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    width: 5rem;
  }
`;
