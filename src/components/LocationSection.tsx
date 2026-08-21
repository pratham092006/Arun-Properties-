import React from 'react';
import { MapPin, Phone, Clock, ExternalLink, Navigation } from 'lucide-react';
import { WhatsappIcon } from './WhatsappIcon';
import { InstagramIcon } from './InstagramIcon';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-gradient-to-b from-white to-[#F7F1EE] border-t border-[#EAE3E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-[#4A0E17]/10 border border-[#BD2A2A]/30 text-[#4A0E17] text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#BD2A2A]" />
            <span>MIRA ROAD EAST OFFICE LOCATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1617] tracking-tight">
            Visit Our Office In <span className="text-[#BD2A2A]">Mira Road East</span>
          </h2>
          <p className="mt-3 text-base text-[#4A383A]">
            Conveniently located on Station Road, Sheetal Nagar — just 2 minutes from Mira Road Railway Station (East).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* OFFICE CONTACT & DETAILS CARD */}
          <div className="lg:col-span-5 bg-[#1C1617] text-white rounded-3xl p-7 sm:p-9 shadow-2xl flex flex-col justify-between border border-[#3A2D30]">
            <div className="space-y-6">
              
              <div className="border-b border-[#3A2D30] pb-5">
                <span className="text-[11px] font-extrabold text-[#BCA39A] uppercase tracking-wider block">Official Business Desk</span>
                <h3 className="text-2xl font-black text-white">Arun Property Consultancy</h3>
                <p className="text-xs text-[#BCA39A] font-bold mt-1">Est. 2005 • Real Estate & Document Center</p>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-[#4A0E17] border border-[#BD2A2A]/40 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#BD2A2A]" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-white">Office Address</h4>
                  <p className="text-xs text-zinc-300 leading-relaxed mt-0.5">
                    SHOP NO. 01, WOODLAND C BLDG CHS LTD, Station Rd, Sheetal Nagar, Mira Road East, Thane, Maharashtra 401107
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-[#4A0E17] border border-[#BD2A2A]/40 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#BD2A2A]" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-white">Phone Contact</h4>
                  <a href="tel:09820607688" className="text-sm font-bold text-white hover:text-[#BD2A2A] transition-colors block">
                    098206 07688
                  </a>
                  <span className="text-[11px] text-[#BCA39A]">Direct call for consultation</span>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-[#4A0E17] border border-[#BD2A2A]/40 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#BD2A2A]" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-white">Working Hours</h4>
                  <p className="text-xs text-emerald-400 font-bold mt-0.5">Open Daily • Closes at 8:00 PM</p>
                </div>
              </div>

              {/* Instagram Card */}
              <div className="flex items-start gap-4 pt-2">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 flex items-center justify-center shrink-0 shadow-md">
                  <InstagramIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-white">Instagram Profile</h4>
                  <a 
                    href="https://www.instagram.com/arunproperty09/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-xs font-bold text-pink-400 hover:text-pink-300 transition-colors flex items-center gap-1 mt-0.5"
                  >
                    <span>@arunproperty09</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <span className="text-[11px] text-[#BCA39A]">Follow for property updates & reels</span>
                </div>
              </div>

            </div>

            {/* Quick Map Action */}
            <div className="pt-6 border-t border-[#3A2D30] space-y-3">
              <a
                href="https://maps.google.com/?q=Arun+property+Consultancy+Mira+Road+East"
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#BD2A2A] hover:bg-[#A82222] text-white font-extrabold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all text-xs sm:text-sm"
              >
                <Navigation className="w-4 h-4 fill-white" />
                <span>Get Google Maps Directions</span>
              </a>

              <a
                href="https://wa.me/919820607688"
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all text-xs"
              >
                <WhatsappIcon className="w-4 h-4 fill-white" />
                <span>WhatsApp Location Query</span>
              </a>
            </div>
          </div>

          {/* GOOGLE MAP IFRAME */}
          <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#EAE3E0] min-h-[380px] sm:min-h-[480px] relative">
            <iframe
              title="Arun Property Consultancy Google Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.772591605335!2d72.8542099!3d19.2922435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b049d5aaaaab%3A0x86b039433eb6ed20!2sArun%20property%20Consultancy!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-full min-h-[380px] sm:min-h-[480px] border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
};
