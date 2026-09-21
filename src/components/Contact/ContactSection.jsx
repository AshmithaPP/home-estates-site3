import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Award, Building2 } from 'lucide-react';
import PrimaryButton from '../Common/PrimaryButton';

export const ContactSection = ({ onOpenApply, onOpenTourModal }) => {
  const highlights = [
    {
      icon: Award,
      value: '15+',
      label: 'Years of Architectural Excellence',
    },
    {
      icon: ShieldCheck,
      value: '100%',
      label: 'Transparent Pricing & Legal Clarity',
    },
    {
      icon: Building2,
      value: '40+',
      label: 'Bespoke Luxury Estates Delivered',
    },
  ];

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen flex items-center py-16 sm:py-20 lg:py-24 px-4 sm:px-12 lg:px-20 xl:px-24 overflow-hidden"
      style={{ background: '#0d0e11' }}
    >
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[700px] bg-[#ff8c00]/8 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-[1550px] w-full mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* ── LEFT COLUMN: RICH TYPOGRAPHY, STATS & CTA ─────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center text-left space-y-6 sm:space-y-8"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="w-10 h-[2.5px] bg-[#ff8c00] inline-block" />
              <span className="text-xs sm:text-sm lg:text-base font-extrabold uppercase tracking-[0.25em] text-[#ff8c00]">
                About Home &amp; Estates
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-normal text-[#f0ede8] tracking-tight leading-snug font-sans">
              More Than A House.
              <span className="italic text-[#ff8c00] block mt-1 font-sans">
                A Place To Belong.
              </span>
            </h2>

            {/* Body Paragraph */}
            <p className="text-sm sm:text-base lg:text-lg text-[#f0ede8]/85 leading-relaxed font-normal max-w-2xl">
              We craft thoughtfully designed residences that balance architectural precision, elemental warmth, and the rhythm of contemporary living. Rooted in sustainable materials and contextual modernism, our works become tranquil retreats from the world.
            </p>

            {/* 3 Key Value Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-2 pb-2">
              {highlights.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-2xl bg-[#13151c] border border-white/12 flex flex-col justify-between space-y-3 shadow-lg hover:border-[#ff8c00]/50 transition-colors"
                  >
                    <div className="flex items-center gap-2 text-[#ff8c00]">
                      <IconComp className="w-5 h-5" />
                      <span className="text-xl sm:text-2xl lg:text-3xl font-black font-sans tracking-tight">
                        {item.value}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-white/70 font-medium leading-snug">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Reusable Primary Button CTA */}
            <div className="pt-2">
              <PrimaryButton
                variant="primary"
                size="md"
                onClick={() => {
                  const el = document.getElementById('gallery') || document.getElementById('living');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                icon={ArrowRight}
              >
                Learn More About Us
              </PrimaryButton>
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN: ENLARGED PORTFOLIO SHOWCASE CARD ──────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex items-center justify-center w-full"
          >
            <div
              className="relative w-full h-[460px] sm:h-[540px] lg:h-[620px] xl:h-[680px] rounded-3xl overflow-hidden border border-white/15 shadow-[0_30px_70px_rgba(0,0,0,0.85)] group bg-[#14161f]"
            >
              {/* Image */}
              <img
                src="/images/residence-images/suresh-residence-view/img72.jpg"
                alt="The Hilltop Sanctuary · Phase II"
                className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
              />

              {/* Ambient Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/20 pointer-events-none" />

              {/* Top Tag Overlay */}
              <div className="absolute top-5 left-5 z-10 flex items-center gap-2">
                <span className="px-4 py-2 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-xs sm:text-sm font-bold text-white/95 uppercase tracking-wider flex items-center gap-2 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-[#ff8c00] animate-pulse" />
                  FEATURED LUXURY RESIDENCE
                </span>
              </div>

              {/* Bottom Info Bar Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 z-10">
                {/* Bottom Left Title */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-[2px] bg-[#ff8c00] inline-block" />
                    <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-[#ff8c00]">
                      Curated Portfolio
                    </span>
                  </div>
                  <h3 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-normal text-[#f0ede8] tracking-tight drop-shadow-md">
                    The Hilltop Sanctuary · Phase II
                  </h3>
                </div>

                {/* Bottom Right Location Badge */}
                <div className="shrink-0 flex items-center gap-2">
                  <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-[#f0ede8]/90 bg-black/75 backdrop-blur-md px-4 py-2 rounded-lg border border-white/15 shadow-lg">
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

