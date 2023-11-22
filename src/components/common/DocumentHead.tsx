import { Helmet } from 'react-helmet';

interface Props {
  name?: string;
  description?: string;
  image?: string;
}

export const DocumentHead = ({ name, description, image }: Props) => {
  return (
    <Helmet>
      <title>{name} - Wonderland</title>
      <meta property='og:url' content={`https://defi.sucks${location.pathname}`} />
      <meta property='og:title' content={`${name} - Wonderland`} />

      {description && <meta name='description' content={description} />}
      {description && <meta property='og:description' content={description} />}
      {image && <meta property='og:image' content={`https://defi.sucks/${image}`} />}
    </Helmet>
  );
};
