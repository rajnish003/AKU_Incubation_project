import { div } from "framer-motion/client";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import { FaImages } from "react-icons/fa";
import { motion } from "framer-motion";

const ImageMarquee = () => {
  const [selectedImage, setSelectedImage] = useState(null);
    const [showAll, setShowAll] = useState(false);

  const imageGalleryItemsData = [
    { id: 'img1', src: '/imageScroller/Picture5.jpg', alt: 'image1' },
    { id: 'img2', src: '/imageScroller/Picture6.jpg', alt: 'image2' },
    { id: 'img3', src: '/imageScroller/Picture7.jpg', alt: 'image3' },
    { id: 'img4', src: '/imageScroller/Picture8.jpg', alt: 'image4' },
    { id: 'img5', src: '/imageScroller/Picture11.jpg', alt: 'image5' },
    { id: 'img6', src: '/imageScroller/Picture12.jpg', alt: 'image6' },
    { id: 'img7', src: '/imageScroller/Picture13.jpg', alt: 'image7' },
    { id: 'img8', src: '/imageScroller/Picture19.jpg', alt: 'image8' },
    { id: 'img9', src: '/imageScroller/Picture21.jpg', alt: 'image9' },
    { id: 'img10', src: '/imageScroller/Picture23.png', alt: 'image10' },
    { id: 'img11', src: '/imageScroller/Picture24.jpg', alt: 'image11' },
    { id: 'img12', src: '/imageScroller/Picture24.jpg', alt: 'image12' },
    { id: 'img13', src: '/imageScroller/Picture25.png', alt: 'image13' },
    { id: 'img14', src: '/imageScroller/Picture27.jpg', alt: 'image14' },
  ];

  const newsGalleryItemsData = [
    { id: 'news1', src: '/imageScroller/Picture1.png', alt: 'Tech Conference1' },
    { id: 'news2', src: '/imageScroller/Picture2.jpg', alt: 'Tech Conference2' },
    { id: 'news3', src: '/imageScroller/Picture3.jpg', alt: 'Tech Conference3' },
    { id: 'news4', src: '/imageScroller/Picture4.png', alt: 'Tech Conference4' },
    { id: 'news5', src: '/imageScroller/Picture9.png', alt: 'Tech Conference5' },
    { id: 'news6', src: '/imageScroller/Picture10.png', alt: 'Tech Conference6' },
    { id: 'news7', src: '/imageScroller/Picture15.png', alt: 'Tech Conference7' },
    { id: 'news8', src: '/imageScroller/Picture16.jpg', alt: 'Tech Conference8' },
    { id: 'news9', src: '/imageScroller/Picture17.jpg', alt: 'Tech Conference9' },
    { id: 'news10', src: '/imageScroller/Picture18.jpg', alt: 'Tech Conference10' },
    { id: 'news11', src: '/imageScroller/Picture22.jpg', alt: 'Tech Conference11' },
    { id: 'news12', src: '/imageScroller/Picture26.jpg', alt: 'Tech Conference12' },
  ];

    const displayedItems = showAll ? newsGalleryItemsData : newsGalleryItemsData.slice(0, 6);


  return (
 <div>
      {/* Image Gallery Section */}
      <div className="w-full bg-gray-100 py-4 space-y-6">
        <div className="flex flex-col justify-center items-center text-center">
          <div className="flex justify-center items-center">
            <FaImages className="text-4xl text-orange-500 mr-3" />
            <h2 className="font-bold text-3xl text-orange-500">Image Gallery</h2>
          </div>
          <div className="w-40 h-1.5 bg-[#6eb2fc] rounded-lg mt-2 mb-8"></div>
        </div>

        <Marquee speed={50} pauseOnHover={true}>
          {imageGalleryItemsData.map((item) => (
            <motion.img
              key={item.id}
              src={item.src}
              alt={item.alt}
              onClick={() => setSelectedImage(item)}
              whileHover={{ scale: 1.05 }}
              className="h-64 mx-4 rounded-lg shadow-md object-cover cursor-pointer transition-transform"
            />
          ))}
        </Marquee>
      </div>

      {/* News Gallery Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-orange-500 mb-4 ">News Coverage</h2>
              <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedItems.map((image) => (
                <motion.div
                  key={image.id}
                  whileHover={{ scale: 1.03 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="overflow-hidden rounded-xl shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative group">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="text-white">
                        <p className="text-sm font-medium">{image.date}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600">{image.caption}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {newsGalleryItemsData.length > 6 && (
              <div className="text-center mt-10">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowAll(!showAll)}
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
                >
                  {showAll ? 'View Less' : 'View All'}
                </motion.button>
              </div>
            )}
          </motion.section>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-150 flex items-center justify-center bg-black bg-opacity-90">
          <div className="relative max-w-6xl w-full px-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-black hover:bg-red-500 hover:text-white transition-all shadow-lg z-50"
            >
              ✕
            </button>
            <div className="flex items-center justify-center h-[90vh]">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-full object-contain rounded-md"
              />
            </div>
            {(selectedImage.caption || selectedImage.date) && (
              <div className="bg-white p-4 rounded-b-md shadow-lg mt-4">
                {selectedImage.caption && <p className="text-gray-800 font-medium">{selectedImage.caption}</p>}
                {selectedImage.date && <p className="text-gray-500 text-sm mt-1">{selectedImage.date}</p>}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageMarquee;
