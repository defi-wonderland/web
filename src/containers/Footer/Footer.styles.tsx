import styled from 'styled-components';

import {
  CONTENT_INDEX,
  FONT_MEDIUM,
  FONT_MEDIUM_L,
  SLink,
  MOBILE_MAX_WIDTH,
  SectionBackground,
} from '~/components/common';
import MISC from '~/assets/footer_vector.svg';

export const footerColor = 'rgba(255, 255, 255, 0.2)';
export const footerPaddingRem = 1.5;
export const footerPadding = `${footerPaddingRem}rem`;

export const Star = styled.img.attrs({ loading: 'lazy' })`
  width: 3.2rem;
  pointer-events: none;
  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    width: 2.4rem;
  }
`;

export const WonderLogoText = styled.img.attrs({ loading: 'lazy' })`
  height: 5rem;
  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    height: 3rem;
  }
`;

export const FooterHeader = styled.div`
  padding: ${footerPaddingRem * 2}rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: ${footerPadding};
  border-bottom: 1px solid ${footerColor};
  user-select: none;
  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    padding-top: ${footerPaddingRem * 1.2}rem;
    padding: ${footerPaddingRem}rem;
  }
`;

export const Plus = styled.img.attrs({ loading: 'lazy' })`
  width: 1.5rem;
`;

export const FooterActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-gap: 2.5rem;
  font-family: ${FONT_MEDIUM_L};
  font-size: 2.2rem;
  font-weight: 500;
  flex: 1;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    & {
      font-size: 1.4rem;
      flex-direction: column;
      justify-content: center;
      grid-gap: 0.5rem;
      height: fit-content;
    }
  }
`;

export const FooterSocial = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 7rem;
  padding-top: 28px;

  > * {
    font-family: ${FONT_MEDIUM};
    font-size: 1.125rem;
    letter-spacing: 0.1rem;
    flex: 1;

    &:last-child {
      text-align: right;
    }
  }

  & span {
    font-size: 1.8rem;
  }
`;

export const SocialIcon = styled(SLink)`
  display: flex;
  align-items: center;
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: 4rem;
  z-index: 20;
  margin-top: 2rem;
`;

export const StyledFooter = styled.footer`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-self: center;
  padding: 0 2rem ${footerPadding} 2rem;
  color: var(--text-light);
  background: rgba(255, 255, 255, 0.05);
  /* border: 1px solid ${footerColor}; */
  border-radius: 1rem;
  backdrop-filter: blur(8px);
  width: 134rem;
  max-width: calc(100% - 3.2rem);
  height: 47rem;
  z-index: ${CONTENT_INDEX};

  @media screen and (max-width: 635px) {
    ${FooterSocial} {
      flex-direction: column;
      grid-gap: 1rem;
    }
  }
`;

export const BackgroundImage = styled(SectionBackground)`
  position: absolute;
  width: 120%;
  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    width: 100%;
  }
`;

export const BgContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: -120;
  position: relative;
  margin-top: 3rem;
  height: 80rem;
  overflow: hidden;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60rem;
  margin-top: 10rem;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    height: 50rem;
  }
`;

export const VectorContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  z-index: -1;
`;

export const VectorImg = styled.img.attrs({
  src: MISC.src,
  loading: 'lazy',
  alt: '',
})`
  position: relative;
  width: 220px;
  height: 270px;
`;

export const FooterTitle = styled.h1`
  text-transform: uppercase;
  font-family: SharpGrotesk-10;
  font-size: 8rem;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    font-size: 6.5rem;
    text-align: center;
    margin-bottom: 2rem;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
