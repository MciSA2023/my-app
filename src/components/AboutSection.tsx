import React from 'react';

// --- TYPDEFINITIONEN ---
interface AboutSectionProps {
  imageSrc: string;
  text: string;
}

// AboutSection Komponente
const AboutSection: React.FC<AboutSectionProps> = ({ imageSrc, text }) => {
  return (
    <section className="bg-black text-white py-20 px-4 md:px-8">
      {/* Bild mit Overlay */}
      <div
        className="relative h-[60vh] md:h-[80vh] bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden"
        style={{ backgroundImage: `url(${imageSrc})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40" />
      </div>

      {/* Textsektion */}
      <div className="container mx-auto mt-12 md:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <p className="text-gray-400 leading-relaxed md:col-span-1">{text}</p>
          <p className="text-gray-400 leading-relaxed md:col-span-1">{text}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
