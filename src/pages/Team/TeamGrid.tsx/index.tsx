import { useState } from 'react';

import {
  Container,
  Divider,
  CardFront,
  CardBack,
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
  Description,
} from './TeamGrid.styles';
import { MEMBERS } from '~/constants/teamMembers';
import TwitterIcon from '/img/footer/twitter-icon.svg';
import GithubIcon from '/img/footer/github-icon.svg';
import TelegramIcon from '/img/footer/telegram.svg';

export function WonderTeamSection() {
  const hideDescriptions = new Array(MEMBERS.length).fill(false);
  const [showDesc, setShowDesc] = useState(hideDescriptions);

  const handleClick = (index: number) => {
    const arrayCopy = hideDescriptions;
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
          <MemberContainer key={member.name}>
            {showDesc[index] && <Mask onClick={() => setShowDesc(hideDescriptions)} />}
            <FlipCard onClick={() => handleClick(index)}>
              <FlipCardInner className='flip-card-inner'>
                <CardFront className={`member member-${index} flip-card-front`}>
                  <div>
                    <Name>{member.name}</Name>
                    <Position>{member.position}</Position>
                  </div>
                  <Social>
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

                    {member.telegram && (
                      <MemberLink to={member.telegram} external>
                        <SImg src={TelegramIcon} alt='github icon' />
                      </MemberLink>
                    )}
                  </Social>

                  <EyeImage />
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
