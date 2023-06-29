import {
  BackgroundImage,
  BgContainer,
  Container,
  FooterActions,
  FooterHeader,
  SocialIcon,
  SocialIcons,
  Star,
  StyledFooter,
  WonderLogoText,
  FooterSocial,
  FooterTitle,
  ButtonsContainer,
} from './Footer.styles';
import WonderLogoIcon from '~/assets/Logo.png';
import StarIcon from '/img/footer/star-icon.svg';
import TwitterIcon from '/img/footer/twitter-icon.svg';
import GithubIcon from '/img/footer/github-icon.svg';
import { Button, Link } from '~/components/common';

export const Footer = () => (
  <Container>
    {/* Background */}
    <BgContainer>
      <BackgroundImage type='2' align='center' />
    </BgContainer>

    {/* Card */}
    <StyledFooter>
      <FooterHeader>
        <Star src={StarIcon} alt='' />
        <WonderLogoText src={WonderLogoIcon} alt='Wonderland logo text' />
        <Star src={StarIcon} alt='' />
      </FooterHeader>

      <FooterActions>
        <FooterTitle>We&apos;re all mad here</FooterTitle>
        <ButtonsContainer>
          <Link to='https://docs.google.com/forms/d/1n70jsL4sFkOwPNBTdciPqlWF2RirgQwejjztpS4-2L8/viewform' external>
            <Button>Join us</Button>
          </Link>
        </ButtonsContainer>
      </FooterActions>

      <FooterSocial>
        <span>
          <span>© 2023. Wonder LTD. </span>
          <span>All Right Reserved</span>
        </span>

        <SocialIcons>
          <SocialIcon to='https://twitter.com/defi_wonderland' external>
            <img src={TwitterIcon} alt='Twitter icon' loading='lazy' />
          </SocialIcon>
          <SocialIcon to='https://github.com/defi-wonderland' external>
            <img src={GithubIcon} alt='Github icon' loading='lazy' />
          </SocialIcon>
        </SocialIcons>

        <span></span>
        {/* <span>Privacy Policy</span> */}
      </FooterSocial>
    </StyledFooter>
  </Container>
);
