import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import {
  Name,
  List,
  ProjectContainer,
  Divider,
  Circle,
  ProjectDescription,
  ProjectHeader,
  HLine,
  VLine,
  MemberLink,
  SImg,
  Social,
} from './ProjectsList.styles';
import circle from '~/assets/circle.svg';
import TwitterIcon from '/img/footer/twitter-icon.svg';
import GithubIcon from '/img/footer/github-icon.svg';
import WebIcon from '/img/footer/sphere.svg';
import DocsIcon from '/img/footer/book.svg';

export interface Project {
  name: string;
  description: string;
  github?: string;
  docs?: string;
  twitter?: string;
  web?: string;
}

interface ProjectListProps {
  projects: Project[];
}

export function ProjectsList({ projects }: ProjectListProps) {
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
          <ProjectHeader
            onClick={(e) => {
              handleClick(project, e.currentTarget);
            }}
          >
            <Name>{project.name}</Name>
            <Circle src={circle} alt='circle icon' />
            <HLine />
            <VLine className={projectMap[project.name] ? 'hide' : ''} />
          </ProjectHeader>

          <CSSTransition in={projectMap[project.name]} timeout={100} classNames='fade' unmountOnExit appear>
            <ProjectDescription>
              <p>{project.description}</p>

              <Social>
                {project.web && (
                  <MemberLink to={project.web} external>
                    <SImg src={WebIcon} alt='web page icon' />
                  </MemberLink>
                )}
                {project.twitter && (
                  <MemberLink to={project.twitter} external>
                    <SImg src={TwitterIcon} alt='twitter icon' />
                  </MemberLink>
                )}
                {project.github && (
                  <MemberLink to={project.github} external>
                    <SImg src={GithubIcon} alt='github icon' />
                  </MemberLink>
                )}
                {project.docs && (
                  <MemberLink to={project.docs} external>
                    <SImg src={DocsIcon} alt='docs icon' />
                  </MemberLink>
                )}
              </Social>
            </ProjectDescription>
          </CSSTransition>
          <Divider />
        </ProjectContainer>
      ))}
    </List>
  );
}
