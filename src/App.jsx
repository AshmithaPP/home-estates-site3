import React, { useState } from 'react';
import Hero from './components/Hero/Hero';
import ScrollGallery from './components/InteractiveGallery/ScrollGallery';
import EverydayLivingSection from './components/EverydayLiving/EverydayLivingSection';
import BalancedLivingSection from './components/BalancedLiving/BalancedLivingSection';
import CustomerStoriesSection from './components/CustomerStories/CustomerStoriesSection';
import FAQSection from './components/FAQ/FAQSection';
import FindYourPlaceSection from './components/CTA/FindYourPlaceSection';
import ContactSection from './components/Contact/ContactSection';
import BeginJourneyCTA from './components/CTA/BeginJourneyCTA';
import Footer from './components/Footer/Footer';
import ApplyModal from './components/Modals/ApplyModal';

function App() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-transparent text-[#f0ede8] selection:bg-[#ff8c00] selection:text-black font-sans">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Interactive Scroll Gallery with Converging Zoom Motion */}
      <ScrollGallery />

      {/* 3. Made for Everyday Living Section */}
      <EverydayLivingSection />

      {/* 4. Where Luxury Living Feels Balanced (Floorplan Cards) */}
      <BalancedLivingSection
        onOpenApply={() => setIsApplyModalOpen(true)}
      />

      {/* 5. About Home & Estates Curated Portfolio Section */}
      <ContactSection
        onOpenApply={() => setIsApplyModalOpen(true)}
      />

      {/* 6. Customer Stories / Reviews Video Section */}
      <CustomerStoriesSection />

      {/* 8. Frequently Asked Questions Section */}
      <FAQSection
        onOpenApply={() => setIsApplyModalOpen(true)}
      />

      {/* 9. Begin Your Journey - Ready To Find Your Next Home CTA Section */}
      <BeginJourneyCTA
        onOpenApply={() => setIsApplyModalOpen(true)}
      />

      {/* 10. Footer */}
      <Footer
        onOpenApply={() => setIsApplyModalOpen(true)}
      />

      {/* Modals */}
      <ApplyModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
      />
    </div>
  );
}

export default App;
