import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * ScrollGallery Component
 * Refinements:
 * 1. Reduced heading font size ("Everything homes & estates living should be").
 * 2. All 6 outer surrounding cards have 100% IDENTICAL fixed dimensions & aspect ratios (aspect-[4/3]).
 * 3. Parallax scroll-driven convergence towards center & 3D zoom effect.
 */
export const ScrollGallery = () => {
  const containerRef = useRef(null);

  // Track scroll progress within this section (0 to 1)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Scroll Transforms for Convergence towards center and Zoom In
  // Top Left Card
  const tlX = useTransform(scrollYProgress, [0, 0.85], [-260, -60]);
  const tlY = useTransform(scrollYProgress, [0, 0.85], [-180, -35]);
  const tlScale = useTransform(scrollYProgress, [0, 0.85], [0.85, 1.35]);

  // Top Right Card
  const trX = useTransform(scrollYProgress, [0, 0.85], [260, 60]);
  const trY = useTransform(scrollYProgress, [0, 0.85], [-180, -35]);
  const trScale = useTransform(scrollYProgress, [0, 0.85], [0.85, 1.35]);

  // Mid Left Card
  const mlX = useTransform(scrollYProgress, [0, 0.85], [-320, -85]);
  const mlY = useTransform(scrollYProgress, [0, 0.85], [0, 0]);
  const mlScale = useTransform(scrollYProgress, [0, 0.85], [0.85, 1.35]);

  // Mid Right Card
  const mrX = useTransform(scrollYProgress, [0, 0.85], [320, 85]);
  const mrY = useTransform(scrollYProgress, [0, 0.85], [0, 0]);
  const mrScale = useTransform(scrollYProgress, [0, 0.85], [0.85, 1.35]);

  // Bot Left Card
  const blX = useTransform(scrollYProgress, [0, 0.85], [-250, -60]);
  const blY = useTransform(scrollYProgress, [0, 0.85], [200, 35]);
  const blScale = useTransform(scrollYProgress, [0, 0.85], [0.85, 1.35]);

  // Bot Right Card
  const brX = useTransform(scrollYProgress, [0, 0.85], [250, 60]);
  const brY = useTransform(scrollYProgress, [0, 0.85], [200, 35]);
  const brScale = useTransform(scrollYProgress, [0, 0.85], [0.85, 1.35]);

  // Center Focal Card
  const centerScale = useTransform(scrollYProgress, [0, 0.85], [1, 1.55]);

  // Headline opacity and translation on scroll
  const textY = useTransform(scrollYProgress, [0, 0.4], [0, -30]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.4]);

  // Uniform dimensions for ALL 6 surrounding outer cards
  const outerCardStyle = "w-32 sm:w-44 md:w-52 h-24 sm:h-32 md:h-38 aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-2 border-[#ff8c00]/60 bg-[#2c2c2c] shadow-black/30";

  return (
    <div id="about" ref={containerRef} className="relative h-[220vh] text-[#f0ede8]" style={{ background: '#121212' }}>
      {/* Sticky Full-Viewport Stage */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-between overflow-hidden px-4 py-8">

        {/* Full Width & Height Autoplay Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none select-none opacity-85"
        >
          <source src="/video-compressed.mp4" type="video/mp4" />
        </video>

        {/* Ambient Dark Overlay for video visibility & card contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/75 z-0 pointer-events-none" />

        {/* Headline Header Block */}
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="z-30 text-center max-w-xl pt-1 sm:pt-6 select-none px-2 relative"
        >
          <h2 className="text-lg sm:text-4xl md:text-5xl font-serif-luxury font-normal text-[#f0ede8] tracking-tight leading-snug">
            Everything homes & estates living{' '}
            <span className="font-serif-luxury text-[#ff8c00] inline-block">
              should be
            </span>
          </h2>
        </motion.div>

        {/* Screenshot 2: Scattered Grid of 7 Cards (6 Outer Cards 100% Identical in Size) */}
        <div className="relative w-full max-w-6xl flex-1 flex items-center justify-center my-auto z-20">

          {/* 1. Center Focal Card */}
          <motion.div
            style={{ scale: centerScale }}
            className="z-20 w-44 sm:w-60 md:w-72 aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#00d26a] bg-[#2c2c2c] shadow-black/40"
          >
            <img
              src="/images/residence-images/suresh-residence-view/img66.jpg"
              alt="Living Room Focal"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* 2. Top Left Card */}
          <motion.div
            style={{ x: tlX, y: tlY, scale: tlScale }}
            className={`absolute top-[10%] left-[10%] sm:left-[14%] z-10 ${outerCardStyle}`}
          >
            <img
              src="/images/residence-images/suresh-residence-view/img78.jpg"
              alt="Suite Bedroom"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* 3. Top Right Card */}
          <motion.div
            style={{ x: trX, y: trY, scale: trScale }}
            className={`absolute top-[10%] right-[10%] sm:right-[14%] z-10 ${outerCardStyle}`}
          >
            <img
              src="/images/residence-images/suresh-residence-view/img72.jpg"
              alt="Estate Exterior"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* 4. Mid Left Card */}
          <motion.div
            style={{ x: mlX, y: mlY, scale: mlScale }}
            className={`absolute top-[38%] left-[4%] sm:left-[7%] z-10 ${outerCardStyle}`}
          >
            <img
              src="/images/residence-images/suresh-residence-view/img60.jpg"
              alt="Luxury Lounge"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* 5. Mid Right Card */}
          <motion.div
            style={{ x: mrX, y: mrY, scale: mrScale }}
            className={`absolute top-[38%] right-[4%] sm:right-[7%] z-10 ${outerCardStyle}`}
          >
            <img
              src="/images/residence-images/suresh-residence-view/img30.jpg"
              alt="Resort Pool Aerial"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* 6. Bot Left Card */}
          <motion.div
            style={{ x: blX, y: blY, scale: blScale }}
            className={`absolute bottom-[10%] left-[10%] sm:left-[14%] z-10 ${outerCardStyle}`}
          >
            <img
              src="/images/residence-images/suresh-residence-view/img57.jpg"
              alt="Infinity Pool Sunset"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* 7. Bot Right Card */}
          <motion.div
            style={{ x: brX, y: brY, scale: brScale }}
            className={`absolute bottom-[10%] right-[10%] sm:right-[14%] z-10 ${outerCardStyle}`}
          >
            <img
              src="/images/residence-images/suresh-residence-view/img54.jpg"
              alt="Master Bedroom Balcony"
              className="w-full h-full object-cover"
            />
          </motion.div>

        </div>

      </div>
    </div>
  );
};

export default ScrollGallery;
