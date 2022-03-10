import React from 'react';
import './header.css';

import CTA from './CTA';

import ME from '../../asset/me.png';

import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header id='header'>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Badger Vandals</h1>
        <h5 className="text-light">Full Stack Developer</h5>  
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="" className='img' /></div>
      </div>

      <a href="#contact" className='scroll__down'>Scroll Down</a>


    </header>
  )
}

export default Header