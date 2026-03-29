import Head from 'next/head';
import styled from 'styled-components';

import { Section, MOBILE_MAX_WIDTH, SquigglyTitle } from '~/components';

const HeroSection = ({ ...props }) => {
  return (
    <>
      <Head>
        <link rel='preload' as='image' href='/img/hero/hero-bg.jpg' />
      </Head>
      <StyledHeroSection full backgroundImage='/img/hero/hero-bg.jpg' {...props}>
        <TitleContainer>
          <SquigglyTitle
            text={`Foundational engineering\nfor frontier tech`}
            sizes={{
              lg: '14rem',
              md: '11.1rem',
              sm: '4rem',
              lgvw: '10vw',
              mdvw: '11vw',
              smvw: '13vw',
            }}
          />
        </TitleContainer>

        <HeroDivider src='/img/hero/hero-bg-divider.png' fetchPriority='high' />
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
  justify-content: center;
  margin-top: 8rem;

  position: absolute;
  width: 100%;
  top: 7rem;
  left: 0;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    margin-top: 4rem;
    top: 10rem;
  }
`;
