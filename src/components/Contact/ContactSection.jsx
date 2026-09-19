import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const ContactSection = ({ onOpenApply, onOpenTourModal }) => {
  return (
    <section
      id="contact"
      className="relative w-full py-20 lg:py-28 px-6 sm:px-12 lg:px-20 xl:px-28 overflow-hidden"
      style={{ background: '#0d0e11' }}
    >
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#ff8c00]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1400px] w-full mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">

          {/* ── LEFT COLUMN: TYPOGRAPHY & DESCRIPTION ─────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center text-left"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-6 h-[2px] bg-[#ff8c00] inline-block" />
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-[#ff8c00]">
                About Home & Estates
              </span>
            </div>

            {/* Main Headline (Grand Serif Replica) */}
            <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-normal text-[#f0ede8] tracking-tight leading-[1.15] mb-2">
              More Than A House.
              <span className="font-serif-luxury italic text-[#ff8c00] block mt-1 sm:mt-2">
                A Place To Belong.
              </span>
            </h2>

            {/* Accent Line */}
            <div className="w-16 h-[2px] bg-[#ff8c00]/70 my-6" />

            {/* Body Paragraph */}
            <p className="text-sm sm:text-base lg:text-lg text-[#f0ede8]/80 leading-relaxed font-normal max-w-xl mb-8 sm:mb-10">
              We craft thoughtfully designed residences that balance architectural precision, elemental warmth, and the rhythm of contemporary living. Rooted in sustainable materials and contextual modernism, our works become tranquil retreats from the world.
            </p>

            {/* CTA Link */}
            <div>
              <a
                href="#about"
                onClick={onOpenApply}
                className="inline-flex items-center gap-3 text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-[#f0ede8] hover:text-[#ff8c00] transition-colors group cursor-pointer"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 text-[#ff8c00] group-hover:translate-x-1.5 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN: FEATURED PORTFOLIO CARD ─────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 xl:col-span-7"
          >
            <div
              onClick={onOpenApply || onOpenTourModal}
              className="relative w-full aspect-[16/10.5] rounded-2xl overflow-hidden border border-white/12 shadow-2xl group cursor-pointer bg-[#14161f]"
            >
              {/* Image */}
              <img
                src="/images/residence-images/suresh-residence-view/img72.jpg"
                alt="The Hilltop Sanctuary · Phase II"
                className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
              />

              {/* Ambient Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

              {/* Bottom Info Bar Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex items-end justify-between gap-4 z-10">
                {/* Bottom Left Title */}
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-4 h-[1.5px] bg-[#ff8c00] inline-block" />
                    <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.2em] text-[#ff8c00]">
                      Curated Portfolio
                    </span>
                  </div>
                  <h3 className="font-serif-luxury text-lg sm:text-2xl font-normal text-[#f0ede8] tracking-tight drop-shadow-md">
                    The Hilltop Sanctuary · Phase II
                  </h3>
                </div>

                {/* Bottom Right Location Badge */}
                <div className="shrink-0">
                  <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.25em] text-[#f0ede8]/80 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-sm border border-white/15 shadow-lg">
                    Tamil Nadu
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;

