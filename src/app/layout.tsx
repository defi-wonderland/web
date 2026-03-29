import './globals.css';
import type { Metadata } from 'next';
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
        <ConsoleArt />
        {children}
      </body>
    </html>
  );
}
