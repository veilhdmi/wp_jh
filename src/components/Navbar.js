import React, { useState } from 'react';
import cv from '../assets/CV_JuniorHR.pdf'
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-200 p-7 fixed w-full shadow-md z-50 font-bold lora-bold">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold text-black relative">
  <span className="relative text-black after3d">JH</span>
</div>


        {/* Icono de menú hamburguesa para móviles */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>

        {/* Links de navegación - mostrados horizontalmente en pantallas grandes */}
        <ul className={`md:flex space-x-8 hidden`}>
  <li>
    <a
      href="#home"
      className="navbarbtn text-white px-6 py-3 rounded-full transition-colors duration-300"
    >
      Home
    </a>
  </li>
  <li>
    <a
      href="#work"
      className="navbarbtn text-white px-6 py-3 rounded-full transition-colors duration-300"
    >
      Work
    </a>
  </li>
  <li>
    <a
      href="#skills" 
      className="navbarbtn text-white px-6 py-3 rounded-full transition-colors duration-300"
    >
      Skills
    </a>
  </li>
  <li>
    <a
      href="#about"
      className="navbarbtn text-white px-6 py-3 rounded-full transition-colors duration-300"
    >
      About
    </a>
  </li>
  <li>
    <a
      href="#contact"
      className="navbarbtn text-white px-6 py-3 rounded-full transition-colors duration-300"
    >
      Contact
    </a>
  </li>
</ul>

        {/* Botón Curriculum - solo en pantallas grandes */}
        <div className="hidden md:block relative inline-block">
  {/* Sombra 3D debajo del botón (4px de desplazamiento) */}
  <div className="absolute top-1.5 left-0 w-full h-full bg-black rounded-3xl py-5"></div>

  {/* Botón principal */}
  <a
    href={cv} download="Curriculum_JuniorHuaman.pdf"
    className="relative z-10 rounded-3xl border-2 border-black text-black py-3 px-7 transition-colors duration-300 under"
  >
    Curriculum
  </a>
</div>

      </div>

      {/* Menu desplegable para dispositivos móviles */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-gray-100 p-4 space-y-4">
          <li>
            <a href="#home" className=" navbarbtn px-6 py-3 rounded-full transition-colors duration-300" onClick={toggleMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#work" className=" navbarbtn px-6 py-3 rounded-full transition-colors duration-300" onClick={toggleMenu}>
              Work
            </a>
          </li>
          <li>
            <a href="#about" className=" navbarbtn px-6 py-3 rounded-full transition-colors duration-300" onClick={toggleMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="navbarbtn px-6 py-3 rounded-full transition-colors duration-300" onClick={toggleMenu}>
              Contact
            </a>
          </li>
          <li>
            <a href={cv} download="Curriculum_JuniorHuaman.pdf" className="border-2 text-white py-2 px-4 rounded-lg hover:bg-green-700 border under" onClick={toggleMenu}>
              Curriculum
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
