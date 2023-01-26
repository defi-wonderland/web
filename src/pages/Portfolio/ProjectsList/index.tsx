import {
  Name,
  TitleContainer,
  ProjectTitle,
  List,
  ProjectContainer,
  Divider,
  SBackgroundImg,
} from "./ProjectsList.styles";
import { PROJECTS } from "~/constants/projects";

export function ProjectsList() {
  return (
    <>
      <TitleContainer>
        <ProjectTitle title={"THINGS THAT HAPPEN"} />
      </TitleContainer>
      <SBackgroundImg type="1" align="left" />
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
        <SBackgroundImg type="2" align="right" />
      </List>
    </>
  );
}
