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
import { Helmet } from 'react-helmet';


const Home = () => {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => setShowLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>Balaj Maqbool | Web Developer Portfolio</title>
        <meta name="description" content="Welcome to Balaj Maqbool's portfolio. Showcasing real-world projects, skills in React.js, Node.js, MongoDB, Express.js, and Tailwind CSS." />
        <meta name="keywords" content="Balaj Maqbool, portfolio, React developer, web developer, full-stack, Tailwind CSS, Node.js, MongoDB" />
        <meta name="author" content="Balaj Maqbool" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Balaj Maqbool | Web Developer Portfolio" />
        <meta property="og:description" content="Explore my projects and skills as a passionate web developer." />
        <meta property="og:image" content="https://balaj-maqbool-portfolio.vercel.app/preview.png" />
        <meta property="og:url" content="https://balaj-maqbool-portfolio.vercel.app/" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Balaj Maqbool | Web Developer Portfolio" />
        <meta name="twitter:description" content="Explore my projects and skills as a passionate web developer." />
        <meta name="twitter:image" content="https://balaj-maqbool-portfolio.vercel.app/preview.png" />
      </Helmet>
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
