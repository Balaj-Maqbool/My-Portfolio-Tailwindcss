import React, { useState, useEffect } from 'react';
import LoadingScreen from '@/components/ui/LoadingScreen.jsx';

import StarBackground from "@/components/layout/BackGround.jsx"
import Navbar from '@/components/layout/Navbar.jsx';
import Hero from '@/components/sections/Hero/Hero.jsx';
import About from '@/components/sections/About/About.jsx';
import Skills from '@/components/sections/Skills/Skills.jsx';
import Projects from '@/components/sections/Projects/Projects.jsx';
import Contact from '@/components/sections/Contact/Contact.jsx';
import Footer from '@/components/layout/Footer.jsx';
import BackToTop from '@/components/ui/BackToTop.jsx';
import { Helmet } from 'react-helmet';

const Home = () => {

  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    // Show loading screen for 5 seconds, then hide
    const timer = setTimeout(() => setShowLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* SEO and meta tags for the Home page */}
      <Helmet>
        <title>Balaj Maqbool | Web Developer Portfolio</title>
        <meta name="description" content="Welcome to Balaj Maqbool's portfolio. Showcasing real-world projects, skills in React.js, Node.js, MongoDB, Express.js, and Tailwind CSS." />
        <meta name="keywords" content="Balaj Maqbool, portfolio, React developer, web developer, full-stack, Tailwind CSS, Node.js, MongoDB" />
        <meta name="author" content="Balaj Maqbool" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph tags for social sharing */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Balaj Maqbool | Web Developer Portfolio" />
        <meta property="og:description" content="Explore my projects and skills as a passionate web developer." />
        <meta property="og:image" content="https://balaj-maqbool.vercel.app/letter-b.jpg" />
        <meta property="og:url" content="https://balaj-maqbool.vercel.app/" />

        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Balaj Maqbool | Web Developer Portfolio" />
        <meta name="twitter:description" content="Explore my projects and skills as a passionate web developer." />
        <meta name="twitter:image" content="https://balaj-maqbool.vercel.app/letter-b.jpg" />
      </Helmet>

      {/* Loading screen displayed initially */}
      {showLoading && <LoadingScreen showLoading={showLoading} setShowLoading={setShowLoading} />}

      {/* Main content after loading screen disappears */}
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
