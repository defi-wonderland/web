import styled from "styled-components";

import { CONTENT_INDEX, Link, SectionBackground } from "~/components/common";
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
  font-family: var(--font-medium-l);
  font-size: 1.125rem;
  font-weight: 500;
  flex: 1;
`;

export const FooterSocial = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 7rem;
  padding-top: 28px;
  border-top: 1px solid ${footerColor};

  > * {
    font-family: var(--font-medium);
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
  max-width: calc(100% - var(--page-padding));
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
  position: relative;
  width: 80%;
  margin: 0 auto;
`;

export const BgContainer = styled.div`
  width: 100%;
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
`;

export const VectorContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  z-index: -1;
`;

export const VectorImg = styled.img.attrs({
  src: MISC,
})`
  position: relative;
  width: 220px;
  height: 270px;
  margin: 0 auto;
`;
