import React, { useEffect } from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';
import Aos from 'aos';
import './experience.scss';

const Experience = () => {
  useEffect(() => {
    Aos.init({
      offset: 400,
      duration: 1000,
    });
  }, []);
  return (
    <section id="experience" data-aos="fade-right">
      <h5>see all my skills</h5>
      <h2>My experience</h2>
      <div className="container experience-container">
        <div className="stacks">
          <h3>Frontend Development</h3>
          <div className="experience-content">
            <article className="experience-details">
              <BsPatchCheckFill className="experience-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">2+ Years</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">2+ Years</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-icon" />
              <div>
                <h4>SASS</h4>
                <small className="text-light">1+ Years</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">2+ Years</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">1+ Years</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-icon" />
              <div>
                <h4>Boostrap</h4>
                <small className="text-light">1+ Years</small>
              </div>
            </article>
          </div>
        </div>
        <div className="stacks">
          <h3>Backend Development</h3>
          <div className="experience-content">
            <article className="experience-details">
              <BsPatchCheckFill className="experience-icon" />
              <div>
                <h4>Node.js</h4>
                <small className="text-light">1+ Years</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-icon" />
              <div>
                <h4>Express.js</h4>
                <small className="text-light">6+ months</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-icon" />
              <div>
                <h4>Postgresql</h4>
                <small className="text-light">1+ Years</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-icon" />
              <div>
                <h4>MongoDb</h4>
                <small className="text-light">6+ months</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
