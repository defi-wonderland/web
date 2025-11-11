import styled from 'styled-components';
import { FONT_DISPLAY, FONT_MEDIUM, MOBILE_MAX_WIDTH, TABLET_MAX_WIDTH } from '~/components';
import handbooks from '~/data/handbooks.json';

export default function Handbooks() {
  return (
    <HandbooksContainer>
      <Title>HANDBOOKS</Title>

      <Subtitle>
        At Wonderland, we believe that the ecosystem thrives on collaboration and shared knowledge. These handbooks are
        our living repository: a curated guide to our best practices and onboarding processes for our long-term
        partners.
      </Subtitle>

      <CardsContainer>
        {handbooks.map(({ title, image, background, backgroundOverlay, href, imageScale }, index) => (
          <Card
            target='_blank'
            rel='noreferrer'
            key={index}
            href={href}
            background={background}
            backgroundOverlay={backgroundOverlay}
          >
            <CardIcon src={image} alt={`${title} ICON`} isWonderlandHandbook={index === 0} scale={imageScale} />
          </Card>
        ))}
      </CardsContainer>
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

const Title = styled.h1`
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
  max-width: 81rem;
  line-height: 150%;
  font-weight: 400;
  letter-spacing: -0.02em;
`;

const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
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
  shouldForwardProp: (prop) => prop !== 'background' && prop !== 'backgroundOverlay',
})<{ background?: string; backgroundOverlay?: string }>`
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
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  transition: all 0.3s ease;
  text-decoration: none !important;
  overflow: hidden;
  max-width: 52rem;

  ${({ backgroundOverlay }) =>
    backgroundOverlay &&
    `
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: ${backgroundOverlay};
      mix-blend-mode: hue;
      pointer-events: none;
      z-index: 0;
    }
  `}

  &:hover {
    cursor: pointer;
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 4px 30px rgba(31, 85, 213, 0.2), 0 0 20px rgba(233, 91, 155, 0.2);
    border-color: rgba(255, 255, 255, 0.3);
  }
`;

const CardIcon = styled.img.withConfig({
  shouldForwardProp: (prop) => prop !== 'isWonderlandHandbook' && prop !== 'scale',
})<{ isWonderlandHandbook?: boolean; scale?: number }>`
  width: auto;
  height: auto;
  max-width: 80%;
  max-height: 80%;
  object-fit: contain;
  transform: ${({ isWonderlandHandbook, scale }) => {
    const transforms: string[] = [];
    if (scale && scale !== 1) transforms.push(`scale(${scale})`);
    if (isWonderlandHandbook) transforms.push('translateY(-20px)');
    return transforms.join(' ');
  }};
  margin-top: ${({ isWonderlandHandbook }) => (isWonderlandHandbook ? '15px' : '0')};
`;
