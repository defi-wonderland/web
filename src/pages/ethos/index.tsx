import styled from 'styled-components';

import {
  Ball,
  ContentContainer,
  MOBILE_MAX_WIDTH,
  TABLET_MAX_WIDTH,
  SPACING_192,
  SPACING_512,
  SPACING_700,
  SquigglyTitle,
} from '~/components';
import { PageContent } from '~/containers/PageContent';
import CustomHead from '~/components/CustomHead';
import ApproachSection from './ApproachSection';
import TextSection from './TextSection';

import Cone from '~/assets/cone.png';
import HoopTop from '~/assets/hoop-top.png';
import HoopBottom from '~/assets/hoop-bottom.png';

export default function Ethos() {
  return (
    <>
      <CustomHead title='Ethos' />

      <ContentContainer>
        <PageContent>
          <HeroDivider>
            <SquigglyTitle
              text='WE’RE ALL MAD HERE'
              sizes={{
                lg: '23rem',
                md: '21rem',
                sm: '4.5rem',
                lgvw: '16vw',
                mdvw: '20vw',
              }}
            />
          </HeroDivider>

          <BackgroundContainer>
            <SCone src={HoopTop.src} alt='starts background' />
            <SCone src={Cone.src} alt='starts background' />
            <SBall />
            <SHoop src={HoopBottom.src} alt='starts background' />
          </BackgroundContainer>

          <TextSection />

          <StyledApproachSection />
        </PageContent>
      </ContentContainer>
    </>
  );
}

const StyledApproachSection = styled(ApproachSection)`
  padding: 3rem 0;
`;

const HeroDivider = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: ${SPACING_192};

  @media screen and (max-width: ${TABLET_MAX_WIDTH}) {
    top: 18rem;
  }

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    top: 22rem;
  }
`;

const SBall = styled(Ball)`
  top: 21rem;

  @media screen and (max-width: ${TABLET_MAX_WIDTH}) {
    top: 18rem;
    width: 8rem;
  }

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    top: 14rem;
    width: 6rem;
  }
`;

const BackgroundContainer = styled.div`
  position: relative;
  width: ${SPACING_512};
  height: ${SPACING_700};
  right: 12rem;
  top: 20rem;

  @media screen and (max-width: ${TABLET_MAX_WIDTH}) {
    width: 40rem;
    height: 55rem;
    right: 10rem;
    top: 16rem;
  }

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    width: 25.6rem;
    height: 35rem;
    right: 11rem;
    top: 12rem;
  }
`;

const SCone = styled.img`
  position: absolute;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    width: 30rem;
  }
`;

const SHoop = styled(SCone)`
  z-index: 10;
`;
