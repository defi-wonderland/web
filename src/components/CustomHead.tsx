import Head from 'next/head';

interface MetadataProps {
  title: string;
  description?: string;
  image?: string;
  type?: string;
}

const CustomHead = ({ title, description, image, type }: MetadataProps) => {
  const descriptionText = description
    ? description
    : 'Wonderland is the largest core development group in Web3. We partner up with the best protocols in the world, including, among others: Optimism, Connext, and Reflexer.';

  return (
    <Head>
      <title>{`${title} - Wonderland`}</title>
      <link rel='icon' href='/favicon.ico' type='image/x-icon' sizes='48x48' />
      <meta name='description' content={descriptionText} />
      <meta name='author' content='Wonderland' />
      <meta
        name='keywords'
        content='Wonderland, Defi, decentralized finance, activist fund, ethereum, solidity, devs'
      />
      <meta name='robots' content='index, follow' />
      <meta property='og:url' content='https://defi.sucks' />
      <meta property='og:type' content={type || 'website'} />
      <meta property='og:title' content={`${title} - Wonderland`} />
      <meta property='og:description' content={descriptionText} />
      <meta property='og:image' content={image || 'share.jpg'} />
    </Head>
  );
};

export default CustomHead;
