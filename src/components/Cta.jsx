import React from 'react'
import { Link } from 'react-router-dom'
import circleShape from '../assets/images/circle-shape3.svg'

const Cta = () => {
  return (
    <section className='py-76 bg-primary-light_coral relative max-1200:py-84'>
      <img width={200} height={144} src={circleShape} className='absolute z-1 bottom-0 left-0 object-cover object-top h-144 max-1200:h-122' alt="circle shape" />
      <div className="flex justify-between gap-5 items-center max-w-917 w-full px-5 mx-auto z-2 max-1050:max-w-83vw max-670:flex-col max-670:gap-30px max-670:max-w-full">
        <h2 className="text-secondary-dark_green text-center">Ready to get started?</h2>
        <Link to='/contact' className='primary-btn_dark hover:primary-btn_dark-hover py-2.5 px-8 transition-colors'>contact us</Link>
      </div>
    </section>
  )
}

export default Cta