import {
  Divider,
  MemberContainer,
  Name,
  Position,
  SLink,
  TeamGrid,
  TitleContainer,
  WonderTitle,
} from "./TeamGrid.styles";
import { MEMBERS } from "./teamMembers";

export function WonderTeamSection() {
  return (
    <>
      <TitleContainer>
        <WonderTitle title={"WONDER TEAM"} />
        <Divider />
      </TitleContainer>
      <TeamGrid>
        {MEMBERS.map((member) => (
          <MemberContainer key={member.twitterHandle}>
            <div>
              <Name>{member.name}</Name>
              <Position>{member.position}</Position>
            </div>
            <SLink to={member.link}>{member.twitterHandle}</SLink>
          </MemberContainer>
        ))}
      </TeamGrid>
    </>
  );
}
