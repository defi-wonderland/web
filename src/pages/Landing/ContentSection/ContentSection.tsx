import {
  BackgroundContainer,
  BG_1,
  CommunityButton,
  Cone,
  Divider,
  DividerLine,
  DividerText,
  FirstBlockContainer,
  FirstTitle,
  GradientText,
  Icon,
  LandingContainer,
  SButton,
  SecondBlockContainer,
  SecondTitle,
  Star,
  TextContainer,
} from './ContentSection.styles';
import { ProjectsList } from '~/pages/Portfolio/ProjectsList';
import { RightCard } from './RightCard';
import { Team } from '../TeamSection';
import StarIcon from '/img/footer/star-icon.svg';
import MobileStar from '~/assets/lore-stars.svg';
import Flower from '~/assets/flower.svg';
import ConeBackground from '~/assets/landing_bg.png';
import { Link } from '~/components/common';

export function ContentSection() {
  return (
    <LandingContainer>
      <BackgroundContainer>
        <BG_1 type='1' align='center' />
        <Cone src={ConeBackground} />
      </BackgroundContainer>
      <Star src={StarIcon} />
      <FirstTitle>
        <Star src={MobileStar} />
        It’s all about our partners…
      </FirstTitle>

      <FirstBlockContainer>
        <TextContainer>
          <GradientText>Optimsm</GradientText>
          <GradientText>Connext</GradientText>
          <GradientText>Reflexer</GradientText>
          <GradientText>Yearn</GradientText>
          <GradientText>& many more</GradientText>
        </TextContainer>

        <RightCard />
      </FirstBlockContainer>

      <Divider>
        <DividerLine />
        <DividerText>What’s cooking?</DividerText>
        <DividerLine />
      </Divider>

      <SecondBlockContainer>
        <ProjectsList />

        <SButton>
          <Link to='/portfolio'>Full portfolio</Link>
        </SButton>

        <Team />
      </SecondBlockContainer>

      <Icon src={Flower} />
      <SecondTitle>
        <div>
          <Icon src={Flower} />
        </div>
        <CommunityButton>
          <Link to='/team'>Meet the team</Link>
        </CommunityButton>
      </SecondTitle>
    </LandingContainer>
  );
}
