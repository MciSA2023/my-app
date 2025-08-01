import React from 'react';
import SocialSidebar from '../components/SocialSidebar'; // Angenommen, diese Komponente ist in einer separaten Datei

// --- WICHTIG: LOKALE BILDER IMPORTIEREN ---
// Ersetzen Sie './path-to-your-image.jpg' mit dem tatsächlichen Pfad zu Ihrem Hero-Bild.
import heroBackground from '../assets/bilder/hero/Bild5.JPEG';




// Hero-Sektion Komponente mit Bildhintergrund
const HeroSection: React.FC = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center relative text-white">
            {/* Hintergrundbild */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${heroBackground})` }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 z-0 bg-black opacity-40" />
            
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold z-10">APVisuals</h1>
            <div className="absolute bottom-12 left-12 flex flex-col space-y-2 text-gray-300 z-10 text-sm">
                <span>28° 36° N,  77° 12° E</span>
            </div>
            <div className="absolute bottom-12 right-12 text-gray-300 z-10 text-lg hidden md:block hover:text-amber-400 transition-colors duration-300">
                <span>Photograpy based in Innsbruck</span>
            </div>
            <SocialSidebar />
        </div>
    );
};

export default HeroSection;
