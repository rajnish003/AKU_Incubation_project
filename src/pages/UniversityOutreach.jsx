import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const UniversityOutreach = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Event photos
  const eventPhotos = [
    { src: '/imageScroller/Picture19.jpg', caption: 'Hon’ble Vice Chancellor Prof. (Dr.) Sharad Kumar Yadav, Er. Ramji Singh, Registrar and Dr. Manisha Prakash, Nodal Officer, Incubation Centre, Aryabhatta Knowledge University, Patna with winners of Ideathon. ' },
    { src: '/imageScroller/Picture20.jpg', caption: 'Hon’ble Vice Chancellor Prof. (Dr.) Sharad Kumar Yadav giving prize to participant.' },
    { src: '/imageScroller/Picture21.jpg', caption: 'Participants at the University Outreach Programme at Seminar Hall of the Aryabhatta Knowledge University, Patna ' },
  ];

  const renderModal = () => {
    if (!selectedImage) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
        <button
          className="absolute top-4 right-4 text-white hover:text-gray-300 p-2 rounded-full focus:outline-none bg-black bg-opacity-50"
          onClick={() => setSelectedImage(null)}
        >
          <X size={32} />
        </button>
        <div className="relative max-w-full max-h-full">
          <img
            src={selectedImage.src}
            alt={selectedImage.caption}
            className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl object-contain"
          />
          <p className="text-white text-center mt-2 text-lg font-medium">
            {selectedImage.caption}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-br from-white to-sky-50 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 xl:px-20">
      <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12 md:space-y-16">
        {/* Main Title */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-md bg-gradient-to-r from-green-600 to-green-800 rounded-lg sm:rounded-xl shadow-lg sm:shadow-2xl overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white uppercase tracking-wide drop-shadow-lg">
              University Outreach Programme on "Bihar Start-up Policy 2022"
            </h1>
          </div>
        </motion.div>

        {/* Event Details Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 shadow-md sm:shadow-lg"
        >
          <div className="mb-6 sm:mb-8">
            <motion.h2 
              whileHover={{ scale: 1.01 }}
              className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4 sm:mb-6 uppercase tracking-wider border-b-2 border-blue-200 pb-2"
            >
              Event Overview
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              className="text-gray-700 text-base sm:text-lg leading-relaxed sm:leading-loose space-y-4 sm:space-y-6"
            >
              <p>
                A University Outreach Programme was conducted on "Bihar Start-up Policy 2022" on <span className="font-semibold">06.07.2024</span> at the Aryabhatta Knowledge University, Patna in collaboration with Zero Lab Bihar (An initiative of BIADA and Incubation Centre IIT Patna).
              </p>
              
              <div className="flex justify-center my-6 sm:my-8">
                <motion.img
                  src="/imageScroller/Picture22.jpg"
                  alt="Outreach Programme Main Event"
                  whileHover={{ scale: 1.02 }}
                  className="w-full max-w-xs sm:max-w-md md:max-w-2xl rounded-lg sm:rounded-xl shadow-md sm:shadow-xl object-cover border-2 sm:border-4 border-white"
                  onClick={() => setSelectedImage({ src: '/imageScroller/Picture22.jpg', caption: 'Main Event Session' })}
                />
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Objectives Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 shadow-md sm:shadow-lg"
        >
          <motion.h2 
            whileHover={{ scale: 1.01 }}
            className="text-2xl sm:text-3xl font-bold text-orange-600 mb-4 sm:mb-6 uppercase tracking-wider border-b-2 border-orange-200 pb-2"
          >
            Programme Objectives
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-gray-700 text-base sm:text-lg leading-relaxed sm:leading-loose space-y-4 sm:space-y-6"
          >
            <p>
              The Bihar Start-up Policy 2022 holds significant importance in promoting entrepreneurial culture and fostering innovation in the state. This programme provided the students with valuable insights into opportunities and incentives available for aspiring entrepreneurs in Bihar.
            </p>
          </motion.div>
        </motion.section>

        {/* Participation Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 shadow-md sm:shadow-lg"
        >
          <motion.h2 
            whileHover={{ scale: 1.01 }}
            className="text-2xl sm:text-3xl font-bold text-purple-600 mb-4 sm:mb-6 uppercase tracking-wider border-b-2 border-purple-200 pb-2"
          >
            Participation Details
          </motion.h2>
          
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
            className="list-disc pl-5 sm:pl-6 space-y-2 sm:space-y-3 text-gray-700 text-base sm:text-lg"
          >
            <motion.li 
              initial={{ x: -20 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              className="pl-2"
            >
              Invitation letter was sent to various colleges affiliated to the University (Letter No- 3145 dated 04.07.2024)
            </motion.li>
            <motion.li 
              initial={{ x: -20 }}
              whileInView={{ x: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="pl-2"
            >
              Total Participants: <span className="font-semibold">108</span>
            </motion.li>
            <motion.li 
              initial={{ x: -20 }}
              whileInView={{ x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="pl-2"
            >
              Including 14 University officials and Guests
            </motion.li>
          </motion.ul>
        </motion.section>

        {/* Photo Gallery Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md sm:shadow-lg"
        >
          <motion.h2 
            whileHover={{ scale: 1.01 }}
            className="text-2xl sm:text-3xl font-bold text-green-600 mb-4 sm:mb-6 uppercase tracking-wider border-b-2 border-green-200 pb-2"
          >
            Event Gallery
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {eventPhotos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-48 sm:h-56 object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => setSelectedImage(photo)}
                />
                <div className="p-3 bg-gray-50">
                  <p className="text-sm sm:text-base font-medium text-gray-700 text-center">
                    {photo.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>

      {/* Image Modal */}
      {renderModal()}
    </div>
  );
};

export default UniversityOutreach;