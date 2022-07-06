/* eslint-disable react/jsx-boolean-value */
import React from 'react';

// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';

// Modules
import { Autoplay, Pagination, Navigation } from 'swiper';

// Avatar photo
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';

// Main SASS styles
import './testimonials.scss';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    avatar: AVTR1,
    name: 'Ibrohim Rasulov',
    review:
    `
      Nicolas is a brilliant software developer and one of the best coding partners I have ever met. He always surprised me with his willingness to help and great support.
      He is also a reliable and punctual person and a mentor who has taught me a lot when I am having blockers.
      I highly recommend my partner as a valuable asset to any organization.
    `,
  },
  {
    id: 2,
    avatar: AVTR2,
    name: 'Reem Janina',
    review:
    `
      Nicolas as a software developer is amazing, helpful person and dedicated to his work. He work always at time, and lase he make amazing styles and final touches to the project.
      As well as he always supply me with updates on what he wanted to do and what he did.
      I really strongly recommend Nicolas to any job he makes his work in a very professional way
    `,
  },
  {
    id: 3,
    avatar: AVTR1,
    name: 'Ibrohim Rasulov',
    review:
    `
    Nicolas is a brilliant software developer and one of the best coding partners I have ever met. He always surprised me with his willingness to help and great support.
    He is also a reliable and punctual person and a mentor who has taught me a lot when I am having blockers.
    I highly recommend my partner as a valuable asset to any organization.
    `,
  },
  {
    id: 4,
    avatar: AVTR2,
    name: 'Reem Janina',
    review:
    `
      Nicolas as a software developer is amazing, helpful person and dedicated to his work. He work always at time, and lase he make amazing styles and final touches to the project.
      As well as he always supply me with updates on what he wanted to do and what he did.
      I really strongly recommend Nicolas to any job he makes his work in a very professional way
    `,
  },
];
const Testimonials = () => (
  <section id="testimonials">
    <h5>Review from colleagues</h5>
    <h2>Testimonials</h2>

    <Swiper
      className="container testimonials-container"
      // install Swiper modules
      spaceBetween={40}
      centeredSlides={true}
      autoplay={{
        delay: 8000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {
        testimonials.map(({
          id, avatar, name, review,
        }) => (
          <SwiperSlide className="testimonial" key={id}>
            <div className="colleagues-avatar">
              <img src={avatar} alt="avatar-img" />
            </div>
            <h5 className="colleague-name">{name}</h5>
            <small className="colleague-review">{review}</small>
          </SwiperSlide>
        ))
      }
    </Swiper>
  </section>
);

export default Testimonials;
