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
import { Squad } from '../SquadSection';
import StarIcon from '/img/footer/star-icon.svg';
import MobileStar from '~/assets/ethos-stars.svg';
import Flower from '~/assets/flower.svg';
import ConeBackground from '~/assets/landing_bg.png';
import { Link } from '~/components/common';
import { partnerProjects } from '~/data/projects.json';

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
          <GradientText>Optimism</GradientText>
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
        <ProjectsList projects={partnerProjects.slice(0, 3)} />

        <Link to='/portfolio'>
          <SButton>portfolio</SButton>
        </Link>

        <Squad />
      </SecondBlockContainer>

      <Icon src={Flower} />
      <SecondTitle>
        <div>
          <Icon src={Flower} />
        </div>
        <Link to='/squad'>
          <CommunityButton>Meet the squad</CommunityButton>
        </Link>
      </SecondTitle>
    </LandingContainer>
  );
}
