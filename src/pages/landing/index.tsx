import HeroSection from './HeroSection';
import LandingContent from './ContentSection';
import CustomHead from '~/components/CustomHead';

export default function Landing() {
  return (
    <>
      <CustomHead title='Home' />
      <HeroSection />
      <LandingContent />
    </>
  );
}
