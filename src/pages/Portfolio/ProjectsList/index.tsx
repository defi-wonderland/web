import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import {
  Name,
  List,
  ProjectContainer,
  Divider,
  Circle,
  ProjectDescription,
  ProjectImage,
  ProjectHeader,
  HLine,
  VLine,
} from './ProjectsList.styles';
import circle from '~/assets/circle.svg';
import { Link } from '~/components/common';

interface Project {
  name: string;
  description: string;
  link: string;
  image: string;
}

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
              {project.image && <ProjectImage src={project.image} />}
              <div>
                <p>{project.description}</p>
                {project.link && (
                  <Link to={project.link} external>
                    Repository
                  </Link>
                )}
              </div>
            </ProjectDescription>
          </CSSTransition>
          <Divider />
        </ProjectContainer>
      ))}
    </List>
  );
}
