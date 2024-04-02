import Head from 'next/head';
import React from "react";


type NextHeadProps = {
  title: string;
};

const NextHead: React.FC<NextHeadProps> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="title" content={title} key="title" />
        <meta property={"description"} content={"Experienced Front-end Engineer with over 4 years of hands-on experience specializing in React and Next.js development. Passionate about creating efficient and user-friendly web applications, I have a proven track record of delivering high-quality code and collaborating effectively with cross-functional teams. Let's connect and discuss how I can contribute to your next project!"} key={"description"}/>
    </Head>
  );
};

export default NextHead;