import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const showcaseImages = [
  {
    url: '/images/residence-images/ankan-resideance-view/img13.jpg',
    location: 'Ankan Residence · Adyar',
  },
  {
    url: '/images/residence-images/suresh-residence-view/img24.jpg',
    location: 'Suresh Villa · ECR Corridor',
  },
  {
    url: '/images/residence-images/besantnagar-residence-view/img26.jpg',
    location: 'Besant Nagar Haven · Chennai',
  },
  {
    url: '/images/residence-images/raman-residence-view/img39.jpg',
    location: 'Raman Estate · Velachery',
  },
];

const features = [
  {
    number: '01',
    title: 'Thoughtful Design',
    description:
      'Spaces designed around real lifestyles, cross-ventilation, daylight paths, and climate harmony for serene living year-round.',
  },
  {
    number: '02',
    title: 'Quality Craftsmanship',
    description:
      'Rigorous material selection, timeless stone, bespoke timber, and enduring durability backed by architectural engineering.',
  },
  {
    number: '03',
    title: 'Personal Approach',
    description:
      "Homes shaped collaboratively around each client's unique family story, daily rituals, and long-term legacy visions.",
  },
];

export const EverydayLivingSection = () => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  // Fast auto-cycle showcase images for high interactivity (2.2 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % showcaseImages.length);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  const handleNextImage = () => {
    setCurrentImgIndex((prev) => (prev + 1) % showcaseImages.length);
  };

  return (
    <section
      id="interior"
      className="relative w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-10 lg:px-16 text-[#f0ede8] overflow-hidden"
      style={{ background: '#0d0e11' }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center relative z-10 w-full">

        {/* ── LEFT COLUMN: DYNAMIC ANIMATED IMAGE CARD & 100% STAT BLOCK ───────── */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col w-full"
        >
          {/* Main Showcase Image Container — Compact aspect ratio to fit viewport */}
          <div
            onClick={handleNextImage}
            className="relative w-full rounded-sm overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] aspect-[4/3.2] sm:aspect-[4/3.2] lg:aspect-[4/3.1] group bg-[#0c0d10] cursor-pointer hover:border-[#ff8c00]/40 transition-all duration-300"
          >
            {/* Base static background image to prevent any black gap during transitions */}
            <img
              src={showcaseImages[currentImgIndex].url}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Smooth overlapping crossfade */}
            <AnimatePresence>
              <motion.img
                key={currentImgIndex}
                src={showcaseImages[currentImgIndex].url}
                alt={showcaseImages[currentImgIndex].location}
                initial={{ opacity: 0, scale: 1.0 }}
                animate={{ opacity: 1, scale: 1.06 }}
                exit={{ opacity: 0 }}
                transition={{
                  opacity: { duration: 0.45, ease: 'easeInOut' },
                  scale: { duration: 2.2, ease: 'easeOut' },
                }}
                className="absolute inset-0 w-full h-full object-cover z-10"
              />
            </AnimatePresence>

            {/* Dark Gradient Overlay for high-end atmospheric tone */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none z-20" />

            {/* Location Tag Overlay Top-Left */}
            <div className="absolute top-4 left-4 z-30">
              <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-bold text-white/90 uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff8c00] animate-pulse" />
                {showcaseImages[currentImgIndex].location}
              </span>
            </div>

            {/* Interactive Progress Indicators Bottom-Right */}
            <div className="absolute bottom-4 right-4 z-30 flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
              {showcaseImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImgIndex(idx);
                  }}
                  className="cursor-pointer p-0.5"
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  <motion.div
                    animate={{
                      width: currentImgIndex === idx ? 16 : 6,
                      backgroundColor: currentImgIndex === idx ? '#ff8c00' : 'rgba(255,255,255,0.3)',
                    }}
                    transition={{ duration: 0.3 }}
                    className="h-[3px] rounded-full"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* 100% Tailored Architecture Stat Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full bg-[#13151c] p-4 sm:p-5 border-t-2 border-t-[#ff8c00] border border-white/10 mt-3 rounded-sm shadow-xl space-y-1"
          >
            <span
              className="block text-2xl sm:text-3xl font-black text-[#ff8c00] tracking-tight leading-none"
            >
              100%
            </span>
            <span
              className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-white/60"
            >
              TAILORED ARCHITECTURE
            </span>
          </motion.div>
        </motion.div>

        {/* ── RIGHT COLUMN: HEADER & 3 NUMBERED FEATURE CARDS ──────────────── */}
        <div className="lg:col-span-7 flex flex-col space-y-5 lg:space-y-6 justify-center">

          {/* Header Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-3 text-left select-none"
          >
            {/* Top Eyebrow with Left Accent Line: — WHY HOME & ESTATES */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#ff8c00]" />
              <span
                className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff8c00]"
              >
                WHY HOME &amp; ESTATES
              </span>
            </div>

            {/* Main Headline: Designed With Purpose. Built With Care. */}
            <h2
              className="text-2xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-snug font-sans"
            >
              Designed With Purpose.<br />
              Built With Care.
            </h2>
          </motion.div>

          {/* 3 Numbered Feature Cards */}
          <div className="space-y-3 w-full">
            {features.map((item, idx) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: idx * 0.05,
                  ease: 'easeOut',
                }}
                whileHover={{
                  x: 6,
                  borderColor: 'rgba(255, 140, 0, 0.4)',
                  backgroundColor: 'rgba(255, 140, 0, 0.04)',
                }}
                className="p-4 sm:p-4.5 bg-[#13151c] rounded-md border border-white/10 shadow-lg transition-all duration-300 flex items-start gap-4 cursor-pointer group"
              >
                {/* Translucent Circular Badge Indicator */}
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 border border-[#ff8c00]/40 text-[#ff8c00] group-hover:bg-[#ff8c00] group-hover:text-black flex items-center justify-center text-xs sm:text-sm font-bold font-sans shadow-sm flex-shrink-0 transition-all duration-300 mt-0.5">
                  {item.number}
                </div>

                {/* Card Title & Description */}
                <div className="space-y-1 flex-1">
                  <h3 className="text-sm sm:text-base font-bold text-white/95 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p
                    className="text-xs sm:text-xs md:text-sm text-white/60 font-medium leading-relaxed"
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default EverydayLivingSection;
