import {
  Divider,
  MemberContainer,
  Name,
  Position,
  TwitterHandle,
  TeamGrid,
  TitleContainer,
  WonderTitle,
  MemberLink,
  JoinContainer,
  EyeImage,
  KeyImage,
} from "./TeamGrid.styles";
import { MEMBERS } from "~/constants/teamMembers";

export function WonderTeamSection() {
  return (
    <>
      <TitleContainer>
        <WonderTitle title={"WONDER TEAM"} />
        <Divider />
      </TitleContainer>
      <TeamGrid>
        {MEMBERS.map((member, index) => (
          <MemberContainer
            key={member.name}
            className={`member member-${index}`}
          >
            <div>
              <Name>{member.name}</Name>
              <Position>{member.position}</Position>
            </div>
            <TwitterHandle>{member.twitterHandle}</TwitterHandle>

            <MemberLink to={member.link} external>
              <EyeImage />
            </MemberLink>
          </MemberContainer>
        ))}
        <JoinContainer to="#" external>
          <Name className="gradient">JOIN US</Name>
          <KeyImage />
        </JoinContainer>
      </TeamGrid>
    </>
  );
}
