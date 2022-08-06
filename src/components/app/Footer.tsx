import styled from "styled-components";

import { Link } from "@/components/common";

import WonderLogoIcon from "/img/wonder-logo-text.svg";
import StarIcon from "/img/footer/star-icon.svg";
import PlusIcon from "/img/footer/plus-icon.svg";
import TwitterIcon from "/img/footer/twitter-icon.svg";
import GithubIcon from "/img/footer/github-icon.svg";
import DoorIcon from "/img/footer/door-icon.svg";

// TODO Check this color with figma
const footerColor = "rgba(255, 255, 255, 0.1)";
const footerPadding = "1.5rem";

const Star = styled.img`
  width: 1.66rem;
`;

const WonderLogoText = styled.img`
  width: 16.3rem;
`;

const FooterHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: ${footerPadding};
  border-bottom: 1px solid ${footerColor};
  user-select: none;
`;

const Plus = styled.img`
  width: 1.5rem;
`;

const FooterActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: 2.5rem;
  font-family: var(--font-medium-l);
  font-size: 1.125rem;
  font-weight: 500;
  flex: 1;
`;

const FooterSocial = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 7rem;

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

const SocialIcon = styled(Link)`
  display: flex;
  align-items: center;
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: 3rem;
`;

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-self: center;
  padding: ${footerPadding};
  color: var(--text-light);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid ${footerColor};
  border-radius: 1rem;
  backdrop-filter: blur(24px);
  width: 90rem;
  max-width: calc(100% - var(--page-padding));
  height: 40rem;
  margin-top: 13rem;
  z-index: 1;

  @media screen and (max-width: 635px) {
    ${FooterSocial} {
      flex-direction: column;
      grid-gap: 1rem;
    }
  }
`;

interface FooterProps {}

export const Footer = ({}: FooterProps) => (
  <StyledFooter>
    <FooterHeader>
      <Star src={StarIcon} alt="Star icon" />
      <WonderLogoText src={WonderLogoIcon} alt="Wonderland logo text" />
      <Star src={StarIcon} alt="Star icon" />
    </FooterHeader>

    <FooterActions>
      {/* <Link to="https://googleform" external>About us</Link> */}
      <Plus src={PlusIcon} alt="Plus icon" />
      <Link to="https://googleform" external>
        Join us
      </Link>
      <Plus src={PlusIcon} alt="Plus icon" />
      {/* <Link to="https://googleform" external>Portfolio</Link> */}
    </FooterActions>

    <FooterSocial>
      <span>
        <span>© 2022. DeFi Wonderland. </span>
        <span>All Right Reserved</span>
      </span>

      <SocialIcons>
        <SocialIcon to="https://twitter.com/defi_wonderland" external>
          <img src={TwitterIcon} alt="Twitter icon" />
        </SocialIcon>
        <SocialIcon to="https://github.com/defi-wonderland" external>
          <img src={GithubIcon} alt="Github icon" />
        </SocialIcon>
        {/* <SocialIcon to="https://medium.com/the-defi-wonderland" external>
          <img src={DoorIcon} alt="Door icon" />
        </SocialIcon> */}
      </SocialIcons>

      <span></span>
      {/* <span>Privacy Policy</span> */}
    </FooterSocial>
  </StyledFooter>
);
