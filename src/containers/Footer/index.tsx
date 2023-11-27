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
import StarIcon from '~/public/img/footer/star-icon.svg';
import TwitterIcon from '~/public/img/footer/twitter-icon.svg';
import GithubIcon from '~/public/img/footer/github-icon.svg';
import { Button, SLink } from '~/components/common';

const Footer = () => (
  <Container>
    {/* Background */}
    <BgContainer>
      <BackgroundImage type='2' align='center' />
    </BgContainer>

    {/* Card */}
    <StyledFooter>
      <FooterHeader>
        <Star src={StarIcon.src} alt='' />
        <WonderLogoText src={WonderLogoIcon.src} alt='Wonderland logo text' />
        <Star src={StarIcon.src} alt='' />
      </FooterHeader>

      <FooterActions>
        <FooterTitle>We&apos;re all mad here</FooterTitle>
        <ButtonsContainer>
          <SLink to='https://docs.google.com/forms/d/1n70jsL4sFkOwPNBTdciPqlWF2RirgQwejjztpS4-2L8/viewform' external>
            <Button>Join us</Button>
          </SLink>
        </ButtonsContainer>
      </FooterActions>

      <FooterSocial>
        <span>
          <span>© 2023. Wonder LTD. </span>
          <span>All Rights Reserved</span>
        </span>

        <SocialIcons>
          <SocialIcon to='https://twitter.com/defi_wonderland' external>
            <img src={TwitterIcon.src} alt='Twitter icon' loading='lazy' />
          </SocialIcon>
          <SocialIcon to='https://github.com/defi-wonderland' external>
            <img src={GithubIcon.src} alt='Github icon' loading='lazy' />
          </SocialIcon>
        </SocialIcons>

        <span></span>
        {/* <span>Privacy Policy</span> */}
      </FooterSocial>
    </StyledFooter>
  </Container>
);

export default Footer;
