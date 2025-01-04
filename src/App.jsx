import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Features from './Components/Features/Features';
import AboutUs from './Components/AboutUs/AboutUs';
import Services from './Components/Services/Services';
import FormSection from './Components/login-signup/FormSection';
import Footer from './Components/Footer/Footer';
import AuthModal from './Components/AuthModel/AuthModal';
import AboutExt from './Components/AboutUs/About-Ext'
import './App.css';

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <AboutUs />
      <Services />
      <FormSection />
      <Footer />
      <AuthModal />
      <AboutExt />
      
    </div>
  );
}

export default App;
