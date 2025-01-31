import React from 'react';

const Projects: React.FC = () => {
  return (
    <div id="projects" className="flex flex-col items-center justify-center p-8 bg-gradient-to-r from-blue-500 to-purple-500 pt-15 h-screen">
      <h2 className="text-3xl font-bold mb-4 text-white">Projetos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="border rounded-lg p-4 shadow-md">
          <h3 className="text-xl font-semibold text-white">Portfólio</h3>
          <p className="text-gray-600 text-white">Meu Portfólio é uma apresentação pessoal que destaca minhas habilidades e experiências como desenvolvedor FullStack. Construído com React e Next.js, o site oferece uma interface moderna e responsiva, permitindo que os visitantes explorem meus projetos, habilidades e informações de contato. O portfólio é hospedado no Vercel, garantindo desempenho otimizado e acessibilidade.</p>
          <a href="https://github.com/romulogurgeldev/portfolio" className="text-blue-800">Ver no GitHub</a>
        </div>
        <div className="border rounded-lg p-4 shadow-md">
          <h3 className="text-xl font-semibold text-white">Projeto 2</h3>
          <p className="text-gray-600 text-white">Descrição do projeto 2.</p>
          <a href="#" className="text-blue-800">Ver no GitHub</a>
        </div>
        <div className="border rounded-lg p-4 shadow-md">
          <h3 className="text-xl font-semibold text-white">Projeto 3</h3>
          <p className="text-gray-600 text-white">Descrição do projeto 3.</p>
          <a href="#" className="text-blue-800">Ver no GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
