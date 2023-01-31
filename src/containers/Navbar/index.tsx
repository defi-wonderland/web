import {
  LogoContainer,
  MenuButton,
  NavLink,
  StyledNavbar,
  WonderLogo,
} from "./Navbar.styles";
import wonderLogo from "/img/wonder-logo.svg";
import menuIcon from "~/assets/menu_icon.svg";
import { useState } from "react";

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
    name: "blog",
    url: "/blog",
    disabled: false,
  },
];

interface NavbarProps {}

export const Navbar = ({}: NavbarProps) => {
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <StyledNavbar>
      <LogoContainer>
        <WonderLogo to="/">
          <img src={wonderLogo} alt="Wonderland logo" />
        </WonderLogo>
        <MenuButton onClick={() => setShowNavbar(!showNavbar)}>
          <img src={menuIcon} alt="menu icon" id="menu-icon" />
        </MenuButton>
      </LogoContainer>

      {navLinks.map((link, i) => (
        <NavLink
          id={showNavbar ? "" : "hide"}
          to={link.url}
          order={i + 1}
          key={link.name}
          disabled={link.disabled}
          onClick={() => setShowNavbar(!showNavbar)}
        >
          {link.name}
        </NavLink>
      ))}
    </StyledNavbar>
  );
};
