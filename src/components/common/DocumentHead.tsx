import { Helmet } from 'react-helmet';

interface Props {
  name?: string;
  description?: string;
}

export const DocumentHead = ({ name, description }: Props) => {
  return (
    <Helmet>
      <title>{name} - Wonderland</title>
      {description && <meta name='description' content={description} />}
    </Helmet>
  );
};
