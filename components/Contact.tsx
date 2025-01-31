import React from 'react';

const Contact: React.FC = () => {
  return (
    <div id="contact" className="bg-gray-50 pt-16 flex flex-col items-center justify-center p-8">
      <h2 className="text-3xl font-bold mb-4">Contato</h2>
      <div className="mt-4">
        <p className="text-lg">GitHub: <a href="https://github.com/romulogurgeldev" className="text-blue-500">https://github.com/romulogurgeldev</a></p>
        <p className="text-lg">E-mail: <a href="mailto:rgurgel.romulo@gmail.com" className="text-blue-500">rgurgel.romulo@gmail.com</a></p>
      </div>
    </div>
  );
};

export default Contact;
