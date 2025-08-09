import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// --- KOMPONENTEN IMPORTE NACH DER KORRIGIERTEN HIERARCHIE ---
import Navigation from './components/Navigation';
import SocialSidebar from './components/SocialSidebar';
import Hero from './screens/Hero';
import GallerySection from './screens/GallerySection';
import FullscreenImageViewer from './components/FullscreenImageViewer';
import Footer from './components/Footer';
import HeroSubSection from './components/HeroSubSection';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/PortfolioSection';

// --- TYPDEFINITIONEN FÜR DIESE DATEI ---
interface ImageData {
  id: number;
  src: string;
  alt: string;
  aspect: 'portrait' | 'landscape';
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


// --- WICHTIG: LOKALE BILDER IMPORTIEREN ---
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
import heroBackground from './assets/bilder/hero/Bild6.JPEG';
import navBackground from './assets/bilder/hero/Bild6.JPEG'; // Hintergrundbild für Navigation
import aboutbackground from './assets/bilder/apvisuals/Background.JPEG'; // Hintergrundbild für AboutSection


// --- DATEN ---
const mockImages: ImageData[] = [
  { id: 1, src: bild1, alt: "A forest path", aspect: "portrait" },
  { id: 2, src: bild5, alt: "Biker in the woods", aspect: "landscape" },
  { id: 3, src: bild3, alt: "Crowd at an event", aspect: "portrait" },
  { id: 4, src: bild2, alt: "Person sitting", aspect: "portrait" },
  { id: 5, src: bild4, alt: "Man with a beard", aspect: "landscape" },
  { id: 6, src: bild6, alt: "Lake and mountain", aspect: "landscape" },
  { id: 7, src: bild7, alt: "Person in the snow", aspect: "portrait" },
  { id: 8, src: bild8, alt: "Man on a boat", aspect: "landscape" },
  { id: 9, src: bild9, alt: "Woman swimming", aspect: "portrait" },
  { id: 10, src: bild10, alt: "Another biker", aspect: "landscape" },
  { id: 11, src: bild11, alt: "Mountain view", aspect: "landscape" },
  { id: 12, src: bild12, alt: "Another portrait", aspect: "portrait" },
];

const mainNavLinks: NavLink[] = [
    { name: 'Homepage', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Motion', href: '/motion' },
];

const subNavLinks: NavLink[] = [
    { name: 'WALL LIST', href: '#' },
    { name: 'EDUCATION', href: '#' },
    { name: 'MY PRESETS', href: '#' },
    { name: 'PRIVATE', href: '#' },
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


function App() {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleImageClick = (image: ImageData) => {
    setSelectedImage(image);
  };

  const handleCloseViewer = () => {
    setSelectedImage(null);
  };

  const handleNextImage = () => {
    if (selectedImage) {
      const currentIndex = mockImages.findIndex(img => img.id === selectedImage.id);
      const nextIndex = (currentIndex + 1) % mockImages.length;
      setSelectedImage(mockImages[nextIndex]);
    }
  };

  const handlePrevImage = () => {
    if (selectedImage) {
      const currentIndex = mockImages.findIndex(img => img.id === selectedImage.id);
      const prevIndex = (currentIndex - 1 + mockImages.length) % mockImages.length;
      setSelectedImage(mockImages[prevIndex]);
    }
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!selectedImage) return;
      if (event.key === 'Escape') {
        handleCloseViewer();
      } else if (event.key === 'ArrowRight') {
        handleNextImage();
      } else if (event.key === 'ArrowLeft') {
        handlePrevImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage]);


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
            <SocialSidebar socialLinks={socialLinksData} />
            
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
                <Route path="/portfolio" element={<GallerySection images={mockImages} onImageClick={handleImageClick} />} />
                <Route path="/motion" element={<div><h1>Motion Page</h1></div>} />
            </Routes>

            

            <Footer />
            {selectedImage && (
              <FullscreenImageViewer 
                image={selectedImage} 
                onClose={handleCloseViewer}
                onNext={handleNextImage}
                onPrev={handlePrevImage}
              />
            )}
          </div>
        </div>
    </Router>
  );
}

export default App;
