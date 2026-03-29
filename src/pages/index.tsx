import HeroSection from './landing/HeroSection';
import LandingContent from './landing/ContentSection';
import HandbooksSection from './landing/HandbooksSection';
import CustomHead from '~/components/CustomHead';
import { ContentContainer } from '~/components';

export default function Home() {
  return (
    <>
      <CustomHead
        title='Home'
        url='https://wonderland.xyz/'
        description='Wonderland focuses on foundational engineering for frontier Web3 technologies, with deep expertise in applied cryptography.'
      />
      <ContentContainer>
        <HeroSection />
        <LandingContent />
        <HandbooksSection />
      </ContentContainer>
    </>
  );
}
