import React from 'react';

// Kontaktbereich-Komponente
const ContactSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center p-8 md:p-16 text-center">
      <a href="mailto:Support@APVisuals.at" className="text-xl md:text-3xl text-gray-300 hover:text-white font-light transition-colors duration-300">
        Support@APVisuals.at
      </a>
    </section>
  );
};

export default ContactSection;
