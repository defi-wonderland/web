import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

import {
  Name,
  List,
  ProjectContainer,
  Divider,
  Circle,
  ProjectDescription,
  ProjectImage,
  ProjectHeader,
} from "./ProjectsList.styles";
import { PROJECTS } from "~/constants/projects";
import circle from "~/assets/circle.svg";

interface Project {
  name: string;
  description: string;
  link: string;
  image: string;
}

export function ProjectsList() {
  const [projectMap, setProjectMap] = useState(
    Object.fromEntries(PROJECTS.map((project) => [project.name, false]))
  );

  const handleClick = (project: Project, target: Element) => {
    if (!projectMap[project.name]) {
      target.classList.add("active");
      target.classList.add("gradient");
    } else {
      target.classList.remove("active");
      target.classList.remove("gradient");
    }

    projectMap[project.name] = !projectMap[project.name];
    setProjectMap({ ...projectMap });
  };

  useEffect(() => {}, [projectMap]);

  return (
    <List>
      {PROJECTS.map((project) => (
        <ProjectContainer
          key={project.name}
          onClick={(e) => {
            handleClick(project, e.currentTarget);
          }}
          onMouseEnter={(e) => {
            (e.target as Element).classList.add("gradient");
          }}
          onMouseOut={(e) => {
            if (!projectMap[project.name])
              (e.target as Element).classList.remove("gradient");
          }}
        >
          <ProjectHeader>
            <Name>{project.name}</Name>
            <Circle src={circle} alt="circle icon" />
          </ProjectHeader>

          <CSSTransition
            in={projectMap[project.name]}
            timeout={100}
            classNames="fade"
            unmountOnExit
            appear
          >
            <ProjectDescription>
              <ProjectImage src={project.image} />
              <span>{project.description}</span>
            </ProjectDescription>
          </CSSTransition>
          <Divider />
        </ProjectContainer>
      ))}
    </List>
  );
}
