import React from 'react';

const About: React.FC = () => {
  return (
    <div id="sobre" className="bg-gray-50 pt-16 flex flex-col items-center justify-center p-8">
      <h2 className="text-3xl font-bold mb-4">Sobre Mim</h2>

      <p className="text-lg text-center">
        FullStack Developer passionate about technological innovation, with a continuous focus on scalable solutions and high performance. Committed to continuous learning and skill improvement, I bring a proactive, results-oriented approach, with strong analytical abilities and effective communication skills. A specialist in collaborative work, solving complex challenges, and enhancing the end-user experience. I am always looking for opportunities to contribute to impactful projects, driving the success of teams and organizations through cutting-edge technology.
      </p>

      <div className="flex justify-between w-full max-w-4xl">
        <div className="mr-4">
          <h3 className="text-xl font-semibold mb-2">Idiomas</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Português (Nativo)</li>
            <li>Inglês (Intermediário)</li>
            <li>Espanhol (Intermediário)</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Qualidades Pessoais</h3>
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
