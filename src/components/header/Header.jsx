import React from 'react';
import { Fade, Zoom } from 'react-reveal';
import CTA from './CTA';
import PHOTO from '../../assets/me.png';
import HeaderSocial from './HeaderSocial';
import './header.scss';

const Header = () => (
  <Zoom>
    <header>
      <div className="container header-container">
        <Fade left>
          <h5>Hello I&apos;m</h5>
        </Fade>
        <Fade right>
          <h1>Nicolas Gonzalez</h1>
        </Fade>
        <Fade left>
          <h5 className="text-light">Fullstack Developer</h5>
        </Fade>
        <CTA />

        <HeaderSocial />
        <div className="photo-header">
          <img src={PHOTO} alt="header-img" />
        </div>
        <a href="#contact" className="scroll-down">Scroll Down</a>
      </div>
    </header>
  </Zoom>
);

export default Header;
