import styled from "styled-components";

import { FONT_DISPLAY, FONT_MEDIUM_L } from "~/components/common";
import Crown from "~/assets/crown_icon.svg";
import Key from "~/assets/key.png";
import ArrowLeft from "~/assets/arrow_left.svg";
import ArrowRight from "~/assets/arrow.svg";

export const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 12rem;
`;

export const TeamTitle = styled.h1`
  font-family: ${FONT_DISPLAY};
  font-weight: 300;
  font-style: italic;
  line-height: 1.2;
  letter-spacing: 0.1rem;
  font-size: 12rem;
  text-transform: uppercase;
  text-align: center;

  background: linear-gradient(to right, #625cbf, #c55fa3, #fccc50);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
`;

export const CrownIcon = styled.img`
  margin: 0 auto;
`;

export const Keyhole = styled.img`
  position: absolute;
  margin: 0 auto;
`;

export const ButtonsContainer = styled.div`
  width: 19rem;
  height: 7.2rem;
  display: flex;
  justify-content: space-between;
  margin: 3rem auto;
`;

export const ArrowIcon = styled.img`
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const NameContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 55rem;
  width: 100%;
`;

export const Name = styled.strong`
  font-family: ${FONT_MEDIUM_L};
  font-size: 2.4rem;
  text-transform: uppercase;
  z-index: 1;
`;

export const Position = styled.span`
  font-size: 1.8rem;
  z-index: 1;
  color: rgba(255, 255, 255, 0.65);
  padding: 0.8rem;
`;

export function Team() {
  return (
    <TeamContainer>
      <CrownIcon src={Crown} alt="crown icon" />
      <TeamTitle>THE POWER OF THE PEOPLE</TeamTitle>

      <NameContainer>
        <Keyhole src={Key} alt="crown icon" />
        <Name>MATIAS NISENSON</Name>
        <Position>Co-Founder</Position>
      </NameContainer>
      <ButtonsContainer>
        <ArrowIcon src={ArrowLeft} alt="arrow left" />
        <ArrowIcon src={ArrowRight} alt="arrow right" />
      </ButtonsContainer>
    </TeamContainer>
  );
}
