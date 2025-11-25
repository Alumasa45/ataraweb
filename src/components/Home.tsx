import React from 'react';
import Hero from './Hero';
import Pillars from './Pillars';
import Community from './Community';
import MatAwaits from './MatAwaits';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Pillars />
      <Community />
      <MatAwaits />
    </>
  );
};

export default Home;