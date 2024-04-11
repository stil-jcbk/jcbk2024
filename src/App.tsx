import React from 'react';
import './App.scss';
import Navbar from './components/navbar/navbar';
import HeroSection from './sections/hero/hero';
import AboutMeSection from './sections/aboutme/aboutme';
import ProjectsSection from './sections/projects/projects';
import ContactSection from './sections/contact/contact';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
      <Navbar/>
      <div className="website-content">
        <HeroSection/>
        <AboutMeSection/>
        <ProjectsSection/>
        <ContactSection/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
