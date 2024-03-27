import Head from 'next/head';
import React from 'react';

type NextHeadProps = {
  title: string;
};

const NextHead: React.FC<NextHeadProps> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} key="title" />
    </Head>
  );
};

export default NextHead;