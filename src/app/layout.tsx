import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wonderland',
  description:
    'Wonderland is the leading core development group in Web3. We partner up with the best protocols in the world, including, among others: Optimism, Everclear, and Reflexer.',
  keywords: 'Wonderland, Defi, decentralized finance, activist fund, ethereum, solidity, devs',
  robots: 'index, follow',
  openGraph: {
    images: 'https://wonderland.xyz/share.jpg',
    url: 'https://wonderland.xyz/',
    type: 'website',
    title: 'Wonderland',
    description:
      'Wonderland is the leading core development group in Web3. We partner up with the best protocols in the world, including, among others: Optimism, Everclear, and Reflexer.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.svg' type='image/svg+xml' sizes='any' />
        <link rel='icon' href='/favicon.ico' sizes='64x64' />
      </head>
      <body>{children}</body>
    </html>
  );
}
