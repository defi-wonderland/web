import { useState } from "react";

import {
  Container,
  Divider,
  MemberContainerFront,
  MemberContainerBack,
  Name,
  Position,
  Social,
  TeamGrid,
  TitleContainer,
  WonderTitle,
  MemberLink,
  JoinContainer,
  EyeImage,
  KeyImage,
  FlipCard,
  FlipCardInner,
  SImg,
  Mask,
  MemberContainer,
} from "./TeamGrid.styles";
import { MEMBERS } from "~/constants/teamMembers";
import TwitterIcon from "/img/footer/twitter-icon.svg";
import GithubIcon from "/img/footer/github-icon.svg";

export function WonderTeamSection() {
  const showDescription = new Array(MEMBERS.length).fill(false);
  const [showDesc, setShowDesc] = useState(showDescription);

  const resetValues = () => {
    const arrayCopy = [];
    let i = -1;

    while (++i < showDesc.length) {
      arrayCopy[i] = false;
    }

    return arrayCopy;
  };

  const handleClick = (index: number) => {
    const arrayCopy = resetValues();
    arrayCopy[index] = true;
    setShowDesc(arrayCopy);
  };

  return (
    <Container>
      <TitleContainer>
        <WonderTitle>WONDER TEAM</WonderTitle>
        <Divider />
      </TitleContainer>
      <TeamGrid>
        {MEMBERS.map((member, index) => (
          <MemberContainer>
            {showDesc[index] && (
              <Mask onClick={() => setShowDesc(resetValues())} />
            )}
            <FlipCard key={member.name} onClick={() => handleClick(index)}>
              <FlipCardInner className="flip-card-inner">
                <MemberContainerFront
                  className={`member member-${index} flip-card-front`}
                >
                  <div>
                    <Name>{member.name}</Name>
                    <Position>{member.position}</Position>
                  </div>
                  <Social>
                    {member.twitter && (
                      <MemberLink to={member.twitter} external>
                        <SImg src={TwitterIcon} alt="twitter icon" />
                      </MemberLink>
                    )}

                    {member.github && (
                      <MemberLink to={member.github} external>
                        <SImg src={GithubIcon} alt="github icon" />
                      </MemberLink>
                    )}
                  </Social>

                  <EyeImage />
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
                </MemberContainerBack>
              </FlipCardInner>
            </FlipCard>
          </MemberContainer>
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
