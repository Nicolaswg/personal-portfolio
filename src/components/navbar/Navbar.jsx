/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineBook,
  AiOutlineFundProjectionScreen,
  AiOutlineContacts,
} from 'react-icons/ai';
import './navbar.scss';

const Navbar = () => (
  <nav>
    <a href="#" className="active"><AiOutlineHome /></a>
    <a href="#about"><AiOutlineUser /></a>
    <a href="#experience"><AiOutlineBook /></a>
    <a href="#portfolio"><AiOutlineFundProjectionScreen /></a>
    <a href="#contact"><AiOutlineContacts /></a>
  </nav>
);

export default Navbar;
