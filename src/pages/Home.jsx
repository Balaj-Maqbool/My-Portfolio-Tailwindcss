import React, { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen.jsx';  // adjust path if needed

// your other imports
import StarBackground from "../components/BackGround.jsx"
import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import Skills from '../components/Skills.jsx';
import Projects from '../components/Projects.jsx';
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx';
import BackToTop from '../components/BackToTop.jsx';


const Home = () => {
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    // Simulate loading for 5 seconds, then hide loading screen
    const timer = setTimeout(() => setShowLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoading && <LoadingScreen showLoading={showLoading} setShowLoading={setShowLoading} />}

      {!showLoading && (
        <div className='min-h-screen text-text font-family overflow-hidden'>
          <StarBackground />
          <header>
            <Navbar />
          </header>
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <footer>
            <Footer />
          </footer>
          <BackToTop />
        </div>
      )}
    </>
  );
};

export default Home;
