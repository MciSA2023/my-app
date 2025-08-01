import React, { useState } from 'react';

// --- WICHTIG: LOKALE BILDER IMPORTIEREN ---
// Importieren Sie Ihre Bilder hier. Die Pfade sind relativ zu dieser Datei.
import bild1 from './assets/bilder/hero/Bild1.JPEG';
import bild2 from './assets/bilder/hero/Bild2.JPEG';
import bild3 from './assets/bilder/hero/Bild3.JPEG';
import bild4 from './assets/bilder/hero/Bild4.JPEG';
import bild5 from './assets/bilder/hero/Bild5.JPEG';
import bild6 from './assets/bilder/hero/Bild6.JPEG';
import bild7 from './assets/bilder/hero/Bild7.JPEG';
import bild8 from './assets/bilder/hero/Bild8.JPEG';
import bild9 from './assets/bilder/hero/Bild9.JPEG';
import bild10 from './assets/bilder/hero/Bild10.JPEG';
import bild11 from './assets/bilder/hero/Bild11.JPEG';
import bild12 from './assets/bilder/hero/Bild12.JPEG';

// --- TYPDEFINITIONEN (Normalerweise in einer types.ts Datei) ---
interface ImageData {
  id: number;
  src: string;
  alt: string;
  aspect: 'portrait' | 'landscape'; // Korrigiert, um die Aspektlogik zu unterstützen
}

interface NavLink {
  name: string;
  href: string;
}

interface SocialLink {
  name: string;
  href: string;
  icon: JSX.Element;
}

// --- DATEN (Normalerweise in einer data.ts Datei) ---
// Die 'src' Werte verweisen jetzt auf die importierten lokalen Bild-Variablen
// und haben die korrekte 'aspect'-Eigenschaft.
const mockImages: ImageData[] = [
  { id: 1, src: bild1, alt: "A forest path", aspect: "landscape" },
  { id: 2, src: bild2, alt: "Biker in the woods", aspect: "portrait" },
  { id: 3, src: bild3, alt: "Crowd at an event", aspect: "portrait" },
  { id: 4, src: bild4, alt: "Person sitting", aspect: "landscape" },
  { id: 5, src: bild5, alt: "Man with a beard", aspect: "portrait" },
  { id: 6, src: bild6, alt: "Lake and mountain", aspect: "landscape" },
  { id: 7, src: bild7, alt: "Person in the snow", aspect: "portrait" },
  { id: 8, src: bild8, alt: "Man on a boat", aspect: "landscape" },
  { id: 9, src: bild9, alt: "Woman swimming", aspect: "portrait" },
  { id: 10, src: bild10, alt: "Another biker", aspect: "landscape" },
  { id: 11, src: bild11, alt: "Mountain view", aspect: "landscape" },
  { id: 12, src: bild12, alt: "Another portrait", aspect: "portrait" },
];

const navLinksData: NavLink[] = [
  { name: 'ALL', href: '#' },
  { name: 'PEOPLE', href: '#' },
  { name: 'ACCOMMODATION', href: '#' },
  { name: 'ADVENTURE', href: '#' },
];

const socialLinksData: SocialLink[] = [
  { name: 'Instagram', href: '#', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.5" y1="6.5" y2="6.5"/></svg>
    )
  },
  { name: 'Vimeo', href: '#', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-vimeo"><path d="M2.87 18.237a1 1 0 0 1-.689-1.28l1.93-7.584a.5.5 0 0 1 .53-.377L20.254 9.17c.607-.063 1.132.396 1.132.997a.99.99 0 0 1-.789.988l-5.69 1.138c-1.37.273-2.164 1.777-1.442 3.01l1.455 2.477c.307.52.029 1.18-.584 1.34L3.774 19.34a1.002 1.002 0 0 1-.904-1.103z"/></svg>
    )
  },
  { name: 'Twitter', href: '#', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 11.5-13.3 10.1 6.6-8.3 12.1-12.7 13.4-15.5H22z"/></svg>
    )
  },
  { name: 'Facebook', href: '#', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
    )
  },
];

// --- KOMPONENTEN ---

// Header-Komponente
interface HeaderProps {
  navLinks: NavLink[];
}

const Header: React.FC<HeaderProps> = ({ navLinks }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 backdrop-blur-md text-white px-6 md:px-8 py-4 flex items-center justify-between shadow-lg">
      <div className="flex-1 hidden md:block"></div> {/* Platzhalter für Desktop-Layout */}
      
      {/* Navigation */}
      <nav className="flex-1 flex justify-center space-x-8 lg:space-x-12">
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} className="text-gray-300 hover:text-white transition-colors duration-300">
            {link.name}
          </a>
        ))}
      </nav>

      {/* Kontakt-Button */}
      <div className="flex-1 flex justify-end">
        <a
          href="#"
          className="border-2 border-white text-white font-medium py-2 px-6 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
};

// Social Sidebar Component
interface SocialSidebarProps {
  socialLinks: SocialLink[];
}

const SocialSidebar: React.FC<SocialSidebarProps> = ({ socialLinks }) => {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 p-4 hidden md:flex flex-col items-center space-y-4 z-40">
      {socialLinks.map((link) => (
        <a key={link.name} href={link.href} className="text-gray-500 hover:text-white transition-colors duration-300">
          {link.icon}
        </a>
      ))}
    </div>
  );
};

// Galerie-Element-Komponente
interface GalleryItemProps {
  image: ImageData;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ image }) => {
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
  };

  const isPortrait = image.aspect === 'portrait';
  const gridClasses = `col-span-1 ${isPortrait ? 'row-span-2' : 'row-span-1'}`;

  return (
    <div
      className={`relative overflow-hidden group rounded-lg shadow-lg ${gridClasses}`}
    >
      {hasError ? (
        <div className="w-full h-full bg-gray-700 flex items-center justify-center text-gray-400">
          Fehler beim Laden
        </div>
      ) : (
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
          onError={handleError}
        />
      )}
    </div>
  );
};

// Galerie-Komponente
interface GalleryProps {
  images: ImageData[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <section className="container mx-auto px-4 md:px-8 py-20">
      {/* Das Grid-Layout ist jetzt auf maximal 3 Spalten auf größeren Bildschirmen eingestellt. */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-fr grid-flow-row-dense">
        {images.map((image) => (
          <GalleryItem key={image.id} image={image} />
        ))}
      </div>
    </section>
  );
};

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

// Footer-Komponente
const Footer: React.FC = () => {
  return (
    <footer className="relative p-8 md:p-12 flex flex-col items-center justify-center text-white text-center overflow-hidden">
      {/* Hintergrundbildeffekt (Platzhalter) */}
      <div className="absolute inset-0 bg-cover bg-center opacity-30 blur-sm z-0" style={{ backgroundImage: "url(https://placehold.co/1920x1080/2a2a2a/ffffff?text=Footer+Background)" }} />

      {/* Inhalt */}
      <div className="relative z-10">
        <h2 className="font-bold text-4xl md:text-5xl">APVisuals</h2>
        <div className="mt-4 flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
          <p className="text-gray-400">© 2024 APVisuals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Haupt-App-Komponente
const App: React.FC = () => {
  return (
    <div className="bg-black text-white font-['Inter'] min-h-screen">
      <Header navLinks={navLinksData} />
      <SocialSidebar socialLinks={socialLinksData} />
      <main className="pt-24">
        <Gallery images={mockImages} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
