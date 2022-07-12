import React from 'react';
import { ToastContainer } from 'react-toastify';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Experiences from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => (
  <>
    <ToastContainer
      position="top-right"
      autoClose={2000}
      theme="dark"
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover
    />
    <Header />
    <Navbar />
    <About />
    <Experiences />
    <Portfolio />
    <Testimonials />
    <Contact />
    <Footer />
  </>
);

export default App;
