import React, { useState, useEffect, useRef } from 'react';
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.jpg'
import project4 from '../assets/dashboard.jpg'
import iqc_review from '../assets/video.gif'
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

  const [showPreview, setShowPreview] = useState(false);

  return (
    <section
      ref={sectionRef}
      id="work"
      className={`min-h-screen flex flex-col lora items-center justify-center bg-gray-100 px-4 py-12 transition-opacity duration-1000 ease-out ${visible ? 'opacity-100' : 'opacity-0'
        }`}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold bold-phrase">My Work</h2>
        <p className="mt-4 max-w-2xl">Check out some of my projects below.</p>
      </div>

      {/* Contenedor para los proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl">
        {/* Proyecto IQC */}
        <div className="bg-white rounded-xl shadow-lg p-6 text-center relative transition-transform transform hover:scale-105 duration-300">
          <img
            src={project4}
            alt="Project4"
            className="mx-auto mb-6 rounded-lg shadow-lg max-w-[300px] max-h-[200px]"  // Limitando ancho a 300px y altura a 200px

          />

          <h3 className="text-xl font-bold">End-To-End Quality Control Pipeline</h3>
          <p className="text-gray-600 mt-2">
            An end-to-end ELT pipeline modeling data into actionable insights using dbt and Snowflake.
          </p>
          {/* Botones con efecto 3D */}
          <div className="flex justify-center space-x-4 mt-6">
            <div
              className="relative"
              onMouseEnter={() => setShowPreview(true)}
              onMouseLeave={() => setShowPreview(false)}
            >
              <Button3D 
                text="View project" 
                href="https://lookerstudio.google.com/embed/reporting/ac70e827-abed-456c-9478-6caa307dc678/page/xIAkF" 
              />

              {showPreview && (
                <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
                  
                  {/* Fondo ligeramente oscuro */}
                  <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

                  {/* GIF grande centrado */}
                  <img
                    src={iqc_review}
                    alt="IQC Preview"
                    className="relative max-w-[50vw] max-h-[50vh] rounded-2xl shadow-2xl border-4 border-white animate-fadeIn"
                  />
                </div>
              )}
            </div>
            <Button3D text="Repository" href="https://github.com/veilhdmi/qc_project"></Button3D>
          </div>


        </div>
        {/* Proyecto 3 */}
        <div className="bg-white rounded-xl shadow-lg p-6 text-center relative transition-transform transform hover:scale-105 duration-300">
          <img
            src={project3}
            alt="Project3"
            className="mx-auto mb-6 rounded-lg shadow-lg max-w-[300px] max-h-[200px]"  // Limitando ancho a 300px y altura a 200px

          />

          <h3 className="text-xl font-bold">Olist End-to-End Pipeline</h3>
          <p className="text-gray-600 mt-2">
            An end-to-end ELT pipeline transforming Olist data into strategic insights using dbt and Snowflake.
          </p>
          {/* Botones con efecto 3D */}
          <div className="flex justify-center space-x-4 mt-6">
            <Button3D text="View project" href="https://lookerstudio.google.com/embed/reporting/ac70e827-abed-456c-9478-6caa307dc678/page/xIAkF" />
            <Button3D text="Repository" href="https://github.com/veilhdmi/ecommerce_data_project"></Button3D>
          </div>


        </div>
        {/* Proyecto 1 */}
        <div className="bg-white rounded-xl shadow-lg p-6 text-center relative transition-transform transform hover:scale-105 duration-300">
          <img
            src={project1}
            alt="Project1"
            className="mx-auto mb-6 rounded-lg shadow-lg max-w-[300px] max-h-[200px]"  // Limitando ancho a 300px y altura a 200px

          />

          <h3 className="text-xl font-bold">Looker Report</h3>
          <p className="text-gray-600 mt-2">
            A dynamic sales dashboard created using Looker Studio.
          </p>
          {/* Botones con efecto 3D */}
          <div className="flex justify-center space-x-4 mt-6">
            <Button3D text="View project" href="https://lookerstudio.google.com/embed/reporting/40333cb3-0f25-4e65-9255-17f14045db54/page/gv5EE" />
            <Button3D text="Repository" href="https://github.com/veilhdmi/Shopify-Bulk-Python-main"></Button3D>
          </div>


        </div>

        {/* Proyecto 2 */}
        <div className="bg-white rounded-xl shadow-lg p-6 text-center relative transition-transform transform hover:scale-105 duration-300">
          <img
            src={project2}
            alt="Project2"
            className="mx-auto mb-6 rounded-lg shadow-lg max-w-[300px] max-h-[200px]"
          />
          <h3 className="text-xl font-bold">Attrition Prediction</h3>
          <p className="text-gray-600 mt-2">
            Prediction models to anticipate attrition with Python and Scikit-Learn.
          </p>
          {/* Botones con efecto 3D */}
          <div className="flex justify-center space-x-4 mt-6">
            <Button3D text="View project" href="https://colab.research.google.com/drive/1S64foz9glqjWB7Upn_v1ODHz_m5NgWbs?usp=sharing" />
            <Button3D text="Repository" href="https://github.com/veilhdmi/AtrittionPrediction"></Button3D>
          </div>
        </div>
        
      </div>
    </section>
  );
}

function Button3D({ text, href }) {
  return (
    <div className="relative inline-block my-3">
      <div className="absolute top-1 left-0 w-full h-full bg-black rounded-full py-5"></div>
      <a
        href={href}  // Agregamos la ruta aquí
        target="_blank"  // Esto abre la página en una nueva pestaña
        rel="noopener noreferrer"  // Buena práctica para evitar problemas de seguridad
        className="relative z-10 rounded-full border-2 border-black text-black py-3 px-6 bg-white hover:bg-gray-100 transition-all duration-300"
      >
        {text}
      </a>
    </div>
  );
}


