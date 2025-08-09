import React from 'react';
import { Link } from 'react-router-dom';

// --- WICHTIG: LOKALE BILDER IMPORTIEREN ---
// Importieren Sie hier Ihre lokalen Bilder.
import portfolioBild1 from '../assets/bilder/hero/Bild2.JPEG';
import portfolioBild2 from '../assets/bilder/hero/Bild3.JPEG'; // Pfad korrigiert
import portfolioBild3 from '../assets/bilder/hero/Bild4.JPEG';
import portfolioBild4 from '../assets/bilder/hero/Bild13.JPEG'; // Beispielbild, falls benötigt
import portfolioBild5 from '../assets/bilder/hero/Bild11.JPEG'; // Beispielbild, falls benötigt

// --- TYPDEFINITIONEN ---
interface PortfolioImage {
    src: string;
    alt: string;
    aspect: 'portrait' | 'landscape';
    rotation: number; // Für den Collage-Effekt
    position: { top: string; left: string; width: string; height: string; }; // 'height' hinzugefügt
}

// --- PortfolioSection Komponente ---
const PortfolioSection: React.FC = () => {
    const images: PortfolioImage[] = [
        {
            src: portfolioBild1,
            alt: 'Biker in the woods',
            aspect: 'portrait',
            rotation: -5,
            position: { top: '30%', left: '15%', width: '40%', height: '50%' }
        },
        {
            src: portfolioBild2,
            alt: 'Crowd at an event',
            aspect: 'landscape',
            rotation: 5,
            position: { top: '20%', left: '50%', width: '35%', height: '45%' }
        },
        {
            src: portfolioBild3,
            alt: 'A forest path',
            aspect: 'portrait',
            rotation: 15,
            position: { top: '50%', left: '35%', width: '30%', height: '40%' }
        },
        {
            src: portfolioBild4,
            alt: 'Person sitting',
            aspect: 'landscape',
            rotation: -10,
            position: { top: '55%', left: '70%', width: '30%', height: '40%' }
        },
        {
            src: portfolioBild5,
            alt: 'Person sitting',
            aspect: 'landscape',
            rotation: -10,
            position: { top: '10%', left: '85%', width: '30%', height: '40%' }
        },
    ];

  return (
    <section className="bg-black text-white py-20 flex flex-col items-center justify-center min-h-screen">
      <div className="relative w-full max-w-5xl h-[60vh] md:h-[80vh] flex items-center justify-center px-4">
        {/* Bild-Collage */}
        {images.map((image, index) => (
            <Link
                key={index}
                to="/portfolio"
                className="hover:scale-105 hover:translate-y-10 transition-transform duration-300 absolute bg-cover bg-center rounded-lg shadow-lg"
                style={{
                    backgroundImage: `url(${image.src})`,
                    transform: `translate(-50%, -50%) rotate(${image.rotation}deg)`,
                    ...image.position,
                }}
                role="button"
                tabIndex={0}
            />
        ))}

        {/* Text und Link */}
        <Link
          to="/portfolio"
          className="absolute bottom-10 text-white flex items-center space-x-2 text-sm uppercase tracking-wide opacity-80 hover:opacity-100 hover:text-amber-400 font-subheading transition-opacity duration-300 z-30"
        >
          <span>VIEW PORTFOLIO</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </Link>
      </div>
    </section>
  );
};

export default PortfolioSection;
