import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact: React.FC = () => {
  return (
    <div id="contact" className="bg-gradient-to-r from-blue-500 to-purple-500 h-screen pt-16 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold mb-4 text-white">Contato</h2>
      <p className="text-lg text-center text-white mb-4">
        Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à vontade para entrar em contato!
      </p>
      <p className="text-lg text-center text-white mt-4">
        E-mail: <a href="mailto:rgurgel.romulo@gmail.com" className="text-blue-300">rgurgel.romulo@gmail.com</a>
      </p>
      <div className="flex space-x-4 mt-4">
        <a href="https://github.com/romulogurgeldev" target="_blank" rel="noopener noreferrer" className="text-white hover:underline flex items-center">
          <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
        </a>
        <a href="https://www.linkedin.com/in/romulo-gurgel" target="_blank" rel="noopener noreferrer" className="text-white hover:underline flex items-center">
          <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
