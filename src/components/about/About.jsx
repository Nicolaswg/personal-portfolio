import React from 'react';
import { FaAward, FaUserFriends, FaProjectDiagram } from 'react-icons/fa';
import PHOTO from '../../assets/me-about.jpg';
import './about.scss';

const About = () => (
  <section id="about">
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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Dolor ad provident libero nesciunt mollitia qui.
          Delectus quibusdam nisi rem tenetur possimus,
          officia dolor, accusantium doloremque molestiae,
          nihil aliquam autem expedita?

        </p>
        <a href="#contact" className="btn btn-primary">Let&apos;s talk</a>
      </div>
    </div>
  </section>
);

export default About;
