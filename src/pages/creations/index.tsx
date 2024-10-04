import { useMemo, useState } from 'react';
import styled from 'styled-components';
import {
  Ball,
  CONTENT_INDEX,
  ContentContainer,
  FONT_DISPLAY,
  MOBILE_MAX_WIDTH,
  SectionBackground,
  SPACING_128,
  SquigglyTitle,
  TABLET_MAX_WIDTH,
} from '~/components';
import CustomHead from '~/components/CustomHead';
import { PageContent } from '~/containers/PageContent';
import { partners, projects, publicGoods } from '~/data/projects.json';
import ProjectsList from './ProjectsList';
import LogosCarousel from './LogosCarousel';

const allProjects = [...partners, ...projects];
const allCompanies = [...partners, ...projects].map((project) => project.company.name);
const companies = [...new Set(allCompanies)]; // unique values

export default function Creations() {
  const [companySelected, setCompanySelected] = useState<string>('Optimism');

  const changeCompany = (index: number) => {
    setCompanySelected(companies[index]);
  };

  const filteredProjects = useMemo(
    () => allProjects.filter((project) => project.company.name === companySelected),
    [companySelected],
  );

  const scrollToAnchor = () => {
    const projectsContainer = document.getElementById('scroll-anchor');
    projectsContainer?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <CustomHead title='Creations' />

      <ContentContainer>
        <PageContent>
          <Container>
            <BackgroundContainer>
              <BG_1 type='2' align='center' />
              <BG_2 type='1' align='left' />
              <BG_3 type='2' align='right' />
            </BackgroundContainer>
            <HeroDivider>
              <CreationsTitleContainer>
                <SquigglyTitle
                  text='MADE IN WONDERLAND'
                  sizes={{
                    lg: '17rem',
                    md: '16rem',
                    sm: '6rem',
                    lgvw: '11.5vw',
                    mdvw: '17vw',
                    smvw: '20vw',
                  }}
                />
              </CreationsTitleContainer>
              <Ball_1 />
              <Ball_2 />
              <Ball_3 />
            </HeroDivider>

            <ScrollAnchor id='scroll-anchor' />

            <LogosCarouselContainer onClick={scrollToAnchor}>
              <LogosCarousel companies={companies} onChange={changeCompany} />
            </LogosCarouselContainer>
            <ProjectsContainer>
              <Divider />
              <ProjectsList projects={filteredProjects} />
            </ProjectsContainer>

            <TitleContainer>
              <ProjectTitle>
                THE POWER OF
                <br />
                <strong>PUBLIC GOODS</strong>
              </ProjectTitle>
            </TitleContainer>
            <ProjectsContainer>
              <Divider />
              <ProjectsList projects={publicGoods} />
            </ProjectsContainer>
          </Container>
        </PageContent>
      </ContentContainer>
    </>
  );
}

const Divider = styled.div`
  background: linear-gradient(to right, rgba(14, 21, 44, 0) 0%, rgba(255, 255, 255, 0.5) 50%, rgba(14, 21, 44, 0) 100%);
  height: 2px;
  width: 100%;
`;

const Container = styled.div`
  width: 90%;
  max-width: 134rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HeroDivider = styled.div`
  position: relative;
  width: 100%;
  height: 30rem;
  bottom: 0;
  z-index: ${CONTENT_INDEX};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 21rem;
  margin-bottom: 15rem;

  @media screen and (max-width: ${TABLET_MAX_WIDTH}) {
    margin-top: 12rem;
  }

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    margin-top: 16rem;
  }
`;

const CreationsTitleContainer = styled.div`
  margin-top: -6rem;
`;

const Ball_1 = styled(Ball)`
  position: absolute;
  height: 10rem;
  width: 10rem;
  top: 24rem;
  left: 30%;
  transform: none;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    width: 6rem;
    top: 28rem;
    left: 10%;
  }
`;

const Ball_2 = styled(Ball)`
  position: absolute;
  height: 7rem;
  width: 7rem;
  top: 16rem;
  left: 90%;
  transform: none;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    transform: rotate(180deg);
    width: 8rem;
    top: 13rem;
  }
`;

const Ball_3 = styled(Ball)`
  position: absolute;
  height: 5rem;
  width: 5rem;
  top: -10rem;
  left: 25%;
  transform: none;
  opacity: 0.87;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    width: 4rem;
    top: -6rem;
    left: 15%;
    opacity: 0.7;
  }
`;

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
`;

const BG_1 = styled(SectionBackground)`
  position: relative;
  width: 50%;
  margin: 0 auto;

  @media screen and (max-width: ${TABLET_MAX_WIDTH}) {
    width: 100%;
  }
`;

const BG_2 = styled(SectionBackground)`
  position: relative;
  width: 38%;
`;

const BG_3 = styled(SectionBackground)`
  position: relative;
  margin-left: auto;
  width: 38%;
  right: 0%;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: ${TABLET_MAX_WIDTH}) {
    margin: 0 auto;
    margin-top: -3rem;
  }
`;

const ProjectTitle = styled.h2`
  font-family: ${FONT_DISPLAY};
  font-weight: 300;
  font-style: italic;
  line-height: 1.25;
  letter-spacing: 0.1rem;
  font-size: 9rem;
  letter-spacing: 0.4rem;
  line-height: 1;
  text-align: center;
  background: linear-gradient(to right, #625cbf, #c55fa3, #fccc50);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  strong {
    font-size: 12rem;
    display: block;
    width: max-content;
    margin: 0 auto;

    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 0.5rem;
      background: linear-gradient(to right, #625cbf, #c55fa3, #fccc50);
      margin-top: -1rem;
    }
  }

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    font-size: 6rem;

    strong {
      font-size: 8rem;
    }
  }
`;

const ProjectsContainer = styled.div`
  margin: 5rem 0 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 0 ${SPACING_128};

  @media screen and (max-width: ${TABLET_MAX_WIDTH}) {
    padding: 0;
  }
`;

const LogosCarouselContainer = styled.div`
  max-width: 90rem;
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: ${TABLET_MAX_WIDTH}) {
    max-width: 60rem;
  }

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    max-width: 32rem;
  }
`;

const ScrollAnchor = styled.div`
  position: relative;
  top: -12rem;
  left: 0;
  width: 0;
  height: 0;
  visibility: hidden;
  overflow: hidden;
`;
