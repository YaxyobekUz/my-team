import React from 'react';
import Hero from '../components/AboutPageHero';
import DirectorsInfo from '../components/AboutPageDirectorsInfo';
import ClientsInfo from '../components/AboutPageClientsInfo';
import Cta from '../components/Cta';

const About = () => {
  return (
    <>
      <Hero />
      <DirectorsInfo />
      <ClientsInfo />
      <Cta />
    </>
  )
};

export default About