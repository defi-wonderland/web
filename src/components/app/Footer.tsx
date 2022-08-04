import styled from "styled-components";

// TODO Check this color with figma
const footerColor = "rgba(255, 255, 255, 0.1)";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background: ${footerColor};
  border: 1px solid ${footerColor};
  border-radius: 1rem;
  z-index: 1;

  h2 {
    text-align: center;
    padding-bottom: 2rem;
    border-bottom: 1px solid ${footerColor};
  }
`;

const FooterActions = styled.div`
  display: flex;
  justify-content: center;
  grid-gap: 7rem;
  padding: 15vw;
`;

const FooterSocial = styled.div`
  display: flex;
  grid-gap: 7rem;

  > * {
    flex: 1;

    &:last-child {
      text-align: right;
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: 3rem;
`;

interface FooterProps {}

export const Footer = ({}: FooterProps) => (
  <StyledFooter>
    <h2>WONDERLAND</h2>

    <FooterActions>
      <span>About us</span>
      <span>Join us</span>
      <span>Portfolio</span>
    </FooterActions>

    <FooterSocial>
      <span>2022. DeFi Wonderland. All rights reserved</span>

      <SocialIcons>
        <i>twitter</i>
        <i>github</i>
        <i>?</i>
      </SocialIcons>

      <span>Privacy Policy</span>
    </FooterSocial>
  </StyledFooter>
);
