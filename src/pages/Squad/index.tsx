import { DocumentHead } from '~/components/common';
import { SquadSection } from './SquadGrid.tsx/index.js';
import { BackgroundImg, Container } from './Squad.styles';

export function Squad() {
  return (
    <>
      <DocumentHead name='Squad' />
      <BackgroundImg type='3' align='center' />
      <Container>
        <SquadSection />
      </Container>
    </>
  );
}
