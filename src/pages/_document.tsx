import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Wonderland',
  url: 'https://wonderland.xyz',
  logo: 'https://wonderland.xyz/favicon.svg',
  description:
    'Wonderland focuses on foundational engineering for frontier Web3 technologies, with deep expertise in applied cryptography.',
  sameAs: ['https://twitter.com/Wonderland', 'https://github.com/defi-wonderland'],
};

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta name='theme-color' content='#0e152c' />
          <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
