import React, { useState } from 'react';


interface GalleryItemProps {
  image: ImageData;
  onImageClick: (image: ImageData) => void;
  index: number;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ image, onImageClick, index }) => {
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
  };

  const isPortrait = image.aspect === 'portrait';
  const gridClasses = `col-span-1 ${isPortrait ? 'row-span-2' : ''}`;
  

  return (
    <button
      onClick={() => onImageClick(image)}
      className={`relative overflow-hidden group rounded-lg shadow-lg ${gridClasses} focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50`}
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
  images: ImageData[];
  onImageClick: (image: ImageData) => void;
}

const GallerySection: React.FC<GallerySectionProps> = ({ images, onImageClick }) => {
  return (
    <section className="container mx-auto px-2 md:px-4 py-20">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[10rem] md:auto-rows-[12rem] lg:auto-rows-[16rem] grid-flow-row-dense">
        {images.map((image, index) => (
          <GalleryItem key={image.id} image={image} onImageClick={onImageClick} index={index} />
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
