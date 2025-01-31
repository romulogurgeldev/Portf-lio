import React from 'react';

const Projects: React.FC = () => {
  return (
    <div id="projects" className="flex flex-col items-center justify-center p-8 bg-gray-50">
      <h2 className="text-3xl font-bold mb-4">Projetos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="border rounded-lg p-4 shadow-md">
          <h3 className="text-xl font-semibold">Projeto 1</h3>
          <p className="text-gray-600">Descrição do projeto 1.</p>
          <a href="#" className="text-blue-500">Ver no GitHub</a>
        </div>
        <div className="border rounded-lg p-4 shadow-md">
          <h3 className="text-xl font-semibold">Projeto 2</h3>
          <p className="text-gray-600">Descrição do projeto 2.</p>
          <a href="#" className="text-blue-500">Ver no GitHub</a>
        </div>
        <div className="border rounded-lg p-4 shadow-md">
          <h3 className="text-xl font-semibold">Projeto 3</h3>
          <p className="text-gray-600">Descrição do projeto 3.</p>
          <a href="#" className="text-blue-500">Ver no GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
