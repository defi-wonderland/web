import {
  LogoContainer,
  MenuButton,
  NavLink,
  NavLinkContainer,
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
  active?: boolean;
}

const navLinks: NavLink[] = [
  {
    name: "lore",
    url: "/lore",
    disabled: false,
    active: false,
  },
  {
    name: "team",
    url: "/team",
    disabled: false,
    active: false,
  },
  {
    name: "portfolio",
    url: "/portfolio",
    disabled: false,
    active: false,
  },
  {
    name: "blog",
    url: "/blog",
    disabled: false,
    active: false,
  },
];

interface NavbarProps {}

export const Navbar = ({}: NavbarProps) => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [navLink, setNavLink] = useState(navLinks);

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

      {navLink.map((link, i) => (
        <NavLinkContainer order={i + 1}>
          <NavLink
            id={showNavbar ? "" : "hide"}
            to={link.url}
            key={link.name}
            disabled={link.disabled}
            className={link.active ? "gradient" : ""}
            onClick={() => {
              setShowNavbar(!showNavbar);

              // reset values
              const newNavLink = navLink.map((link) => ({
                name: link.name,
                url: link.url,
                disabled: false,
                active: false,
              }));

              newNavLink[i].active = true;
              newNavLink[i].disabled = true;
              setNavLink(newNavLink);
            }}
          >
            {link.name}
          </NavLink>
        </NavLinkContainer>
      ))}
    </StyledNavbar>
  );
};
