'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styled, { keyframes } from 'styled-components';

import {
  FONT_SIZE_20,
  SLink,
  MOBILE_MAX_WIDTH,
  NAVBAR_HEIGHT,
  NAVBAR_INDEX,
  TABLET_MAX_WIDTH,
  ContentContainer,
} from '~/components';

import wonderLogo from '~/public/img/wonder-logo.svg';
import menuIcon from '~/assets/menu_icon.svg';

interface NavLink {
  name: string;
  url: string;
  disabled?: boolean;
  external?: boolean;
}

const navLinks: NavLink[] = [
  {
    name: 'ethos',
    url: '/ethos',
    disabled: false,
  },
  {
    name: 'squad',
    url: '/squad',
    disabled: false,
  },
  {
    name: 'creations',
    url: '/creations',
    disabled: false,
  },
  {
    name: 'handbook',
    url: '/handbook',
    disabled: false,
    external: true,
  },
  {
    name: 'blog',
    url: 'https://handbook.wonderland.xyz/blog',
    disabled: false,
    external: true,
  },
];

interface NavbarProps {
  className?: string;
  pathname?: string;
}

const Navbar = ({ className, pathname }: NavbarProps) => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [navLink, setNavLink] = useState(navLinks);

  const resetValues = () => {
    // reset values
    const newNavLink = navLink.map((link) => ({
      name: link.name,
      url: link.url,
      external: link.external,
      disabled: false,
    }));

    return newNavLink;
  };

  useEffect(() => {
    if (pathname) {
      const newNavLink = resetValues();
      let index: number | undefined;

      newNavLink.forEach((link, i) => {
        if (link.url === pathname) {
          index = i;
        }
      });

      if (index !== undefined) newNavLink[index].disabled = true;
      setShowNavbar(false);
      setNavLink(newNavLink);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <ContentContainer>
      <StyledNavbar id={showNavbar ? 'show' : ''} className={className}>
        {/* Left side links */}
        <LinksGroupLeft>
          {navLink.slice(0, 3).map((link, i) => (
            <NavLinkContainer key={link.name + i} className={showNavbar ? '' : 'hide-on-mobile'}>
              <NavLink
                to={link.url}
                key={link.name}
                disabled={link.disabled}
                external={link.external}
                className={link.disabled ? 'gradient' : ''}
              >
                <div>{link.name}</div>
              </NavLink>
            </NavLinkContainer>
          ))}
        </LinksGroupLeft>

        {/* Center logo */}
        <LogoContainer
          onClick={() => {
            setNavLink(resetValues());
          }}
        >
          <WonderLogo to='/landing'>
            <Image src={wonderLogo.src} alt='Wonderland logo' width='64' height='64' />
          </WonderLogo>
          <MenuButton onClick={() => setShowNavbar(!showNavbar)}>
            <Image src={menuIcon.src} alt='menu icon' id='menu-icon' width='32' height='32' />
          </MenuButton>
        </LogoContainer>

        {/* Right side links + CTA */}
        <LinksGroupRight>
          {navLink.slice(3).map((link, i) => (
            <NavLinkContainer key={link.name + i} className={showNavbar ? '' : 'hide-on-mobile'}>
              <NavLink
                to={link.url}
                key={link.name}
                disabled={link.disabled}
                external={link.external}
                className={link.disabled ? 'gradient' : ''}
              >
                <div>{link.name}</div>
              </NavLink>
            </NavLinkContainer>
          ))}

          <NavLinkContainer key='join-us' className={showNavbar ? '' : 'hide-on-mobile'}>
            <JoinUsLink to='https://apply.wonderland.xyz/' external>
              JOIN US
            </JoinUsLink>
          </NavLinkContainer>
        </LinksGroupRight>
      </StyledNavbar>
    </ContentContainer>
  );
};

export default Navbar;

const LogoContainer = styled.div`
  order: 0;

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

const MenuButton = styled.button`
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

const StyledNavbar = styled.nav`
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
  background-image: linear-gradient(to bottom, var(--background-surface-primary) 25%, rgba(14, 21, 44, 0) 100%);
  grid-gap: 4rem;
  padding: 2rem 1rem;
  user-select: none;
  z-index: ${NAVBAR_INDEX};

  @media screen and (max-width: ${TABLET_MAX_WIDTH}) {
    grid-gap: 1rem;
  }

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: start;
    height: fit-content;
    grid-gap: 0;
  }
`;

const NavLinkContainer = styled.div<{ order?: number }>`
  width: 120px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    &.hide-on-mobile {
      display: none;
    }
  }
`;

const NavLink = styled(SLink)<{ disabled?: boolean }>`
  text-transform: uppercase;

  &:hover {
    background: linear-gradient(to right, #625cbf, #c55fa3, #fccc50);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
  }

  margin: 0 auto;
  ${({ disabled }) =>
    disabled &&
    `
    pointer-events: none;
  `};

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    font-size: ${FONT_SIZE_20};
    padding: 1rem 0;
  }
`;

const WonderLogo = styled(SLink)`
  display: flex;
  width: 6.4rem;

  img {
    width: 100%;
  }

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    width: 5rem;
  }
`;

const LinksGroupLeft = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  gap: 4rem;

  @media screen and (max-width: ${TABLET_MAX_WIDTH}) {
    gap: 1.6rem;
  }
`;

const LinksGroupRight = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  gap: 4rem;

  @media screen and (max-width: ${TABLET_MAX_WIDTH}) {
    gap: 1.6rem;
  }
`;

const twinkle = keyframes`
  0%   { opacity: 0.3; transform: translateY(0px) }
  50%  { opacity: 0.9; transform: translateY(-1px) }
  100% { opacity: 0.3; transform: translateY(0px) }
`;

const JoinUsLink = styled(SLink)`
  text-transform: uppercase;
  letter-spacing: 0.24rem;
  background: linear-gradient(90deg, #625cbf, #c55fa3, #fccc50);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 10px rgba(98, 92, 191, 0.25), 0 0 6px rgba(197, 95, 163, 0.15);
  transition: transform 160ms ease, text-shadow 160ms ease;

  &:hover {
    transform: translateY(-1px);
    text-shadow: 0 0 14px rgba(98, 92, 191, 0.45), 0 0 10px rgba(197, 95, 163, 0.35), 0 0 6px rgba(252, 204, 80, 0.35);
  }

  /* subtle sparkles on hover only */
  position: relative;
  &::after {
    content: '';
    position: absolute;
    inset: -6px -8px;
    pointer-events: none;
    opacity: 0;
    background:
      radial-gradient(2px 2px at 20% 30%, rgba(255,255,255,0.8), rgba(255,255,255,0) 60%),
      radial-gradient(1.5px 1.5px at 65% 55%, rgba(255,255,255,0.7), rgba(255,255,255,0) 60%),
      radial-gradient(1.2px 1.2px at 40% 70%, rgba(255,255,255,0.7), rgba(255,255,255,0) 60%);
    animation: ${twinkle} 1.8s ease-in-out infinite;
    transition: opacity 160ms ease;
  }
  &:hover::after { opacity: 1; }
`;
