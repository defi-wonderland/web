import "react-responsive-carousel/lib/styles/carousel.min.css";

import {
  CarouselContainer,
  CrownIcon,
  KeyContainer,
  Keyhole,
  Name,
  NameContainer,
  Position,
  TeamContainer,
  TeamTitle,
} from "./TeamSection.styles";
import Crown from "~/assets/crown_icon.svg";
import Key from "~/assets/key.png";
import { MEMBERS } from "~/constants/teamMembers";

export function Team() {
  const lastIndex = MEMBERS.length;

  return (
    <>
      <TeamContainer>
        <CrownIcon src={Crown} alt="crown icon" />
        <TeamTitle>THE POWER OF THE PEOPLE</TeamTitle>
        <KeyContainer>
          <Keyhole src={Key} alt="crown icon" />
          <CarouselContainer
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
            selectedItem={Math.ceil(lastIndex / 2)}
          >
            {MEMBERS.map((member) => (
              <NameContainer key={member.name}>
                <Name>{member.name}</Name>
                <Position>{member.position}</Position>
              </NameContainer>
            ))}
          </CarouselContainer>
        </KeyContainer>
      </TeamContainer>
    </>
  );
}
