import { SquadSection } from './SquadGrid.tsx/index.js';
import { BackgroundImg, Container } from './Squad.styles';

export function Squad() {
  return (
    <>
      <BackgroundImg type='3' align='center' />
      <Container>
        <SquadSection />
      </Container>
    </>
  );
}
