import { useState } from 'react';

import {
  Container,
  Divider,
  CardFront,
  CardBack,
  Name,
  Position,
  TeamGrid,
  TitleContainer,
  WonderTitle,
  JoinContainer,
  EyeImage,
  KeyImage,
  FlipCard,
  FlipCardInner,
  Mask,
  MemberContainer,
  Description,
  // MemberLink,
  // Social,
  // SImg,
} from './TeamGrid.styles';
import { members } from '~/data/teamMembers.json';
// import TwitterIcon from '/img/footer/twitter-icon.svg';
// import GithubIcon from '/img/footer/github-icon.svg';

export function WonderTeamSection() {
  const hideDescriptions = new Array(members.length).fill(false);
  const [showDesc, setShowDesc] = useState(hideDescriptions);

  const handleClick = (index: number) => {
    const arrayCopy = [...hideDescriptions];
    arrayCopy[index] = true;
    setShowDesc(arrayCopy);
  };

  return (
    <Container>
      <TitleContainer>
        <WonderTitle>We&apos;re all mad here</WonderTitle>
        <Divider />
      </TitleContainer>
      <TeamGrid>
        {members.map((member, index) => (
          <MemberContainer key={member.name}>
            {showDesc[index] && <Mask onClick={() => setShowDesc(hideDescriptions)} />}
            <FlipCard onClick={() => handleClick(index)} flipped={showDesc[index]} index={index}>
              <FlipCardInner className={`flip-card-inner flip-card-inner-${index}`}>
                <CardFront className={`member member-${index} flip-card-front`}>
                  <div>
                    <Name>{member.name}</Name>
                    <Position>{member.position}</Position>
                  </div>
                  {/* <Social>
                    {member.twitter && (
                      <MemberLink to={member.twitter} external>
                        <SImg src={TwitterIcon} alt='twitter icon' />
                      </MemberLink>
                    )}

                    {member.github && (
                      <MemberLink to={member.github} external>
                        <SImg src={GithubIcon} alt='github icon' />
                      </MemberLink>
                    )}
                  </Social> */}

                  <EyeImage flipped={showDesc[index]} />
                </CardFront>

                <CardBack key={member.name} className={`member member-${index} flip-card-back`}>
                  <Description>{member.description}</Description>
                </CardBack>
              </FlipCardInner>
            </FlipCard>
          </MemberContainer>
        ))}
        <JoinContainer
          to='https://docs.google.com/forms/d/1n70jsL4sFkOwPNBTdciPqlWF2RirgQwejjztpS4-2L8/viewform'
          external
        >
          <Name className='gradient'>JOIN US</Name>
          <KeyImage />
        </JoinContainer>
      </TeamGrid>
    </Container>
  );
}
