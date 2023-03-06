import { WonderTeamSection } from './TeamGrid.tsx';
import { BackgroundImg, Container, HeroDivider, TeamBall } from './Team.styles';
import { LiquidDistortion, MainTitle } from '~/components/common';
import { useWindowDimensions } from '~/hooks/windowDimensions';

export function Team() {
  const { isMobile } = useWindowDimensions();

  return (
    <>
      <BackgroundImg type='3' align='center' />
      <Container>
        <HeroDivider>
          {!isMobile && (
            <>
              <LiquidDistortion text='WOND3RLAND IS NOT A PLACE,' fontSize={140} />
              <LiquidDistortion text="IT'S A FEELING WITHIN, A PROCESS." fontSize={140} />
            </>
          )}

          {isMobile && (
            <>
              <MainTitle fontSize={4.8}>WOND3RLAND IS NOT A PLACE,</MainTitle>
              <MainTitle fontSize={4.8}>IT&apos;S A FEELING WITHIN, A PROCESS</MainTitle>
            </>
          )}
          <TeamBall />
        </HeroDivider>
        <WonderTeamSection />
      </Container>
    </>
  );
}
