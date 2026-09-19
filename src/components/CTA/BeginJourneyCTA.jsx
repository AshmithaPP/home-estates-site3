import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const headlineLine1 = "READY TO FIND YOUR NEXT";
const headlineLine2 = "HOME?";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.035,
      delayChildren: 0.2,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 35, rotateX: -60 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 140,
    },
  },
};

/**
 * BeginJourneyCTA Component — Last Pre-Footer CTA Section
 * Exact replica of reference UI:
 * - Eyebrow pill: —— BEGIN YOUR JOURNEY
 * - Staggered letter-by-letter 3D animated headline: "READY TO FIND YOUR NEXT HOME?"
 * - Subtitle paragraph
 * - 2 Buttons: "START A CONVERSATION →" (orange glowing) and "EXPLORE PROPERTIES" (dark outline)
 * - Full-width bottom orange accent border
 */
export const BeginJourneyCTA = ({ onOpenApply }) => {
  const scrollToGallery = () => {
    const el = document.getElementById('gallery');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="begin-journey"
      className="relative w-full py-24 sm:py-32 px-6 sm:px-12 lg:px-20 text-[#f0ede8] overflow-hidden"
      style={{ background: '#0d0e11' }}
    >
      {/* Matrix rain background effect */}
      <div className="rain opacity-30" />

      <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-8 relative z-10">

        {/* Top Eyebrow Pill with Accent Line: — BEGIN YOUR JOURNEY */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-sm bg-[#13151c] border border-white/10 shadow-md"
        >
          <span className="w-5 h-[2px] bg-[#ff5722]" />
          <span
            className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.3em] text-[#ff5722]"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            BEGIN YOUR JOURNEY
          </span>
        </motion.div>

        {/* Letter-by-Letter Animated & Glitch Matrix Headline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="select-text cursor-text"
        >
          <h2
            className="text-2xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-[1.15] uppercase text-center"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {/* Line 1: READY TO FIND YOUR NEXT */}
            <div className="flex flex-wrap justify-center gap-x-[0.28em] gap-y-1">
              {headlineLine1.split(' ').map((word, wordIdx) => (
                <span key={wordIdx} className="inline-block whitespace-nowrap">
                  {word.split('').map((char, charIdx) => (
                    <motion.span
                      key={charIdx}
                      variants={letterVariants}
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              ))}
            </div>

            {/* Line 2: HOME? with Matrix Glitch Text Effect */}
            <div className="flex flex-wrap justify-center gap-x-[0.28em] pt-1 sm:pt-2">
              {headlineLine2.split(' ').map((word, wordIdx) => (
                <span key={wordIdx} className="inline-block whitespace-nowrap">
                  {word.split('').map((char, charIdx) => (
                    <motion.span
                      key={charIdx}
                      variants={letterVariants}
                      className="inline-block text-[#ff5722] matrix-text"
                      data-text={char}
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              ))}
            </div>
          </h2>
        </motion.div>

        {/* Subtitle Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xs sm:text-sm md:text-base text-white/70 font-medium max-w-2xl mx-auto leading-relaxed"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Let's find a space that feels like yours. Schedule a consultation or view our comprehensive South Indian portfolio.
        </motion.p>

        {/* 2 CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 w-full sm:w-auto"
        >
          {/* Primary Button: START A CONVERSATION -> */}
          <button
            onClick={onOpenApply}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#ff5722] hover:bg-[#e64a19] text-white px-8 py-3.5 rounded-sm text-xs sm:text-sm font-bold tracking-widest uppercase shadow-[0_0_25px_rgba(255,87,34,0.45)] hover:shadow-[0_0_35px_rgba(255,87,34,0.65)] hover:scale-102 transition-all cursor-pointer"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            <span>START A CONVERSATION</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>

          {/* Secondary Button: EXPLORE PROPERTIES */}
          <button
            onClick={scrollToGallery}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 text-white px-8 py-3.5 rounded-sm text-xs sm:text-sm font-bold tracking-widest uppercase transition-all cursor-pointer"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            EXPLORE PROPERTIES
          </button>
        </motion.div>

      </div>

      {/* Full-width bottom orange accent border line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#ff5722]" />
    </section>
  );
};

export default BeginJourneyCTA;
