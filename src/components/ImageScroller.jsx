import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react'; // optional close icon

const ImageScroller = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1000',
    'https://images.unsplash.com/photo-1493244040629-496f6d136cc3?w=1000',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1000',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000',
    'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1000',
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1000',
  ];

  const allImages = [...images, ...images];

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
            animation: scrollLeft 30s linear infinite;
            width: max-content;
          }

          @keyframes scrollLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>

      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-2">Media Gallery</h2>
        
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
