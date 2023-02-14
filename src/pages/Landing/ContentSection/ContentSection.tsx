import {
  BackgroundContainer,
  BG_1,
  CommunityButton,
  Cone,
  Divider,
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
} from "./ContentSection.styles";
import { ProjectsList } from "~/pages/Portfolio/ProjectsList";
import { RightCard } from "./RightCard";
import { Team } from "../TeamSection";
import StarIcon from "/img/footer/star-icon.svg";
import Flower from "~/assets/flower.svg";
import ConeBackground from "~/assets/landing_bg.png";
import { StarsBackground } from "~/containers";
import { Link } from "~/components/common";

export function ContentSection() {
  return (
    <>
      <BackgroundContainer>
        <BG_1 type="1" align="center" />
        <Cone src={ConeBackground} alt="cone image" />
      </BackgroundContainer>
      <LandingContainer>
        <Star src={StarIcon} alt="Star icon" />
        <FirstTitle>
          <Star src={StarIcon} alt="Star icon" />
          developing for a greater good
        </FirstTitle>

        <FirstBlockContainer>
          <TextContainer>
            <GradientText>To</GradientText>
            <GradientText>become part</GradientText>
            <GradientText>of</GradientText>
            <GradientText>something bigger</GradientText>
            <GradientText>than</GradientText>
            <GradientText>ourselves</GradientText>
          </TextContainer>

          <RightCard />
        </FirstBlockContainer>

        <Divider>
          <DividerText>WONDERLAND IN PROGRESS...</DividerText>
        </Divider>
        <StarsBackground />
        <SecondBlockContainer>
          <ProjectsList />

          <SButton>
            <Link to="/portfolio">FULL PORTFOLIO</Link>
          </SButton>

          <Team />
        </SecondBlockContainer>

        <Icon src={Flower} alt="flower icon" />
        <SecondTitle>
          <div>
            <Icon src={Flower} alt="flower icon" />
            fix-to-earn
          </div>
          <CommunityButton>
            <Link to="/team">VIEW ALL COMMUNITY</Link>
          </CommunityButton>
        </SecondTitle>
      </LandingContainer>
    </>
  );
}
