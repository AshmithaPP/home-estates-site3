import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const allArticles = [
  {
    id: 1,
    date: 'September 10, 2026',
    category: 'Construction',
    title: "A Beginner's Guide To Apartment Floor Plan Optimization",
    image: '/images/residence-images/besantnagar-residence-view/img26.jpg',
    href: '#',
  },
  {
    id: 2,
    date: 'September 15, 2026',
    category: 'Design Trends',
    title: 'Top Trends In Modern Luxury Apartment Design And Construction',
    image: '/images/residence-images/suresh-residence-view/img17.jpg',
    href: '#',
  },
  {
    id: 3,
    date: 'September 20, 2026',
    category: 'Safety & Compliance',
    title: 'The Importance Of CMDA Approval In Residential Building Projects',
    image: '/images/residence-images/raman-residence-view/img39.jpg',
    href: '#',
  },
  {
    id: 4,
    date: 'August 28, 2026',
    category: 'Investment',
    title: 'Why Chennai OMR Corridor Is The Hottest Real Estate Destination',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop',
    href: '#',
  },
  {
    id: 5,
    date: 'August 15, 2026',
    category: 'Interior',
    title: 'How We Design Homes That Feel Premium On Every Budget',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop',
    href: '#',
  },
  {
    id: 6,
    date: 'August 5, 2026',
    category: 'Community',
    title: 'Gated Communities vs Independent Villas — What Suits Your Family Best',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800&auto=format&fit=crop',
    href: '#',
  },
];

const CARDS_PER_PAGE = 3;
const TOTAL_PAGES = Math.ceil(allArticles.length / CARDS_PER_PAGE);

export const ContactSection = () => {
  const [page, setPage] = useState(0);

  const visibleCards = allArticles.slice(
    page * CARDS_PER_PAGE,
    page * CARDS_PER_PAGE + CARDS_PER_PAGE
  );

  return (
    <section
      id="contact"
      className="relative w-full py-16 sm:py-20 px-6 sm:px-12 lg:px-20 overflow-hidden"
      style={{ background: '#0d0e11' }}
    >
      {/* Ambient glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ff8c00]/6 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00d26a]/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-4"
        >
          <span
            className="text-[10px] font-bold tracking-[0.35em] uppercase text-[#f0ede8]/50 border border-white/15 rounded-full px-4 py-1.5"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Blog &amp; Insights
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-center text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-[#f0ede8] leading-[1.1] tracking-tight max-w-3xl mx-auto mb-12"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          We Integrate Innovation At{' '}
          <span className="text-[#ff8c00]">Every Stage</span>{' '}
          Of Construction
        </motion.h2>

        {/* Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {visibleCards.map((article, idx) => (
              <motion.a
                key={article.id}
                href={article.href}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="group block bg-[#14161f] rounded-2xl overflow-hidden border border-white/10 hover:border-[#ff8c00]/40 shadow-lg hover:shadow-[0_20px_50px_rgba(255,140,0,0.15)] transition-all duration-400 cursor-pointer"
              >
                {/* Image */}
                <div className="relative w-full aspect-[16/10] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Category badge */}
                  <span
                    className="absolute top-3 left-3 text-[9px] font-bold uppercase tracking-[0.2em] bg-[#ff8c00] text-black px-2.5 py-1 rounded-full"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {article.category}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-5 flex flex-col justify-between gap-4">
                  {/* Date */}
                  <p
                    className="text-[10px] font-semibold text-[#f0ede8]/45 tracking-wider uppercase"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {article.date}
                  </p>

                  {/* Title */}
                  <h3
                    className="text-sm sm:text-base font-black text-[#f0ede8] leading-snug group-hover:text-[#ff8c00] transition-colors duration-300"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {article.title}
                  </h3>

                  {/* Arrow CTA */}
                  <div className="flex justify-start pt-1">
                    <div className="w-9 h-9 rounded-lg bg-[#ff8c00]/15 border border-[#ff8c00]/30 flex items-center justify-center group-hover:bg-[#ff8c00] group-hover:border-[#ff8c00] transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 text-[#ff8c00] group-hover:text-black transition-colors duration-300" />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2.5 mt-10">
          {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className="cursor-pointer"
              aria-label={`Page ${i + 1}`}
            >
              <motion.div
                animate={{
                  width: page === i ? 28 : 10,
                  height: 10,
                  backgroundColor: page === i ? '#ff8c00' : 'rgba(240,237,232,0.25)',
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="rounded-full"
              />
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
