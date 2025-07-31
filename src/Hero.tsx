import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const images = [
  '/bilder/hero/Bild1.JPEG',
  '/images/img2.jpg',
  '/images/img3.jpg',
  '/images/img4.jpg',
  '/images/img5.jpg',
  '/images/img6.jpg',
  '/images/img7.jpg',
  '/images/img8.jpg',
  '/images/img9.jpg',
  '/images/img10.jpg',
  '/images/img11.jpg',
  '/images/img12.jpg',
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="bg-black text-white min-h-screen px-4 py-8">
      <header className="text-center text-3xl font-bold mb-6">ANDY!</header>
      <nav className="flex justify-center gap-6 mb-8">
        <button className="hover:underline">ALL</button>
        <button className="hover:underline">PEOPLE</button>
        <button className="hover:underline">ACCOMMODATION</button>
        <button className="hover:underline">ADVENTURE</button>
      </nav>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div key={index} className="cursor-pointer" onClick={() => setSelectedImage(src)}>
            <LazyLoadImage
              src={src}
              alt={`Image ${index + 1}`}
              effect="blur"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      <Dialog open={!!selectedImage} onClose={() => setSelectedImage(null)} className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
        <Dialog.Panel className="max-w-4xl w-full">
          <img src={selectedImage} alt="Fullscreen" className="w-full h-auto rounded-lg" />
        </Dialog.Panel>
      </Dialog>

      <footer className="text-center mt-12 text-sm text-gray-400">
        hi@andrewhardy.com.au
      </footer>
    </div>
  );
}
