import React from 'react';
import CV from '../../assets/resume.pdf';

const CTA = () => (
  <div className="cta">
    <a href={CV} download className="btn">Download CV</a>
    <a href="#contact" className="btn btn-primary">Send me a messages</a>
  </div>
);

export default CTA;
