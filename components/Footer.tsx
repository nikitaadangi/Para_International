import React from 'react';
import { Page } from '../types';
import { NAV_LINKS } from '../constants';
import { LogoIcon, InstagramIcon, WhatsappIcon } from './icons/Icons';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-stone-800 text-stone-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="md:col-span-1">
            <button onClick={() => onNavigate('Home')} className="flex items-center space-x-2 mb-4">
              <LogoIcon className="h-10 w-auto text-[#C59A6D]" />
              <span className="text-xl font-bold font-serif text-white">Para International</span>
            </button>
            <p className="text-sm text-stone-400">Delivering premium Indian marble and handcrafted stonework globally.</p>
            <div className="flex space-x-4 mt-6">
              <a href="https://www.instagram.com/parainternational_?igsh=cHg5bmlxcWZ6Z3F1"
  target="_blank"
  rel="noopener noreferrer"
  className="text-stone-400 hover:text-[#C59A6D] transition-colors">
  <InstagramIcon className="h-6 w-6" />
</a>

            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map(page => (
                 <li key={page}>
                   <button onClick={() => onNavigate(page)} className="text-stone-400 hover:text-white transition-colors text-sm">{page}</button>
                 </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white tracking-wider uppercase">Contact Us</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start">
                <span className="mt-1 mr-2 text-[#C59A6D]">&#9658;</span>
                <p>Udaipur, Rajasthan, India 313001</p>
              </li>
              <li className="flex items-start">
                <span className="mt-1 mr-2 text-[#C59A6D]">&#9658;</span>
                <a href="mailto:paraintllp@gmail.com" className="hover:text-white">Gmail-paraintllp@gmail.com</a>
              </li>
              <li className="flex items-start">
                <span className="mt-1 mr-2 text-[#C59A6D]">&#9658;</span>
                <a href="https://wa.me/7726050703" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-2">
                  <WhatsappIcon className="h-5 w-5" /> WhatsApp
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white tracking-wider uppercase">Our Promise</h3>
            <p className="mt-4 text-sm text-stone-400">
              We are committed to delivering unparalleled quality and craftsmanship, ensuring every piece reflects the rich heritage of India.
            </p>
          </div>

        </div>
        <div className="mt-12 border-t border-stone-700 pt-8 text-center text-sm text-stone-500">
          <p>&copy; {new Date().getFullYear()} Para International. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;