import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

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

const FAQSection = ({ onOpenTourModal, onOpenApply }) => {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative py-16 sm:py-20 px-6 sm:px-12 lg:px-20 text-[#f0ede8] border-t border-white/10 overflow-hidden" style={{ background: '#090a0d' }}>
      <div className="max-w-7xl mx-auto">
        {/* Main Headline - Centered, 2-line structure */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-[#f0ede8] leading-snug uppercase"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Frequently Asked <br />
            <span className="text-[#ff8c00]">Questions</span>
          </h2>
        </motion.div>

        {/* 2-Column Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          {/* Left Column (4 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4"
          >
            {/* Top Subtitle */}
            <p
              className="text-sm sm:text-base text-[#a0a0a0] font-medium leading-relaxed max-w-xs"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Everything you might want to know about our projects, process, legalities, and timelines.
            </p>
          </motion.div>

          {/* Right Column - Accordions (8 cols) */}
          <div className="lg:col-span-8">
            <div className="border-t border-white/10">
              {faqItems.map((item, idx) => {
                const isOpen = openId === item.id;

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className={`border-b border-white/10 transition-all duration-300 rounded-xl ${
                      isOpen ? 'bg-white/[0.04] px-3 sm:px-4' : 'px-1'
                    }`}
                  >
                    <button
                      onClick={() => toggleAccordion(item.id)}
                      className="w-full text-left py-4 sm:py-5 flex items-center justify-between gap-4 cursor-pointer group"
                    >
                      <span
                        className={`text-sm sm:text-base font-bold transition-colors duration-300 leading-snug ${
                          isOpen ? 'text-[#ff8c00]' : 'text-[#f0ede8] group-hover:text-[#ff8c00]'
                        }`}
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      >
                        {item.question}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className={`text-xl sm:text-2xl font-bold transition-colors duration-300 flex-shrink-0 ${
                          isOpen ? 'text-[#ff8c00]' : 'text-white/60 group-hover:text-[#ff8c00]'
                        }`}
                      >
                        +
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div
                            className="pb-4 text-[#c0c0c0] text-xs sm:text-sm font-medium leading-relaxed max-w-2xl pt-1"
                            style={{ fontFamily: 'Montserrat, sans-serif' }}
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
      </div>
    </section>
  );
};

export default FAQSection;
