import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// --- KOMPONENTEN IMPORTE NACH DER KORRIGIERTEN HIERARCHIE ---
import Navigation from './components/Navigation';
import SocialSidebar from './components/SocialSidebar';
import Hero from './screens/Hero';
import Gallery from './screens/GallerySection';
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




function App() {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


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
