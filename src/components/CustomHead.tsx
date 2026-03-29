import Head from 'next/head';

interface MetadataProps {
  title: string;
  description?: string;
  image?: string;
  type?: string;
  url?: string;
}

const BASE_URL = 'https://wonderland.xyz';
const DEFAULT_DESCRIPTION =
  'Wonderland focuses on foundational engineering for frontier Web3 technologies, with deep expertise in applied cryptography.';

const CustomHead = ({ title, description, image, type, url }: MetadataProps) => {
  const descriptionText = description || DEFAULT_DESCRIPTION;
  const pageUrl = url || `${BASE_URL}/`;
  const pageImage = image || `${BASE_URL}/share.jpg`;
  const pageTitle = `${title} - Wonderland`;

  return (
    <Head>
      <title>{pageTitle}</title>
      <link rel='canonical' href={pageUrl} />
      <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
      <link rel='icon' href='/favicon.ico' sizes='any' />
      <meta name='description' content={descriptionText} />
      <meta name='author' content='Wonderland' />
      <meta
        name='keywords'
        content='Wonderland, Defi, decentralized finance, activist fund, ethereum, solidity, devs'
      />
      <meta name='robots' content='index, follow' />
      <meta property='og:url' content={pageUrl} />
      <meta property='og:type' content={type || 'website'} />
      <meta property='og:title' content={pageTitle} />
      <meta property='og:description' content={descriptionText} />
      <meta property='og:image' content={pageImage} />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@Wonderland' />
      <meta name='twitter:creator' content='@Wonderland' />
      <meta name='twitter:title' content={pageTitle} />
      <meta name='twitter:description' content={descriptionText} />
      <meta name='twitter:image' content={pageImage} />
    </Head>
  );
};

export default CustomHead;
