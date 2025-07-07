import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Gallery from './components/pages/Gallery';
import Contact from './components/pages/Contact';
import { Page } from './types';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>('Home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleNavigate = (page: Page) => {
    setActivePage(page);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const renderPage = () => {
    switch (activePage) {
      case 'Home':
        return <Home onNavigate={handleNavigate} />;
      case 'About':
        return <About />;
      case 'Gallery':
        return <Gallery />;
      case 'Contact':
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="bg-[#FDFBF8] text-stone-800 min-h-screen flex flex-col">
      <Header activePage={activePage} onNavigate={handleNavigate} isScrolled={isScrolled} />
      <main className="flex-grow pt-20">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;