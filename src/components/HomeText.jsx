import React from "react";

const HomeText = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          background:
            "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(212,125,183,1) 0%, rgba(228,177,86,1) 47%, rgba(177,207,119,1) 70%, rgba(0,212,255,1) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontFamily: "'Poppins', sans-serif",
         
        }}
        className="mb-6 md:text-sm"
      >
        INCUBATION CENTRE <br />
        ARYABHATTA KNOWLEDGE UNIVERSITY, PATNA
      </h1>

      <button className="px-6 py-3 text-white font-semibold rounded-full bg-gradient-to-r from-blue-500 to-teal-400 hover:scale-105 transition-all duration-300 shadow-lg">
        Apply For Incubation
      </button>
    </div>
  );
};

export default HomeText;
