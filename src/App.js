import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';

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
    </div>
  );
}

export default App;
