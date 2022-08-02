import styled from "styled-components";
import { Link } from "@/components/common/Link";

import wonderLogo from "@/assets/img/wonder-logo.svg";

const StyledNavbar = styled.nav`
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  color: var(--color-light);
  grid-gap: 1rem;
  padding: 2rem 1rem;
  user-select: none;
  z-index: var(--navbar-index);
`;

const NavLink = styled(Link)<{ order?: number }>`
  order: ${({ order }) => order ?? "initial"};
`;

const WonderLogo = styled.img`
  order: 3;
`;

const navLinks = [
  {
    name: "lore",
    url: "",
  },
  {
    name: "team",
    url: "",
  },
  {
    name: "portfolio",
    url: "",
  },
  {
    name: "join us",
    url: "",
  },
];

interface NavbarProps {}

export const Navbar = ({}: NavbarProps) => (
  <StyledNavbar>
    <WonderLogo src={wonderLogo} alt="Wonderland logo" />

    {navLinks.map((link, i) => (
      <NavLink href={link.url} order={i + 1} key={link.name}>
        {link.name}
      </NavLink>
    ))}
  </StyledNavbar>
);
