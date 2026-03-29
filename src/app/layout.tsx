import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import ConsoleArt from './ConsoleArt';

export const metadata: Metadata = {
  title: 'Wonderland',
  description:
    'Wonderland is the leading core development group in Web3. We partner up with the best protocols in the world, including, among others: Optimism, Aztec, and Aerodrome.',
  keywords: 'Wonderland, Defi, decentralized finance, activist fund, ethereum, solidity, devs',
  robots: 'index, follow',
  openGraph: {
    images: 'https://wonderland.xyz/share.jpg',
    url: 'https://wonderland.xyz/',
    type: 'website',
    title: 'Wonderland',
    description:
      'Wonderland is the leading core development group in Web3. We partner up with the best protocols in the world, including, among others: Optimism, Aztec, and Aerodrome.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.svg' type='image/svg+xml' sizes='any' />
        <link rel='icon' href='/favicon.ico' sizes='64x64' />
      </head>
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
