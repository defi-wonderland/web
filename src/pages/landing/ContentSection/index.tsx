import styled from 'styled-components';

import {
  Button,
  CONTENT_INDEX,
  FONT_DISPLAY,
  FONT_MEDIUM_L,
  MOBILE_MAX_WIDTH,
  PAGE_MAX_WIDTH,
  SectionBackground,
  TABLET_MAX_WIDTH,
} from '~/components';
import { SLink } from '~/components';
import ProjectsList from '~/pages/creations/ProjectsList';
import RightCard from './RightCard';
import Squad from './SquadSection';
import QuotesCarousel from './QuotesCarousel';

import { partners } from '~/data/projects.json';
import StarIcon from '~/public/img/footer/star-icon.svg';
import ConeIllustration from '~/assets/landing_cone.png';
import RingIllustration from '~/assets/landing_ring.png';
import MobileStar from '~/assets/ethos-stars.svg';
import Flower from '~/assets/flower.svg';

const highlights = ['opUSDC', 'EBO', 'Allo v2.1', 'Everclear', 'Prophet'];
const projectHighlights = partners.filter((partner) => highlights.includes(partner.name));

export default function LandingContent() {
  return (
    <LandingContainer>
      <BackgroundContainer>
        <BG_1 type='1' align='center' />
      </BackgroundContainer>
      <Star src={StarIcon.src} />
      <FirstTitle>
        <Star src={MobileStar.src} />
        It’s all about our partners…
      </FirstTitle>

      <FirstBlockContainer>
        <QuotesCarousel />
        <HorizontalLayout>
          <RightCard />
          <IllustrationsContainer>
            <Cone src={ConeIllustration.src} />
            <Ring src={RingIllustration.src} />
          </IllustrationsContainer>
        </HorizontalLayout>
      </FirstBlockContainer>

      <Divider>
        <DividerLine />
        <DividerText>What’s cooking?</DividerText>
        <DividerLine />
      </Divider>

      <SecondBlockContainer>
        <ProjectsList projects={projectHighlights} />

        <SLink to='/creations'>
          <SButton>creations</SButton>
        </SLink>

        <Squad />
      </SecondBlockContainer>

      <Icon src={Flower.src} />
      <SecondTitle>
        <div>
          <Icon src={Flower.src} />
        </div>
        <SLink to='/squad'>
          <CommunityButton>Meet the squad</CommunityButton>
        </SLink>
      </SecondTitle>
    </LandingContainer>
  );
}

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  z-index: -1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: ${TABLET_MAX_WIDTH}) {
    right: -5rem;
  }
`;

const BG_1 = styled(SectionBackground)`
  position: relative;
  width: 50%;
  margin: 0 auto;
  margin-top: 20rem;

  @media screen and (max-width: ${PAGE_MAX_WIDTH}) {
    margin-top: 40rem;
  }

  @media screen and (max-width: ${TABLET_MAX_WIDTH}) {
    width: 100%;
    margin-top: 10rem;
  }

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    position: absolute;
    width: 150%;
    margin-top: 110rem;
  }
`;

const Cone = styled.img.attrs({ loading: 'lazy', alt: '' })`
  width: 80%;
`;

const Ring = styled.img.attrs({ loading: 'lazy', alt: '' })`
  position: absolute;
  top: -55%;
  right: -105%;
  width: 90%;

  @media screen and (max-width: ${TABLET_MAX_WIDTH}) {
    right: -85%;
  }
`;

const LandingContainer = styled.section`
  width: 100%;
  padding: 5rem 7.5rem 10rem 2.5rem;
  position: relative;
  display: grid;
  grid-template-areas:
    'star title'
    'empty firstBlock'
    'empty landingDivider'
    'empty secondBlock'
    'icon secondTitle';
  grid-template-columns: 5rem auto;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    padding: 0;
    display: flex;
    flex-direction: column;
  }
`;

const Title = styled.strong`
  font-family: ${FONT_MEDIUM_L};
  font-size: 2.4rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 1.6rem 0 1.6rem 4.4rem;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    font-size: 2.2rem;
  }
`;

const FirstTitle = styled(Title)`
  grid-area: title;
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);

  & img {
    display: none;
  }

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    & {
      border-left: none;
      padding: 1rem 0;
    }

    & img {
      display: block;
      padding: 1rem;
      margin-right: 1rem;
      border-bottom: none;
    }
  }
`;

const Star = styled.img.attrs({ loading: 'lazy', alt: '' })`
  width: 5rem;
  padding: 0 1rem;
  grid-area: star;
  height: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  pointer-events: none;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    display: none;
  }
`;

const Icon = styled.img.attrs({ loading: 'lazy', alt: '' })`
  grid-area: icon;
  width: 5rem;
  padding: 0 1.1rem;
  height: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.5);

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    display: none;
  }
`;

const FirstBlockContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  grid-area: firstBlock;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8rem;
  padding: 4rem 8rem 8rem;

  @media screen and (max-width: ${TABLET_MAX_WIDTH}) {
    flex-direction: column;
    border-left: none;
    gap: 6rem;
    padding: 4rem 0 8rem;
  }

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    padding: 2.4rem 1.6rem;
  }
`;

const HorizontalLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;

  & > * {
    flex: 1;
  }

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    flex-direction: column-reverse;
    gap: 4rem;
    padding: 0 2rem;
  }
`;

const IllustrationsContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const SecondBlockContainer = styled.div`
  width: 100%;
  height: 100%;
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  grid-area: secondBlock;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    border-left: none;
  }
`;

const Divider = styled.div`
  grid-area: landingDivider;
  z-index: ${CONTENT_INDEX};

  background-image: linear-gradient(
    to right,
    rgba(14, 21, 44, 1),
    rgba(252, 204, 80, 0.2) 40%,
    rgba(197, 95, 163, 0.15),
    rgba(98, 92, 191, 0.15),
    rgba(14, 21, 44, 1) 95%
  );

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    background-image: linear-gradient(
      to right,
      rgba(14, 21, 44, 1),
      rgba(252, 204, 80, 0.25) 30%,
      rgba(197, 95, 163, 0.25),
      rgba(14, 21, 44, 1) 95%
    );
  }
`;

const DividerLine = styled.div`
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(255, 255, 255, 0.5) 50%,
    rgba(14, 21, 44, 0) 100%
  );
  height: 1px;
  width: 100%;
`;

const DividerText = styled.p`
  font-family: ${FONT_DISPLAY};
  font-weight: 300;
  font-style: italic;
  line-height: 1.2;
  letter-spacing: 0.1rem;
  font-size: 12rem;
  text-transform: uppercase;
  text-align: center;

  background: linear-gradient(to right, #625cbf, #c55fa3, #fccc50);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    text-align: start;
    font-size: 6.4rem;
    padding: 2.4rem 3rem;
  }
`;

const SButton = styled(Button)`
  margin: 4.5rem 8rem 5rem auto;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    margin: 6rem auto;
  }
`;

const SecondTitle = styled(Title)`
  grid-area: secondTitle;
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.5);

  & img {
    display: none;
  }

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 0;
    border-left: none;
    border: none;

    & div {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100%;
      justify-content: start;
    }

    & img {
      border-top: none;
      display: block;
      border-right: 1px solid rgba(255, 255, 255, 0.5);
      height: 6.4rem;
      width: 6.4rem;
      padding: 2.2rem;
      margin-right: 2rem;
    }

    & div img {
      display: none;
    }
  }
`;

const CommunityButton = styled(Button)`
  margin: 0 8rem 0 auto;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    margin: 3rem auto;
  }
`;
