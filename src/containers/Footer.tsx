import styled from 'styled-components';

import WonderLogoIcon from '~/assets/Logo.png';
import StarIcon from '~/public/img/footer/star-icon.svg';
import TwitterIcon from '~/public/img/footer/twitter-icon.svg';
import GithubIcon from '~/public/img/footer/github-icon.svg';
import {
  Button,
  CONTENT_INDEX,
  FONT_MEDIUM,
  FONT_MEDIUM_L,
  SLink,
  MOBILE_MAX_WIDTH,
  SectionBackground,
  ContentContainer,
} from '~/components';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <ContentContainer>
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
              <SLink
                to='https://docs.google.com/forms/d/1n70jsL4sFkOwPNBTdciPqlWF2RirgQwejjztpS4-2L8/viewform'
                external
              >
                <Button>Join us</Button>
              </SLink>
            </ButtonsContainer>
          </FooterActions>

          <FooterSocial>
            <span>
              <span>© {currentYear}. Wonder LTD. </span>
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
          </FooterSocial>
        </StyledFooter>
      </Container>
    </ContentContainer>
  );
};

export default Footer;

const footerColor = 'rgba(255, 255, 255, 0.2)';
const footerPaddingRem = 1.5;
const footerPadding = `${footerPaddingRem}rem`;

const Star = styled.img.attrs({ loading: 'lazy' })`
  width: 3.2rem;
  pointer-events: none;
  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    width: 2.4rem;
  }
`;

const WonderLogoText = styled.img.attrs({ loading: 'lazy' })`
  height: 5rem;
  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    height: 3rem;
  }
`;

const FooterHeader = styled.div`
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

const FooterActions = styled.div`
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

const FooterSocial = styled.div`
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

const SocialIcon = styled(SLink)`
  display: flex;
  align-items: center;
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: 4rem;
  z-index: 20;
  margin-top: 2rem;
`;

const StyledFooter = styled.footer`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-self: center;
  padding: 0 2rem ${footerPadding} 2rem;
  color: var(--text-light);
  background: rgba(255, 255, 255, 0.05);
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

const BackgroundImage = styled(SectionBackground)`
  position: absolute;
  width: 120%;
  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    width: 100%;
  }
`;

const BgContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: -120;
  position: relative;
  margin-top: 3rem;
  height: 80rem;
  overflow: hidden;
`;

const Container = styled.div`
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

const FooterTitle = styled.h1`
  text-transform: uppercase;
  font-family: SharpGrotesk-10;
  font-size: 8rem;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    font-size: 6.5rem;
    text-align: center;
    margin-bottom: 2rem;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
