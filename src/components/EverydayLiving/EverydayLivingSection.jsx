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

/**
 * EverydayLivingSection — 3rd Section
 * Exact pixel-perfect replica of reference UI:
 * Left: Dynamically animated showcase image card with slow Ken-Burns zoom & smooth cross-fade slideshow + "100% TAILORED ARCHITECTURE" stat box
 * Right: Accent line eyebrow "WHY HOME & ESTATES", serif headline "Designed With Purpose. Built With Care.", 3 numbered feature cards (01, 02, 03)
 */
export const EverydayLivingSection = () => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  // Auto-cycle showcase images with slow animated cross-fade
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % showcaseImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="interior"
      className="relative w-full py-20 lg:py-28 px-6 sm:px-10 lg:px-16 text-[#f0ede8] overflow-hidden"
      style={{ background: '#0d0e11' }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">

        {/* ── LEFT COLUMN: DYNAMIC ANIMATED IMAGE CARD & 100% STAT BLOCK ───────── */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col w-full"
        >
          {/* Main Dynamically Animated Image Card with Slow Ken Burns Zoom & Cross-fade */}
          <div className="relative w-full rounded-sm overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] aspect-[4/4.5] sm:aspect-[4/4.2] group bg-[#0c0d10]">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImgIndex}
                src={showcaseImages[currentImgIndex].url}
                alt={showcaseImages[currentImgIndex].location}
                initial={{ opacity: 0, scale: 1.0 }}
                animate={{ opacity: 1, scale: 1.12 }}
                exit={{ opacity: 0 }}
                transition={{
                  opacity: { duration: 1.2, ease: 'easeInOut' },
                  scale: { duration: 5.5, ease: 'linear' },
                }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Dark Gradient Overlay for high-end atmospheric tone */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none z-10" />

            {/* Location Tag Overlay Top-Left */}
            <div className="absolute top-4 left-4 z-20">
              <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-bold text-white/90 uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff5722] animate-pulse" />
                {showcaseImages[currentImgIndex].location}
              </span>
            </div>

            {/* Interactive Progress Indicators Bottom-Right */}
            <div className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
              {showcaseImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImgIndex(idx)}
                  className="cursor-pointer p-0.5"
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  <motion.div
                    animate={{
                      width: currentImgIndex === idx ? 16 : 6,
                      backgroundColor: currentImgIndex === idx ? '#ff5722' : 'rgba(255,255,255,0.3)',
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
            className="w-full bg-[#13151c] p-6 sm:p-7 border-t-2 border-t-[#ff5722] border border-white/10 mt-4 rounded-sm shadow-xl space-y-1.5"
          >
            <span
              className="block text-3xl sm:text-4xl font-black text-[#ff5722] tracking-tight leading-none"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              100%
            </span>
            <span
              className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-white/60"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              TAILORED ARCHITECTURE
            </span>
          </motion.div>
        </motion.div>

        {/* ── RIGHT COLUMN: HEADER & 3 NUMBERED FEATURE CARDS ──────────────── */}
        <div className="lg:col-span-7 flex flex-col space-y-8 justify-center">

          {/* Header Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4 text-left select-none"
          >
            {/* Top Eyebrow with Left Accent Line: — WHY HOME & ESTATES */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#ff5722]" />
              <span
                className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff5722]"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                WHY HOME &amp; ESTATES
              </span>
            </div>

            {/* Main Headline: Designed With Purpose. Built With Care. */}
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-[1.15]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Designed With Purpose.<br />
              Built With Care.
            </h2>
          </motion.div>

          {/* 3 Numbered Feature Cards */}
          <div className="space-y-4 w-full">
            {features.map((item, idx) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  x: 8,
                  borderColor: 'rgba(255, 87, 34, 0.4)',
                  backgroundColor: 'rgba(255, 87, 34, 0.04)',
                }}
                className="p-5 sm:p-6 bg-[#13151c] rounded-md border border-white/10 shadow-lg transition-all duration-300 flex items-start gap-5 cursor-pointer group"
              >
                {/* Number Badge Box - Constantly Highlighted */}
                <div className="w-10 h-10 rounded bg-[#ff5722] text-black shadow-[0_0_16px_rgba(255,87,34,0.45)] flex items-center justify-center text-xs font-mono font-black flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                  {item.number}
                </div>

                {/* Card Title & Description */}
                <div className="space-y-1.5 flex-1">
                  <h3
                    className="text-base sm:text-lg font-serif font-bold text-white/95 group-hover:text-white transition-colors"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-xs sm:text-sm text-white/60 font-medium leading-relaxed"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
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
