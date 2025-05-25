import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Image as ImageIcon, FileText, AlertCircle, X } from 'lucide-react';

// Mock data for Image Gallery
const imageGalleryItemsData = [
  { id: 'img1', type: 'image', src: '/imageScroller/Picture5.jpg', alt: 'image1' },
  { id: 'img2', type: 'image', src: '/imageScroller/Picture6.jpg', alt: 'image2' },
  { id: 'img3', type: 'image', src: '/imageScroller/Picture7.jpg', alt: 'image3' },
  { id: 'img4', type: 'image', src: '/imageScroller/Picture8.jpg', alt: 'image4' },
  { id: 'img5', type: 'image', src: '/imageScroller/Picture11.jpg', alt: 'image5' },
  { id: 'img6', type: 'image', src: '/imageScroller/Picture12.jpg', alt: 'image6' },
  { id: 'img7', type: 'image', src: '/imageScroller/Picture13.jpg', alt: 'image7' },
  { id: 'img8', type: 'image', src: '/imageScroller/Picture19.jpg', alt: 'image8' },
  { id: 'img9', type: 'image', src: '/imageScroller/Picture21.jpg', alt: 'image9' },
  { id: 'img10', type: 'image', src: '/imageScroller/Picture23.png', alt: 'image10' },
  { id: 'img11', type: 'image', src: '/imageScroller/Picture24.jpg', alt: 'image11' },
  { id: 'img12', type: 'image', src: '/imageScroller/Picture24.jpg', alt: 'image12' },
  { id: 'img13', type: 'image', src: '/imageScroller/Picture25.png', alt: 'image13' },
  { id: 'img14', type: 'image', src: '/imageScroller/Picture27.jpg', alt: 'image14' },
];

// Mock data for News Gallery
const newsGalleryItemsData = [
  { id: 'news1', type: 'news', src: '/imageScroller/Picture1.png', alt: 'Tech Conference1' },
  { id: 'news2', type: 'news', src: '/imageScroller/Picture2.jpg', alt: 'Tech Conference2' },
  { id: 'news3', type: 'news', src: '/imageScroller/Picture3.jpg', alt: 'Tech Conference3' },
  { id: 'news4', type: 'news', src: '/imageScroller/Picture4.png', alt: 'Tech Conference4' },
  { id: 'news5', type: 'news', src: '/imageScroller/Picture9.png', alt: 'Tech Conference5' },
  { id: 'news6', type: 'news', src: '/imageScroller/Picture10.png', alt: 'Tech Conference6' },
  { id: 'news7', type: 'news', src: '/imageScroller/Picture15.png', alt: 'Tech Conference7' },
  { id: 'news8', type: 'news', src: '/imageScroller/Picture16.jpg', alt: 'Tech Conference8' },
  { id: 'news9', type: 'news', src: '/imageScroller/Picture17.jpg', alt: 'Tech Conference9' },
  { id: 'news10', type: 'news', src: '/imageScroller/Picture18.jpg', alt: 'Tech Conference10' },
  { id: 'news11', type: 'news', src: '/imageScroller/Picture22.jpg', alt: 'Tech Conference12' },
  { id: 'news12', type: 'news', src: '/imageScroller/Picture26.jpg', alt: 'Tech Conference13' },
];

// FullScreenImageModal Component
const FullScreenImageModal = ({ image, onClose }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const modalRef = useRef(null);

  // Close modal when clicking outside the image
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
      <div 
        ref={modalRef}
        className="relative max-w-full max-h-full"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-75 transition-all duration-300"
        >
          <X size={32} />
        </button>
        
        <img
          src={image.src}
          alt={image.alt}
          className={`max-w-full max-h-[90vh] object-contain cursor-${isZoomed ? 'zoom-out' : 'zoom-in'}`}
          onClick={() => setIsZoomed(!isZoomed)}
          style={{
            transform: isZoomed ? 'scale(1.5)' : 'scale(1)',
            transition: 'transform 0.3s ease',
          }}
        />
        
        <div className="absolute bottom-4 left-0 right-0 text-center text-white text-lg">
          {image.alt}
        </div>
      </div>
    </div>
  );
};

// Card Component with enhanced transitions and click handler
const ItemCard = ({ item, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    onClick(item);
  };

  if (item.type === 'image') {
    return (
      <div 
        className={`flex-shrink-0 w-72 md:w-96 h-56 md:h-64 rounded-lg overflow-hidden shadow-lg bg-white transition-all duration-300 ${isHovered ? 'transform scale-105 shadow-xl' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        <img
          src={item.src}
          alt={item.alt}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 cursor-pointer"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/400x250/CCCCCC/FFF?text=Image+Not+Found";
          }}
        />
      </div>
    );
  }

  if (item.type === 'news') {
    return (
      <div 
        className={`flex-shrink-0 w-72 md:w-80 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transition-all duration-300 ${isHovered ? 'transform scale-105 shadow-xl' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        <img
          src={item.src}
          alt={item.alt}
          className="w-full h-40 object-cover transition-transform duration-500 hover:scale-110 cursor-pointer"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/400x250/CCCCCC/FFF?text=News+Image+Not+Found";
          }}
        />
      </div>
    );
  }

  return null;
};

// Enhanced Scroller Section with smooth transitions
const ScrollerSection = ({ title, items, icon, scrollAmount = 300, autoScrollInterval = 3000 }) => {
  const scrollRef = useRef(null);
  const [isScrollStart, setIsScrollStart] = useState(true);
  const [isScrollEnd, setIsScrollEnd] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const autoScrollIntervalRef = useRef(null);
  const animationFrameRef = useRef(null);

  const checkScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setIsScrollStart(scrollLeft < 5);
    setIsScrollEnd(scrollLeft + clientWidth >= scrollWidth - 5);
  }, []);

  const smoothScrollTo = useCallback((targetPosition, duration = 500) => {
    const startPosition = scrollRef.current.scrollLeft;
    const distance = targetPosition - startPosition;
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easeProgress = easeInOutCubic(progress);
      scrollRef.current.scrollLeft = startPosition + (distance * easeProgress);
      
      if (timeElapsed < duration) {
        animationFrameRef.current = requestAnimationFrame(animateScroll);
      }
    };

    cancelAnimationFrame(animationFrameRef.current);
    animationFrameRef.current = requestAnimationFrame(animateScroll);
  }, []);

  // Easing function for smooth scrolling
  const easeInOutCubic = (t) => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  const handleScroll = useCallback((direction) => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = null;
    }
    
    const container = scrollRef.current;
    const newScroll = direction === 'left' 
      ? Math.max(container.scrollLeft - scrollAmount, 0)
      : Math.min(container.scrollLeft + scrollAmount, container.scrollWidth - container.clientWidth);
    
    smoothScrollTo(newScroll);
  }, [scrollAmount, smoothScrollTo]);

  const autoScroll = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = container;
    if (scrollLeft + clientWidth >= scrollWidth - 5) {
      smoothScrollTo(0, 1000);
    } else {
      const newScroll = scrollLeft + scrollAmount;
      smoothScrollTo(newScroll, 1000);
    }
  }, [scrollAmount, smoothScrollTo]);

  const handleImageClick = useCallback((item) => {
    setSelectedImage(item);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedImage(null);
  }, []);

  useEffect(() => {
    checkScroll();
    const container = scrollRef.current;
    container?.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);
    return () => {
      container?.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [checkScroll]);

  useEffect(() => {
    if (autoScrollInterval > 0 && !isMouseOver && scrollRef.current && items.length > 0) {
      autoScrollIntervalRef.current = setInterval(autoScroll, autoScrollInterval);
    }
    return () => {
      clearInterval(autoScrollIntervalRef.current);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [autoScrollInterval, items, isMouseOver, autoScroll]);

  if (!items || items.length === 0) {
    return (
      <section className="py-8 bg-gray-50 rounded-xl shadow-md mb-8 transition-all duration-300 hover:shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center">
              {icon && React.cloneElement(icon, { className: "mr-3 text-blue-600 w-7 h-7 transition-colors duration-300" })}
              {title}
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center p-10 bg-white rounded-lg shadow-inner transition-all duration-300 hover:bg-gray-50">
            <AlertCircle size={48} className="text-gray-400 mb-4 transition-colors duration-300" />
            <p className="text-gray-600 text-lg transition-colors duration-300">No items to display in this gallery yet.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 bg-gray-50 rounded-xl shadow-md mb-8 transition-all duration-300 hover:shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center">
            {icon && React.cloneElement(icon, { className: "mr-3 text-blue-600 w-7 h-7 transition-colors duration-300" })}
            {title}
          </h2>
          <div className="flex space-x-2">
            <button
              onClick={() => handleScroll('left')}
              disabled={isScrollStart}
              className={`p-2 bg-white rounded-full shadow-md transition-all duration-300 ${isScrollStart ? 'opacity-50' : 'hover:bg-gray-100 hover:shadow-lg'}`}
            >
              <ChevronLeft size={24} className="transition-colors duration-300" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              disabled={isScrollEnd}
              className={`p-2 bg-white rounded-full shadow-md transition-all duration-300 ${isScrollEnd ? 'opacity-50' : 'hover:bg-gray-100 hover:shadow-lg'}`}
            >
              <ChevronRight size={24} className="transition-colors duration-300" />
            </button>
          </div>
        </div>
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsMouseOver(true)}
          onMouseLeave={() => setIsMouseOver(false)}
          className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide scroll-smooth snap-x snap-mandatory transition-all duration-300"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {items.map((item) => (
            <div key={item.id} className="snap-start transition-transform duration-300">
              <ItemCard item={item} onClick={handleImageClick} />
            </div>
          ))}
        </div>
      </div>
      
      {selectedImage && (
        <FullScreenImageModal 
          image={selectedImage} 
          onClose={handleCloseModal} 
        />
      )}
    </section>
  );
};

// Main ImageScroller Component
export default function ImageScroller() {
  return (
    <div className="bg-gradient-to-br from-white to-sky-50 min-h-screen py-12 px-4 sm:px-8 lg:px-16">
      <ScrollerSection
        title="Image Gallery"
        items={imageGalleryItemsData}
        icon={<ImageIcon />}
        scrollAmount={300}
        autoScrollInterval={2000}
      />
      <ScrollerSection
        title="Latest News"
        items={newsGalleryItemsData}
        icon={<FileText />}
        scrollAmount={300}
        autoScrollInterval={2000}
      />
    </div>
  );
}