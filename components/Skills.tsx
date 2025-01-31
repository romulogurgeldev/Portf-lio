import React from 'react';

const Skills: React.FC = () => {
  return (
    <div id="skills" className="flex flex-col items-center justify-center p-8 bg-gray-50">
      <h2 className="text-3xl font-bold mb-4">Habilidades</h2>
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
      <h3 className="text-xl font-semibold mb-2">Backend</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Java</li>
        <li>Spring Boot</li>
        <li>PostgreSQL</li>
      </ul>
    </div>
  );
};

export default Skills;
