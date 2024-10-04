'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

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
    name: 'insights',
    url: '/insights',
    disabled: false,
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

        {showNavbar &&
          navLink.map((link, i) => (
            <NavLinkContainer order={i + 1} key={link.name + i}>
              <NavLink
                to={link.url}
                key={link.name}
                disabled={link.disabled && pathname?.includes('/insights/')}
                className={link.disabled ? 'gradient' : ''}
              >
                <div>{link.name}</div>
              </NavLink>
            </NavLinkContainer>
          ))}
      </StyledNavbar>
    </ContentContainer>
  );
};

export default Navbar;

const LogoContainer = styled.div`
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
  order: ${({ order }) => order ?? 'initial'};
  display: flex;
  justify-content: center;
`;

const NavLink = styled(SLink) <{ disabled?: boolean }>`
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
