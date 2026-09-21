import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import PrimaryButton from '../Common/PrimaryButton';

const headlineLine1 = "READY TO FIND YOUR NEXT";
const headlineLine2 = "HOME?";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.1,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

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
      className="relative w-full py-16 sm:py-24 lg:py-28 px-4 sm:px-12 lg:px-20 text-[#f0ede8] overflow-hidden"
      style={{ background: '#0d0e11' }}
    >
      {/* Soft luxury ambient background spotlight */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-[600px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(255,140,0,0.18)_0%,rgba(255,140,0,0.04)_50%,transparent_75%)] blur-3xl rounded-full"
        />
      </div>

      <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-8 relative z-10">

        {/* Top Eyebrow Pill with Accent Line: — BEGIN YOUR JOURNEY */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-sm bg-[#13151c] border border-white/10 shadow-md"
        >
          <span className="w-5 h-[2px] bg-[#ff8c00]" />
          <span
            className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.3em] text-[#ff8c00]"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            BEGIN YOUR JOURNEY
          </span>
        </motion.div>

        {/* Staggered Animated Headline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="select-text cursor-text"
        >
          <h2
            className="text-2xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-snug uppercase text-center font-sans"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
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

            {/* Line 2: HOME? with sleek luxury glowing text */}
            <div className="flex flex-wrap justify-center gap-x-[0.28em] pt-1 sm:pt-2">
              {headlineLine2.split('').map((char, charIdx) => (
                <motion.span
                  key={charIdx}
                  variants={letterVariants}
                  className="inline-block relative"
                >
                  <span className="relative z-10 bg-gradient-to-r from-[#ff8c00] via-[#ffab40] to-[#ff8c00] bg-clip-text text-transparent drop-shadow-[0_0_22px_rgba(255,140,0,0.6)]">
                    {char}
                  </span>
                  <span
                    className="absolute inset-0 z-0 text-[#ff8c00] blur-md opacity-50 select-none pointer-events-none"
                    aria-hidden="true"
                  >
                    {char}
                  </span>
                </motion.span>
              ))}
            </div>
          </h2>
        </motion.div>

        {/* Subtitle Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xs sm:text-sm md:text-base text-white/70 font-medium max-w-2xl mx-auto leading-relaxed"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Let's find a space that feels like yours. Schedule a consultation or view our comprehensive South Indian portfolio.
        </motion.p>

        {/* 2 CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 w-full sm:w-auto"
        >
          <PrimaryButton
            variant="primary"
            size="lg"
            onClick={onOpenApply}
            icon={ArrowRight}
          >
            Start a Conversation
          </PrimaryButton>

          <PrimaryButton
            variant="glass"
            size="lg"
            onClick={scrollToGallery}
            icon={ArrowUpRight}
          >
            Explore Properties
          </PrimaryButton>
        </motion.div>

      </div>

      {/* Full-width bottom orange accent border line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#ff8c00]" />
    </section>
  );
};

export default BeginJourneyCTA;

