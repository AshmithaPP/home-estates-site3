import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * ScrollGallery Component
 * 3D Parallax Scroll-driven Convergence & Zoom Animation without dead space.
 */
export const ScrollGallery = () => {
  const containerRef = useRef(null);

  // Track scroll progress: animation plays as the section moves through the viewport.
  // 'start end' = top of section hits bottom of viewport (progress=0)
  // 'end start' = bottom of section hits top of viewport (progress=1)
  // This gives a full animation range with zero dead space since the container is exactly 100vh.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Scroll Transforms: animation plays in the visible window (0.15–0.85 of scroll progress)
  // Top Left Card
  const tlX = useTransform(scrollYProgress, [0.15, 0.85], [-220, -50]);
  const tlY = useTransform(scrollYProgress, [0.15, 0.85], [-140, -20]);
  const tlScale = useTransform(scrollYProgress, [0.15, 0.85], [0.85, 1.3]);

  // Top Right Card
  const trX = useTransform(scrollYProgress, [0.15, 0.85], [220, 50]);
  const trY = useTransform(scrollYProgress, [0.15, 0.85], [-140, -20]);
  const trScale = useTransform(scrollYProgress, [0.15, 0.85], [0.85, 1.3]);

  // Mid Left Card
  const mlX = useTransform(scrollYProgress, [0.15, 0.85], [-280, -75]);
  const mlY = useTransform(scrollYProgress, [0.15, 0.85], [0, 0]);
  const mlScale = useTransform(scrollYProgress, [0.15, 0.85], [0.85, 1.3]);

  // Mid Right Card
  const mrX = useTransform(scrollYProgress, [0.15, 0.85], [280, 75]);
  const mrY = useTransform(scrollYProgress, [0.15, 0.85], [0, 0]);
  const mrScale = useTransform(scrollYProgress, [0.15, 0.85], [0.85, 1.3]);

  // Bot Left Card
  const blX = useTransform(scrollYProgress, [0.15, 0.85], [-220, -50]);
  const blY = useTransform(scrollYProgress, [0.15, 0.85], [150, 20]);
  const blScale = useTransform(scrollYProgress, [0.15, 0.85], [0.85, 1.3]);

  // Bot Right Card
  const brX = useTransform(scrollYProgress, [0.15, 0.85], [220, 50]);
  const brY = useTransform(scrollYProgress, [0.15, 0.85], [150, 20]);
  const brScale = useTransform(scrollYProgress, [0.15, 0.85], [0.85, 1.3]);

  // Center Focal Card
  const centerScale = useTransform(scrollYProgress, [0.15, 0.85], [1, 1.5]);

  // Headline opacity and translation on scroll
  const textY = useTransform(scrollYProgress, [0.15, 0.5], [0, -20]);
  const textOpacity = useTransform(scrollYProgress, [0.15, 0.85], [1, 0.6]);

  // Uniform dimensions for outer surrounding cards
  const outerCardStyle =
    "w-32 sm:w-44 md:w-52 h-24 sm:h-32 md:h-38 aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-2 border-[#ff8c00]/60 bg-[#2c2c2c] shadow-black/30";

  // Mobile grid images
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
      {/* ========================================================= */}
      <div
        className="block md:hidden relative py-12 px-4 overflow-hidden"
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
          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center select-none mb-6 px-2"
          >
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-normal text-[#f0ede8] tracking-tight leading-snug font-sans">
              Everything homes &amp; estates living{' '}
              <span className="text-[#ff8c00] inline-block font-sans">
                should be
              </span>
            </h2>
          </motion.div>

          {/* Focal Center Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="w-full max-w-[280px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-[var(--primary)] bg-[#2c2c2c] mb-4 shadow-black/40 cursor-pointer"
          >
            <img
              src="/images/residence-images/suresh-residence-view/img66.jpg"
              alt="Living Room Focal"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* 6 Outer Cards Grid */}
          <div className="grid grid-cols-2 gap-3 w-full">
            {mobileGridImages.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + idx * 0.06 }}
                className="aspect-[4/3] w-full rounded-xl overflow-hidden shadow-lg border-2 border-[#ff8c00]/60 bg-[#2c2c2c] cursor-pointer"
              >
                <img
                  src={card.src}
                  alt={card.alt}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. DESKTOP / LAPTOP VIEW (>= md): Sticky Parallax View     */}
      {/* 3D Scroll Convergence Animation without Dead Space        */}
      {/* ========================================================= */}
      <div
        ref={containerRef}
        className="hidden md:block relative h-screen overflow-hidden"
        style={{
          background: 'linear-gradient(140deg, #11100f 0%, #1e1814 25%, #2b2017 50%, #1c1612 75%, #0e0d0c 100%)',
        }}
      >
        {/* Full-Viewport Stage (no sticky needed — scroll offset drives animation) */}
        <div className="relative h-full w-full flex flex-col items-center justify-between px-4 py-6">

          {/* Ambient Glow */}
          <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              background: `
                radial-gradient(circle at 50% 50%, rgba(255, 140, 0, 0.20) 0%, rgba(255, 110, 0, 0.06) 40%, transparent 75%),
                linear-gradient(180deg, rgba(12, 11, 10, 0.6) 0%, rgba(26, 20, 15, 0.1) 50%, rgba(12, 11, 10, 0.9) 100%)
              `,
            }}
          />

          {/* Headline Header Block */}
          <motion.div
            style={{ y: textY, opacity: textOpacity }}
            className="z-30 text-center max-w-xl pt-2 select-none px-2 relative"
          >
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-normal text-[#f0ede8] tracking-tight leading-snug font-sans">
              Everything homes &amp; estates living{' '}
              <span className="text-[#ff8c00] inline-block font-sans">
                should be
              </span>
            </h2>
          </motion.div>

          {/* Scattered Grid of 7 Cards - Explicit stage height to distribute cards vertically without empty bottom void */}
          <div className="relative w-full max-w-6xl h-[480px] lg:h-[540px] my-auto flex items-center justify-center z-20">

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
              className={`absolute top-[2%] left-[6%] sm:left-[10%] z-10 ${outerCardStyle}`}
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
              className={`absolute top-[2%] right-[6%] sm:right-[10%] z-10 ${outerCardStyle}`}
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
              className={`absolute top-1/2 -translate-y-1/2 left-[2%] sm:left-[4%] z-10 ${outerCardStyle}`}
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
              className={`absolute top-1/2 -translate-y-1/2 right-[2%] sm:right-[4%] z-10 ${outerCardStyle}`}
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
              className={`absolute bottom-[2%] left-[6%] sm:left-[10%] z-10 ${outerCardStyle}`}
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
              className={`absolute bottom-[2%] right-[6%] sm:right-[10%] z-10 ${outerCardStyle}`}
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


