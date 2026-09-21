import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowDownRight, Sparkles, Download, ShieldCheck } from 'lucide-react';
import PrimaryButton from '../Common/PrimaryButton';

export const ApplyModal = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-lg">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          className="relative w-full max-w-2xl bg-[#fff5e3] text-[#160d02] rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden border border-[#ffc973]"
        >
          {/* Top Decorative Sparkle */}
          <div className="absolute top-8 right-16 text-[#ff8c00]">
            <Sparkles className="w-8 h-8 fill-[#ff8c00]" />
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-black/10 hover:bg-black/20 text-[#160d02] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div className="space-y-6">
              {/* OUT NOW pill */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#160d02] text-xs font-bold tracking-widest uppercase text-[#160d02]">
                <span>OUT NOW</span>
                <ArrowDownRight className="w-4 h-4" />
              </div>

              {/* Big Title Typography */}
              <h2 className="text-3xl sm:text-5xl font-sans font-black leading-tight tracking-tight uppercase text-[#160d02]">
                2026 GLOBAL LUXURY & ESTATE TRENDS REPORT
              </h2>

              <p className="text-sm sm:text-base text-[#160d02]/80 font-medium max-w-lg leading-relaxed">
                Get priority access to 21OAKS pre-leasing specials, floorplan specifications, and our exclusive 2026 estate market analysis.
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#160d02]/80 mb-1.5">
                    Your Preferred Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white border border-[#ffc973] rounded-2xl px-5 py-3.5 text-base text-[#160d02] placeholder:text-[#160d02]/40 focus:outline-none focus:ring-2 focus:ring-[#ff8c00]"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <PrimaryButton
                    type="submit"
                    size="lg"
                    icon={ArrowDownRight}
                  >
                    Get the report
                  </PrimaryButton>

                  <div className="flex items-center gap-2 text-xs font-semibold text-[#160d02]/70 px-2 py-2">
                    <ShieldCheck className="w-4 h-4 text-[#ff8c00]" />
                    <span>Instant PDF Pass</span>
                  </div>
                </div>
              </form>
            </div>
          ) : (
            <div className="py-10 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#ff8c00] flex items-center justify-center mx-auto text-[#160d02]">
                <Download className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-sans font-black uppercase">Report Sent!</h3>
              <p className="text-sm text-[#160d02]/80 max-w-md mx-auto">
                We have emailed the 2026 Trends Report and pre-lease application link to <span className="font-bold underline">{email}</span>.
              </p>
              <PrimaryButton
                onClick={onClose}
                size="md"
                icon={ArrowDownRight}
              >
                Close & Return
              </PrimaryButton>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ApplyModal;
