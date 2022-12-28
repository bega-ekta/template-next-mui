import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

const Document = () => {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script
          id="ze-snippet"
          src="https://static.zdassets.com/ekr/snippet.js?key=cd0d8030-b637-4b51-b564-deaed9a5cf16"
          strategy="lazyOnload"
        />
      </body>
    </Html>
  );
};

export default Document;
