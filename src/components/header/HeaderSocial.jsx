/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs';

const HeaderSocial = () => (
  <div className="header-socials">
    <a href="https://www.linkedin.com/in/nicolas-gb/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
    <a href="https://github.com/Nicolaswg" target="_blank" rel="noreferrer"><BsGithub /></a>
    <a href="https://twitter.com/Nicolas54146830" target="_blank" rel="noreferrer"><BsTwitter /></a>
  </div>
);

export default HeaderSocial;
