import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/images/myteam-logo.svg';

const Header = () => {
  const [active, setActive] = useState(false);

  const toggleButton = () => {
    setActive(!active);
  }
  return (
    <header className='text-white pt-70'>
      <div className="flex container items-center justify-between">
        {/* logo  */}
        <Link className='rounded-sm focus:outline-offset-4' to='/'>
          <img width={160} height={40} src={Logo} alt="my team logo, header logo" />
        </Link>
        {/* filter */}
        <div onClick={toggleButton} className={`${active ? 'block' : 'hidden'} fixed right-0 bottom-0 min-w-full min-h-screen z-5 bg-opacity-6 bg-black`}></div>
        {/* navbar menu  */}
        <nav className={`flex ${active ? 'max-640:translate-x-0' : 'max-640:translate-x-full'} homepage-navbar items-center justify-between w-full leading-7 ml-20 max-640:bg-secondary-police_blue max-640:fixed max-640:h-screen max-640:w-265 z-10 max-640:flex-col max-640:top-0 max-640:right-0 max-640:justify-start max-640:pt-28 max-640:pl-12 max-640:items-start`}>
          <ul className='flex items-center space-x-10 max-640:flex-col max-640:space-x-0 max-640:space-y-6 max-640:mb-9'>
            <li>
              <NavLink className={'hover:text-primary-light_coral transition-colors text-18 rounded-sm'} to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink className={'hover:text-primary-light_coral transition-colors text-18 rounded-sm'} to='about'>About</NavLink>
            </li>
          </ul>
          <NavLink className={'primary-btn_light hover:primary-btn_light-hover transition-colors'} to='contact'>contact us</NavLink>
        </nav>
        {/* hamburger btn  */}
        <button onClick={toggleButton} className={`max-640:flex z-20 hidden outline-[transparent!important] flex-col hamburger-btn items-center justify-center relative w-20px h-17 ${active ? 'hamburger-btn_active' : ''}`}>
          <span className="inline-block absolute w-full h-3px bg-white"></span>
          <span className="inline-block absolute w-full h-3px bg-white"></span>
          <span className="inline-block absolute w-full h-3px bg-white"></span>
        </button>
      </div>
    </header>
  )
}

export default Header