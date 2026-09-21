import React from 'react';
import { motion } from 'framer-motion';
import { Bed, Bath, Move, ArrowDownRight } from 'lucide-react';
import { floorplansData } from '../../data/floorplansData';
import PrimaryButton from '../Common/PrimaryButton';

/**
 * BalancedLivingSection Component
 * ALL 4 floorplan cards explicitly displayed on all desktop & laptop screens (md:grid-cols-4 gap-4).
 * Reusable PrimaryButton used for consistent card CTA.
 */
export const BalancedLivingSection = ({ onOpenApply }) => {
  return (
    <section id="gallery" className="relative w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-8 text-[#f0ede8] overflow-hidden" style={{ background: '#090a0d' }}>

      {/* Background Ambient Glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#ff8c00]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[var(--primary)]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1800px] mx-auto space-y-10 relative z-10">

        {/* Centered Headline */}
        <div className="text-center max-w-2xl mx-auto space-y-1 select-none">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-normal text-[#f0ede8] tracking-tight leading-snug font-sans">
            Where luxury living
          </h2>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-normal text-[#f0ede8] tracking-tight leading-snug font-sans">
            feels{' '}
            <span className="text-[#ff8c00] inline-block font-sans">
              balanced
            </span>
          </h2>
        </div>

        {/* ALL 4 Cards Grid - md:grid-cols-4 for 768px+ desktops/laptops */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 pt-2 items-stretch w-full">
          {floorplansData.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1,
                ease: 'easeOut',
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.25, ease: 'easeOut' },
              }}
              className="bg-[#13151c] p-5 sm:p-6 rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_22px_45px_rgba(255,140,0,0.2)] border border-white/10 hover:border-[#ff8c00]/40 flex flex-col justify-between transition-all duration-300 cursor-pointer group"
            >
              <div className="space-y-4">

                {/* Image Container with Available Status Badge */}
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#0d1117]">
                  <img
                    src={plan.image}
                    alt={plan.title}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                  />

                  {/* Available Tag in Primary Theme */}
                  {plan.available && (
                    <div className="absolute top-2.5 left-2.5 px-3 py-1 rounded-md bg-[var(--primary)] text-black text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                      <span>Available</span>
                    </div>
                  )}

                  {/* Spec Pills Badge at bottom of image */}
                    <div className="absolute bottom-2 left-1.5 right-1.5 flex items-center gap-1 bg-black/70 backdrop-blur-md p-1 rounded-lg border border-white/10 text-[9px] sm:text-[10px] font-bold text-[#f0ede8] shadow-sm">
                      <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-white/10">
                        <Bed className="w-2.5 h-2.5 text-[#ff8c00]" />
                        <span>{plan.specs.beds} Bed</span>
                      </div>
                      <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-white/10">
                        <Bath className="w-2.5 h-2.5 text-[#ff8c00]" />
                        <span>{plan.specs.baths} Bath</span>
                      </div>
                      <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-white/10 ml-auto">
                        <Move className="w-2.5 h-2.5 text-[#ff8c00]" />
                        <span>{plan.specs.sqft} ft²</span>
                      </div>
                    </div>
                </div>

                {/* Title Header */}
                <div className="flex items-center justify-between pt-0.5">
                  <h3 className="font-bold text-base sm:text-lg text-[#f0ede8] font-sans">
                    {plan.title}
                  </h3>
                </div>

                {/* Description Copy */}
                <p className="text-[11px] sm:text-xs text-[#f0ede8]/60 font-sans leading-relaxed min-h-[40px]">
                  {plan.desc}
                </p>

              </div>

              {/* Reusable Primary Button for Card CTA */}
              <div className="pt-3 border-t border-white/10 flex items-center">
                <PrimaryButton
                  size="sm"
                  onClick={onOpenApply}
                  icon={ArrowDownRight}
                  className="w-full"
                >
                  Explore Details
                </PrimaryButton>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BalancedLivingSection;
