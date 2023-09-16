import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Cta from '../components/Cta'
import Footer from '../components/Footer'

const MainRoot = () => {
  return (
    <div className='min-h-screen'>
      <Header />
      <main className='grow'>
        <Outlet />
      </main>
      <Cta />
      <Footer />
    </div>
  )
}

export default MainRoot