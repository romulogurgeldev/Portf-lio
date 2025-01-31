import React from 'react';

const Skills: React.FC = () => {
  return (
    <div id="skills" className="flex flex-col items-center justify-center p-8 bg-gray-50">
      <h2 className="text-3xl font-bold mb-4">Habilidades</h2>
      <div className="flex justify-between w-full max-w-4xl">
        <div className="mr-4">
          <h3 className="text-xl font-semibold mb-2">Frontend</h3>
          <ul className="list-disc list-inside mb-4">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Angular</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div className="mr-4">
          <h3 className="text-xl font-semibold mb-2">Backend</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Java</li>
            <li>Spring Boot</li>
            <li>PostgreSQL</li>
            <li>Ruby</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Ferramentas</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Terminal</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>IDEs</li>
            <li>Postman</li>
            <li>Visual Studio Code</li>
            <li>Salesforce</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
