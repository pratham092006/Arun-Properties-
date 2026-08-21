import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';
import { WhatsappIcon } from './WhatsappIcon';

interface HeaderProps {
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services & Legal', href: '#services' },
    { name: 'Stamp Duty Calculator', href: '#calculator' },
    { name: 'Property Inquiry', href: '#requirements' },
    { name: 'Google Reviews', href: '#reviews' },
    { name: 'Contact & Location', href: '#location' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      
      {/* Top Thin Brand Accent Gradient Bar */}
      <div className="h-1 bg-gradient-to-r from-[#4A0E17] via-[#BD2A2A] to-[#BCA39A]"></div>

      {/* Main Sticky Navbar Container */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-md py-2 border-b border-[#EAE3E0]' 
          : 'bg-white py-2.5 sm:py-3.5 border-b border-[#F2EBE8]'
      }`}>
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            
            {/* BRAND LOGO EMBLEM & TITLE */}
            <a href="#hero" className="flex items-center gap-2.5 sm:gap-3 shrink-0 group min-w-0">
              <div className="relative shrink-0">
                <img 
                  src="/arun-logo.png" 
                  alt="Arun Property Consultancy Logo" 
                  className="w-10 h-10 sm:w-13 sm:h-13 rounded-full object-cover shadow-sm border-2 border-[#BD2A2A] group-hover:scale-105 transition-transform duration-300" 
                />
                <span className="absolute -bottom-1 -right-1 bg-[#BD2A2A] text-white text-[7px] sm:text-[8px] font-black px-1.5 py-0.2 rounded-full uppercase tracking-tighter shadow-xs border border-white">
                  2005
                </span>
              </div>

              <div className="flex flex-col justify-center min-w-0">
                <div className="flex items-center leading-none">
                  <span className="font-black text-base sm:text-2xl text-[#1C1617] tracking-tight group-hover:text-[#BD2A2A] transition-colors truncate">
                    ARUN <span className="text-[#BD2A2A]">PROPERTY</span>
                  </span>
                </div>
                <span className="text-[9px] sm:text-[10px] font-extrabold text-[#6E5D5D] tracking-wider uppercase mt-0.5 truncate">
                  Consultancy & Legal Center
                </span>
              </div>
            </a>

            {/* DESKTOP NAVIGATION LINKS */}
            <div className="hidden md:flex items-center gap-2 lg:gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs lg:text-sm font-extrabold text-[#1C1617] hover:text-[#BD2A2A] hover:bg-[#F7F1EE] px-3.5 py-2 rounded-xl transition-all whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* MOBILE MENU TOGGLE BUTTON */}
            <div className="flex md:hidden items-center gap-1.5 shrink-0">
              <a
                href="https://wa.me/919820607688"
                target="_blank"
                rel="noreferrer"
                className="h-9 w-9 flex items-center justify-center bg-[#25D366] text-white rounded-xl shadow-xs active:scale-95 transition-transform"
                title="WhatsApp Us"
              >
                <WhatsappIcon className="w-4 h-4 fill-white" />
              </a>

              <a
                href="tel:09820607688"
                className="h-9 w-9 flex items-center justify-center bg-[#1C1617] text-white rounded-xl shadow-xs active:scale-95 transition-transform"
                title="Call 098206 07688"
              >
                <Phone className="w-4 h-4 text-[#BD2A2A]" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="h-9 w-9 flex items-center justify-center text-[#1C1617] hover:text-[#BD2A2A] bg-[#F7F1EE] rounded-xl border border-[#EAE3E0] active:scale-95 transition-transform"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* MOBILE SLIDE-DOWN DRAWER MENU */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-[#EAE3E0] px-4 pt-3 pb-5 shadow-2xl space-y-3 mt-2 animate-fadeIn">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-[#1C1617] font-extrabold hover:bg-[#F7F1EE] hover:text-[#BD2A2A] rounded-xl transition-colors text-sm flex items-center justify-between border-b border-[#F9F5F3] last:border-0"
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 text-[#BCA39A]" />
                </a>
              ))}
            </div>
            
            <div className="pt-3 border-t border-[#F2EBE8] flex flex-col gap-2.5">
              <a
                href="https://wa.me/919820607688"
                target="_blank"
                rel="noreferrer"
                className="w-full h-11 flex items-center justify-center gap-2 bg-[#25D366] text-white font-extrabold rounded-xl text-sm shadow-xs active:scale-98 transition-transform"
              >
                <WhatsappIcon className="w-4.5 h-4.5 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="tel:09820607688"
                className="w-full h-11 flex items-center justify-center gap-2 bg-[#1C1617] text-white font-extrabold rounded-xl text-sm active:scale-98 transition-transform"
              >
                <Phone className="w-4 h-4 text-[#BD2A2A]" />
                <span>Call 098206 07688</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full h-11 bg-gradient-to-r from-[#4A0E17] to-[#BD2A2A] text-white font-extrabold rounded-xl text-sm shadow-md active:scale-98 transition-transform"
              >
                Book Legal Consultation
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
