import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ScrollMarquee } from './components/ScrollMarquee';
import { ServicesSection } from './components/ServicesSection';
import { PropertiesSection } from './components/PropertiesSection';
import { StampDutyCalculator } from './components/StampDutyCalculator';
import { PropertyRequirementSection } from './components/PropertyRequirementSection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { WhatsappIcon } from './components/WhatsappIcon';
import { InstagramIcon } from './components/InstagramIcon';
import { IosPhoneIcon } from './components/IosPhoneIcon';

export function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedPropertyTitle, setSelectedPropertyTitle] = useState<string | undefined>(undefined);

  const handleOpenConsultation = (propertyTitle?: string) => {
    setSelectedPropertyTitle(propertyTitle);
    setIsConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1C1617] flex flex-col font-sans relative">
      
      {/* Header */}
      <Header onOpenConsultation={() => handleOpenConsultation()} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero onOpenConsultation={() => handleOpenConsultation()} />
        <ScrollMarquee />
        <ServicesSection onOpenConsultation={() => handleOpenConsultation()} />
        <PropertiesSection onOpenConsultation={(title) => handleOpenConsultation(title)} />
        <StampDutyCalculator />
        <PropertyRequirementSection onOpenConsultation={() => handleOpenConsultation()} />
        <ReviewsSection />
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modal */}
      <ContactModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        initialPropertyTitle={selectedPropertyTitle}
      />

      {/* Sticky Quick Floating Action Buttons (Bottom-Right) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-center gap-2.5 sm:gap-3"
      >
        
        {/* iOS Phone Floating Button */}
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="tel:09820607688"
          className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#34C759] hover:bg-[#30D158] text-white flex items-center justify-center shadow-xl border-2 border-white"
          title="Call Arun Property Consultancy (098206 07688)"
        >
          <IosPhoneIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white fill-white" />
        </motion.a>

        {/* Instagram Floating Action Button */}
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="https://www.instagram.com/arunproperty09/"
          target="_blank"
          rel="noreferrer"
          className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-600 text-white flex items-center justify-center shadow-xl border-2 border-white"
          title="Follow Arun Property on Instagram (@arunproperty09)"
        >
          <InstagramIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </motion.a>

        {/* WhatsApp Floating Action Button */}
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="https://wa.me/919820607688?text=Hello%20Arun%20Property%20Consultancy,%20I%20would%20like%20to%20inquire%20about..."
          target="_blank"
          rel="noreferrer"
          className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:bg-[#20ba5a] border-2 border-white"
          title="Chat on WhatsApp"
        >
          <WhatsappIcon className="w-6 h-6 sm:w-7 sm:h-7 fill-white" />
        </motion.a>

      </motion.div>

    </div>
  );
}

export default App;
