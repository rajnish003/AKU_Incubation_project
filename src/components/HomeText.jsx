import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HomeText = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/applynow");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4"
    >
      <motion.h1
        className="mb-6 text-2xl sm:text-5xl md:text-6xl lg:text-4xl xl:text-5xl font-bold leading-[1.5]"
        style={{
          fontWeight: "bold",
          background:
            "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(212,125,183,1) 0%, rgba(228,177,86,1) 47%, rgba(177,207,119,1) 70%, rgba(0,212,255,1) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontFamily: "'Poppins', sans-serif",
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        INCUBATION CENTRE <br />
        ARYABHATTA KNOWLEDGE UNIVERSITY, PATNA
      </motion.h1>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={clickHandler}
        className="px-4 sm:px-6 py-2 sm:py-3 text-white font-semibold rounded-full bg-gradient-to-r from-blue-500 to-teal-400 hover:scale-105 transition-all duration-300 shadow-lg text-sm sm:text-base md:text-lg"
      >
        Apply For Incubation
      </motion.button>
    </motion.div>
  );
};

export default HomeText;
