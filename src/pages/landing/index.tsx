import HeroSection from './HeroSection';
import LandingContent from './ContentSection';
import Meatadata from '~/components/Meatadata';

export default function Landing() {
  return (
    <>
      <Meatadata title='Home' />
      <HeroSection />
      <LandingContent />
    </>
  );
}
