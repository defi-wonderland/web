import HeroSection from './HeroSection';
import LandingContent from './ContentSection';
import HandbooksSection from './HandbooksSection';
import CustomHead from '~/components/CustomHead';
import { ContentContainer } from '~/components';

export default function Landing() {
  return (
    <>
      <CustomHead title='Home' />

      <ContentContainer>
        <HeroSection />
        <LandingContent />
        <HandbooksSection />
      </ContentContainer>
    </>
  );
}
