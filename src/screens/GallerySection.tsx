import React, { useState, useEffect } from 'react';
import FullscreenImageViewer from '../components/FullscreenImageViewer'; // Der Pfad zu deiner Viewer-Komponente
import galleryImage from '../assets/bilder/gallery/Bild1.JPEG';
import galleryImage2 from '../assets/bilder/gallery/Bild1.JPEG';
import galleryImage3 from '../assets/bilder/gallery/Bild1.JPEG';
import galleryImage4 from '../assets/bilder/gallery/Bild1.JPEG';
import galleryImage5 from '../assets/bilder/gallery/Bild1.JPEG';
import galleryImage6 from '../assets/bilder/gallery/Bild1.JPEG';


interface GalleryImage {
  id: string;
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

// Beispielbilder direkt in der Komponente
const mockImages: GalleryImage[] = [
  {
    id: '1',
    src: galleryImage,
    alt: 'Bild 1: Landschaftsfotografie',
    aspect: 'landscape',
  },
  {
    id: '2',
    src: galleryImage2,
    alt: 'Bild 2: Porträtfotografie',
    aspect: 'portrait',
  },
  {
    id: '3',
    src: galleryImage3,
    alt: 'Bild 3: Städtische Szene',
    aspect: 'landscape',
  },
  {
    id: '4',
    src: galleryImage4,
    alt: 'Bild 4: Weitere Porträtfotografie',
    aspect: 'portrait',
  },
  {
    id: '5',
    src: galleryImage5,
    alt: 'Bild 5: Stilleben',
    aspect: 'landscape',
  },
  {
    id: '6',
    src: galleryImage6,
    alt: 'Bild 6: Tierfotografie',
    aspect: 'portrait',
  },
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

