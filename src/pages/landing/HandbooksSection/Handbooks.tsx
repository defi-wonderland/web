import styled from 'styled-components';
import { FONT_DISPLAY, FONT_MEDIUM, MOBILE_MAX_WIDTH, TABLET_MAX_WIDTH } from '~/components';

export default function HandbooksSection() {
  const handbooks = [
    {
      title: 'Wonderland handbook',
      image: '/img/handbook/general-handbook.svg',
      background: '/img/handbook/wl-bg-card.png',
      href: 'https://handbook.wonderland.xyz',
    },
    {
      title: 'Optimism handbook',
      image: '/img/handbook/optimism-handbook.svg',
      background: '/img/handbook/op-bg-card.png',
      href: 'https://optimism.handbook.defi.sucks', //Todo: update when domain is changed
    },
  ];
  return (
    <HandbooksContainer>
      <TeamTitle>HANDBOOKS</TeamTitle>
      <Subtitle>
        At Wonderland, we believe that the ecosystem thrives on collaboration and shared knowledge. This handbook is our
        living repository: a curated guide to our best practices, processes, and technical insights.
      </Subtitle>
      <CardContainer>
        {handbooks.map((handbook, index) => {
          return (
            <Card
              key={handbook.title}
              href={handbook.href}
              target='_blank'
              rel='noreferrer'
              background={handbook.background}
            >
              <CardIcon src={handbook.image} alt={`${handbook.title} ICON`} isFirstCard={index === 0} />
            </Card>
          );
        })}
      </CardContainer>
    </HandbooksContainer>
  );
}

const HandbooksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 6rem 8rem;
  @media screen and (max-width: ${TABLET_MAX_WIDTH}) {
    padding: 4rem 6rem;
  }
  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    padding: 2rem 4rem;
    padding-top: 4rem;
  }
`;

const TeamTitle = styled.h1`
  font-family: ${FONT_DISPLAY};
  font-weight: 300;
  font-style: italic;
  line-height: 1;
  letter-spacing: 0.1rem;
  font-size: 12rem;
  text-transform: uppercase;
  text-align: center;

  background: linear-gradient(to right, #625cbf, #c55fa3, #fccc50);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    font-size: 6.4rem;
    padding: 1rem 5rem;
  }
`;

const Subtitle = styled.p`
  font-family: ${FONT_MEDIUM};
  font-size: 2rem;
  text-align: center;
  align-self: center;
  max-width: 95rem;
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: space-between;
  justify-content: center;
  gap: 2.4rem;
  padding-top: 5.6rem;
  padding-bottom: 2rem;
  @media screen and (max-width: ${TABLET_MAX_WIDTH}) {
    flex-direction: column;
    align-items: center;
    padding-bottom: 1rem;
  }
  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    padding-top: 4rem;
    padding-bottom: 0;
  }
`;

const Card = styled.a.withConfig({
  shouldForwardProp: (prop) => prop !== 'background',
})<{ background: string }>`
  width: 100%;
  min-height: 260px;
  background: rgba(255, 255, 255, 0.08);
  background-image: url(${({ background }) => background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 1px solid #ffffff4d;
  border-radius: 11.61px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  z-index: 100;
  transition: all 0.3s ease;
  text-decoration: none !important;
  position: relative;
  overflow: hidden;
  max-width: 52rem;
  &:hover {
    cursor: pointer;
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 4px 30px rgba(31, 85, 213, 0.2), 0 0 20px rgba(233, 91, 155, 0.2);
    border-color: rgba(255, 255, 255, 0.3);
  }
`;

const CardIcon = styled.img.withConfig({
  shouldForwardProp: (prop) => prop !== 'isFirstCard',
})<{ isFirstCard?: boolean }>`
  width: auto;
  height: auto;
  max-width: 80%;
  max-height: 80%;
  object-fit: contain;
  z-index: 1;
  position: relative;
  ${({ isFirstCard }) =>
    isFirstCard &&
    `
      transform: translateY(-20px);
      margin-top: 14px;
    `}
`;
