import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import { motion } from 'framer-motion';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <div>
      <Navbar setActiveSection={setActiveSection} />
      <motion.div
        key={activeSection} // Isso garante que a animação ocorra ao mudar de seção
        initial={{ opacity: 0.7 }} // Animação inicial
        animate={{ opacity: 1 }} // Animação ao entrar
        exit={{ opacity: 0 }} // Animação ao sair
        transition={{ duration: 1 }} // Duração da animação
      >
        {renderSection()}
      </motion.div>
    </div>
  );
}