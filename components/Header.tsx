import React, { useState } from 'react';
import { Page } from '../types';
import { NAV_LINKS } from '../constants';
import { LogoIcon, MenuIcon, CloseIcon } from './icons/Icons';

interface HeaderProps {
  activePage: Page;
  onNavigate: (page: Page) => void;
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ activePage, onNavigate, isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavLink: React.FC<{ page: Page }> = ({ page }) => (
    <button
      onClick={() => {
        onNavigate(page);
        setIsMenuOpen(false);
      }}
      className={`text-sm font-medium transition-colors duration-300 relative py-1
        ${activePage === page ? 'text-[#C59A6D]' : 'text-stone-700 hover:text-[#C59A6D]'}
        after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#C59A6D]
        after:transition-transform after:duration-300 ${activePage === page ? 'after:scale-x-100' : 'after:scale-x-0'}
        hover:after:scale-x-100 after:origin-center`}
    >
      {page}
    </button>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-[#FDFBF8]/95 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <button onClick={() => onNavigate('Home')} className="flex items-center space-x-2">
              <LogoIcon className="h-10 w-auto text-[#B8860B]" />
              <span className="text-2xl font-bold font-serif text-stone-800">Para International</span>
            </button>
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map(page => <NavLink key={page} page={page} />)}
          </nav>
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md text-stone-700 hover:text-[#C59A6D] hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#C59A6D]">
              {isMenuOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden bg-[#FDFBF8] shadow-lg">
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            {NAV_LINKS.map(page => <NavLink key={page} page={page} />)}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
