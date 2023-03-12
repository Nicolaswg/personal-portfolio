import React, { useEffect } from 'react';
import { FaAward, FaUserFriends, FaProjectDiagram } from 'react-icons/fa';
import Aos from 'aos';
import PHOTO from '../../assets/code-about.jpg';
import './about.scss';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    Aos.init({
      offset: 400,
      duration: 1000,
    });
  }, []);
  return (
    <section id="about" data-aos="fade-left">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={PHOTO} alt="about me" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward className="about-icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article className="about-card">
              <FaUserFriends className="about-icon" />
              <h5>Connections</h5>
              <small>230+ Worldwide</small>
            </article>
            <article className="about-card">
              <FaProjectDiagram className="about-icon" />
              <h5>Projects</h5>
              <small>50+ Completed</small>
            </article>
          </div>
          <p>
            Passionate about devising, developing,
            and producing products focused on customer demands.
            Open to exploring exciting full-stack development opportunities in startups,
            and generating input on business scalability.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let&apos;s talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
