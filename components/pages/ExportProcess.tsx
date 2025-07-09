import React from 'react';
import SectionTitle from '../SectionTitle';

const ExportProcess: React.FC = () => {
  const steps = [
    { title: 'Inquiry & Quotation', description: 'Contact us with your requirements. We provide a detailed quote and product catalog.' },
    { title: 'Order Confirmation', description: 'Once you are satisfied, we finalize the order details, terms, and issue a proforma invoice.' },
    { title: 'Production & Quality Check', description: 'Our artisans begin crafting your order. Each product undergoes rigorous quality checks to meet our high standards.' },
    { title: 'Packaging & Stuffing', description: 'Products are professionally packed in export-worthy materials to ensure safety during transit. Containers are stuffed under supervision.' },
    { title: 'Documentation & Shipping', description: 'We handle all necessary export documentation and partner with reliable logistics providers to ship your order.' },
    { title: 'Delivery & Feedback', description: 'Your consignment is delivered to your designated port. We value your feedback to continually improve our services.' },
  ];

  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Our Export Process" subtitle="Seamless & Transparent" />
        <div className="max-w-5xl mx-auto mt-16 space-y-16">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center gap-8">
              <div className={`flex-1 ${index % 2 === 0 ? 'md:order-last' : ''}`}>
                <div className="relative">
                  <div className="absolute -inset-2 bg-[#FDFBF8] rounded-lg transform -rotate-1"></div>
                  <img
                    src={`/images/process${index + 1}.jpg`}
                    alt={step.title}
                    className="relative w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#C59A6D] rounded-full flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                    {index + 1}
                  </div>
                  <h3 className="text-3xl font-bold text-stone-800">{step.title}</h3>
                </div>
                <p className="mt-4 text-stone-600 text-lg ml-16">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExportProcess;