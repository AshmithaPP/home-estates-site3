import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Play, Pause, Star, CheckCircle2 } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote:
      "Ajay Homes & Estates delivered a sanctuary crafted specifically for our family routine. The natural lighting, bespoke joinery, and complete pricing transparency made every moment a pleasure.",
    author: "PRIYA & ARUN",
    role: "Homeowners · Velachery, Chennai",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "From land approval to final key handover, every rupee and promise was documented. Our custom 3BHK flat in OMR exceeds every luxury expectation we had.",
    author: "SURESH KUMAR",
    role: "Villa Owner · ECR Corridor",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "Partnering with Ajay Homes for property land partnership was the best decision. Outstanding market payout, legal clarity, and world-class architectural finish across every single square foot.",
    author: "KAVITHA RAMAN",
    role: "Land Partnership Partner · Anna Nagar",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
    rating: 5,
  },
  {
    id: 4,
    quote:
      "The architectural team understood our exact family needs. Cross-ventilation, climate harmony, and teakwood finishes were delivered right on schedule.",
    author: "RAJESH & DEEPA",
    role: "Apartment Owners · Porur",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    rating: 5,
  },
];

export const CustomerStoriesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const isProgrammaticScroll = useRef(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch((err) => {
            console.log("Autoplay was prevented:", err);
            setIsPlaying(false);
          });
      }
    }
  }, []);

  // Smooth scroll to card by index
  const scrollToCard = (index) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cards = container.firstElementChild?.children;
    if (!cards || !cards[index]) return;

    const targetCard = cards[index];
    const targetLeft = targetCard.offsetLeft;

    isProgrammaticScroll.current = true;
    setCurrentIndex(index);
    container.scrollTo({
      left: Math.max(0, targetLeft),
      behavior: 'smooth',
    });

    setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 450);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % testimonials.length;
    scrollToCard(nextIdx);
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + testimonials.length) % testimonials.length;
    scrollToCard(prevIdx);
  };

  // Sync index when user manually swipes / scrolls cards on mobile or desktop
  const handleScroll = () => {
    if (isProgrammaticScroll.current || !scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cards = container.firstElementChild?.children;
    if (!cards || cards.length === 0) return;

    const scrollLeft = container.scrollLeft;
    let closestIdx = 0;
    let minDistance = Infinity;

    for (let i = 0; i < cards.length; i++) {
      const distance = Math.abs(cards[i].offsetLeft - scrollLeft);
      if (distance < minDistance) {
        minDistance = distance;
        closestIdx = i;
      }
    }

    if (closestIdx !== currentIndex) {
      setCurrentIndex(closestIdx);
    }
  };

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => {});
      }
    }
  };

  return (
    <section
      id="stories"
      className="relative w-full py-14 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-16 overflow-hidden"
      style={{ background: '#0d0e11' }}
    >
      <div className="max-w-7xl mx-auto space-y-6 relative z-10">

        {/* ── TOP HEADER BLOCK & NAVIGATION ARROWS ───────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 select-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            {/* Top Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#ff8c00]" />
              <span
                className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff8c00]"
              >
                TESTIMONIALS
              </span>
            </div>

            {/* Main Headline */}
            <h2
              className="text-2xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-snug font-sans"
            >
              Customer Stories
            </h2>

            {/* Subtitle */}
            <p
              className="text-xs sm:text-sm text-white/60 font-medium tracking-wide"
            >
              Hear It From The People We Built For.
            </p>
          </motion.div>

          {/* Navigation Controls Top Right */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-white/20 text-white/80 hover:bg-white/10 hover:border-white hover:text-white flex items-center justify-center transition-all cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <ArrowLeft className="w-4.5 h-4.5" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-[#ff8c00] text-black font-bold hover:bg-[#e67e00] flex items-center justify-center shadow-[0_0_15px_rgba(255,140,0,0.4)] transition-all cursor-pointer"
              aria-label="Next Testimonial"
            >
              <ArrowRight className="w-4.5 h-4.5" />
            </button>
          </div>
        </div>

        {/* ── MAIN OVERLAPPING LAYOUT CONTAINER ──────────────────────────── */}
        <div className="relative flex flex-col md:flex-row items-center md:items-stretch w-full min-h-[420px] gap-6 lg:gap-8">

          {/* ── LEFT FEATURE PORTRAIT CARD WITH OUR VIDEO & PLAY BUTTON ────── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative w-full md:w-[320px] lg:w-[350px] h-[360px] sm:h-[420px] rounded-2xl overflow-hidden shadow-2xl flex-shrink-0 z-40 border border-white/10 bg-[#0c0d10] group flex flex-col justify-between"
          >
            {/* Our Project Video - Autoplays seamlessly */}
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/videos/vid-001.mp4" type="video/mp4" />
            </video>

            {/* Dark Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20 pointer-events-none" />

            {/* Verified Story Pill Top-Left */}
            <div className="relative z-20 p-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-bold text-white/90 uppercase tracking-wider shadow-md">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#ff8c00]" />
                VERIFIED STORY
              </span>
            </div>

            {/* Circular Play Button Centered Exactly in the Middle of the Card */}
            <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
              <button
                onClick={toggleVideo}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#ff8c00] hover:bg-[#e67e00] text-black shadow-[0_0_30px_rgba(255,140,0,0.6)] flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 pointer-events-auto"
                aria-label={isPlaying ? 'Pause Video' : 'Play Video'}
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6 text-black fill-black" />
                ) : (
                  <Play className="w-6 h-6 text-black fill-black ml-0.5" />
                )}
              </button>
            </div>

            {/* Bottom Client Info */}
            <div className="relative z-20 p-6 space-y-1">
              <h4 className="text-base font-bold text-white uppercase tracking-wider">
                {testimonials[currentIndex].author}
              </h4>
              <p className="text-xs text-white/70 font-medium">
                {testimonials[currentIndex].role}
              </p>
            </div>
          </motion.div>

          {/* ── RIGHT CAROUSEL TRACK WITH NATIVE TOUCH SWIPE & SMOOTH SCROLL ─ */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="w-full md:flex-1 relative z-10 mt-6 md:mt-0 py-2 flex items-center overflow-x-auto scrollbar-none snap-x snap-mandatory scroll-smooth"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            <div className="flex gap-4 md:gap-5 items-center">
              {testimonials.map((card, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <div
                    key={card.id}
                    onClick={() => scrollToCard(idx)}
                    className={`snap-start bg-[#13151c] text-[#f0ede8] rounded-2xl p-5 sm:p-7 shadow-2xl border flex flex-col justify-between space-y-5 w-[calc(100vw-48px)] max-w-[340px] sm:w-[340px] lg:w-[360px] flex-shrink-0 transition-all duration-300 min-h-[250px] cursor-pointer ${
                      isActive
                        ? 'z-20 shadow-[0_20px_50px_rgba(0,0,0,0.6)] border-[#ff8c00]/60 opacity-100'
                        : 'z-10 border-white/10 opacity-60 hover:opacity-90'
                    }`}
                  >
                    {/* Testimonial Quote Content */}
                    <p
                      className="text-xs sm:text-sm text-white/90 font-medium leading-relaxed font-sans select-none"
                    >
                      "{card.quote}"
                    </p>

                    {/* Bottom Author & Star Rating Block */}
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-3 select-none">
                      <div className="flex items-center gap-2.5">
                        <img
                          src={card.avatar}
                          alt={card.author}
                          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-[#ff8c00] shadow-md"
                        />
                        <div>
                          <h4
                            className="text-xs font-bold uppercase tracking-wider text-white"
                          >
                            {card.author}
                          </h4>
                          <p
                            className="text-[10px] sm:text-xs text-white/60 font-medium"
                          >
                            {card.role}
                          </p>
                        </div>
                      </div>

                      {/* 5-Star Rating */}
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${
                              i < card.rating
                                ? 'fill-[#ff8c00] text-[#ff8c00]'
                                : 'text-white/20 fill-white/10'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* ── BOTTOM CAROUSEL PROGRESS INDICATOR BARS ─────────────────────── */}
        <div className="flex items-center justify-center gap-3 pt-2 select-none">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToCard(idx)}
              className="cursor-pointer py-2"
              aria-label={`Go to slide ${idx + 1}`}
            >
              <div
                className={`h-[3px] rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? 'w-12 bg-[#ff8c00]'
                    : 'w-12 bg-white/20 hover:bg-white/40'
                }`}
              />
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CustomerStoriesSection;
