import Head from 'next/head';
import React from 'react';

interface SEOProps {
  title?: string;
}

const SEO: React.FC<SEOProps> = ({ title }) => {
  const pageTitle = title ? `${title} | Ekta` : `Ekta`;

  return (
    <Head>
      <title>{pageTitle}</title>
    </Head>
  );
};
export default SEO;
