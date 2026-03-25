import styled from 'styled-components';

import { Section, MOBILE_MAX_WIDTH, FONT_MEDIUM_L } from '~/components';

const HeroSection = ({ ...props }) => {
  return (
    <>
      <StyledHeroSection full backgroundImage='/img/hero/hero-bg.jpg' {...props}>
        <TitleContainer>
          <HeroLogo src='/img/wonder-logo-text.svg' alt='Wonderland' />
          <HeroSubtitle>
            Foundational engineering
            <MobileBr /> for frontier technologies
          </HeroSubtitle>
        </TitleContainer>

        <HeroDivider src='/img/hero/hero-bg-divider.png' />
      </StyledHeroSection>
    </>
  );
};

export default HeroSection;

const HeroDivider = styled.img`
  position: absolute;
  width: 100%;
  bottom: 0;
  z-index: 0;
`;

const StyledHeroSection = styled(Section)`
  margin-bottom: 2.8rem;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    top: 0rem;
    min-height: unset;
    height: 50rem;
    background-image: url('/img/hero/hero_mobile.png');
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10rem;

  position: absolute;
  width: 100%;
  top: 7rem;
  left: 0;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    margin-top: 4rem;
    top: 10rem;
  }
`;

const HeroLogo = styled.img`
  width: 70rem;
  max-width: 80%;
  height: auto;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    width: 30rem;
  }
`;

const MobileBr = styled.br`
  display: none;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    display: block;
  }
`;

const HeroSubtitle = styled.p`
  font-family: ${FONT_MEDIUM_L};
  font-size: 2.4rem;
  color: white;
  margin-top: 3rem;
  text-align: center;
  letter-spacing: 0.05em;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    font-size: 1.6rem;
    margin-top: 2rem;
    padding: 0 2rem;
  }
`;
