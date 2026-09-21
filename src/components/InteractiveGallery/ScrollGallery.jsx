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

  // Track scroll progress within this section (0 to 1) for Desktop
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Scroll Transforms for Convergence towards center and Zoom In (Desktop)
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

  // Uniform dimensions for ALL 6 surrounding outer cards (Desktop)
  const outerCardStyle = "w-32 sm:w-44 md:w-52 h-24 sm:h-32 md:h-38 aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-2 border-[#ff8c00]/60 bg-[#2c2c2c] shadow-black/30";

  // Mobile grid image list for clean staggered transitions
  const mobileGridImages = [
    { src: "/images/residence-images/suresh-residence-view/img78.jpg", alt: "Suite Bedroom" },
    { src: "/images/residence-images/suresh-residence-view/img72.jpg", alt: "Estate Exterior" },
    { src: "/images/residence-images/suresh-residence-view/img60.jpg", alt: "Luxury Lounge" },
    { src: "/images/residence-images/suresh-residence-view/img30.jpg", alt: "Resort Pool Aerial" },
    { src: "/images/residence-images/suresh-residence-view/img57.jpg", alt: "Infinity Pool Sunset" },
    { src: "/images/residence-images/suresh-residence-view/img54.jpg", alt: "Master Bedroom Balcony" },
  ];

  return (
    <section id="about" className="relative text-[#f0ede8]">
      {/* ========================================================= */}
      {/* 1. MOBILE VIEW (< md): Smooth Viewport Entrance Layout     */}
      {/* Animated scroll entrance & touch feedback on mobile        */}
      {/* ========================================================= */}
      <div
        className="block md:hidden relative min-h-screen py-10 px-4 overflow-hidden"
        style={{
          background: 'linear-gradient(140deg, #11100f 0%, #1e1814 30%, #2b2017 55%, #1c1612 80%, #100f0e 100%)',
        }}
      >
        {/* Ambient Glow */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background: `
              radial-gradient(circle at 50% 50%, rgba(255, 140, 0, 0.22) 0%, rgba(255, 110, 0, 0.08) 40%, transparent 75%),
              linear-gradient(180deg, rgba(12, 11, 10, 0.7) 0%, rgba(26, 20, 15, 0.15) 50%, rgba(12, 11, 10, 0.8) 100%)
            `,
          }}
        />

        <div className="relative z-10 max-w-sm mx-auto flex flex-col items-center">
          {/* Headline with Fade-Down Entrance */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center select-none mb-6 px-2"
          >
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-normal text-[#f0ede8] tracking-tight leading-snug font-sans">
              Everything homes & estates living{' '}
              <span className="text-[#ff8c00] inline-block font-sans">
                should be
              </span>
            </h2>
          </motion.div>

          {/* Focal Center Card with Scale-Up Entrance & Touch Feedback */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.25, 0.8, 0.25, 1] }}
            whileTap={{ scale: 0.97 }}
            className="w-full max-w-[280px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-[var(--primary)] bg-[#2c2c2c] mb-4 shadow-black/40 cursor-pointer"
          >
            <img
              src="/images/residence-images/suresh-residence-view/img66.jpg"
              alt="Living Room Focal"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </motion.div>

          {/* 6 Outer Cards Grid with Staggered Slide-Up Transitions */}
          <div className="grid grid-cols-2 gap-3 w-full">
            {mobileGridImages.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: 0.12 + idx * 0.08,
                  ease: [0.25, 0.8, 0.25, 1],
                }}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.02 }}
                className="aspect-[4/3] w-full rounded-xl overflow-hidden shadow-lg border-2 border-[#ff8c00]/60 bg-[#2c2c2c] cursor-pointer"
              >
                <img
                  src={card.src}
                  alt={card.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. DESKTOP / LAPTOP VIEW (>= md): Sticky Parallax View     */}
      {/* Preserves 100% original design and scroll animation       */}
      {/* ========================================================= */}
      <div
        ref={containerRef}
        className="hidden md:block relative h-[220vh]"
        style={{
          background: 'linear-gradient(140deg, #11100f 0%, #1e1814 30%, #2b2017 55%, #1c1612 80%, #100f0e 100%)',
        }}
      >
        {/* Sticky Full-Viewport Stage */}
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-between overflow-hidden px-4 py-8">

          {/* Ambient Orange-Shaded Grey Dim Light & Glow Overlay */}
          <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              background: `
                radial-gradient(circle at 50% 50%, rgba(255, 140, 0, 0.22) 0%, rgba(255, 110, 0, 0.08) 40%, transparent 75%),
                linear-gradient(180deg, rgba(12, 11, 10, 0.7) 0%, rgba(26, 20, 15, 0.15) 50%, rgba(12, 11, 10, 0.8) 100%)
              `,
            }}
          />

          {/* Headline Header Block */}
          <motion.div
            style={{ y: textY, opacity: textOpacity }}
            className="z-30 text-center max-w-xl pt-1 sm:pt-6 select-none px-2 relative"
          >
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-normal text-[#f0ede8] tracking-tight leading-snug font-sans">
              Everything homes & estates living{' '}
              <span className="text-[#ff8c00] inline-block font-sans">
                should be
              </span>
            </h2>
          </motion.div>

          {/* Scattered Grid of 7 Cards */}
          <div className="relative w-full max-w-6xl flex-1 flex items-center justify-center my-auto z-20">

            {/* 1. Center Focal Card */}
            <motion.div
              style={{ scale: centerScale }}
              className="z-20 w-44 sm:w-60 md:w-72 aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-[var(--primary)] bg-[#2c2c2c] shadow-black/40"
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
    </section>
  );
};

export default ScrollGallery;
