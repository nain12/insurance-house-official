import React from 'react';

import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import ContactUs from '../ContactUs/ContactUs';
import AboutUs from '../AboutUs/AboutUs';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
      <div style={{ position: 'relative' }}>
      <Header/>
      <Banner/>
      <Services/>
      <Testimonials/>
      <ContactUs/>
      <AboutUs/>
      <Footer/>
      </div>
  )
}

export default Home;
