import React from 'react';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';
import ContactUs from './components/ContactUs/ContactUs';
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';

import './App.scss';

function App () {
  return (
    <div>
      <Header/>
      <Banner/>
      <Services/>
      <Testimonials/>
      <ContactUs/>
      <AboutUs/>
      <Footer/>
    </div>
  );
}

export default App;
