import React from 'react';
import Head from 'next/head';

import Logo from '../assets/logo.svg';

import { Container } from '../styles/pages/Home';

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <Logo />
      <h1>ReactJS Structure</h1>
      <p>A ReactJS + Next.js structure</p>
    </Container>
  );
};

export default Home;
