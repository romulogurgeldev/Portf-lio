import Link from 'next/link';
import React, { Dispatch, SetStateAction } from 'react';

interface NavbarProps {
  setActiveSection: Dispatch<SetStateAction<string>>;
}

const Navbar: React.FC<NavbarProps> = ({ setActiveSection }) => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex justify-between">
        <div className="text-white font-bold text-lg">Rômulo Régis Gurgel</div>
        <div className="space-x-4">
          <Link href="/#hero">
            <button onClick={() => setActiveSection('hero')} className="text-white hover:underline">Início</button>
          </Link>
          <Link href="/#about">
            <button onClick={() => setActiveSection('about')} className="text-white hover:underline">Sobre Mim</button>
          </Link>
          <Link href="/#skills">
            <button onClick={() => setActiveSection('skills')} className="text-white hover:underline">Habilidades</button>
          </Link>
          <Link href="/#projects">
            <button onClick={() => setActiveSection('projects')} className="text-white hover:underline">Projetos</button>
          </Link>
          <Link href="/#blog">
            <button onClick={() => setActiveSection('blog')} className="text-white hover:underline">Blog</button>
          </Link>
          <Link href="/#contact">
            <button onClick={() => setActiveSection('contact')} className="text-white hover:underline">Contato</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
