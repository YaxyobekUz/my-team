import React from 'react'
import Hero from '../components/IndexHero'
import MainTop from '../components/IndexMainTopSection'
import MainBottom from '../components/IndexMainBottomSection'
import Cta from '../components/Cta'

const Home = () => {
  return (
    <>
      <Hero />
      <MainTop />
      <MainBottom />
      <Cta />
    </>
  )
}

export default Home