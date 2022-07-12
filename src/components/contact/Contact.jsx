import React, { useRef } from 'react';
import './contact.scss';
import { MdOutlineEmail } from 'react-icons/md';
import { FiTwitter } from 'react-icons/fi';
import { BsWhatsapp } from 'react-icons/bs';

// emailjs import
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l7n9dy7', 'template_si53zjn', form.current, 'WKP49x0YLkHw8mjLj')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdOutlineEmail className="contact-icon" />
            <h4>Email</h4>
            <h5>nigonbol123@gmail.com</h5>
            <a href="mailto:nigonbol123@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact-option">
            <FiTwitter className="contact-icon" />
            <h4>Twitter</h4>
            <h5>@Nicolas54146830</h5>
            <a href="https://twitter.com/messages/compose?recipient_id=@Nicolas54146830" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact-option">
            <BsWhatsapp className="contact-icon" />
            <h4>WhatsApp</h4>
            <a href="https://wa.me/584140329952" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required />
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
