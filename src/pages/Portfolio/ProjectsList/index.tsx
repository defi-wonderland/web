import {
  Name,
  TitleContainer,
  ProjectTitle,
  List,
  ProjectContainer,
  Divider,
} from "./ProjectsList.styles";
import { PROJECTS } from "~/constants/projects";

export function ProjectsList() {
  return (
    <>
      <TitleContainer>
        <ProjectTitle title={"THINGS THAT HAPPEN"} />
      </TitleContainer>
      <List>
        {PROJECTS.map((project) => (
          <>
            <Divider />
            <ProjectContainer key={project.name}>
              <Name>{project.name}</Name>
            </ProjectContainer>
          </>
        ))}
        <Divider />
      </List>
    </>
  );
}
