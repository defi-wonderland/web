import { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import {
  FONT_DISPLAY,
  FONT_MEDIUM,
  FONT_MEDIUM_L,
  FONT_SIZE_24,
  SLink,
  MOBILE_MAX_WIDTH,
  SPACING_320,
  TABLET_MAX_WIDTH,
} from '~/components/common';
import KEY from '~/assets/join-key.svg';
import members from '~/data/squad.json';
// import EYE from '~/assets/eye.svg';

export default function SquadSection() {
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
      <SquadGrid>
        {members.map((member, index) => (
          <MemberContainer key={member.name}>
            {showDesc[index] && <Mask onClick={() => setShowDesc(hideDescriptions)} />}
            <FlipCard onClick={() => handleClick(index)} flipped={showDesc[index]} index={index}>
              <FlipCardInner className={`flip-card-inner flip-card-inner-${index}`}>
                <CardFront className={`member member-${index} flip-card-front`}>
                  <NameContainer>
                    <Name>{member.name}</Name>
                    <Position>{member.position}</Position>
                  </NameContainer>

                  {member.image && (
                    <ImageContainer>
                      <SImg src={member.image} alt='twitter icon' />
                    </ImageContainer>
                  )}
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
      </SquadGrid>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 140rem;
  margin: ${SPACING_320} auto 0;
  padding: 0 4rem;

  @media screen and (max-width: ${TABLET_MAX_WIDTH}) {
    margin-top: 3rem;
    flex-direction: column;
    padding: 0 2rem;
  }
`;

const NameContainer = styled.div`
  z-index: 10;
`;

const WonderTitle = styled.h1`
  word-wrap: unset;
  margin-top: -12rem;
  width: 100%;
  font-family: ${FONT_DISPLAY};
  font-weight: 300;
  line-height: 1.2;
  letter-spacing: 0.1rem;
  font-size: 12.8rem;
  text-transform: uppercase;
  text-align: start;

  background: linear-gradient(to right, #625cbf, #c55fa3, #fccc50);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    text-align: center;
    margin-top: 9rem;
    font-size: 6.4rem;
    width: auto;
  }
`;

const SquadGrid = styled.div`
  display: grid;
  max-width: 140rem;
  margin: 100px auto;
  padding: 0 4rem;
  grid-template-columns: 33% 33% 33%;

  & .member {
    border-right: 1px solid rgba(255, 255, 255, 0.4);
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  }

  ${() => {
    let memberBorder = '';
    for (let i = 0; i < members.length; i++) {
      if (!((i + 1) % 3)) {
        memberBorder += `
            & .member.member-${i} {
              border-right: unset;
            }
          `;
      }
    }
    return memberBorder;
  }}

  ${() => {
    switch (members.length % 3) {
      case 0:
        return `
            & .member.member-${members.length - 3},
            & .member.member-${members.length - 2},
            & .member.member-${members.length - 1} {
              border-bottom: unset;
            }
          `;
      case 1:
        return `
            & .member.member-${members.length - 1} {
              border-bottom: unset;
            }
          `;
      case 2:
        return `
            & .member.member-${members.length - 2},
            & .member.member-${members.length - 1} {
              border-bottom: unset;
            }
          `;
    }
  }}

  @media screen and (max-width: ${TABLET_MAX_WIDTH}) {
    grid-template-columns: 50% 50%;

    & .member {
      border-right: unset;
      border-bottom: 1px solid rgba(255, 255, 255, 0.4) !important;
    }

    ${() => {
      let memberBorder = '';
      for (let i = 0; i < members.length; i++) {
        if (!(i % 2)) {
          memberBorder += `
            & .member.member-${i} {
              border-right: 1px solid rgba(255, 255, 255, 0.4);
            }
          `;
        }
      }
      return memberBorder;
    }}

    ${() => {
      switch (members.length % 2) {
        case 0:
          return `
            & .member.member-${members.length - 2},
            & .member.member-${members.length - 1} {
              border-bottom: unset !important;
            }
            & .member.member-${members.length - 1} {
              border-top: 1px solid rgba(255, 255, 255, 0.4);
            }
          `;
        case 1:
          return `
            & .member.member-${members.length - 1} {
              border-bottom: unset !important;
            }
          `;
      }
    }}
  }

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    display: flex;
    flex-direction: column;
    grid-gap: 0.1rem;
    margin-top: 2rem;
    padding: unset;

    & .member {
      border: unset;
      border-right: unset !important;
      border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    }
  }
`;

const FlipCard = styled.button<{ flipped: boolean; index: number }>`
  background-color: transparent;
  position: relative;
  text-align: start;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
  padding: unset;
  width: 100%;

  ${({ flipped, index }) => `
    .flip-card-inner-${index} {
    transform:  ${flipped ? 'rotateX(-180deg)' : 'unset'};
  }`}
`;

const FlipCardInner = styled.div`
  position: relative;
  transition: transform 0.5s;
  -webkit-transform-style: preserve-3d; /* Safari */
  transform-style: preserve-3d;
`;

const CardFront = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 24rem;
  padding: 2.4rem;
  width: 100%;
  cursor: pointer;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;

  &:hover {
    background-image: radial-gradient(circle at 100% 0%, rgba(14, 21, 44, 0) 0%, rgba(14, 21, 44, 1) 85%),
      url('/img/ethos/002_grad.jpg');
    background-size: cover;
    background-position: bottom;
  }

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    height: 18rem;
    width: 100%;
  }
`;

const CardBack = styled(CardFront)`
  position: absolute;
  top: 0rem;
  background-image: radial-gradient(circle at 100% 0%, rgba(14, 21, 44, 0) 0%, rgba(14, 21, 44, 1) 85%),
    url('/img/ethos/002_grad.jpg');
  background-size: cover;
  background-position: bottom;
  transform: rotateX(-180deg);
  width: 100%;
  overflow: hidden;
  padding: 1.6rem;

  & img {
    opacity: 1;
  }

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    top: 0rem;
    width: 100%;
  }
`;

const Name = styled.strong`
  font-family: ${FONT_MEDIUM_L};
  font-size: ${FONT_SIZE_24};
  text-transform: uppercase;
  opacity: 1;
  color: white;
  z-index: 5;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    font-size: 2rem;
  }
`;

const Position = styled.p`
  font-family: ${FONT_MEDIUM};
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.65);
  z-index: 1;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    font-size: 1.8rem;
  }
`;

const Description = styled(Position)`
  font-size: 1.8rem;
  white-space: pre-wrap;
  color: rgba(255, 255, 255, 0.9);

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    font-size: 1.6rem;
  }
`;

const Divider = styled.canvas`
  background: linear-gradient(to right, rgba(14, 21, 44, 0) 0, rgba(255, 255, 255, 0.5) 100%);
  height: 2px;
  width: 60%;

  @media screen and (max-width: ${TABLET_MAX_WIDTH}) {
    background: linear-gradient(to bottom, rgba(14, 21, 44, 0) 0, rgba(255, 255, 255, 0.5) 100%);
    height: 8rem;
    width: 2px;
    margin-top: 3rem;
  }
`;

const JoinContainer = styled(SLink)`
  position: relative;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: radial-gradient(ellipse 50% 50%, rgba(255, 255, 255, 0.2), transparent);

  & p {
    font-size: 2.4rem;
  }
`;

const KeyImage = styled.img.attrs({ src: KEY.src })`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: end;
  justify-content: flex-end;
  height: 16rem;
  width: 50%;
  position: absolute;
  bottom: 0;
  right: 0;

  img {
    width: auto !important;
    position: relative !important;
  }

  @media screen and (max-width: ${TABLET_MAX_WIDTH}) {
    height: calc(100% - 8rem);
    width: auto;
  }
  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    height: calc(100% - 4.8rem);
    width: auto;
  }
`;

const SImg = styled(Image).attrs({
  fill: true,
})`
  object-fit: contain;
  position: relative;

  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
`;

const MemberContainer = styled.div`
  position: relative;
`;

const Mask = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 1;
  cursor: pointer;
`;
