import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import {
  CarouselContainer,
  CrownIcon,
  KeyContainer,
  Keyhole,
  Name,
  NameContainer,
  NextNameContainer,
  Position,
  PrevNameContainer,
  TeamContainer,
  TeamTitle,
} from "./TeamSection.styles";
import Crown from "~/assets/crown_icon.svg";
import Key from "~/assets/key.png";
import { MEMBERS } from "~/constants/teamMembers";

export function Team() {
  const lastIndex = MEMBERS.length - 1;
  const [prevIndex, setPrevIndex] = useState(lastIndex);
  const [nextIndex, setNextIndex] = useState(1);

  const handleClick = (index: number) => {
    if (index > 0 && index < lastIndex) {
      setNextIndex(index + 1);
      setPrevIndex(index - 1);
    } else if (index === 0) {
      setNextIndex(index + 1);
      setPrevIndex(lastIndex);
    } else if (index === lastIndex) {
      setNextIndex(0);
      setPrevIndex(index - 1);
    }
  };

  return (
    <TeamContainer>
      <CrownIcon src={Crown} alt="crown icon" />
      <TeamTitle>THE POWER OF THE PEOPLE</TeamTitle>
      <KeyContainer>
        <PrevNameContainer>
          <div>
            <Name>
              {MEMBERS[prevIndex == 0 ? lastIndex : prevIndex - 1].name}
            </Name>
            <Position>
              {MEMBERS[prevIndex == 0 ? lastIndex : prevIndex - 1].position}
            </Position>
          </div>
          <div>
            <Name>{MEMBERS[prevIndex].name}</Name>
            <Position>{MEMBERS[prevIndex].position}</Position>
          </div>
        </PrevNameContainer>
        <NextNameContainer>
          <div>
            <Name>{MEMBERS[nextIndex].name}</Name>
            <Position>{MEMBERS[nextIndex].position}</Position>
          </div>
          <div>
            <Name>
              {MEMBERS[nextIndex == lastIndex ? 0 : nextIndex + 1].name}
            </Name>
            <Position>
              {MEMBERS[nextIndex == lastIndex ? 0 : nextIndex + 1].position}
            </Position>
          </div>
        </NextNameContainer>
        <Keyhole src={Key} alt="crown icon" />
        <CarouselContainer
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          selectedItem={0}
          infiniteLoop
          onChange={(index) => {
            console.log(index);
            handleClick(index);
          }}
          width={400}
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
  );
}
