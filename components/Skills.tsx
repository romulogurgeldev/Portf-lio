import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact, faNodeJs, faCss3Alt, faHtml5, faJs, faAngular,
  faBootstrap, faJava, faGit, faGithub
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faTerminal, faCode, faToolbox, faFileCode, faGem } from '@fortawesome/free-solid-svg-icons';

const Skills: React.FC = () => {
  return (
    <div id="skills" className="flex flex-col text-white items-center justify-center p-8 bg-gradient-to-r from-blue-500 to-purple-500 pt-15 min-h-screen">
      <h2 className="text-3xl font-bold mb-4">Habilidades</h2>
      
      <div className="flex justify-center w-full max-w-6xl flex-wrap gap-6">
        {/* Frontend */}
        <div className="p-6 bg-white rounded-lg shadow-lg text-black w-72">
          <h3 className="text-xl font-semibold mb-4 text-center">Frontend</h3>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faHtml5} className="mr-2 text-2xl text-orange-600" />
              <span>HTML5</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faCss3Alt} className="mr-2 text-2xl text-blue-600" />
              <span>CSS3</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faJs} className="mr-2 text-2xl text-yellow-500" />
              <span>JavaScript</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faCode} className="mr-2 text-2xl text-blue-400" />
              <span>TypeScript</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faAngular} className="mr-2 text-2xl text-red-600" />
              <span>Angular</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faReact} className="mr-2 text-2xl text-blue-500" />
              <span>React</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faBootstrap} className="mr-2 text-2xl text-purple-700" />
              <span>Bootstrap</span>
            </div>
          </div>
        </div>

        {/* Backend */}
        <div className="p-6 bg-white rounded-lg shadow-lg text-black w-72">
          <h3 className="text-xl font-semibold mb-4 text-center">Backend</h3>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faJava} className="mr-2 text-2xl text-red-500" />
              <span>Java</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faFileCode} className="mr-2 text-2xl text-green-700" />
              <span>Spring Boot</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faDatabase} className="mr-2 text-2xl text-blue-900" />
              <span>PostgreSQL</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faGem} className="mr-2 text-2xl text-red-700" />
              <span>Ruby</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faNodeJs} className="mr-2 text-2xl text-green-600" />
              <span>Node.js</span>
            </div>
          </div>
        </div>

        {/* Ferramentas */}
        <div className="p-6 bg-white rounded-lg shadow-lg text-black w-72">
          <h3 className="text-xl font-semibold mb-4 text-center">Ferramentas</h3>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faTerminal} className="mr-2 text-2xl text-gray-700" />
              <span>Terminal</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faGit} className="mr-2 text-2xl text-orange-600" />
              <span>Git</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faGithub} className="mr-2 text-2xl text-black" />
              <span>GitHub</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faToolbox} className="mr-2 text-2xl text-gray-600" />
              <span>IDEs</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faFileCode} className="mr-2 text-2xl text-orange-500" />
              <span>Postman</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faCode} className="mr-2 text-2xl text-blue-600" />
              <span>Visual Studio Code</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faCode} className="mr-2 text-2xl text-blue-400" />
              <span>Salesforce</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Skills;
