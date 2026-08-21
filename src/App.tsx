import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
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
        <ServicesSection onOpenConsultation={() => handleOpenConsultation()} />
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
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
        
        {/* iOS Phone Floating Button */}
        <a
          href="tel:09820607688"
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#34C759] hover:bg-[#30D158] text-white flex items-center justify-center shadow-xl transition-transform transform hover:scale-110 border-2 border-white"
          title="Call Arun Property Consultancy (098206 07688)"
        >
          <IosPhoneIcon className="w-6 h-6 text-white fill-white" />
        </a>

        {/* Instagram Floating Action Button */}
        <a
          href="https://www.instagram.com/arunproperty09/"
          target="_blank"
          rel="noreferrer"
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-600 text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform border-2 border-white"
          title="Follow Arun Property on Instagram (@arunproperty09)"
        >
          <InstagramIcon className="w-6 h-6 text-white" />
        </a>

        {/* WhatsApp Floating Action Button */}
        <a
          href="https://wa.me/919820607688?text=Hello%20Arun%20Property%20Consultancy,%20I%20would%20like%20to%20inquire%20about..."
          target="_blank"
          rel="noreferrer"
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:bg-[#20ba5a] transition-transform transform hover:scale-110 border-2 border-white"
          title="Chat on WhatsApp"
        >
          <WhatsappIcon className="w-7 h-7 fill-white" />
        </a>

      </div>

    </div>
  );
}

export default App;
