import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Importamos los iconos desde react-icons

function App() {
  return (
    <div className="App">
      {/* Navbar Fijo */}
      <Navbar />

      {/* Secciones del portafolio */}
      <div id="home">
        <Home />
      </div>

      <div id="work">
        <Work />
      </div>
      <div id="skills">
        <Skills />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <Footer />

      {/* Iconos fijos de GitHub y LinkedIn */}
      <div className="fixed bottom-4 left-4 flex space-x-4 z-50">
        {/* Icono de GitHub */}
        <a
          href="https://github.com/veilhdmi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800 transition duration-300"
        >
          <FaGithub size={32} />
        </a>
        {/* Icono de LinkedIn */}
        <a
          href="https://www.linkedin.com/in/juniorhuamanr/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800 transition duration-300"
        >
          <FaLinkedin size={32} />
        </a>
      </div>
    </div>
  );
}

export default App;
