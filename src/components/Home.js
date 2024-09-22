import React from 'react';
import perfilImage from '../assets/perfil.jpg'; 

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 gap-6" id="home">
      {/* Contenedor principal centrado */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        {/* Texto a la izquierda */}
        <div className="text-center md:text-left max-w-xl">  {/* Limitar el ancho del texto */}
          <p className="text-gray-700 text-lg lora">Hi there 👋, my name is</p>

          <div className="alfa-slab-one-regular relative inline-block my-2">
            <p className="text-4xl sm:text-5xl md:text-7xl absolute top-0 left-0 text-gray-400 transform translate-x-1 z-0 under3d">
              Junior Huaman
            </p>
            <p className="text-4xl sm:text-5xl md:text-7xl relative text-black z-10">
              Junior Huaman
            </p>
          </div>

          <p className="text-gray-700 text-md sm:text-lg lora max-w-lg">
          with a passion for data analysis and developing creative technology solutions.

          </p>
        </div>

        {/* Imagen a la derecha */}
        <div className="flex justify-center md:justify-start">
          <img
            src={perfilImage}
            alt="Junior Huaman"
            className="w-36 h-36 md:w-48 md:h-48 rounded-full shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}

