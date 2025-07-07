import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
      <div className="overflow-hidden">
        <img src={product.imageUrl} alt={product.name} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
      </div>
      <div className="p-6">
        <p className="text-sm font-semibold text-[#C59A6D] uppercase tracking-wider">{product.category}</p>
        <h3 className="text-xl font-bold text-stone-800 mt-2 h-16">{product.name}</h3>
        <p className="text-stone-600 mt-2 text-sm">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
