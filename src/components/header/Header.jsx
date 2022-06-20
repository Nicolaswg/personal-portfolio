import React from 'react';
import CTA from './CTA';
import PHOTO from '../../assets/me.png';
import HeaderSocial from './HeaderSocial';
import './header.scss';

const Header = () => (
  <header>
    <div className="container header-container">
      <h5>Hello I&apos;m</h5>
      <h1>Nicolas Gonzalez</h1>
      <h5 className="text-light">Fullstack Developer</h5>
      <CTA />

      <HeaderSocial />
      <div className="photo-header">
        <img src={PHOTO} alt="header-img" />
      </div>
      <a href="#contact" className="scroll-down">Scroll Down</a>
    </div>
  </header>
);

export default Header;
