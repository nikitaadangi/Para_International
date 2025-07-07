import React from 'react';
import { TESTIMONIALS_DATA } from '../../constants';
import SectionTitle from '../SectionTitle';
import { QuoteIcon } from '../icons/Icons';

const Testimonials: React.FC = () => {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="What Our Clients Say" subtitle="Testimonials" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {TESTIMONIALS_DATA.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg flex flex-col h-full">
              <QuoteIcon className="w-12 h-12 text-[#C59A6D] mb-4"/>
              <p className="text-stone-600 italic flex-grow">"{testimonial.quote}"</p>
              <div className="mt-6 text-right">
                <p className="font-bold text-stone-800 text-lg">{testimonial.author}</p>
                <p className="text-sm text-[#C59A6D] font-semibold">{testimonial.country}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;