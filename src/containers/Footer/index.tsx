import {
  BackgroundImage,
  BgContainer,
  Container,
  FooterActions,
  FooterHeader,
  Plus,
  SocialIcon,
  SocialIcons,
  Star,
  StyledFooter,
  VectorContainer,
  VectorImg,
  WonderLogoText,
  FooterSocial,
} from './Footer.styles';
import WonderLogoIcon from '/img/wonder-logo-text.svg';
import StarIcon from '/img/footer/star-icon.svg';
import PlusIcon from '/img/footer/plus-icon.svg';
import TwitterIcon from '/img/footer/twitter-icon.svg';
import GithubIcon from '/img/footer/github-icon.svg';
import { Link } from '~/components/common';

export const Footer = () => (
  <Container>
    {/* Background */}
    <BgContainer>
      <BackgroundImage type='2' align='center' />
    </BgContainer>

    {/* Card */}
    <StyledFooter>
      <FooterHeader>
        <Star src={StarIcon} alt='Star icon' />
        <WonderLogoText src={WonderLogoIcon} alt='Wonderland logo text' />
        <Star src={StarIcon} alt='Star icon' />
      </FooterHeader>

      <FooterActions>
        {/* Zigzag vector */}
        <VectorContainer>
          <VectorImg />
        </VectorContainer>

        <Link
          to='/team'
          onClick={() => {
            if (location.pathname === '/team') window.scrollTo(0, 0);
          }}
        >
          About us
        </Link>
        <Plus src={PlusIcon} alt='Plus icon' />
        <Link to='https://docs.google.com/forms/d/1n70jsL4sFkOwPNBTdciPqlWF2RirgQwejjztpS4-2L8/viewform' external>
          Join us
        </Link>
        <Plus src={PlusIcon} alt='Plus icon' />
        <Link
          to='/portfolio'
          onClick={() => {
            if (location.pathname === '/portfolio') window.scrollTo(0, 0);
          }}
        >
          Portfolio
        </Link>
      </FooterActions>

      <FooterSocial>
        <span>
          <span>© 2023. Wonder LTD. </span>
          <span>All Right Reserved</span>
        </span>

        <SocialIcons>
          <SocialIcon to='https://twitter.com/defi_wonderland' external>
            <img src={TwitterIcon} alt='Twitter icon' />
          </SocialIcon>
          <SocialIcon to='https://github.com/defi-wonderland' external>
            <img src={GithubIcon} alt='Github icon' />
          </SocialIcon>
          {/* <SocialIcon to="https://medium.com/the-defi-wonderland" external>
            <img src={DoorIcon} alt="Door icon" />
          </SocialIcon> */}
        </SocialIcons>

        <span></span>
        {/* <span>Privacy Policy</span> */}
      </FooterSocial>
    </StyledFooter>
  </Container>
);
