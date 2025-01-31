import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import 'animate.css';

const Contact: React.FC = () => {
  return (
    <div id="contact" className="bg-gradient-to-r from-blue-500 to-purple-500 h-screen pt-16 flex flex-col items-center justify-center px-4">
      <h2 className="text-4xl font-bold mb-6 text-white animate__animated animate__fadeIn">Contato</h2>
      <p className="text-lg text-center text-white mb-4 max-w-lg animate__animated animate__fadeIn animate__delay-1s">
        Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à vontade para entrar em contato!
      </p>
      <p className="text-lg text-center text-white mt-4 max-w-lg animate__animated animate__fadeIn animate__delay-2s">
        E-mail: <a href="mailto:rgurgel.romulo@gmail.com" className="text-blue-300 hover:underline">rgurgel.romulo@gmail.com</a>
      </p>

      <div className="flex space-x-8 mt-6 animate__animated animate__fadeIn animate__delay-3s">
        <a
          href="https://github.com/romulogurgeldev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-200 transition duration-300 transform hover:scale-110 flex items-center shadow-md hover:shadow-2xl ease-in-out"
        >
          <FontAwesomeIcon icon={faGithub} className="w-8 h-8" />
        </a>
        <a
          href="https://www.linkedin.com/in/romulo-gurgel"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-600 transition duration-300 transform hover:scale-110 flex items-center shadow-md hover:shadow-2xl ease-in-out"
        >
          <FontAwesomeIcon icon={faLinkedin} className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
