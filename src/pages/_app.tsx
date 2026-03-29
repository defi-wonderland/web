import '~/app/globals.css';

import { AppProps } from 'next/app';
import Script from 'next/script';
import styled from 'styled-components';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

import StarsBackground from '~/containers/StarsBackground';
import Navbar from '~/containers/Navbar';
import Footer from '~/containers/Footer';
import { MOBILE_MAX_WIDTH } from '~/components';
import StyledPageView from '~/components/StyledPageView';
import { ErrorBoundary } from '~/components/ErrorBoundary';
import { useRouter } from 'next/router';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const noLayoutPages = ['/join'];

  return (
    <ErrorBoundary resetKey={router.asPath}>
      <StyledPageView>
        <Script src='https://www.googletagmanager.com/gtag/js?id=AW-18050101287' strategy='afterInteractive' />
        <Script id='google-tag' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18050101287');
          `}
        </Script>
        <SkipLink href='#main-content'>Skip to main content</SkipLink>
        <StarsBackground />
        {!noLayoutPages.includes(router.pathname) && <Navbar pathname={router.pathname} />}
        <StyledPageContent id='main-content'>
          <Component {...pageProps}></Component>
          <SpeedInsights />
          <Analytics />
        </StyledPageContent>
        {!noLayoutPages.includes(router.pathname) && <Footer />}
      </StyledPageView>
    </ErrorBoundary>
  );
};

export default MyApp;

const SkipLink = styled.a`
  position: absolute;
  top: -100%;
  left: 1rem;
  z-index: 9999;
  padding: 0.8rem 1.6rem;
  background: var(--background-surface-primary);
  color: var(--text-light);
  font-size: 1.4rem;
  border: 1px solid var(--brand-golden-500);
  border-radius: 0.4rem;
  text-decoration: none;

  &:focus {
    top: 1rem;
  }
`;

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
