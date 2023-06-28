import { WonderTeamSection } from './TeamGrid.tsx';
import { BackgroundImg, Container } from './Team.styles';

export function Team() {
  return (
    <>
      <BackgroundImg type='3' align='center' />
      <Container>
        <WonderTeamSection />
      </Container>
    </>
  );
}
