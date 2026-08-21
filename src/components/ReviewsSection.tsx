import React from 'react';
import { reviewsData } from '../data/reviewsData';
import { Star, Quote, CheckCircle, ExternalLink } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-[#1C1617] text-white relative overflow-hidden">
      
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#BD2A2A]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>5.0 / 5.0 GOOGLE VERIFIED REVIEWS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Trusted By Clients Across <span className="text-[#BD2A2A]">Mira Road & Thane</span>
          </h2>
          <p className="mt-3 text-base text-[#BCA39A]">
            Read real client feedback on Google for our real estate advisory, legal document work, and home loan assistance.
          </p>
        </div>

        {/* Rating Overview Box */}
        <div className="bg-[#241D1E] border border-[#3A2D30] rounded-3xl p-6 sm:p-8 mb-12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl backdrop-blur-md">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-16 h-16 rounded-2xl bg-[#BD2A2A] text-white font-black text-2xl flex items-center justify-center shadow-lg">
              5.0
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <h3 className="font-bold text-white text-base mt-1">44 Verified Google Reviews</h3>
              <p className="text-xs text-[#BCA39A]">Arun Property Consultancy • Real Estate Agency in Mira Road East</p>
            </div>
          </div>

          <a
            href="https://maps.google.com/?q=Arun+property+Consultancy+Mira+Road+East"
            target="_blank"
            rel="noreferrer"
            className="bg-white hover:bg-[#F7F1EE] text-[#1C1617] font-bold text-xs px-5 py-3 rounded-xl flex items-center gap-2 transition-all shadow"
          >
            <span>View All Google Reviews</span>
            <ExternalLink className="w-4 h-4 text-[#BD2A2A]" />
          </a>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviewsData.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#241D1E]/60 border border-[#3A2D30] rounded-3xl p-7 flex flex-col justify-between shadow-lg hover:border-[#BD2A2A]/50 transition-all group"
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

                <span className="inline-block bg-[#4A0E17] text-[#BCA39A] border border-[#BD2A2A]/40 text-[11px] font-bold px-2.5 py-0.5 rounded-full mb-3">
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
                  className="w-10 h-10 rounded-full object-cover border border-[#BD2A2A]/40"
                />
                <div>
                  <h4 className="font-bold text-sm text-white flex items-center gap-1.5">
                    <span>{rev.name}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" title="Verified Customer" />
                  </h4>
                  <span className="text-xs text-[#BCA39A]">{rev.date}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
