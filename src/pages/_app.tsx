import '~/app/globals.css';

import { AppProps } from 'next/app';
import styled from 'styled-components';

import StarsBackground from '~/containers/StarsBackground';
import Navbar from '~/containers/Navbar';
import Footer from '~/containers/Footer';
import { MOBILE_MAX_WIDTH } from '~/components';
import StyledPageView from '~/components/StyledPageView';
import { useRouter } from 'next/router';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  return (
    <StyledPageView>
      <StarsBackground />
      <Navbar pathname={router.pathname} />
      <StyledPageContent>
        <Component {...pageProps}></Component>
      </StyledPageContent>
      <Footer />
    </StyledPageView>
  );
};

export default MyApp;

const StyledPageContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow: hidden;
  min-height: 100vh;

  @media screen and (max-width: ${MOBILE_MAX_WIDTH}) {
    padding-bottom: 6rem;
  }
`;
