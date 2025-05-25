import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";

const HomeText = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    gsap.to(buttonRef.current, {
      scale: 0.95,
      duration: 0.2,
      yoyo: true,
      repeat: 1,
      onComplete: () => {
        navigate("/applynow");
      }
    });
  };

  const handleMouseEnter = () => {
    gsap.to(buttonRef.current, {
      scale: 1.05,
      boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.4)',
      duration: 0.3
    });
  };

  const handleMouseLeave = () => {
    gsap.to(buttonRef.current, {
      scale: 1,
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      duration: 0.3
    });
  };

  useEffect(() => {
    gsap.from(textRef.current, {
      duration: 1.5,
      y: 50,
      opacity: 0,
      ease: "back.out(1.7)",
      delay: 0.3
    });

    gsap.from(buttonRef.current, {
      duration: 1,
      y: 30,
      opacity: 0,
      ease: "elastic.out(1, 0.5)",
      delay: 0.8
    });

    gsap.to(textRef.current, {
      backgroundPosition: '200% 0',
      duration: 10,
      repeat: -1,
      ease: 'linear'
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4"
    >
      <h1
        ref={textRef}
        className="mb-6 text-2xl sm:text-5xl md:text-6xl lg:text-4xl xl:text-5xl font-bold leading-[1.5]"
        style={{
          fontWeight: "bold",
          background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(212,125,183,1) 0%, rgba(228,177,86,1) 47%, rgba(177,207,119,1) 70%, rgba(0,212,255,1) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontFamily: "'Poppins', sans-serif",
          backgroundSize: '200% 100%',
          display: 'inline-block'
        }}
      >
        INCUBATION CENTRE <br />
        ARYABHATTA KNOWLEDGE UNIVERSITY, PATNA
      </h1>

      <button
        ref={buttonRef}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="px-4 sm:px-6 py-2 sm:py-3 text-white font-semibold rounded-full bg-gradient-to-r from-blue-500 to-teal-400 shadow-lg text-sm sm:text-base md:text-lg relative overflow-hidden group"
      >
        <span className="relative z-10">Apply For Incubation</span>
        <span className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      </button>
    </div>
  );
};

export default HomeText;
