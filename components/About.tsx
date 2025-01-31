import React from 'react';

const About: React.FC = () => {
  return (
    <div id="sobre" className="bg-gradient-to-r from-blue-500 to-purple-500 pt-15 h-screen pt-16 flex flex-col items-center justify-center p-8 text-white">
      <h2 className="text-3xl font-bold mb-4 transform transition duration-500 hover:scale-105 hover:text-yellow-300 animate__animated animate__fadeIn">
        Sobre Mim
      </h2>

      <p className="text-lg text-center transform transition duration-500 hover:scale-105 hover:text-yellow-200 animate__animated animate__fadeIn animate__delay-1s">
        Desenvolvedor FullStack apaixonado por inovação tecnológica, com foco contínuo em soluções escaláveis ​​e de alta performance. 
        Comprometido com o aprendizado contínuo e o aprimoramento de habilidades, trago uma abordagem proativa e orientada para resultados, 
        com fortes habilidades analíticas e habilidades de comunicação eficazes. Especialista em trabalho colaborativo, resolvendo desafios 
        complexos e aprimorando a experiência do usuário final. Estou sempre em busca de oportunidades para contribuir com projetos impactantes, 
        impulsionando o sucesso de equipes e organizações através de tecnologia de ponta.
      </p>

      <div className="flex justify-between w-full max-w-4xl mt-4">
        <div className="mr-4 transform transition duration-300 hover:scale-105 hover:shadow-xl animate__animated animate__fadeIn animate__delay-2s">
          <h3 className="text-xl font-semibold mb-2 transform transition duration-300 hover:text-yellow-400">
            Idiomas
          </h3>
          <ul className="list-disc list-inside mb-4">
            <li>Português (Nativo)</li>
            <li>Inglês (Intermediário)</li>
            <li>Espanhol (Intermediário)</li>
          </ul>
        </div>
        <div className="transform transition duration-300 hover:scale-105 hover:shadow-xl animate__animated animate__fadeIn animate__delay-3s">
          <h3 className="text-xl font-semibold mb-2 transform transition duration-300 hover:text-yellow-400">
            Qualidades Pessoais
          </h3>
          <ul className="list-disc list-inside mb-4">
            <li>Aprendiz rápido e contínuo</li>
            <li>Organizado e detalhista</li>
            <li>Fortes habilidades de resolução de problemas e analíticas</li>
            <li>Experiência em atendimento ao cliente e suporte</li>
            <li>Habilidade em dar e receber feedback construtivo</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
