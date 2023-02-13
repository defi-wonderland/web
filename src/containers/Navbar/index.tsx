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
  const [navLink, setNavLink] = useState(navLinks);

  const handleClick = (i: number) => {
    setShowNavbar(!showNavbar);

    // reset values
    const newNavLink = navLink.map((link) => ({
      name: link.name,
      url: link.url,
      disabled: false,
    }));

    newNavLink[i].disabled = true;
    setNavLink(newNavLink);
  };

  return (
    <StyledNavbar id={showNavbar ? "show" : ""}>
      <LogoContainer>
        <WonderLogo to="/landing">
          <img src={wonderLogo} alt="Wonderland logo" />
        </WonderLogo>
        <MenuButton onClick={() => setShowNavbar(!showNavbar)}>
          <img src={menuIcon} alt="menu icon" id="menu-icon" />
        </MenuButton>
      </LogoContainer>

      {navLink.map((link, i) => (
        <NavLinkContainer order={i + 1} key={link.name + i}>
          <NavLink
            id={showNavbar ? "" : "hide"}
            to={link.url}
            key={link.name}
            disabled={link.disabled}
            className={link.disabled ? "gradient" : ""}
            onClick={() => {
              handleClick(i);
            }}
          >
            {link.name}
          </NavLink>
        </NavLinkContainer>
      ))}
    </StyledNavbar>
  );
};
