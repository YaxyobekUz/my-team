import React from 'react'
import { Link } from 'react-router-dom'
import circleShape from '../assets/images/circle-shape3.svg'

const Cta = () => {
  return (
    <section className='py-76 bg-primary-light_coral relative'>
      <img width={200} height={144} src={circleShape} className='absolute z-1 bottom-0 left-0 object-cover object-top h-144' alt="circle shape" />
      <div className="flex justify-between items-center max-w-917 w-full px-5 mx-auto z-2">
        <h2 className="text-secondary-dark_green">Ready to get started?</h2>
        <Link to='contact' className='primary-btn_dark hover:primary-btn_dark-hover py-2.5 px-8 transition-colors'>contact us</Link>
      </div>
    </section>
  )
}

export default Cta