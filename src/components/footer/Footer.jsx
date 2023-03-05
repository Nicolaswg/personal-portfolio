/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
import './footer.scss';

const Footer = () => (
  <footer>
    <a href="#" className="footer-logo">
      My logo
    </a>
    <ul className="permalinks">
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#experience">Experience</a>
      </li>
      <li>
        <a href="#portfolio">Portfolio</a>
      </li>
      <li>
        <a href="#testimonials">Testimonials</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>

    <div className="footer-socials">
      <a
        href="https://www.linkedin.com/in/nicolas-gb/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Nicolaswg" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a
        href="https://twitter.com/Nicolas54146830"
        target="_blank"
        rel="noreferrer"
      >
        <BsTwitter />
      </a>
    </div>

    <div className="footer-copyright">
      <small>&copy; Just404. All rights reserved.</small>
    </div>
  </footer>
);

export default Footer;
