import styled from "styled-components";

import { Link } from "~/components/common";
import wonderLogo from "/img/wonder-logo.svg";

const StyledNavbar = styled.nav`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  top: 0;
  left: 0;
  width: 100vw;
  height: var(--navbar-height);
  color: var(--text-light);
  background-image: linear-gradient(
    to bottom,
    var(--background-surface-primary) 25%,
    rgba(14, 21, 44, 0) 100%
  );
  /* grid-gap: 6rem; */
  padding: 2rem 1rem;
  user-select: none;
  z-index: var(--navbar-index);
`;

const NavLink = styled(Link)<{ order?: number; disabled?: boolean }>`
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

const WonderLogo = styled(Link)`
  display: flex;
  order: 3;
  width: 4.25rem;

  img {
    width: 100%;
  }
`;

interface NavLink {
  name: string;
  url: string;
  disabled?: boolean;
}

const navLinks: NavLink[] = [
  {
    name: "lore",
    url: "/lore",
    disabled: false,
  },
  {
    name: "team",
    url: "/team",
    disabled: false,
  },
  {
    name: "portfolio",
    url: "/portfolio",
    disabled: false,
  },
  {
    name: "join us",
    url: "/joinus",
    disabled: false,
  },
];

interface NavbarProps {}

export const Navbar = ({}: NavbarProps) => (
  <StyledNavbar>
    <WonderLogo to="/">
      <img src={wonderLogo} alt="Wonderland logo" />
    </WonderLogo>

    {navLinks.map((link, i) => (
      <NavLink
        to={link.url}
        order={i + 1}
        key={link.name}
        disabled={link.disabled}
      >
        {link.name}
      </NavLink>
    ))}
  </StyledNavbar>
);
