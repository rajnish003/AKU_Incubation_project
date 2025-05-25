import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import HomeText from './HomeText';

const HomeAnimation = () => {
  const containerRef = useRef();
  const gradientBoxRef = useRef();
  const contentBoxRef = useRef();

  useEffect(() => {
    // Initial setup - hide elements before animation
    gsap.set([gradientBoxRef.current, contentBoxRef.current], {
      opacity: 0,
      y: 50
    });

    // Create timeline for sequenced animations
    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' }
    });

    tl.to(gradientBoxRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'elastic.out(1, 0.5)'
    })
    .to(contentBoxRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'back.out(1.7)'
    }, "-=0.5");

    // Continuous animation for gradient background
    const gradientAnimation = gsap.to(gradientBoxRef.current, {
      backgroundPosition: '100% 50%',
      duration: 15,
      repeat: -1,
      ease: 'none'
    });

    // Floating effect on hover
    const card = contentBoxRef.current;

    const handleMouseEnter = () => {
      gsap.to(card, {
        scale: 1.05,
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
        duration: 0.4,
        ease: 'power2.out'
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        scale: 1,
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        duration: 0.4,
        ease: 'power2.inOut'
      });
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      gradientAnimation.kill();
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden relative h-screen">
      <div 
        ref={gradientBoxRef}
        className="shadow-lg flex items-center justify-center rounded-md bg-gradient-to-t from-neutral-500 to-amber-300"
        style={{
          backgroundSize: '200% 200%',
          backgroundImage: 'linear-gradient(45deg, #737373 0%, #f59e0b 25%, #737373 50%, #f59e0b 75%, #737373 100%)'
        }}
      >
        <div 
          ref={contentBoxRef}
          className="bg-white w-[70vw] items-center mt-40 rounded-t-2xl overflow-hidden transition-transform duration-300"
          style={{
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          }}
        >
          <HomeText />
        </div>
      </div>
    </div>
  );
};

export default HomeAnimation;
