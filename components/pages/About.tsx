import React from 'react';
import SectionTitle from '../SectionTitle';
import { CheckCircleIcon } from '../icons/Icons';

const About: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="About Para International" subtitle="Our Story" />
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 text-stone-600 text-lg">
            <p className="leading-relaxed">
             PARA INTERNATIONAL LLP is a versatile and forward-thinking company based in India, engaged in the trade, supply, and export of high-quality marble, stone products, and handicrafts. We cater to a wide range of clients across both domestic and international markets, with a strong presence in regions like the Middle East, including Dubai.

We offer a carefully selected range of marble varieties such as Makrana, Katni, Morwad White, Udaipur Green, and Pink Marble, along with customized marble articles and handcrafted products. Our focus is on delivering consistent quality, timely execution, and reliable service—no matter the scale of the requirement.

            </p>
            <p className="leading-relaxed">
              At PARA INTERNATIONAL LLP, we believe in maintaining professional standards, clear communication, and long-term partnerships. Whether you're a buyer, contractor, designer, or distributor, we provide dependable solutions tailored to your specific needs.

As a Limited Liability Partnership, we are committed to transparency, operational efficiency, and client satisfaction—ensuring a smooth and trustworthy business experience at every step.
            </p>
          </div>
          <div>
            <div>
                <img src="/Para_International/images/A01.png" alt="About Para International" className="rounded-lg shadow-xl w-full object-cover" />
            </div>
          </div>
        </div>
        
        <div className="mt-24 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-8 border border-stone-200 rounded-lg">
            <h3 className="text-3xl font-bold text-stone-800">Our Mission</h3>
            <p className="mt-4 text-stone-600">To deliver high-quality, ethically sourced products with unmatched customer satisfaction and build strong, lasting relationships with our clients across the globe.</p>
          </div>
          <div className="p-8 border border-stone-200 rounded-lg bg-stone-800 text-white shadow-xl">
            <h3 className="text-3xl font-bold">Our Vision</h3>
            <p className="mt-4 text-stone-300">To be a leading global exporter of Indian marble and handicrafts, showcasing the richness of Indian heritage to the world.</p>
          </div>
          <div className="p-8 border border-stone-200 rounded-lg">
            <h3 className="text-3xl font-bold text-stone-800">Our Values</h3>
            <p className="mt-4 text-stone-600">Integrity, Excellence, and Partnership. We believe in honest dealings, unparalleled product quality, and building lasting relationships with our clients.</p>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-4xl font-bold text-center text-stone-800">Why Choose Us?</h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueProp title="Unmatched Quality" description="Rigorous quality checks at every stage, from sourcing to shipping." />
            <ValueProp title="Client-Centric" description="Tailored solutions and dedicated support for every client." />
          </div>
        </div>
      </div>
    </div>
  );
};


const ValueProp: React.FC<{title: string, description: string}> = ({title, description}) => (
    <div className="flex items-start space-x-4">
        <div>
            <CheckCircleIcon className="h-8 w-8 text-[#C59A6D]"/>
        </div>
        <div>
            <h4 className="text-xl font-bold text-stone-800">{title}</h4>
            <p className="mt-1 text-stone-600">{description}</p>
        </div>
    </div>
);

export default About;
