import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h3 className="text-sm font-bold text-[#C59A6D] uppercase tracking-widest">{subtitle}</h3>
      <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mt-2">{title}</h2>
      <div className="mt-4 w-24 h-1 bg-[#C59A6D] mx-auto"></div>
    </div>
  );
};

export default SectionTitle;
