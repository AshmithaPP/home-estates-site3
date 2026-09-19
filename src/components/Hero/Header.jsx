import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDownRight, Menu, X, Calendar, Sparkles } from 'lucide-react';

export const Header = ({ onOpenTour, onOpenApply }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Exact menu items requested by user
  const menuItems = [
    { label: 'About us', href: '#about' },
    { label: 'Photo gallery', href: '#gallery' },
    { label: 'Interior', href: '#interior' },
    { label: 'Contact us', href: '#contact' },
  ];

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-40 px-3 sm:px-12 py-3 sm:py-6 transition-all duration-300">
        <div className="max-w-[1800px] mx-auto flex items-center justify-between gap-2 relative">

          {/* Logo on Left (Clean normal letters: Ajay Homes & Estates) */}
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-1.5 group shrink-0"
          >
            <span className="font-sans font-black text-sm xs:text-base sm:text-2xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#ff8c00] via-[#ffab40] to-[#ff6b00] drop-shadow-sm whitespace-nowrap">
              Ajay Homes & Estates
            </span>
          </motion.a>

          {/* Center Inline Navigation Bar (Dead Center) */}
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hidden md:flex items-center gap-1 sm:gap-1.5 bg-[#080a0c]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#ff8c00]/25 shadow-lg md:absolute md:left-1/2 md:-translate-x-1/2"
          >
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-extrabold text-[#f0ede8]/80 hover:text-[#ff8c00] hover:bg-[#ff8c00]/10 transition-all cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </motion.nav>

          {/* Right Controls (Mobile Menu Toggle) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-1.5 sm:gap-3 shrink-0"
          >
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden glass-pill-dark p-1.5 sm:p-2 rounded-full text-white cursor-pointer"
              aria-label="Toggle Navigation"
            >
              {isMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff8c00]" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-[#f0ede8]" />}
            </button>
          </motion.div>

        </div>
      </header>

      {/* Simple Compact Navigation Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/80 cursor-pointer"
            />

            {/* Compact Top Dropdown Menu — GPU Accelerated */}
            <motion.div
              initial={{ opacity: 0, y: '-100%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '-100%' }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 left-0 right-0 z-50 border-b border-[#ff8c00]/30 text-white shadow-2xl rounded-b-2xl p-4 sm:p-6 pt-14 sm:pt-16 bg-[#1a1c22]"
              style={{ willChange: 'transform' }}
            >
              <div className="max-w-md mx-auto w-full space-y-3">
                
                {/* Header row inside menu */}
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <span className="font-sans font-black text-sm tracking-tight text-[#ff8c00]">
                    Ajay Homes & Estates
                  </span>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-1 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5 text-[#ff8c00]" />
                  </button>
                </div>

                {/* 4 Clean Menu Items */}
                <nav className="flex flex-col gap-1 pt-1">
                  {menuItems.map((item, idx) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.03 + idx * 0.04 }}
                      className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 hover:bg-[#ff8c00]/10 border border-white/5 hover:border-[#ff8c00]/30 transition-all cursor-pointer group"
                    >
                      <span className="text-sm font-bold text-white group-hover:text-[#ff8c00] transition-colors">
                        {item.label}
                      </span>
                      <ArrowDownRight className="w-4 h-4 text-[#00d26a] group-hover:text-[#ff8c00] group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-all" />
                    </motion.a>
                  ))}
                </nav>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
