import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react'; // optional close icon

const ImageScroller = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    '/imageScroller/Picture1.png',
    '/imageScroller/Picture2.jpg',
    '/imageScroller/Picture3.jpg',
    '/imageScroller/Picture4.png',
    '/imageScroller/Picture5.jpg',
    '/imageScroller/Picture6.jpg',
    '/imageScroller/Picture7.jpg',
    '/imageScroller/Picture8.jpg',
    '/imageScroller/Picture9.png',
    '/imageScroller/Picture10.png',
    '/imageScroller/Picture11.jpg',
    '/imageScroller/Picture12.jpg',
    '/imageScroller/Picture13.jpg',
    '/imageScroller/Picture14.jpg',
    '/imageScroller/Picture15.png',
    '/imageScroller/Picture16.jpg',
    '/imageScroller/Picture17.jpg',
    '/imageScroller/Picture18.jpg',
    '/imageScroller/Picture19.jpg',
    '/imageScroller/Picture20.jpg',
    '/imageScroller/Picture21.jpg',
    '/imageScroller/Picture22.jpg',
    '/imageScroller/Picture23.png',
    '/imageScroller/Picture24.jpg',
    '/imageScroller/Picture25.png',
    '/imageScroller/Picture26.jpg',
    '/imageScroller/Picture27.jpg',
  ];

  const allImages = [...images,];

  const renderModal = () => {
    if (!selectedImage) return null;

    return createPortal(
      <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[9999]">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-white hover:text-gray-300 text-3xl p-1 rounded focus:outline-none"
          onClick={() => setSelectedImage(null)}
        >
          <X size={32} />
        </button>

        {/* Full Image */}
        <img
          src={selectedImage}
          alt="Full view"
          className="max-w-[90%] max-h-[90%] rounded-lg shadow-xl"
        />
      </div>,
      document.body
    );
  };

  return (
    <div className="overflow-hidden w-full py-12 px-4 sm:px-8 lg:px-16 bg-gradient-to-br from-white to-sky-50 relative z-10">
      <style>
        {`
          .scroller {
            display: flex;
            gap: 1.5rem;
            animation: scrollLeft 60s linear infinite;
            width: max-content;
          }

          @keyframes scrollLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>

      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-orange-500 mb-2">Media Gallery</h2>
        
      </div>

      <div className="scroller">
        {allImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Nature ${index}`}
            onClick={() => setSelectedImage(src)}
            className="h-64 w-auto flex-shrink-0 rounded-xl shadow-lg object-cover cursor-pointer transition-transform hover:scale-105 duration-300"
          />
        ))}
      </div>

      {/* Render Fullscreen Modal */}
      {renderModal()}
    </div>
  );
};

export default ImageScroller;
