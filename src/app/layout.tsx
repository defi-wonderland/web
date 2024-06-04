import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wonderland',
  description:
    'Wonderland is the largest core development group in Web3. We partner up with the best protocols in the world, including, among others: Optimism, Everclear, and Reflexer.',
  keywords: 'Wonderland, Defi, decentralized finance, activist fund, ethereum, solidity, devs',
  robots: 'index, follow',
  openGraph: {
    images: 'https://defi.sucks/share.jpg',
    url: 'https://defi.sucks',
    type: 'website',
    title: 'Wonderland',
    description:
      'Wonderland is the largest core development group in Web3. We partner up with the best protocols in the world, including, among others: Optimism, Everclear, and Reflexer.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
