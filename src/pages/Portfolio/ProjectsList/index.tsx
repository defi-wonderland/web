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

export function ProjectsList() {
  const [projectMap, setProjectMap] = useState(
    Object.fromEntries(PROJECTS.map((project) => [project.name, false]))
  );

  useEffect(() => {}, [projectMap]);

  return (
    <List>
      {PROJECTS.map((project) => (
        <ProjectContainer
          key={project.name}
          onFocus={(e) => {
            (e.currentTarget as Element).classList.add("active");
            (e.currentTarget as Element).classList.add("gradient");
            projectMap[project.name] = true;
            setProjectMap({ ...projectMap });
          }}
          onBlur={(e) => {
            (e.currentTarget as Element).classList.remove("active");
            (e.currentTarget as Element).classList.remove("gradient");
            projectMap[project.name] = false;
            setProjectMap({ ...projectMap });
          }}
          onMouseEnter={(e) => {
            (e.target as Element).classList.add("gradient");
          }}
          onMouseOut={(e) => {
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
