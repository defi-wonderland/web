'use client';

import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import styled from 'styled-components';

import {
  FONT_MEDIUM,
  FONT_MEDIUM_L,
  FONT_SIZE_24,
  SLink,
  MOBILE_MAX_WIDTH,
  FONT_SIZE_20,
  FONT_SIZE_18,
  FONT_SIZE_12,
  FONT_DEFAULT,
} from '~/components';
import circle from '~/assets/circle.svg';
import TwitterIcon from '~/public/img/footer/twitter-icon.svg';
import GithubIcon from '~/public/img/footer/github-icon.svg';
import WebIcon from '~/public/img/footer/sphere.svg';
import DocsIcon from '~/public/img/footer/book.svg';

export interface Project {
  name: string;
  company: {
    name: string;
    logo: string;
  };
  tags: string[];
  content: {
    challenge: {
      title: string;
      description: string;
    };
    solution: {
      title: string;
      description: string;
    };
  };
  status: string;
  links: {
    website?: string[];
    twitter?: string[];
    github?: string[];
    docs?: string[];
  };
}

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectsList({ projects = [] }: ProjectListProps) {
  const [projectMap, setProjectMap] = useState(Object.fromEntries(projects.map((project) => [project.name, false])));

  const handleClick = (project: Project, target: Element) => {
    if (!projectMap[project.name]) {
      target.parentElement?.classList.add('active');
      target.parentElement?.classList.add('gradient');
    } else {
      target.parentElement?.classList.remove('active');
      target.parentElement?.classList.remove('gradient');
    }

    projectMap[project.name] = !projectMap[project.name];
    setProjectMap({ ...projectMap });
  };

  return (
    <List>
      {projects.map((project) => (
        <ProjectContainer key={project.name}>
          <ProjectHeader onClick={(e: React.MouseEvent<Element, MouseEvent>) => handleClick(project, e.currentTarget)}>
            <ProjectName className='gradient-text'>
              <span>{project.name}</span>
              <span>/</span>
              <wbr />
              <span>{project.company.name}</span>
            </ProjectName>
            <Circle src={circle.src} alt='circle icon' />
            <HLine />
            <VLine className={projectMap[project.name] ? 'hide' : ''} />
          </ProjectHeader>

          <CSSTransition in={projectMap[project.name]} timeout={100} classNames='fade' unmountOnExit appear>
            <ProjectDescription>
              <TagList>
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </TagList>

              <DescriptionContainer>
                <DescriptionTitle>{project.content.challenge.title}:</DescriptionTitle>
                <DescriptionParagraph>{project.content.challenge.description}</DescriptionParagraph>
                <DescriptionTitle>{project.content.solution.title}:</DescriptionTitle>
                <DescriptionParagraph>{project.content.solution.description}</DescriptionParagraph>
              </DescriptionContainer>

              <StatusTag>{project.status}</StatusTag>

              <Social>
                {project.links.website &&
                  project.links.website.map((link) => (
                    <MemberLink key={link} to={link} external>
                      <SImg src={WebIcon.src} alt='web page icon' />
                    </MemberLink>
                  ))}
                {project.links.twitter &&
                  project.links.twitter.map((link) => (
                    <MemberLink key={link} to={link} external>
                      <SImg src={TwitterIcon.src} alt='twitter icon' />
                    </MemberLink>
                  ))}
                {project.links.github &&
                  project.links.github.map((link) => (
                    <MemberLink key={link} to={link} external>
                      <SImg src={GithubIcon.src} alt='github icon' />
                    </MemberLink>
                  ))}
                {project.links.docs &&
                  project.links.docs.map((link) => (
                    <MemberLink key={link} to={link} external>
                      <SImg src={DocsIcon.src} alt='docs icon' />
                    </MemberLink>
                  ))}
              </Social>
            </ProjectDescription>
          </CSSTransition>
          <Divider />
        </ProjectContainer>
      ))}
    </List>
  );
}

const List = styled.div``;

const ProjectContainer = styled.button`
  cursor: pointer;
  min-height: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0;
`;

const ProjectName = styled.h3`
  text-align: left;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    padding-left: 1.6rem;
  }

  & span {
    font-family: ${FONT_MEDIUM_L};
    font-size: ${FONT_SIZE_24};
    text-transform: uppercase;
    z-index: -1;
    color: white;

    &:nth-child(2) {
      margin: 0 1rem;
    }

    @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
      font-size: ${FONT_SIZE_20};
    }
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 15rem;
  padding: 2.4rem;
  position: relative;

  &:hover ${ProjectName} {
    background: linear-gradient(to right, #625cbf, #c55fa3, #fccc50);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
  }

  &:hover img,
  &:hover div {
    opacity: 1;
  }

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    padding: 0;

    & img {
      display: none;
    }
  }
`;

const Circle = styled.img`
  opacity: 0;
  z-index: -1;
`;

const Divider = styled.div`
  background: linear-gradient(to right, rgba(14, 21, 44, 0) 0%, rgba(255, 255, 255, 0.5) 50%, rgba(14, 21, 44, 0) 100%);
  height: 2px;
  width: 100%;
`;

const ProjectDescription = styled.div`
  width: 100%;
  padding: 0 2.4rem 5rem;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    padding: 0 1.6rem 1.6rem;
  }
`;

const DescriptionContainer = styled.div`
  opacity: 0.8;
  padding-bottom: 1rem;
  text-align: left;
`;

const DescriptionTitle = styled.h4`
  font-family: ${FONT_MEDIUM_L};
  font-size: ${FONT_SIZE_18};
  -webkit-text-fill-color: white;
  display: inline-block;
  margin-bottom: 1rem;
`;

const DescriptionParagraph = styled.p`
  font-family: ${FONT_MEDIUM};
  font-size: 2.2rem;
  color: white;
  -webkit-text-fill-color: white;
  opacity: 1;
  text-align: start;
  margin-bottom: 2rem;
`;

const TagList = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: -2.4rem;
  margin-bottom: 3rem;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Tag = styled.h5`
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  -webkit-text-fill-color: white;
  font-family: ${FONT_DEFAULT};
  font-size: ${FONT_SIZE_12};
  padding: 0.3rem 1rem;
  border-radius: 1rem;
  flex-shrink: 0;
`;

const HLine = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  width: 90px;
  height: 1px;
  position: absolute;
  right: 55px;
  opacity: 0;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    display: none;
  }
`;

const VLine = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  width: 1px;
  height: 32px;
  position: absolute;
  right: 100px;
  opacity: 0;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    display: none;
  }
`;

const StatusTag = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  -webkit-text-fill-color: white;
  border: 1px solid white;
  font-family: ${FONT_DEFAULT};
  font-size: ${FONT_SIZE_12};
  padding: 0.6rem 1rem;
  border-radius: 1.6rem;
  width: fit-content;
`;

const Social = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 1rem;
  margin-top: 2rem;
  margin-left: -0.5rem;
`;

const MemberLink = styled(SLink)`
  z-index: 1;
  transition: all 200ms linear;
`;

const SImg = styled.img`
  opacity: 0.8;
  height: 2.8rem;
`;
