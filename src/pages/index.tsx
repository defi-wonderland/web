import HeroSection from './landing/HeroSection';
import LandingContent from './landing/ContentSection';
import HandbooksSection from './landing/HandbooksSection';
import CustomHead from '~/components/CustomHead';
import { ContentContainer } from '~/components';

export default function Home() {
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
