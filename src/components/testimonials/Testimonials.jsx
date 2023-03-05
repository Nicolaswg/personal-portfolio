/* eslint-disable react/jsx-boolean-value */
import React, { useEffect } from 'react';

// import scroll animation
import Aos from 'aos';

// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';

// slide modules
import { Autoplay, Pagination, Navigation } from 'swiper';

// avatar photo
import avatar1 from '../../assets/partner1.jpg';
import avatar2 from '../../assets/partner2.jpg';
import avatar3 from '../../assets/partner3.jpg';

// main SASS styles
import './testimonials.scss';

// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    avatar: avatar1,
    name: 'Ibrohim Rasulov',
    review: `
      Nicolas is a brilliant software developer and one of the best coding partners I have ever met. He always surprised me with his willingness to help and great support.
      He is also a reliable and punctual person and a mentor who has taught me a lot when I am having blockers.
      I highly recommend my partner as a valuable asset to any organization.
    `,
  },
  {
    id: 2,
    avatar: avatar2,
    name: 'Reem Janina',
    review: `
      Nicolas as a software developer is amazing, helpful person and dedicated to his work. He work always at time, and lase he make amazing styles and final touches to the project.
      As well as he always supply me with updates on what he wanted to do and what he did.
      I really strongly recommend Nicolas to any job he makes his work in a very professional way
    `,
  },
  {
    id: 3,
    avatar: avatar3,
    name: 'Hamza Halilovic',
    review: `
    I highly recommend Nicolas Gonzalez as a candidate for your Junior Software Development position. I have worked with Nicolas as Head of Product at Prifina. 
    While he was working at Prifina, Nicolas has proven to be a very fast learner. He was able to assimilate a complex developing environment in a short amount of time.Additionally, he was able to help others in understanding the hard concepts that our new developers are faced with.
    `,
  },
];
const Testimonials = () => {
  useEffect(() => {
    Aos.init({
      offset: 400,
      duration: 1000,
    });
  }, []);

  return (
    <section id="testimonials" data-aos="fade-right">
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
        {testimonials.map(({
          id, avatar, name, review,
        }) => (
          <SwiperSlide className="testimonial" key={id}>
            <div className="colleagues-avatar">
              <img src={avatar} alt="avatar-img" />
            </div>
            <h5 className="colleague-name">{name}</h5>
            <small className="colleague-review">{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
