/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Hero: React.FC = () => {
  return (
    <div id="hero" className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 h-screen">
      <img src="/assets/photo.png" alt="Descrição da imagem" className="w-1/6 h-auto max-w-xs rounded-full shadow-lg" />
      <h1 className="text-5xl font-extrabold text-white mt-4">Rômulo Régis Gurgel</h1>
      <h2 className="text-3xl font-semibold pt-5 text-white">Desenvolvedor FullStack Jr</h2>
      <p className="text-center mt-2 text-lg text-white">Apaixonado por inovação tecnológica.</p>
      <div className="mt-4 flex flex-col items-center space-y-4">
        <a href="./assets/cv.pdf" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition">Baixar CV</a>
      </div>
      <footer className="mt-4 flex space-x-4">
        <a href="https://github.com/romulogurgeldev" target="_blank" rel="noopener noreferrer" className="text-white hover:underline flex items-center">
          <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
        </a>
        <a href="https://www.linkedin.com/in/romulo-gurgel" target="_blank" rel="noopener noreferrer" className="text-white hover:underline flex items-center">
          <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
        </a>
      </footer>
    </div>
  );
};

export default Hero;