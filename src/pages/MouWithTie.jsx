import React from "react";
import { motion } from "framer-motion";
import { FaImages,FaHandshake, FaLightbulb, FaChalkboardTeacher, FaNetworkWired, FaLink } from "react-icons/fa";

const MouWithTie = () => {


  const galleryImages = [
  {
    id: 1,
    src: "/images/mou_sign_pic5.jpg",
    alt: "MoU signing ceremony",
    caption: ""
  },
  {
    id: 2,
    src: "/images/signmouwithtie.png",
    alt: "Team discussion",
    caption: ""
  },
  {
    id: 3,
    src: "/imageScroller/Picture24.jpg",
    alt: "Handshake moment",
    caption: ""
  },
  {
    id: 4,
    src: "/imageScroller/Picture25.png",
    alt: "Group photo",
    caption: "",
    colSpan: "md:col-span-2 lg:col-span-1"
  }
];


  return (
    <div className="bg-gradient-to-br from-white to-sky-50 py-12 px-4 sm:px-8 lg:px-20">
      <div className="max-w-full mx-auto space-y-16">
        {/* Main Title */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-md bg-gradient-to-r from-orange-600 to-orange-300 rounded-xl shadow-2xl overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-8 py-8 text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white uppercase tracking-wide drop-shadow-lg">
              MoU with The Indus Entrepreneurs (TiE)
            </h1>
          </div>
        </motion.div>

        {/* MoU Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl p-8 shadow-lg"
        >
          <div className="mb-8">
            <motion.h2 
              whileHover={{ scale: 1.02 }}
              className="text-3xl font-bold text-orange-600 mb-6 uppercase tracking-wider border-b-2 border-orange-200 pb-2"
            >
              Memorandum of Understanding
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-700 text-lg leading-relaxed space-y-6"
            >
              <p>
                A Memorandum of Understanding (MoU) was signed between The Indus Entrepreneurs (TiE) and Aryabhatta Knowledge University, Patna on <span className="font-semibold text-blue-700">05.08.2024</span>.
              </p>
              
              <div className="flex justify-center my-8">
                <motion.img
                  src="/images/signmouwithtie.png" // Replace with your actual image path
                  alt="MoU signing between TiE and AKU"
                  whileHover={{ scale: 1.02 }}
                  className="w-full max-w-2xl rounded-xl shadow-xl object-cover border-4 border-white"
                />
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* CIMP-BIIF MoU Section - This comes after the TiE MoU section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl p-8 shadow-lg"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-indigo-800 mb-4">
              Memorandum of Understanding Signed
            </h1>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              Collaboration Between <span className="font-semibold text-indigo-700">CIMP-BIIF</span> and{" "}
              <span className="font-semibold text-indigo-700">Aryabhatta Knowledge University</span>
            </p>
            <p className="text-gray-500 mt-2">Signed on March 1, 2024</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            <div className="lg:w-1/2">
              <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg h-full">
                <img 
                  src="/images/mou_sign_pic5.jpg" 
                  alt="MoU signing ceremony"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">About the Partnership</h2>
              <p className="text-gray-600 mb-6">
                This Memorandum of Understanding establishes a collaborative framework to foster a culture 
                of startup and entrepreneurship within the university and leverage CIMP-BIIF's expertise 
                in creating a conducive startup ecosystem.
              </p>

              <div className="bg-indigo-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-indigo-800 mb-4">Key Objectives</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FaLightbulb className="text-indigo-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Develop startup ecosystem & provide incubation support</span>
                  </li>
                  <li className="flex items-start">
                    <FaChalkboardTeacher className="text-indigo-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Promote innovation activities & mentoring programs</span>
                  </li>
                  <li className="flex items-start">
                    <FaHandshake className="text-indigo-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Launch entrepreneurship programs & secure funding</span>
                  </li>
                  <li className="flex items-start">
                    <FaNetworkWired className="text-indigo-600 mt-1 mr-3 flex-shrink-0" />
                    <span>Facilitate networking opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <FaLink className="text-indigo-600 mt-1 mr-3 flex-shrink-0" />
                    <span>IPR management and market linkages</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 mb-12">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">From the Signing Ceremony</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-l-4 border-indigo-500 pl-6">
                <p className="italic text-gray-600 mb-4">
                  "This partnership will create tremendous opportunities for students in startups and entrepreneurship."
                </p>
                <p className="font-medium text-indigo-700">Prof. Rana Singh</p>
                <p className="text-sm text-gray-500">Director, Chandragupt Management Institute Patna (CIMP)</p>
              </div>
              <div className="border-l-4 border-indigo-500 pl-6">
                <p className="italic text-gray-600 mb-4">
                  "Startups will benefit significantly from this MoU in developing a robust ecosystem."
                </p>
                <p className="font-medium text-indigo-700">Mr. Kumod Kumar</p>
                <p className="text-sm text-gray-500">Chief Administrative Officer, CIMP & CEO, BIIF</p>
              </div>
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-indigo-600 to-indigo-800 text-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Building Bihar's Startup Future Together</h3>
            <p className="mb-6 max-w-2xl mx-auto">
              This collaboration marks a significant step toward nurturing innovation and entrepreneurship 
              in the region.
            </p>
            <button className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-lg hover:bg-indigo-50 transition duration-300">
              Learn More About Our Programs
            </button>
          </div>
        </motion.section>

        {/* About TiE Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl p-8 shadow-lg"
        >
          <motion.h2 
            whileHover={{ scale: 1.02 }}
            className="text-3xl font-bold text-blue-700 mb-6 uppercase tracking-wider border-b-2 border-blue-200 pb-2"
          >
            About The Indus Entrepreneurs (TiE), Patna
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-700 text-lg leading-relaxed space-y-6"
          >
            <p>
              The Indus Entrepreneurs (TiE) is a non-profit organization with a mission to foster entrepreneurship through mentoring, networking, education, funding, and incubation. With a focus on giving back to the community, TiE's goal is to generate and nurture the next generation of entrepreneurs.
            </p>
            
            <p>
              Since its inception in 1992 as a single organization in Silicon Valley, TiE has expanded to 60 chapters in 17 countries.
            </p>
            
            <p>
              TiE Patna is committed to nurturing the entrepreneurial ecosystem in Bihar and believes that through strategic partnerships, it can create a more vibrant and supportive environment for startups and innovators in the Region.
            </p>
          </motion.div>
        </motion.section>

        {/* Significance Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl p-8 shadow-lg"
        >
          <motion.h2 
            whileHover={{ scale: 1.02 }}
            className="text-3xl font-bold text-green-600 mb-6 uppercase tracking-wider border-b-2 border-green-200 pb-2"
          >
            Significance of the Partnership
          </motion.h2>
          
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="list-disc pl-6 space-y-3 text-gray-700 text-lg"
          >
            <motion.li 
              initial={{ x: -20 }}
              whileInView={{ x: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              Strengthening the startup ecosystem in Bihar
            </motion.li>
            <motion.li 
              initial={{ x: -20 }}
              whileInView={{ x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Access to TiE's global network of entrepreneurs and mentors
            </motion.li>
            <motion.li 
              initial={{ x: -20 }}
              whileInView={{ x: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              Joint programs for student entrepreneurship development
            </motion.li>
            <motion.li 
              initial={{ x: -20 }}
              whileInView={{ x: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Enhanced opportunities for funding and incubation
            </motion.li>
            <motion.li 
              initial={{ x: -20 }}
              whileInView={{ x: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              Knowledge sharing and best practice exchange
            </motion.li>
          </motion.ul>
        </motion.section>
      </div>

      {/* Gallery section */}
  <div className="mt-8">
      <motion.section
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="bg-white rounded-xl p-8 shadow-lg"
>
  <div className="flex items-center mb-8">
    <FaImages className="text-3xl text-indigo-600 mr-4" />
    <h2 className="text-3xl font-bold text-indigo-800">Gallery</h2>
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {galleryImages.map((image) => (
      <motion.div
        key={image.id}
        whileHover={{ scale: 1.03 }}
        className={`overflow-hidden rounded-lg shadow-md ${image.colSpan || ''}`}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-64 object-cover hover:opacity-90 transition-opacity"
        />
        <div className="p-4 bg-gray-50">
          <p className="text-sm text-gray-600">{image.caption}</p>
        </div>
      </motion.div>
    ))}
  </div>
</motion.section>
</div>
    </div>
  );
};

export default MouWithTie;