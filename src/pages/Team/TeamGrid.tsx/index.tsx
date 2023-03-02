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
} from './TeamGrid.styles';
import { MEMBERS } from '~/constants/teamMembers';
import TwitterIcon from '/img/footer/twitter-icon.svg';
import GithubIcon from '/img/footer/github-icon.svg';

export function WonderTeamSection() {
  return (
    <Container>
      <TitleContainer>
        <WonderTitle>WONDER TEAM</WonderTitle>
        <Divider />
      </TitleContainer>
      <TeamGrid>
        {MEMBERS.map((member, index) => (
          <FlipCard key={member.name}>
            <FlipCardInner className='flip-card-inner'>
              <MemberContainerFront className={`member member-${index} flip-card-front`}>
                <div>
                  <Name>{member.name}</Name>
                  <Position>{member.position}</Position>
                </div>
                <Social>
                  <MemberLink to={member.link} external>
                    <SImg src={TwitterIcon} alt='twitter icon' />
                  </MemberLink>

                  <MemberLink to={member.link} external>
                    <SImg src={GithubIcon} alt='github icon' />
                  </MemberLink>
                </Social>

                <EyeImage />
              </MemberContainerFront>
              <MemberContainerBack className={`member member-${index} flip-card-back`}>
                <Position>
                  {`
                      - 10+ years in Software Development
                      - Addicted to scalability and conventions
                      - University dropout
                      - Spent 3 years in the military
                    `}
                </Position>

                {/* <MemberLink to={member.link} external>
                  <EyeImage />
                </MemberLink> */}
              </MemberContainerBack>
            </FlipCardInner>
          </FlipCard>
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
