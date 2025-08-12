// src/App.tsx
import { useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// --- KOMPONENTEN IMPORTE NACH DER KORRIGIERTEN HIERARCHIE ---
import Navigation from './components/Navigation';
import SocialSidebar from './components/SocialSidebar';
import Hero from './screens/Hero';
import Gallery from './screens/GallerySection';
import Footer from './components/Footer';
import HeroSubSection from './components/HeroSubSection';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/PortfolioSection';

// --- TYPDEFINITIONEN FÜR DIESE DATEI ---

interface NavLink {
  name: string;
  href: string;
}

// --- WICHTIG: LOKALE BILDER IMPORTIEREN ---
import heroBackground from './assets/bilder/hero/Bild6.JPEG';
import navBackground from './assets/bilder/hero/Bild6.JPEG'; // Hintergrundbild für Navigation
import aboutbackground from './assets/bilder/apvisuals/Background.JPEG'; // Hintergrundbild für AboutSection

const mainNavLinks: NavLink[] = [
    { name: 'Homepage', href: '/' },
];

const subNavLinks: NavLink[] = [];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
        <div className="bg-black text-white font-['Inter'] min-h-screen relative">
          <div className="fixed inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBackground})` }} />
          <div className="fixed inset-0 z-0 bg-black bg-opacity-40" />

          <div className="relative z-10">
            <Navigation 
              isOpen={isMenuOpen}
              onClose={handleMenuToggle}
              onToggle={handleMenuToggle}
              mainLinks={mainNavLinks}
              subLinks={subNavLinks}
              background={navBackground}
            />
            <SocialSidebar />
            
            <Routes>
                <Route path="/" element={
                  <>
                    <Hero />
                    <HeroSubSection />
                    <AboutSection 
                      imageSrc={aboutbackground} 
                      text="Wir sind Adhar und Puneet – die kreativen Köpfe hinter AP Visuals.
                      Unsere gemeinsame Leidenschaft ist visuelles Storytelling. Deshalb bieten wir Fotografie, Videoproduktion und Webdesign aus einer Hand, um eure Geschichte authentisch zu erzählen. Egal ob in Bildern, Filmen oder im Web – wir fangen Emotionen ein, geben Marken ein Gesicht und machen jeden Moment unvergesslich.
                      Qualität ist unser Versprechen. Mit Präzision, Kreativität und dem höchsten Anspruch an uns selbst setzen wir eure Visionen in die Tat um." 
                      />
                    <PortfolioSection />
                  </>
                } />
                <Route path="/portfolio" element={<Gallery/>} />
                <Route path="/motion" element={<div><h1>Motion Page</h1></div>} />
            </Routes>

            <Footer />
          </div>
        </div>
    </Router>
  );
}

export default App;