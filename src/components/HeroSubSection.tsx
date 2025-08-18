import React from 'react';
import { Link } from 'react-router-dom';

// --- WICHTIG: LOKALE BILDER IMPORTIEREN ---
// Importieren Sie hier Ihre lokalen Bilder. Der korrekte Pfad ist jetzt von der Root-Ebene aus.
import cardBild1 from '../assets/bilder/hero/Bild1.JPEG';
import cardBild2 from '../assets/bilder/hero/Bild2.JPEG';
import cardBild3 from '../assets/bilder/hero/Bild3.JPEG';
import cardBild4 from '../assets/bilder/hero/Bild5 copy.JPEG';

// --- TYPDEFINITIONEN ---
interface HeroCardData {
  id: number;
  title: string;
  subTitle?: string;
  linkText: string;
  linkTo: string;
  background: string;
  style: 'horizontal' | 'vertical';
}

interface HeroCardProps {
  card: HeroCardData;
  index: number;
}

// Komponente für eine einzelne Karte
const HeroCard: React.FC<HeroCardProps> = ({ card, index }) => {
  const isOffset = index % 2 !== 0;

  return (
    <div className={`relative h-full hover:opacity-20 duration-300 overflow-hidden rounded-md ${isOffset ? 'lg:mt-16' : ''}`}>
      {/* Hintergrundbild */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${card.background})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30 group-hover:bg-opacity-50 transition-colors duration-300" />
      
      {/* Inhalt */}
      <div className="relative flex flex-col justify-end h-full p-6 text-white z-10">
        <div className="mb-8">
          <h2 className="text-4xl font-heading">{card.title}</h2>
          {card.subTitle && <p className="text-gray-300 font-body-light">{card.subTitle}</p>}
        </div>
        <Link
          to={card.linkTo}
          className="text-white flex items-center space-x-2 text-sm uppercase tracking-wide opacity-80 hover:opacity-100 transition-opacity duration-300 font-subheading"
        >
          <span>{card.linkText}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </Link>
      </div>
    </div>
  );
};


// Hauptkomponente für die Hero-Subsektion
const HeroSubSection: React.FC = () => {
    // Daten für die Hero-Karten
    const heroCards: HeroCardData[] = [
        {
            id: 1,
            title: 'APVisuals',
            subTitle: 'UNSER PORTFOLIO',
            linkText: 'Zum PORTFOLIO',
            linkTo: '/portfolio',
            background: cardBild1, // Hier wird die importierte Variable verwendet
            style: 'vertical',
        },
        {
            id: 2,
            title: 'Webdesign & Entwicklung',
            subTitle: 'WEB DESIGN',
            linkText: 'zu den Designs',
            linkTo: '/portfolio',
            background: cardBild2, // Hier wird die importierte Variable verwendet
            style: 'vertical',
        },
        {
            id: 3,
            title: 'Fotografie & Videografie',
            subTitle: 'FOTOGRAFIE',
            linkText: 'zu den Bildern',
            linkTo: '/portfolio',
            background: cardBild3, // Hier wird die importierte Variable verwendet
            style: 'horizontal',
        },
        {
            id: 4,
            title: 'Verbinde dich mit uns',
            subTitle: 'KONTAKTIERE UNS',
            linkText: 'Kontakt',
            linkTo: '/portfolio',
            background: cardBild4, // Hier wird die importierte Variable verwendet
            style: 'vertical',
        },
    ];

  return (
    <section className="h-screen py-20 flex items-center justify-center bg-black bg-opacity-70">
      <div className="container mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-6 h-[450px] lg:h-[450px]">
        {heroCards.map((card, index) => (
          <HeroCard key={card.id} card={card} index={index} />
        ))}
      </div>
    </section>
  );
};

export default HeroSubSection;
