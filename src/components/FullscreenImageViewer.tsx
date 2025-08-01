import React from 'react';

// --- TYPDEFINITIONEN FÜR DIESE KOMPONENTE ---
interface ImageData {
  id: number;
  src: string;
  alt: string;
  aspect: 'portrait' | 'landscape';
}

interface FullscreenImageViewerProps {
  image: ImageData;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const FullscreenImageViewer: React.FC<FullscreenImageViewerProps> = ({ image, onClose, onNext, onPrev }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-md p-4 animate-fade-in">
      <button onClick={onClose} className="absolute top-4 right-4 text-white text-3xl p-2 rounded-full hover:bg-gray-800 transition z-50">
        &times;
      </button>

      <button onClick={onPrev} className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl p-4 rounded-full hover:bg-gray-800 transition z-50">
        &#8249;
      </button>
      
      <img
        src={image.src}
        alt={image.alt}
        className="max-w-full max-h-[calc(100vh-8rem)] object-contain rounded-lg shadow-2xl transition-transform duration-300"
      />

      <button onClick={onNext} className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl p-4 rounded-full hover:bg-gray-800 transition z-50">
        &#8250;
      </button>
    </div>
  );
};

export default FullscreenImageViewer;
