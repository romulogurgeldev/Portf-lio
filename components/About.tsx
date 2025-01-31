import React from 'react';
const About: React.FC = () => {
  return (
    <div id="sobre" className="flex flex-col items-center justify-center p-8 bg-gray-50">
      <h2 className="text-3xl font-bold mb-4">Sobre Mim</h2>
      <p className="text-lg text-center">
        FullStack Developer passionate about technological innovation, with a continuous focus on scalable solutions and high performance. Committed to continuous learning and skill improvement, I bring a proactive, results-oriented approach, with strong analytical abilities and effective communication skills. A specialist in collaborative work, solving complex challenges, and enhancing the end-user experience. I am always looking for opportunities to contribute to impactful projects, driving the success of teams and organizations through cutting-edge technology.
      </p>
      <div className="mt-4">
        <a href="#" className="text-blue-500">Ver Certificações</a>
      </div>
    </div>
  );
};

export default About;
