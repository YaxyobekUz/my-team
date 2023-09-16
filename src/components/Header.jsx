import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/images/myteam-logo.svg';

const Header = () => {
  return (
    <header className='text-white py-73'>
      <div className="flex container items-center justify-between">
        {/* logo  */}
        <Link to='/'>
          <img className='mr-20' width={160} height={40} src={Logo} alt="my team logo, header logo" />
        </Link>
        {/* navbar menu  */}
        <nav className='flex items-center justify-between w-full leading-7'>
          <ul className='flex items-center space-x-10'>
            <li>
              <NavLink className={'hover:text-primary-light_coral transition-colors'} to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink className={'hover:text-primary-light_coral transition-colors'} to='about'>About</NavLink>
            </li>
          </ul>
          <NavLink className={'primary-btn_light hover:primary-btn_light-hover transition-colors'} to='contact'>contact us</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header