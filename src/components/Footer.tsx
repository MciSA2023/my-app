import React from 'react';

import footerimage from '../assets/bilder/footer/footer.JPEG'; // Lokales Bild für den Footer

// Footer-Komponente
const Footer: React.FC = () => {
  return (
    <footer className="relative p-20 md:p-12 flex flex-col items-center justify-center text-white text-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-30 blur-sm z-0" style={{ backgroundImage: `url(${footerimage})` }} />
      <div className="relative z-10">
        <h2 className="font-bold text-4xl md:text-5xl">APVisuals</h2>
        <div className="mt-4 flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
          <p className="text-gray-400 hover:text-amber-400">© 2025 APVisuals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
