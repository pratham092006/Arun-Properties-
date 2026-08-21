import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Award, CheckCircle2, Sparkles, Key, Building, MapPin } from 'lucide-react';

export const ScrollMarquee: React.FC = () => {
  const items = [
    { text: 'ESTABLISHED SINCE 2005 IN MIRA ROAD', icon: Award },
    { text: '100% TITLE CLEAR PROPERTY BROKERAGE', icon: ShieldCheck },
    { text: 'SPECIALIST IN STAMP DUTY & SUB-REGISTRAR FILING', icon: CheckCircle2 },
    { text: '5.0 ★ GOOGLE RATED (44 REVIEWS)', icon: Star },
    { text: '24-HOUR BIOMETRIC LEAVE & LICENSE AGREEMENTS', icon: Key },
    { text: 'APPROVED HOME LOAN DOCUMENTATION', icon: Building },
    { text: 'FLATS, RESALE, COMMERCIAL & ROW HOUSES', icon: MapPin },
    { text: 'SHEETAL NAGAR & STATION ROAD SPECIALIST', icon: Sparkles }
  ];

  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="w-full bg-[#1C1617] border-y-2 border-[#BD2A2A] py-3.5 overflow-hidden shadow-2xl relative z-20">
      
      {/* Subtle Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1C1617] via-transparent to-[#1C1617] pointer-events-none z-10 w-full h-full"></div>

      <motion.div
        className="flex items-center gap-8 whitespace-nowrap"
        animate={{ x: ['0%', '-33.333%'] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 25
        }}
      >
        {duplicatedItems.map((item, index) => {
          const IconComp = item.icon;
          return (
            <div key={index} className="flex items-center gap-3 shrink-0">
              <span className="inline-flex items-center gap-2 bg-[#BD2A2A]/20 border border-[#BD2A2A]/40 text-[#BD2A2A] text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-inner">
                <IconComp className="w-3.5 h-3.5 text-[#BD2A2A]" />
                <span>{item.text}</span>
              </span>
              <span className="text-white/30 text-xs font-black">/</span>
            </div>
          );
        })}
      </motion.div>

    </div>
  );
};
