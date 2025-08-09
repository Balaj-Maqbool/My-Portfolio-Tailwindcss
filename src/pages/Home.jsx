import StarBackground from "../components/BackGround.jsx"
import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import Skills from '../components/Skills.jsx';
import Projects from '../components/Projects.jsx';
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx';





const Home = () => {

  return (
    <div className=' min-h-screen text-text font-family overflow-hidden'>
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

    </div>
  )
}

export default Home
