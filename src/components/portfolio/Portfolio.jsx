import React from 'react';
import './portfolio.scss';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.jpg';
import IMG6 from '../../assets/portfolio6.jpg';

const cards = [
  {
    id: 1,
    img: IMG1,
    title: 'Crypto Coins',
    github: 'https://github.com/Nicolaswg/crypto-capstone-project',
    demo: 'https://nostalgic-boyd-fed032.netlify.app/',
  },
  {
    id: 2,
    img: IMG2,
    title: 'Space Travelers',
    github: 'https://github.com/Nicolaswg/space-travelers-project',
    demo: 'https://space-travelers-react.herokuapp.com',
  },
  {
    id: 3,
    img: IMG3,
    title: 'Budget App',
    github: 'https://github.com/Nicolaswg/budget-app',
    demo: 'https://budget-capstone-1.herokuapp.com',
  },
  {
    id: 4,
    img: IMG4,
    title: 'Pokemon List',
    github: 'https://github.com/Nicolaswg/Capstone_Pokemon_Api',
    demo: 'https://nicolaswg.github.io/Capstone_Pokemon_Api/',
  },
  {
    id: 5,
    img: IMG5,
    title: 'RentUrTech',
    github: 'https://github.com/Final-Capstone-Elite-Group/RentUrTechFrontend',
    demo: 'https://renturtech.netlify.app',
  },
  {
    id: 6,
    img: IMG6,
    title: 'Do List',
    github: 'https://github.com/Nicolaswg/Do-List-Project',
    demo: 'https://nicolaswg.github.io/Do-List-Project/',
  },
];

const Portfolio = () => (
  <section id="portfolio">
    <h5>My Personal Repos</h5>
    <h2>Portfolio</h2>
    <div className="container portfolio-container">
      {
      cards.map(({
        id, img, title, github, demo,
      }) => (
        <article className="portfolio-item" key={id}>
          <div className="portfolio-img">
            <img src={img} alt="port-img" />
          </div>
          <h3>{title}</h3>
          <div className="portfolio-cta">
            <a href={github} className="btn" target="_blank" rel="noreferrer">Code</a>
            <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        </article>
      ))
      }
    </div>
  </section>
);

export default Portfolio;
