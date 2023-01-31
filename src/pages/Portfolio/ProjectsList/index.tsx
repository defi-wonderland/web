import {
  Name,
  TitleContainer,
  ProjectTitle,
  List,
  ProjectContainer,
  Divider,
  SBackgroundImg,
  SBackgroundImg2,
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
        <SBackgroundImg2 type="2" align="right" />
      </List>
    </>
  );
}
