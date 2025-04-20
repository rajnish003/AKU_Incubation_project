import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-100 to-white py-12 px-6">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl p-10">
        <h2 className="text-4xl font-bold text-center text-orange-500 mb-12">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-700 text-base">
          {/* Address */}
          <motion.div
            className="flex flex-col items-center text-center px-4"
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <FaMapMarkerAlt className="text-4xl text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Address</h3>
            <p>
              Centre of Excellence,<br />
              Aryabhatta Knowledge University,<br />
              Gyan Parisar, Mithapur,<br />
              Patna-800 001 (Bihar)
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="flex flex-col items-center text-center px-4"
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <FaEnvelope className="text-4xl text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email & Phone</h3>
            <p>
              <a href="mailto:akuincubationcentre@gmail.com" className="text-orange-500 hover:underline">
                akuincubationcentre@gmail.com
              </a>
              <br />
              <FaPhoneAlt className="inline mt-3 mr-2 text-orange-500" />
              <a href="tel:+919241027682" className="text-orange-500 hover:underline">
                +91 92410 27682
              </a>
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex flex-col items-center text-center px-4"
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h3 className="text-xl font-semibold mb-4 text-orange-600">Follow Us</h3>
            <div className="flex gap-5 text-3xl text-gray-400">
              <a href="https://www.facebook.com/profile.php?id=61572545070265" target="_blank" rel="noreferrer" className="hover:text-orange-500 transition">
                <FaFacebook />
              </a>
              <a href="https://x.com/home" target="_blank" rel="noreferrer" className="hover:text-orange-500 transition">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com/akuicpatna/" target="_blank" rel="noreferrer" className="hover:text-orange-500 transition">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/in/incubation-centre-aku-patna-a08b5a346/" target="_blank" rel="noreferrer" className="hover:text-orange-500 transition">
                <FaLinkedin />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
