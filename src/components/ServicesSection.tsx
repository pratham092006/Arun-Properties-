import React from 'react';
import { servicesData } from '../data/servicesData';
import { FileCheck2, Building2, KeyRound, BadgeIndianRupee, Scale, ArrowRight, CheckCircle, ShieldCheck, Sparkles } from 'lucide-react';

interface ServicesProps {
  onOpenConsultation: () => void;
}

export const ServicesSection: React.FC<ServicesProps> = ({ onOpenConsultation }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileCheck2': return <FileCheck2 className="w-7 h-7 text-red-600" />;
      case 'Building2': return <Building2 className="w-7 h-7 text-red-600" />;
      case 'KeyRound': return <KeyRound className="w-7 h-7 text-red-600" />;
      case 'BadgeIndianRupee': return <BadgeIndianRupee className="w-7 h-7 text-red-600" />;
      case 'Scale': return <Scale className="w-7 h-7 text-red-600" />;
      default: return <FileCheck2 className="w-7 h-7 text-red-600" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-neutral-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 bg-red-100 border border-red-200 text-red-700 text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OUR CORE EXPERTISE</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            Complete Real Estate & <br className="hidden sm:inline" />
            <span className="text-red-600">Property Documentation Services</span>
          </h2>
          <p className="mt-3 text-base text-zinc-600">
            Specializing in legal property registration, stamp duty valuation, home loan paperwork, and seamless buy/sale/rental deals across Mira Road and Thane.
          </p>
        </div>

        {/* Featured Hero Banner */}
        <div className="bg-gradient-to-br from-red-900 via-red-950 to-zinc-950 rounded-3xl p-8 sm:p-10 text-white shadow-xl mb-12 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-red-600/20 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-red-600/80 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Primary Speciality Since 2005</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                SPECIALIST IN STAMP DUTY, REGISTRATION & PROPERTY DOCUMENT WORK
              </h3>
              <p className="text-zinc-200 text-sm sm:text-base leading-relaxed">
                Avoid legal traps and paperwork delays. We handle e-stamping, government office registration, Index-2 copy extraction, gift deeds, leave & license, title clearance reports, and bank loan documentation with 100% legal accuracy.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs sm:text-sm font-medium text-zinc-200">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Online Government E-Registration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Index-2 & Certified Copy Extraction</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Society NOC & Share Transfer</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Home Loan Legal Verification</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto bg-white hover:bg-neutral-100 text-red-700 font-extrabold text-base px-7 py-4 rounded-2xl shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <span>Get Document Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <span className="text-xs text-zinc-300 mt-2 font-medium">Or Call Direct: 098206 07688</span>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className={`bg-white rounded-2xl p-7 shadow-sm border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between ${
                service.isSpecialist ? 'border-red-300 ring-2 ring-red-500/20' : 'border-neutral-200 hover:border-red-200'
              }`}
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center mb-5 shadow-xs">
                  {getIcon(service.iconName)}
                </div>

                <span className="text-xs font-extrabold text-red-600 uppercase tracking-wider">
                  {service.subtitle}
                </span>
                
                <h3 className="text-xl font-bold text-zinc-950 mt-1 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-sm text-zinc-600 leading-relaxed mb-5">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-zinc-700">
                      <CheckCircle className="w-3.5 h-3.5 text-red-500 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                <button
                  onClick={onOpenConsultation}
                  className="text-xs font-extrabold text-zinc-950 hover:text-red-600 flex items-center gap-1.5 group transition-colors"
                >
                  <span>Inquire Service</span>
                  <ArrowRight className="w-3.5 h-3.5 text-red-600 group-hover:translate-x-1 transition-transform" />
                </button>
                {service.isSpecialist && (
                  <span className="bg-red-100 text-red-700 text-[10px] font-extrabold px-2 py-0.5 rounded uppercase">
                    Specialist
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
