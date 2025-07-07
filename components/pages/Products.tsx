import React, { useState } from 'react';
import { PRODUCTS_DATA } from '../../constants';
import SectionTitle from '../SectionTitle';
import ProductCard from '../ProductCard';
import { Product } from '../../types';

type Category = 'All' | 'Marble' | 'Handicrafts' | 'Stone Articles';

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const categories: Category[] = ['All', 'Marble', 'Handicrafts', 'Stone Articles'];

  const filteredProducts = activeCategory === 'All'
    ? PRODUCTS_DATA
    : PRODUCTS_DATA.filter(p => p.category === activeCategory);

  return (
    <div className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Our Products" subtitle="A World of Craftsmanship" />
        
        <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 font-semibold rounded-full transition-colors duration-300 text-sm md:text-base
                ${activeCategory === category 
                  ? 'bg-stone-800 text-white shadow-md' 
                  : 'bg-white text-stone-700 hover:bg-stone-200'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-stone-600">No products found in this category.</p>
          </div>
        )}

        <div className="mt-20 text-center bg-stone-100 p-12 rounded-lg">
          <h3 className="text-3xl font-bold text-stone-800">Looking for Something Specific?</h3>
          <p className="mt-4 text-stone-600 max-w-2xl mx-auto">We offer custom sourcing and production services to meet your unique requirements. Contact us to discuss your project.</p>
          <button className="mt-6 px-8 py-3 bg-[#C59A6D] text-white font-bold rounded-full hover:bg-[#b58e61] transition-colors duration-300 shadow-lg">
            Request a Custom Quote
          </button>
        </div>

      </div>
    </div>
  );
};

export default Products;
