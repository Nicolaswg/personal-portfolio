import React from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';
import './experience.scss';

const Experience = () => (
  <section id="experience">
    <h5>see all my skills</h5>
    <h2>My experience</h2>
    <div className="container experience-container">
      <div className="stacks">
        <h3>Frontend Development</h3>
        <div className="experience-content">
          <article className="experience-details">
            <BsPatchCheckFill />
            <div>
              <h4>HTML</h4>
              <small className="text-light">2+ Years</small>
            </div>
          </article>
          <article className="experience-details">
            <BsPatchCheckFill />
            <div>
              <h4>CSS</h4>
              <small className="text-light">2+ Years</small>
            </div>
          </article>
          <article className="experience-details">
            <BsPatchCheckFill />
            <div>
              <h4>SASS</h4>
              <small className="text-light">1+ Years</small>
            </div>
          </article>
          <article className="experience-details">
            <BsPatchCheckFill />
            <div>
              <h4>JavaScript</h4>
              <small className="text-light">2+ Years</small>
            </div>
          </article>
          <article className="experience-details">
            <BsPatchCheckFill />
            <div>
              <h4>React</h4>
              <small className="text-light">1+ Years</small>
            </div>
          </article>
          <article className="experience-details">
            <BsPatchCheckFill />
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
            <BsPatchCheckFill />
            <div>
              <h4>Ruby</h4>
              <small className="text-light">1+ Years</small>
            </div>
          </article>
          <article className="experience-details">
            <BsPatchCheckFill />
            <div>
              <h4>Ruby on Rails</h4>
              <small className="text-light">1+ Years</small>
            </div>
          </article>
          <article className="experience-details">
            <BsPatchCheckFill />
            <div>
              <h4>Postgresql</h4>
              <small className="text-light">1+ Years</small>
            </div>
          </article>
          <article className="experience-details">
            <BsPatchCheckFill />
            <h4>Rspec</h4>
            <small className="text-light">1+ Years</small>
          </article>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
