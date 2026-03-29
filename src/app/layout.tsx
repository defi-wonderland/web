import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import ConsoleArt from './ConsoleArt';

export const metadata: Metadata = {
  title: 'Wonderland',
  description:
    'Wonderland focuses on foundational engineering for frontier Web3 technologies, with deep expertise in applied cryptography.',
  keywords: 'Wonderland, Defi, decentralized finance, activist fund, ethereum, solidity, devs',
  robots: 'index, follow',
  openGraph: {
    images: 'https://wonderland.xyz/share.jpg',
    url: 'https://wonderland.xyz/',
    type: 'website',
    title: 'Wonderland',
    description:
      'Wonderland focuses on foundational engineering for frontier Web3 technologies, with deep expertise in applied cryptography.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <Script src='https://www.googletagmanager.com/gtag/js?id=AW-18050101287' strategy='afterInteractive' />
        <Script id='google-tag' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18050101287');
          `}
        </Script>
        <ConsoleArt />
        {children}
      </body>
    </html>
  );
}
