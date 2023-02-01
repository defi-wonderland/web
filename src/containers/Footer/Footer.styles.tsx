import styled from "styled-components";

import {
  CONTENT_INDEX,
  FONT_MEDIUM,
  FONT_MEDIUM_L,
  Link,
  MOBILE_MAX_WIDTH,
  SectionBackground,
} from "~/components/common";
import MISC from "~/assets/footer_vector.svg";

// TODO Check this color with figma
export const footerColor = "rgba(255, 255, 255, 0.2)";
export const footerPadding = "1.5rem";

export const Star = styled.img`
  width: 1.66rem;
`;

export const WonderLogoText = styled.img`
  width: 16.3rem;
`;

export const FooterHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: ${footerPadding};
  border-bottom: 1px solid ${footerColor};
  user-select: none;
`;

export const Plus = styled.img`
  width: 1.5rem;
`;

export const FooterActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: 2.5rem;
  font-family: ${FONT_MEDIUM_L};
  font-size: 1.8rem;
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
  border-top: 1px solid ${footerColor};

  > * {
    font-family: ${FONT_MEDIUM};
    font-size: 1.125rem;
    letter-spacing: 0.1rem;
    flex: 1;

    &:last-child {
      text-align: right;
    }
  }
`;

export const SocialIcon = styled(Link)`
  display: flex;
  align-items: center;
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: 3rem;
  z-index: 20;
`;

export const StyledFooter = styled.footer`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-self: center;
  padding: ${footerPadding} 2rem;
  color: var(--text-light);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid ${footerColor};
  border-radius: 1rem;
  backdrop-filter: blur(24px);
  width: 105.1rem;
  max-width: 100%;

  height: 47rem;
  z-index: ${CONTENT_INDEX};

  @media screen and (max-width: 635px) {
    & {
      max-width: calc(100% - 3.2rem);
    }

    ${FooterSocial} {
      flex-direction: column;
      grid-gap: 1rem;
    }
  }
`;

export const BackgroundImage = styled(SectionBackground)`
  position: relative;
  width: 80%;
  margin: 0 auto;
`;

export const BgContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  z-index: -1;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  padding-bottom: 3rem;
  position: relative;
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
  src: MISC,
})`
  position: relative;
  width: 220px;
  height: 270px;
`;
