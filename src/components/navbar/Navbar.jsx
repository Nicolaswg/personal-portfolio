/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */

import React, { useState } from 'react';
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineBook,
  AiOutlineFundProjectionScreen,
  AiOutlineContacts,
} from 'react-icons/ai';
import './navbar.scss';

const Navbar = () => {
  const [nav, setNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={() => setNav('#')} className={nav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setNav('#about')} className={nav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setNav('#experience')} className={nav === '#experience' ? 'active' : ''}><AiOutlineBook /></a>
      <a href="#portfolio" onClick={() => setNav('#portfolio')} className={nav === '#portfolio' ? 'active' : ''}><AiOutlineFundProjectionScreen /></a>
      <a href="#contact" onClick={() => setNav('#contact')} className={nav === '#contact' ? 'active' : ''}><AiOutlineContacts /></a>
    </nav>
  );
};

export default Navbar;
