import React from 'react';
import { Phone, MapPin, Clock, Star, ArrowUp } from 'lucide-react';
import { WhatsappIcon } from './WhatsappIcon';
import { InstagramIcon } from './InstagramIcon';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C1617] text-white pt-16 pb-12 border-t border-[#3A2D30] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#3A2D30]">
          
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img src="/arun-logo.png" alt="Arun Property Consultancy Logo" className="w-14 h-14 rounded-full border-2 border-[#BD2A2A] bg-white" />
              <div>
                <h3 className="text-xl font-black text-white tracking-tight">
                  ARUN <span className="text-[#BD2A2A]">PROPERTY</span>
                </h3>
                <p className="text-xs text-[#BCA39A] font-bold uppercase tracking-wider">Consultancy & Document Center</p>
              </div>
            </div>

            <p className="text-[#BCA39A] text-xs sm:text-sm leading-relaxed">
              Established in 2005. Contact for Sale & Purchase of Flats, Shops, Row Houses & Rental Basis. Specialist in Stamp Duty, Registration & Property Document Work in Mira Road East & Thane.
            </p>

            <div className="flex flex-col gap-2 pt-1">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>5.0 / 5.0 Rated on Google (44 Verified Reviews)</span>
              </div>

              <a
                href="https://www.instagram.com/arunproperty09/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-pink-400 hover:text-pink-300 transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-pink-400" />
                <span>Follow on Instagram @arunproperty09</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-extrabold text-sm text-white uppercase tracking-wider text-[#BD2A2A]">Quick Navigation</h4>
            <ul className="space-y-2 text-xs font-medium text-zinc-300">
              <li><a href="#hero" className="hover:text-[#BD2A2A] transition-colors">Home & Key Handover</a></li>
              <li><a href="#services" className="hover:text-[#BD2A2A] transition-colors">Stamp Duty & Registration</a></li>
              <li><a href="#calculator" className="hover:text-[#BD2A2A] transition-colors">Stamp Duty Fee Calculator</a></li>
              <li><a href="#requirements" className="hover:text-[#BD2A2A] transition-colors">Submit Property Requirement</a></li>
              <li><a href="#reviews" className="hover:text-[#BD2A2A] transition-colors">Google Customer Reviews</a></li>
              <li><a href="#location" className="hover:text-[#BD2A2A] transition-colors">Office Location & Map</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-extrabold text-sm text-white uppercase tracking-wider text-[#BD2A2A]">Specialities</h4>
            <ul className="space-y-2 text-xs font-medium text-[#BCA39A]">
              <li>Stamp Duty E-Stamping</li>
              <li>Document Registration</li>
              <li>Index-2 Generation</li>
              <li>Home Loan Paperwork</li>
              <li>Society NOC & Transfer</li>
              <li>Leave & License Agreement</li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-extrabold text-sm text-white uppercase tracking-wider text-[#BD2A2A]">Office Information</h4>
            
            <div className="space-y-2.5 text-xs text-zinc-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#BD2A2A] shrink-0 mt-0.5" />
                <span>Shop No. 01, Woodland C Bldg, Station Rd, Sheetal Nagar, Mira Road East, Thane 401107</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#BD2A2A] shrink-0" />
                <a href="tel:09820607688" className="font-bold text-white hover:text-[#BD2A2A]">098206 07688</a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#BD2A2A] shrink-0" />
                <span>Open Daily: 10:00 AM – 8:00 PM</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-2">
              <a
                href="https://wa.me/919820607688"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs px-3.5 py-2 rounded-xl shadow transition-all"
              >
                <WhatsappIcon className="w-4 h-4 fill-white" />
                <span>WhatsApp</span>
              </a>

              <a
                href="https://www.instagram.com/arunproperty09/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-90 text-white font-bold text-xs px-3.5 py-2 rounded-xl shadow transition-all"
              >
                <InstagramIcon className="w-4 h-4 text-white" />
                <span>Instagram</span>
              </a>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6E5D5D]">
          <div>
            © {new Date().getFullYear()} <strong className="text-zinc-300">Arun Property Consultancy</strong>. All Rights Reserved. Serving Mira Road Since 2005.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-[#BCA39A] hover:text-[#BD2A2A] transition-colors font-semibold"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
