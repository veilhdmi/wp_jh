import React, { useState } from 'react';
import cv from '../assets/CV_JuniorHR.pdf';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Función para resetear la página a su estado inicial
  const resetPage = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="bg-gray-200 p-7 fixed w-full shadow-md z-50 font-bold lora-bold">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold text-black relative">
          <a
            href="#home"
            onClick={resetPage}
            className="relative text-black after3d cursor-pointer"
          >
            JH
          </a>
        </div>

        {/* Icono de menú hamburguesa para móviles */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none relative z-50"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 transform ${
                isOpen ? 'rotate-45' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
              ></path>
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
          <div className="absolute top-1.5 left-0 w-full h-full bg-black rounded-3xl py-5"></div>
          <a
            href={cv}
            download="Curriculum_JuniorHuaman.pdf"
            className="relative z-10 rounded-3xl border-2 border-black text-black py-3 px-7 transition-colors duration-300 under"
          >
            Curriculum
          </a>
        </div>
      </div>

      {/* Menu desplegable para dispositivos móviles */}
      <div
        className={`${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        } md:hidden fixed top-0 left-0 w-full h-screen bg-gray-800 bg-opacity-90 p-10 flex flex-col items-center space-y-6 transition-all duration-500 ease-in-out`}
      >
        <ul className="text-center">
          <li>
            <a
              href="#home"
              className="text-white text-xl block px-4 py-2 transition-all duration-300 hover:bg-gray-700 rounded my-2"
              onClick={toggleMenu}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#work"
              className="text-white text-xl block px-4 py-2 transition-all duration-300 hover:bg-gray-700 rounded my-2"
              onClick={toggleMenu}
            >
              Work
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-white text-xl block px-4 py-2 transition-all duration-300 hover:bg-gray-700 rounded my-2"
              onClick={toggleMenu}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-white text-xl block px-4 py-2 transition-all duration-300 hover:bg-gray-700 rounded my-2"
              onClick={toggleMenu}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-white text-xl block px-4 py-2 transition-all duration-300 hover:bg-gray-700 rounded my-2"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href={cv}
              download="Curriculum_JuniorHuaman.pdf"
              className="text-white text-xl border border-white px-4 py-2 rounded hover:bg-green-600 transition-all duration-300 my-2"
              onClick={toggleMenu}
            >
              Curriculum
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
