import Link from 'next/link';
import React, { Dispatch, SetStateAction } from 'react';

interface NavbarProps {
  setActiveSection: Dispatch<SetStateAction<string>>;
}

const Navbar: React.FC<NavbarProps> = ({ setActiveSection }) => {
  return (
    <nav className="bg-gradient-to-r drop-shadow-md from-blue-500 to-purple-500 p-4 w-full shadow-lg fixed top-0 left-0 right-0 z-10">
      <div className="flex justify-between">
        <div className="text-white font-bold text-lg transition-transform duration-300 hover:scale-110 drop-shadow-md">Rômulo Régis Gurgel</div>
        <div className="space-x-4">
          <Link href="/#hero">
            <button onClick={() => setActiveSection('hero')} className="text-white hover:underline transition-transform duration-300 hover:scale-110 drop-shadow-md">Início</button>
          </Link>
          <Link href="/#about">
            <button onClick={() => setActiveSection('about')} className="text-white hover:underline transition-transform duration-300 hover:scale-110 drop-shadow-md">Sobre Mim</button>
          </Link>
          <Link href="/#skills">
            <button onClick={() => setActiveSection('skills')} className="text-white hover:underline transition-transform duration-300 hover:scale-110 drop-shadow-md">Habilidades</button>
          </Link>
          <Link href="/#projects">
            <button onClick={() => setActiveSection('projects')} className="text-white hover:underline transition-transform duration-300 hover:scale-110 drop-shadow-md">Projetos</button>
          </Link>
          <Link href="/#contact">
            <button onClick={() => setActiveSection('contact')} className="text-white hover:underline transition-transform duration-300 hover:scale-110 drop-shadow-md">Contato</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
