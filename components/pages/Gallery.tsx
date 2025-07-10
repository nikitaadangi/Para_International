import React from 'react';
import { GALLERY_IMAGES } from '../../constants';
import SectionTitle from '../SectionTitle';

const Gallery: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Product Gallery" subtitle="Visual Showcase" />

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 lg:gap-6 space-y-4 lg:space-y-6 mt-12">
          {GALLERY_IMAGES.map((image) => (
            <div key={image.id} className="overflow-hidden rounded-lg shadow-lg break-inside-avoid">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
