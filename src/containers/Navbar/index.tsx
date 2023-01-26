import { NavLink, StyledNavbar, WonderLogo } from "./Navbar.styles";
import wonderLogo from "/img/wonder-logo.svg";

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
    url: "/contact",
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
