import React from 'react';
import Ulima from '../assets/ulima.png'
import Google from '../assets/google.png'
import DLAI from '../assets/deepai.png'
const About = () => {
  return (
    <section className="min-h-screen lora flex flex-col items-center justify-center bg-gray-100 py-12" id="about">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-phrase">
        "Data is a new <span className="text-600 bold-phrase">Oil</span>" - C.H.
      </h1>
      <p className="text-center text-gray-500 text-lg md:text-xl mb-12">
        I am a systems engineer student at University of Lima, <br />
        currently specializing in Data area.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {/* Universidad de Lima */}
        <div className="text-center">
          <img
            src={Ulima}
            alt="Universidad de Lima"
            className="h-30 mx-auto mb-4 opacity-75"
          />
          <h3 className="text-lg font-semibold">Universidad de Lima</h3>
          <p className="text-gray-500">Bachelor’s Degree, Systems Engineering</p>
          <p className="text-gray-500">April 2019 , December 2025</p>
        </div>
        {/* Google */}
        <div className="text-center">
          <a href="https://www.coursera.org/account/accomplishments/specialization/M7P2LRFK7X22">
          <img
            src={Google}
            alt="Google"
            className="h-30 mx-auto opacity-75"
          />
          </a>
          <h3 className="text-lg font-semibold">Grow With Google</h3>
          <p className="text-gray-500">Google Data Analytics Professional Certificate</p>
          <p className="text-gray-500">April 2024</p>
        </div>
        {/* DeepLearning */}
        <div className="text-center">
          <a href="https://coursera.org/share/374bc1c86f6742ece7d8f8c8f0bab988">
          <img
            src={DLAI}
            alt="DLAI"
            className="h-30 mx-auto opacity-75 object-contain"
          />
          </a>
          <h3 className="text-lg font-semibold">DeepLearning.AI</h3>
          <p className="text-gray-500">Machine Learning Specialization</p>
          <p className="text-gray-500">June 2025</p>
        </div>
      </div>
    </section>
  );
};

export default About;
