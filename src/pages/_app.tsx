import '../app/globals.css';

import { AppProps } from 'next/app';

import StarsBackground from '~/containers/StarsBackground';
import Navbar from '~/containers/Navbar';
import Footer from '~/containers/Footer';

import styled from 'styled-components';
import { MOBILE_MAX_WIDTH } from '~/components/common';
import StyledPageView from '~/components/common/StyledPageView';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <StyledPageView>
      <StarsBackground />
      <Navbar />
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
