import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <About />;
      case 'habilidades':
        return <Skills />;
      case 'projetos':
        return <Projects />;
      case 'blog':
        return <Blog />;
      case 'contato':
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <div>
      <Navbar setActiveSection={setActiveSection} />
      {renderSection()}
    </div>
  );
}