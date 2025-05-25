import React from 'react';
import { motion } from 'framer-motion';

const About_BiharStartup = () => {
  return (
    <div className="bg-gradient-to-br from-white to-sky-50 py-12 px-4 sm:px-8 lg:px-20">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Main Title with Enhanced Design */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-md bg-gradient-to-r from-orange-600 to-orange-300 rounded-xl shadow-2xl overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-8 py-8 text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white uppercase tracking-wide drop-shadow-lg">
              About Bihar Start-up Fund Trust (BSFT)
            </h1>
          </div>
        </motion.div>

        {/* Introduction Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl p-8 shadow-lg"
        >
          <div className="mb-2">
            <motion.h1 
              whileHover={{ scale: 1.02 }}
              className="text-3xl font-bold text-orange-600 mb-6 uppercase tracking-wider border-b-2 border-orange-200 pb-2"
            >
              Introduction
            </motion.h1>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              The Bihar Start-up Fund Trust is an autonomous body constituted under the Chairmanship of Development Commissioner, Government of Bihar.
            </p>

            <motion.h2 
              whileHover={{ scale: 1.01 }}
              className="text-2xl font-semibold text-gray-800 mb-4 uppercase tracking-wider"
            >
              Role of Bihar Start-up Fund Trust
            </motion.h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              {[
                "Monitoring and review of Start-up policy and its implementation",
                "Amendments and/or modifications, if any, required in the policy",
                "Approve major issues like rating system of start-ups, detailed guidelines for Start-up approvals and handholding etc.",
                "Liaison with Central and other State Departments for effective implementation of the policy, if required",
                "Any other issues referred by SMIC"
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ x: -20 }}
                  whileInView={{ x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-lg"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Animated Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.img
            src="/images/About_startup_bihar.png"
            alt="Bihar Start-up Visual"
            whileHover={{ scale: 1.02 }}
            className="w-full max-w-3xl rounded-xl shadow-xl object-cover border-4 border-white"
          />
        </motion.div>

        {/* Vision Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl p-8 shadow-lg"
        >
          <motion.h1 
            whileHover={{ scale: 1.02 }}
            className="text-3xl font-bold text-blue-700 mb-6 uppercase tracking-wider border-b-2 border-blue-200 pb-2"
          >
            Vision
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-700 text-lg leading-relaxed"
          >
            The vision for the Bihar Start-up Fund Trust (BSFT) is to enable Bihar to emerge as the most preferred destination for start-ups and entrepreneurs by leveraging the potential of local youth through a conducive Start-up ecosystem for inclusive growth in the State.
          </motion.p>
        </motion.section>
      </div>
    </div>
  );
};

export default About_BiharStartup;