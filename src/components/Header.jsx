import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/images/myteam-logo.svg';

const Header = () => {
  return (
    <header className='text-white pt-70'>
      <div className="flex container items-center justify-between">
        {/* logo  */}
        <Link className='rounded-sm focus:outline-offset-4' to='/'>
          <img width={160} height={40} src={Logo} alt="my team logo, header logo" />
        </Link>
        {/* navbar menu  */}
        <nav className='flex items-center justify-between w-full leading-7 ml-20'>
          <ul className='flex items-center space-x-10'>
            <li>
              <NavLink className={'hover:text-primary-light_coral transition-colors text-18 rounded-sm'} to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink className={'hover:text-primary-light_coral transition-colors text-18 rounded-sm'} to='about'>About</NavLink>
            </li>
          </ul>
          <NavLink className={'primary-btn_light hover:primary-btn_light-hover transition-colors'} to='contact'>contact us</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header