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
import { Project } from '~/constants/projects';
import TwitterIcon from '/img/footer/twitter-icon.svg';
import GithubIcon from '/img/footer/github-icon.svg';
import WebIcon from '/img/footer/sphere.svg';
import DocsIcon from '/img/footer/book.svg';
interface ProjectListProps {
  projects: Project[];
}

export function ProjectsList({ projects }: ProjectListProps) {
  const [projectMap, setProjectMap] = useState(Object.fromEntries(projects.map((project) => [project.name, false])));

  const handleClick = (project: Project, target: Element) => {
    if (!projectMap[project.name]) {
      target.classList.add('active');
      target.classList.add('gradient');
    } else {
      target.classList.remove('active');
      target.classList.remove('gradient');
    }

    projectMap[project.name] = !projectMap[project.name];
    setProjectMap({ ...projectMap });
  };

  return (
    <List>
      {projects.map((project) => (
        <ProjectContainer
          key={project.name}
          onClick={(e) => {
            handleClick(project, e.currentTarget);
          }}
        >
          <ProjectHeader>
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
