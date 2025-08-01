import React from 'react';

// --- TYPDEFINITIONEN ---
interface NavLink {
  name: string;
  href: string;
}

interface NavigationProps {
  isOpen: boolean;
  onClose: () => void;
  onToggle: () => void;
  mainLinks: NavLink[];
  subLinks: NavLink[];
  background: string;
}

// Navigation Overlay Komponente
const NavigationOverlay: React.FC<NavigationProps> = ({ isOpen, onClose, mainLinks, subLinks, background }) => {
  return (
    <div
      className={`fixed inset-0 z-[60] bg-black bg-opacity-90 backdrop-blur-md text-white flex flex-col justify-center items-center p-8 transition-opacity duration-300 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
      style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <button
        onClick={onClose}
        className="absolute top-8 left-8 text-white text-3xl p-2 rounded-full hover:bg-gray-800 transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
      </button>

      <div className="flex flex-col items-center">
        <nav className="flex flex-col space-y-4 text-3xl font-bold mb-8 md:text-5xl md:flex-row md:space-y-0 md:space-x-12">
          {mainLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-gray-400 transition-colors duration-300">
              {link.name}
            </a>
          ))}
        </nav>
        <nav className="flex flex-col md:flex-row space-y-2 text-sm text-gray-400 md:space-y-0 md:space-x-6">
          {subLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-white transition-colors duration-300">
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

// Navigation Header Komponente
interface NavigationHeaderProps {
  onMenuToggle: () => void;
}

const NavigationHeader: React.FC<NavigationHeaderProps> = ({ onMenuToggle }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-10 text-white px-6 md:px-8 py-4 flex items-center justify-between">
      {/* Hamburger Menu Button */}
      <div className="flex-1">
        <button onClick={onMenuToggle} className="text-white focus:outline-none p-2 rounded-full hover:bg-gray-800 transition">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>
      
      {/* Logo */}
      <h1 className="font-bold text-2xl flex-1 text-center hidden md:block">ANDY!</h1>
      
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

// Haupt-Navigation Komponente
const Navigation: React.FC<NavigationProps> = ({ isOpen, onClose, onToggle, mainLinks, subLinks, background }) => {
  return (
    <>
      <NavigationHeader onMenuToggle={onToggle} />
      <NavigationOverlay isOpen={isOpen} onClose={onClose} mainLinks={mainLinks} subLinks={subLinks} background={background} />
    </>
  );
};

export default Navigation;