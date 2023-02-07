import { Name, List, ProjectContainer, Divider } from "./ProjectsList.styles";
import { PROJECTS } from "~/constants/projects";

export function ProjectsList() {
  return (
    <List>
      {PROJECTS.map((project) => (
        <div key={project.name}>
          <ProjectContainer key={project.name}>
            <Name>{project.name}</Name>
          </ProjectContainer>
          <Divider />
        </div>
      ))}
    </List>
  );
}
