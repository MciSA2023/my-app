import React, { useState } from 'react';

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

// Beispiel für Nutzung:
const mockImages: GalleryImage[] = [
  {
    id: '1',
    src: '/images/image1.jpg',
    alt: 'Bild 1',
    aspect: 'landscape',
  },
  {
    id: '2',
    src: '/images/image2.jpg',
    alt: 'Bild 2',
    aspect: 'portrait',
  },
  {
    id: '3',
    src: '/images/image3.jpg',
    alt: 'Bild 3',
    aspect: 'landscape',
  },
];

const Gallery: React.FC = () => {
  const handleImageClick = (image: GalleryImage) => {
    alert(`Bild geklickt: ${image.alt}`);
  };

  return <GallerySection images={mockImages} onImageClick={handleImageClick} />;
};

export default Gallery;
