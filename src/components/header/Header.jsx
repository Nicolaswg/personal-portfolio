/* eslint-disable max-len */
import React, { useEffect, useRef } from 'react';
import { Fade, Zoom } from 'react-reveal';
import Typed from 'typed.js';
import CTA from './CTA';
// import PHOTO from '../../assets/me.png';
import HeaderSocial from './HeaderSocial';
import './header.scss';

const Header = () => {
  const typeTarget = useRef(null);

  useEffect(() => {
    const typed = new Typed(typeTarget.current, {
      strings: ['I\'m a ^1000 team player', 'I\'m a ^1000 coding lover', 'I\'m a ^1000 fast learner', 'I\'m a ^1000 problem solver', 'I\'m a ^1000 coffee lover'],
      smartBackspace: true,
      loop: true,
      typeSpeed: 50,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
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
          <div className="header-text-area">
            <h2>
              <span ref={typeTarget} />
            </h2>
          </div>
          <a href="#contact" className="scroll-down">
            Scroll Down
          </a>
        </div>
      </header>
    </Zoom>
  );
};
export default Header;
