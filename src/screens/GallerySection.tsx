import React, { useState, useEffect } from 'react';
import FullscreenImageViewer from '../components/FullscreenImageViewer'; // Der Pfad zu deiner Viewer-Komponente
import galleryImage from '../assets/bilder/gallery/Bild1.JPEG';
import galleryImage2 from '../assets/bilder/gallery/Bild2.JPEG';
import galleryImage3 from '../assets/bilder/gallery/Bild3.JPEG';
import galleryImage4 from '../assets/bilder/gallery/Bild4_L.JPEG';
import galleryImage5 from '../assets/bilder/gallery/Bild5.JPEG';
import galleryImage6 from '../assets/bilder/gallery/Bild6_L.JPEG';
import galleryImage7 from '../assets/bilder/gallery/Bild7.JPEG';
import galleryImage8 from '../assets/bilder/gallery/Bild8_L.JPEG';
import galleryImage9 from '../assets/bilder/gallery/Bild9.JPEG';
import galleryImage10 from '../assets/bilder/gallery/Bild10.JPEG';
import galleryImage11 from '../assets/bilder/gallery/Bild11.JPEG';
import galleryImage12 from '../assets/bilder/gallery/Bild12.JPEG';
import galleryImage13 from '../assets/bilder/gallery/Bild13.JPEG';
import galleryImage14 from '../assets/bilder/gallery/Bild14_L.JPEG';
import galleryImage15 from '../assets/bilder/gallery/Bild15_L.JPEG';
import galleryImage16 from '../assets/bilder/gallery/Bild16.JPEG';
import galleryImage17 from '../assets/bilder/gallery/Bild17.JPEG';
import galleryImage18 from '../assets/bilder/gallery/Bild18.JPEG';
import galleryImage19 from '../assets/bilder/gallery/Bild19.JPEG';
import galleryImage20 from '../assets/bilder/gallery/Bild20.JPEG';
import galleryImage21 from '../assets/bilder/gallery/Bild21.JPEG';
import galleryImage22 from '../assets/bilder/gallery/Bild22_L.JPEG';
import galleryImage23 from '../assets/bilder/gallery/Bild23.JPEG';
import galleryImage24 from '../assets/bilder/gallery/Bild24_L.JPEG';
import galleryImage26 from '../assets/bilder/gallery/Bild26.JPEG';
import galleryImage27 from '../assets/bilder/gallery/Bild27_L.JPEG';
import galleryImage28 from '../assets/bilder/gallery/Bild28_L.JPEG';
import galleryImage30 from '../assets/bilder/gallery/Bild30_L.JPEG';
import galleryImage31 from '../assets/bilder/gallery/Bild31.JPEG';
import galleryImage32 from '../assets/bilder/gallery/Bild32_L.JPEG';
import galleryImage33 from '../assets/bilder/gallery/Bild33_L.JPEG';
import galleryImage34 from '../assets/bilder/gallery/Bild34.JPEG';
import galleryImage35 from '../assets/bilder/gallery/Bild35.JPEG';
import galleryImage36 from '../assets/bilder/gallery/Bild36_L.JPEG';
import galleryImage37 from '../assets/bilder/gallery/Bild37.JPEG';
import galleryImage38 from '../assets/bilder/gallery/Bild38.JPEG';
import galleryImage39 from '../assets/bilder/gallery/Bild39.JPEG';
import galleryImage40 from '../assets/bilder/gallery/Bild40.JPEG';
import galleryImage41 from '../assets/bilder/gallery/Bild41_L.JPEG';
import galleryImage43 from '../assets/bilder/gallery/Bild43_L.JPEG';



interface GalleryImage {
  id: number; // Ändere den Typ von string zu number
  src: string;
  alt: string;
  aspect: 'portrait' | 'landscape';
}

interface GalleryItemProps {
  image: GalleryImage;
  onImageClick: (image: GalleryImage) => void;
  index: number;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ image, onImageClick, index }) => {
  const [hasError, setHasError] = useState(false);

  const handleError = () => setHasError(true);

  const isPortrait = image.aspect === 'portrait';
  const gridClasses = `col-span-1 ${isPortrait ? 'row-span-2' : ''}`;

  return (
    <button
      onClick={() => onImageClick(image)}
      className={`relative overflow-hidden group rounded-lg shadow-lg ${gridClasses} focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50`}
      aria-label={`Bild ${index + 1}: ${image.alt}`}
    >
      {hasError ? (
        <div className="w-full h-full bg-gray-700 flex items-center justify-center text-gray-400">
          Fehler beim Laden
        </div>
      ) : (
        <img
          src={image.src}
          alt={image.alt}
          className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
          onError={handleError}
        />
      )}
    </button>
  );
};

interface GallerySectionProps {
  images: GalleryImage[];
  onImageClick: (image: GalleryImage) => void;
}

const GallerySection: React.FC<GallerySectionProps> = ({ images, onImageClick }) => {
  return (
    <section className="container mx-auto px-2 md:px-4 py-20">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[10rem] md:auto-rows-[12rem] lg:auto-rows-[16rem] grid-flow-row-dense">
        {images.map((image, index) => (
          <GalleryItem
            key={image.id}
            image={image}
            onImageClick={onImageClick}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};


const mockImages: GalleryImage[] = [
  { id: 1, src: galleryImage, alt: 'Bild 1', aspect: 'portrait' },
  { id: 2, src: galleryImage2, alt: 'Bild 2', aspect: 'portrait' },
  { id: 3, src: galleryImage3, alt: 'Bild 3', aspect: 'portrait' },
  { id: 4, src: galleryImage4, alt: 'Bild 4', aspect: 'landscape' },
  { id: 5, src: galleryImage5, alt: 'Bild 5', aspect: 'portrait' },
  { id: 6, src: galleryImage6, alt: 'Bild 6', aspect: 'landscape' },
  { id: 7, src: galleryImage7, alt: 'Bild 7', aspect: 'portrait' },
  { id: 8, src: galleryImage8, alt: 'Bild 8', aspect: 'landscape' },
  { id: 9, src: galleryImage9, alt: 'Bild 9', aspect: 'portrait' },
  { id: 10, src: galleryImage10, alt: 'Bild 10', aspect: 'portrait' },
  { id: 11, src: galleryImage11, alt: 'Bild 11', aspect: 'portrait' },
  { id: 12, src: galleryImage12, alt: 'Bild 12', aspect: 'portrait' },
  { id: 13, src: galleryImage13, alt: 'Bild 13', aspect: 'portrait' },
  { id: 14, src: galleryImage14, alt: 'Bild 14', aspect: 'landscape' },
  { id: 15, src: galleryImage15, alt: 'Bild 15', aspect: 'landscape' },
  { id: 16, src: galleryImage16, alt: 'Bild 16', aspect: 'portrait' },
  { id: 17, src: galleryImage17, alt: 'Bild 17', aspect: 'portrait' },
  { id: 18, src: galleryImage18, alt: 'Bild 18', aspect: 'portrait' },
  { id: 19, src: galleryImage19, alt: 'Bild 19', aspect: 'landscape' },
  { id: 20, src: galleryImage20, alt: 'Bild 20', aspect: 'landscape' },
  { id: 21, src: galleryImage21, alt: 'Bild 21', aspect: 'portrait' },
  { id: 22, src: galleryImage22, alt: 'Bild 22', aspect: 'landscape' },
  { id: 23, src: galleryImage23, alt: 'Bild 23', aspect: 'portrait' },
  { id: 24, src: galleryImage24, alt: 'Bild 24', aspect: 'landscape' },
  { id: 26, src: galleryImage26, alt: 'Bild 26', aspect: 'portrait' },
  { id: 27, src: galleryImage27, alt: 'Bild 27', aspect: 'landscape' },
  { id: 28, src: galleryImage28, alt: 'Bild 28', aspect: 'landscape' },
  { id: 30, src: galleryImage30, alt: 'Bild 30', aspect: 'landscape' },
  { id: 31, src: galleryImage31, alt: 'Bild 31', aspect: 'landscape' },
  { id: 32, src: galleryImage32, alt: 'Bild 32', aspect: 'landscape' },
  { id: 33, src: galleryImage33, alt: 'Bild 33', aspect: 'landscape' },
  { id: 34, src: galleryImage34, alt: 'Bild 34', aspect: 'portrait' },
  { id: 35, src: galleryImage35, alt: 'Bild 35', aspect: 'portrait' },
  { id: 36, src: galleryImage36, alt: 'Bild 36', aspect: 'landscape' },
  { id: 37, src: galleryImage37, alt: 'Bild 37', aspect: 'portrait' },
  { id: 38, src: galleryImage38, alt: 'Bild 38', aspect: 'portrait' },
  { id: 39, src: galleryImage39, alt: 'Bild 39', aspect: 'portrait' },
  { id: 40, src: galleryImage40, alt: 'Bild 40', aspect: 'portrait' },
  { id: 41, src: galleryImage41, alt: 'Bild 41', aspect: 'landscape' },
  { id: 43, src: galleryImage43, alt: 'Bild 43', aspect: 'landscape' },
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const handleImageClick = (image: GalleryImage) => {
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
    <>
      <GallerySection images={mockImages} onImageClick={handleImageClick} />
      {selectedImage && (
        <FullscreenImageViewer
          image={selectedImage}
          onClose={handleCloseViewer}
          onNext={handleNextImage}
          onPrev={handlePrevImage}
        />
      )}
    </>
  );
};

export default Gallery;

