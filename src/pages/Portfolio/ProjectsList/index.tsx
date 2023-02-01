import {
  Name,
  List,
  ProjectContainer,
  Divider,
  Circle,
} from "./ProjectsList.styles";
import { PROJECTS } from "~/constants/projects";
import circle from "~/assets/circle.svg";

export function ProjectsList() {
  return (
    <List>
      {PROJECTS.map((project) => (
        <div key={project.name}>
          <ProjectContainer
            key={project.name}
            onMouseEnter={(e) => {
              (e.target as Element).classList.add("gradient");
            }}
            onMouseOut={(e) => {
              (e.target as Element).classList.remove("gradient");
            }}
          >
            <Name>{project.name}</Name>
            <Circle src={circle} alt="circle icon" />
          </ProjectContainer>
          <Divider />
        </div>
      ))}
    </List>
  );
}
