import React, { useState, useEffect, useRef } from 'react';

export default function Work() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  // Usamos Intersection Observer para activar la transición
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect(); // Una vez visible, no seguimos observando
          }
        });
      },
      { threshold: 0.3 } // Umbral: el 30% de la sección tiene que estar visible para activar
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      className={`min-h-screen flex flex-col lora items-center justify-center bg-gray-100 px-4 py-12 transition-opacity duration-1000 ease-out ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold bold-phrase">My Work</h2>
        <p className="mt-4 max-w-2xl">Check out some of my projects below.</p>
      </div>

      {/* Contenedor para los proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl">
        {/* Proyecto 1 */}
        <div className="bg-white rounded-xl shadow-lg p-6 text-center relative transition-transform transform hover:scale-105 duration-300">
          <img
            src="path-to-your-image.jpg"
            alt="Project1"
            className="mx-auto mb-6 rounded-lg shadow-lg"
          />
          <h3 className="text-xl font-bold">COMING SOON</h3>
          <p className="text-gray-600 mt-2">
            Cooming soon....
          </p>
          {/* Botones con efecto 3D */}
          <div className="flex justify-center space-x-4 mt-6">
            <Button3D text="Visit ItsCamper" />
          </div>
        </div>

        {/* Proyecto 2 */}
        <div className="bg-white rounded-xl shadow-lg p-6 text-center relative transition-transform transform hover:scale-105 duration-300">
          <img
            src="path-to-your-image2.jpg"
            alt="Project2"
            className="mx-auto mb-6 rounded-lg shadow-lg"
          />
          <h3 className="text-xl font-bold">COMING SOON</h3>
          <p className="text-gray-600 mt-2">
          Cooming soon....
          </p>
          {/* Botones con efecto 3D */}
          <div className="flex justify-center space-x-4 mt-6">
            <Button3D text="Visit Webinar Turkey" />
          </div>
        </div>
      </div>
    </section>
  );
}

// Componente reutilizable para los botones con efecto 3D
function Button3D({ text }) {
  return (
    <div className="relative inline-block">
      {/* Sombra 3D */}
      <div className="absolute top-1 left-0 w-full h-full bg-black rounded-full py-5"></div>
      {/* Botón principal */}
      <a
        href="#"
        className="relative z-10 rounded-full border-2 border-black text-black py-3 px-6 bg-white hover:bg-gray-100 transition-all duration-300"
      >
        {text}
      </a>
    </div>
  );
}
