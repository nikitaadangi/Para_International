import React from 'react';
import { PRODUCTS_DATA } from '../../constants';
import { Page } from '../../types';
import ProductCard from '../ProductCard';
import SectionTitle from '../SectionTitle';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const featuredProducts = PRODUCTS_DATA.slice(0, 3);

  return (
    <div className="space-y-24 md:space-y-32">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[500px] flex items-end h-100 pb-20 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <img src="./images/001.png" alt="Exquisite marble architecture" className="absolute inset-0 w-full h-full object-cover"/>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight"></h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-stone-200"></p>
          <div className="mt-16 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={() => onNavigate('Gallery')}
              className="px-8 py-3 bg-[#C59A6D] text-white font-bold rounded-full hover:bg-[#b58e61] transition-colors duration-300 shadow-lg text-lg"
            >
              Explore Our Gallery
            </button>
            <button 
              onClick={() => onNavigate('Contact')}
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-stone-800 transition-colors duration-300 shadow-lg text-lg"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-sm font-bold text-[#C59A6D] uppercase tracking-widest">Welcome to Para International</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mt-2">A Legacy of Quality & Trust</h2>
            <div className="mt-4 w-24 h-1 bg-[#C59A6D]"></div>
            <p className="mt-6 text-stone-600">
              PARA INTERNATIONAL LLP is a trusted and dynamic export company based in India, specializing in the trade of premium-quality marble stone, marble articles, and handicrafts. With a strong focus on craftsmanship and quality, we cater to the growing global demand for Indian natural stones and traditional artistry, particularly in the Middle Eastern market, including Dubai.

            </p>
            <p className="mt-4 text-stone-600">
              As an LLP (Limited Liability Partnership), our firm operates with transparency, professionalism, and a collaborative spirit, offering a reliable platform for long-term international business partnerships.
            </p>
            <button onClick={() => onNavigate('About')} className="mt-8 px-6 py-3 border border-stone-800 text-stone-800 font-bold hover:bg-stone-800 hover:text-white transition-colors duration-300 rounded-md">
              Learn More About Us
            </button>
          </div>
          <div className="relative h-96">
            <img src="./images/002.png" alt="" className="absolute top-0 left-0 w-2/3 h-full object-cover rounded-lg shadow-xl"/>
            <img src="./images/003.png" alt="" className="absolute bottom-0 right-0 w-1/2 h-2/3 object-cover rounded-lg shadow-xl border-8 border-[#FDFBF8]" />
          </div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Featured Products" subtitle="Our Finest Selections" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <button onClick={() => onNavigate('Gallery')} className="px-8 py-3 bg-[#C59A6D] text-white font-bold rounded-full hover:bg-[#b58e61] transition-colors duration-300 shadow-lg">
              View Full Gallery
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
