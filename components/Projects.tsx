import React from 'react';
import 'animate.css';

const Projects: React.FC = () => {
  return (
    <div id="projects" className="flex flex-col items-center justify-center p-8 bg-gradient-to-r from-blue-500 to-purple-500 pt-15 h-screen">
      <h2 className="text-4xl font-bold mb-6 text-white animate__animated animate__fadeIn">Projetos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border rounded-lg p-6 shadow-md transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out animate__animated animate__fadeIn animate__delay-1s">
          <h3 className="text-xl font-semibold text-white">Portfólio</h3>
          <p className="text-gray-600 text-white">Meu Portfólio é uma apresentação pessoal que destaca minhas habilidades e experiências como desenvolvedor FullStack. Construído com React e Next.js, o site oferece uma interface moderna e responsiva, permitindo que os visitantes explorem meus projetos, habilidades e informações de contato. O portfólio é hospedado no Vercel, garantindo desempenho otimizado e acessibilidade.</p>
          <a href="https://github.com/romulogurgeldev/portfolio" className="text-blue-800 mt-4 inline-block hover:underline">Ver no GitHub</a>
        </div>
        <div className="border rounded-lg p-6 shadow-md transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out animate__animated animate__fadeIn animate__delay-2s">
          <h3 className="text-xl font-semibold text-white">Projeto 2</h3>
          <p className="text-gray-600 text-white">Descrição do projeto 2.</p>
          <a href="#" className="text-blue-800 mt-4 inline-block hover:underline">Ver no GitHub</a>
        </div>
        <div className="border rounded-lg p-6 shadow-md transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out animate__animated animate__fadeIn animate__delay-3s">
          <h3 className="text-xl font-semibold text-white">Projeto 3</h3>
          <p className="text-gray-600 text-white">Descrição do projeto 3.</p>
          <a href="#" className="text-blue-800 mt-4 inline-block hover:underline">Ver no GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
