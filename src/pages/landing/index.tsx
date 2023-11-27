import HeroSection from './HeroSection';
import LandingContent from './ContentSection';
import Meatadata from '~/components/common/Meatadata';

export default function Landing() {
  return (
    <>
      <Meatadata title='Home' />
      <HeroSection />
      <LandingContent />
    </>
  );
}
