import {
  Container,
  Divider,
  MemberContainerFront,
  MemberContainerBack,
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
  FlipCard,
  FlipCardInner,
} from "./TeamGrid.styles";
import { MEMBERS } from "~/constants/teamMembers";

export function WonderTeamSection() {
  return (
    <Container>
      <TitleContainer>
        <WonderTitle>WONDER TEAM</WonderTitle>
        <Divider />
      </TitleContainer>
      <TeamGrid>
        {MEMBERS.map((member, index) => (
          <FlipCard>
            <FlipCardInner className="flip-card-inner">
              <MemberContainerFront
                key={member.name}
                className={`member member-${index} flip-card-front`}
              >
                <div>
                  <Name>{member.name}</Name>
                  <Position>{member.position}</Position>
                </div>
                <TwitterHandle>{member.twitterHandle}</TwitterHandle>

                <MemberLink to={member.link} external>
                  <EyeImage />
                </MemberLink>
              </MemberContainerFront>
              <MemberContainerBack
                key={member.name}
                className={`member member-${index} flip-card-back`}
              >
                <Position>
                  {`
                      - 10+ years in Software Development
                      - Addicted to scalability and conventions
                      - University dropout
                      - Spent 3 years in the military
                    `}
                </Position>

                <MemberLink to={member.link} external>
                  <EyeImage />
                </MemberLink>
              </MemberContainerBack>
            </FlipCardInner>
          </FlipCard>
        ))}
        <JoinContainer
          to="https://docs.google.com/forms/d/1n70jsL4sFkOwPNBTdciPqlWF2RirgQwejjztpS4-2L8/viewform"
          external
        >
          <Name className="gradient">JOIN US</Name>
          <KeyImage />
        </JoinContainer>
      </TeamGrid>
    </Container>
  );
}
