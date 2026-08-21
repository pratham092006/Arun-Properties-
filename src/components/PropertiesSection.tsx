import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { propertyData, Property } from '../data/propertyData';
import { Building, MapPin, Bed, Bath, ArrowUpRight, MessageCircle, Phone, CheckCircle2, SlidersHorizontal } from 'lucide-react';

interface PropertiesProps {
  onOpenConsultation: (propertyTitle?: string) => void;
}

export const PropertiesSection: React.FC<PropertiesProps> = ({ onOpenConsultation }) => {
  const [filter, setFilter] = useState<'all' | 'buy' | 'rent' | 'commercial' | 'rowhouse'>('all');

  const filteredProperties = filter === 'all' 
    ? propertyData 
    : propertyData.filter(p => p.category === filter);

  return (
    <section id="properties" className="py-20 bg-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <span className="inline-flex items-center gap-1.5 bg-red-100 border border-red-200 text-red-700 text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-3">
              <Building className="w-3.5 h-3.5" />
              <span>VERIFIED REAL ESTATE LISTINGS</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Featured Properties in <span className="text-red-600">Mira Road East</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl">
              All properties are pre-verified for clear legal titles, society NOCs, and smooth bank loan approvals.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 bg-white p-1.5 rounded-2xl border border-slate-200 shadow-xs overflow-x-auto no-scrollbar max-w-full shrink-0">
            {[
              { id: 'all', label: 'All Listings' },
              { id: 'buy', label: 'Flats For Sale' },
              { id: 'rent', label: 'For Rent' },
              { id: 'commercial', label: 'Shops & Commercial' },
              { id: 'rowhouse', label: 'Row Houses' }
            ].map((tab) => (
              <motion.button
                whileTap={{ scale: 0.95 }}
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap shrink-0 ${
                  filter === tab.id
                    ? 'bg-red-600 text-white shadow-md'
                    : 'text-slate-600 hover:text-red-600 hover:bg-slate-50'
                }`}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Properties Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProperties.map((prop) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                key={prop.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between group"
              >
              <div>
                {/* Image Container */}
                <div className="relative h-60 overflow-hidden bg-slate-900">
                  <img
                    src={prop.image}
                    alt={prop.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex justify-between items-center pointer-events-none">
                    <span className="bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider border border-white/20">
                      {prop.type}
                    </span>
                    {prop.featured && (
                      <span className="bg-red-600 text-white text-[11px] font-extrabold px-3 py-1 rounded-full shadow">
                        Hot Deal
                      </span>
                    )}
                  </div>

                  {/* Price Tag Overlay */}
                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl shadow-lg border border-slate-200">
                    <span className="text-xs text-slate-500 font-semibold block">Price</span>
                    <span className="text-base font-extrabold text-red-600">{prop.price}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold mb-2">
                    <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                    <span>{prop.location}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors line-clamp-1">
                    {prop.title}
                  </h3>

                  <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                    {prop.address}
                  </p>

                  {/* Property Specs (Area, Beds, Baths) */}
                  <div className="flex items-center gap-4 py-3.5 my-3 border-y border-slate-100 text-xs font-semibold text-slate-700">
                    <div className="flex items-center gap-1">
                      <Building className="w-4 h-4 text-red-500" />
                      <span>{prop.area}</span>
                    </div>
                    {prop.bedrooms && (
                      <div className="flex items-center gap-1">
                        <Bed className="w-4 h-4 text-red-500" />
                        <span>{prop.bedrooms} Bed</span>
                      </div>
                    )}
                    {prop.bathrooms && (
                      <div className="flex items-center gap-1">
                        <Bath className="w-4 h-4 text-red-500" />
                        <span>{prop.bathrooms} Bath</span>
                      </div>
                    )}
                  </div>

                  {/* Legal Status Badge */}
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl p-2.5 text-xs font-bold flex items-center gap-2 mb-4">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="line-clamp-1">{prop.legalStatus}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 flex items-center gap-3">
                <a
                  href={`https://wa.me/919820607688?text=${encodeURIComponent(
                    `Hello Arun Property Consultancy, I am interested in ${prop.title} (${prop.price}) located at ${prop.location}. Please send details.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-3 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp</span>
                </a>

                <button
                  onClick={() => onOpenConsultation(prop.title)}
                  className="flex-1 bg-slate-900 hover:bg-red-600 text-white text-xs font-bold py-3 rounded-xl flex items-center justify-center gap-1 shadow-sm transition-all"
                >
                  <span>Inquire Now</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Custom Property Inquiry Banner */}
        <div className="mt-14 bg-white rounded-3xl p-8 border border-slate-200 shadow-md text-center max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-slate-900">Looking for a Specific Property or Need Legal Advice?</h3>
          <p className="text-sm text-slate-600 mt-2">
            Tell us your budget, preferred area in Mira Road, or document requirement. We will find verified matches for you instantly.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onOpenConsultation()}
              className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md transition-all"
            >
              Submit Property Requirement
            </button>
            <a
              href="tel:09820607688"
              className="bg-slate-900 text-white font-bold text-sm px-6 py-3 rounded-xl flex items-center gap-2 shadow-md hover:bg-slate-800 transition-all"
            >
              <Phone className="w-4 h-4 text-red-500" />
              Call 098206 07688
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
