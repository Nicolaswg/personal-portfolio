import React from 'react';
import CTA from './CTA';
import './header.scss';

const Header = () => (
  <header>
    <div className="container header-container">
      <h5>Hello I&apos;m</h5>
      <h1>Nicolas Gonzalez</h1>
      <h5 className="text-light">Fullstack Developer</h5>
      <CTA />
    </div>
  </header>
);

export default Header;
