import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Calendar } from 'lucide-react';

const faqItems = [
  {
    id: '1',
    question: 'What makes Ajay Homes one of the fastest growing builders in Chennai?',
    answer:
      'Thousands of happy families stand testimony to our heritage of quality housing, custom construction solutions, on-time delivery, and proven value for money across prime Chennai locations.'
  },
  {
    id: '2',
    question: 'Can I customize the floorplan and interior finishes for my residential flat?',
    answer:
      'Yes! We specialize in providing custom construction solutions tailored to every client\'s individual needs, including modular kitchen layouts, wood finishes, electrical layouts, and premium tile selections.'
  },
  {
    id: '3',
    question: 'How does Land Partnership property promotion work with Ajay Homes?',
    answer:
      'If you own land in or around Chennai, we partner with you via Land Partnership to construct luxury flats or villas. We offer the best market share/payout, complete legal transparency, and end-to-end project execution.'
  },
  {
    id: '4',
    question: 'What locations in Chennai do you have active and completed projects in?',
    answer:
      'Our signature residential projects and gated communities are located in prime hubs including Velachery, OMR, Porur, Tambaram, Anna Nagar, and ECR.'
  },
  {
    id: '5',
    question: 'Are all Ajay Homes projects legally verified with clear titles?',
    answer:
      'Yes, 100%. Every project undergoes rigorous legal scrutiny by leading property advocates, securing all necessary CMDA / DTCP approvals, clear titles, and seamless bank loan eligibility.'
  },
  {
    id: '6',
    question: 'What is the typical project completion timeline for custom construction?',
    answer:
      'We pride ourselves on promptness and on-time handovers. Most residential flat developments are completed within 12 to 18 months, with regular milestone progress updates for buyers.'
  }
];

export const FAQSection = ({ onOpenTourModal, onOpenApply }) => {
  const [openId, setOpenId] = useState('1');

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="relative py-16 sm:py-24 px-4 sm:px-8 lg:px-16 text-[#f0ede8] border-t border-white/10 overflow-hidden"
      style={{ background: '#08090c' }}
    >
      {/* Background glow circle */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#ff8c00]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* ── LEFT COLUMN: Eyebrow, Title & Consultation Call Card ─────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6 lg:sticky lg:top-28"
          >
            {/* Top Eyebrow */}
            <div>
              <span
                className="text-xs font-bold uppercase tracking-[0.25em] text-[#ff8c00]"
              >
                FAQs
              </span>
            </div>

            {/* Main Headline */}
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-tight font-sans"
            >
              Frequently Asked <br />
              <span className="text-[#ff8c00]">Questions</span>
            </h2>

            {/* Left Floating "Book a 15 min call" Card */}
            <div className="bg-[#12141c] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5 relative overflow-hidden group">
              {/* Subtle accent glow */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#ff8c00]/10 rounded-full blur-2xl group-hover:bg-[#ff8c00]/20 transition-all" />

              {/* Circular Executive Avatar */}
              <div className="relative inline-block">
                <img
                  src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=160&q=80"
                  alt="Senior Property Advisor"
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-[#ff8c00] shadow-lg"
                />
                <span className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-500 border-2 border-[#12141c] rounded-full" />
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h3
                  className="text-xl sm:text-2xl font-bold text-white tracking-tight"
                >
                  Book a 15 min call
                </h3>
                <p
                  className="text-xs sm:text-sm text-white/70 font-medium leading-relaxed"
                >
                  If you have any questions, just book a 15-minute call with our senior estate experts before deciding.
                </p>
              </div>

              {/* Action Button */}
              <button
                onClick={onOpenTourModal}
                className="w-full py-3.5 px-6 rounded-full bg-[#ff8c00] hover:bg-[#e67e00] text-black font-bold text-sm tracking-wide transition-all duration-300 shadow-[0_0_20px_rgba(255,140,0,0.35)] hover:shadow-[0_0_30px_rgba(255,140,0,0.5)] cursor-pointer flex items-center justify-center gap-2 group/btn"
              >
                <Calendar className="w-4 h-4 text-black group-hover/btn:scale-110 transition-transform" />
                <span>Book a Free Call</span>
              </button>
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN: Accordion Cards ─────────────────────────────── */}
          <div className="lg:col-span-7 space-y-3.5 sm:space-y-4">
            {faqItems.map((item, idx) => {
              const isOpen = openId === item.id;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                    isOpen
                      ? 'bg-[#141722] border-[#ff8c00]/50 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
                      : 'bg-[#101218] border-white/8 hover:border-white/20 hover:bg-[#13151f]'
                  }`}
                >
                  {/* Card Header Button */}
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer group"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`text-sm sm:text-base font-semibold leading-snug transition-colors duration-300 ${
                        isOpen ? 'text-[#ff8c00]' : 'text-white/90 group-hover:text-white'
                      }`}
                    >
                      {item.question}
                    </span>

                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isOpen
                          ? 'bg-[#ff8c00]/20 text-[#ff8c00] rotate-45'
                          : 'bg-white/5 text-white/70 group-hover:bg-white/10 group-hover:text-white'
                      }`}
                    >
                      <Plus className="w-4 h-4" />
                    </span>
                  </button>

                  {/* Accordion Content Body */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div
                          className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-white/75 font-normal leading-relaxed pt-1 border-t border-white/5"
                        >
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;

