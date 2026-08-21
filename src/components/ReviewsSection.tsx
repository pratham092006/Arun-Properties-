import React from 'react';
import { motion } from 'framer-motion';
import { reviewsData } from '../data/reviewsData';
import { Star, Quote, CheckCircle, ExternalLink, Sparkles } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-[#1C1617] text-white relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#BD2A2A]/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#4A0E17]/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-[#4A0E17]/80 border border-[#BD2A2A]/50 text-amber-300 text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider mb-3 shadow-md">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>5.0 / 5.0 GOOGLE VERIFIED RATING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Trusted By Clients Across <span className="text-[#BD2A2A]">Mira Road & Thane</span>
          </h2>
          <p className="mt-3 text-base text-[#BCA39A]">
            Read real client feedback on Google for our real estate advisory, legal document work, and home loan assistance.
          </p>
        </motion.div>

        {/* Rating Overview Box */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-[#241D1E] border border-[#3A2D30] rounded-3xl p-6 sm:p-8 mb-12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl backdrop-blur-xl relative overflow-hidden"
        >
          <div className="flex items-center gap-4 text-center sm:text-left z-10">
            <div className="w-16 h-16 rounded-2xl bg-[#BD2A2A] text-white font-black text-2xl flex items-center justify-center shadow-lg border border-white/20">
              5.0
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <h3 className="font-extrabold text-white text-lg mt-1 flex items-center gap-2">
                <span>44 Verified Google Reviews</span>
                <Sparkles className="w-4 h-4 text-amber-400" />
              </h3>
              <p className="text-xs text-[#BCA39A] font-semibold">Arun Property Consultancy • Real Estate Agency in Mira Road East</p>
            </div>
          </div>

          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href="https://maps.google.com/?q=Arun+property+Consultancy+Mira+Road+East"
            target="_blank"
            rel="noreferrer"
            className="bg-[#BD2A2A] hover:bg-[#A82222] text-white font-extrabold text-xs px-6 py-3.5 rounded-xl flex items-center gap-2 shadow-lg transition-all z-10 border border-white/20"
          >
            <span>View All Google Reviews</span>
            <ExternalLink className="w-4 h-4 text-white" />
          </motion.a>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviewsData.map((rev, index) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-[#241D1E]/90 border border-[#3A2D30] hover:border-[#BD2A2A]/60 rounded-3xl p-7 flex flex-col justify-between shadow-xl backdrop-blur-md transition-colors duration-300 group relative overflow-hidden"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#BD2A2A]/40 group-hover:text-[#BD2A2A] transition-colors" />
                </div>

                <span className="inline-block bg-[#4A0E17] text-[#BCA39A] border border-[#BD2A2A]/40 text-[11px] font-extrabold px-3 py-1 rounded-full mb-4">
                  {rev.tag}
                </span>

                <p className="text-zinc-200 text-sm sm:text-base italic leading-relaxed mb-6">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#3A2D30] flex items-center gap-3">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-[#BD2A2A]/50"
                />
                <div>
                  <h4 className="font-extrabold text-sm text-white flex items-center gap-1.5">
                    <span>{rev.name}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" title="Verified Customer" />
                  </h4>
                  <span className="text-xs text-[#BCA39A] font-semibold">{rev.date}</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

