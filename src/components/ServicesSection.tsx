import React from 'react';
import { 
  FileText, 
  Home, 
  Landmark, 
  Key, 
  Building2, 
  Scale, 
  CheckCircle2, 
  ArrowUpRight, 
  Sparkles
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenConsultation: (serviceTitle?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenConsultation }) => {
  const services = [
    {
      id: 'stamp-duty',
      title: 'STAMP DUTY & REGISTRATION',
      subtitle: 'GOVERNMENT E-STAMPING & SUB-REGISTRAR FILING',
      icon: FileText,
      badge: 'TOP SPECIALITY',
      highlights: [
        'Ready-Reckoner Valuation Calculation',
        'Female Purchaser 1% Rebate Filing',
        'Index-2 Generation & Official E-Receipt'
      ],
    },
    {
      id: 'property-buy-sell',
      title: 'FLATS & COMMERCIAL SHOPS',
      subtitle: 'DIRECT OWNER SALE, PURCHASE & RESALE',
      icon: Home,
      badge: '100% TITLE CLEAR',
      highlights: [
        'Direct Owner Meetings (No Inflated Rates)',
        'Original Agreement Chain Verification',
        'Station Road & Sheetal Nagar Listings'
      ]
    },
    {
      id: 'home-loans',
      title: 'HOME LOAN PAPERWORK',
      subtitle: 'BANK APPROVALS & SEARCH REPORTS',
      icon: Landmark,
      badge: 'ALL BANKS APPROVED',
      highlights: [
        'SBI, HDFC, ICICI, LIC Housing Sanctions',
        'Advocate Title Search Certificate',
        'Disbursement Setup & Vetting'
      ]
    },
    {
      id: 'rental-agreements',
      title: 'LEAVE & LICENSE (RENTAL)',
      subtitle: '24-HOUR DOORSTEP BIOMETRIC VERIFICATION',
      icon: Key,
      badge: '24-HOUR PROCESS',
      highlights: [
        'Doorstep Biometric Fingerprint Scanning',
        'Police Intimation Filing Included',
        'Government Sub-Registrar Filing'
      ]
    },
    {
      id: 'society-noc',
      title: 'SOCIETY NOC & TRANSFER',
      subtitle: 'HOUSING SOCIETY LEGAL DOCUMENTATION',
      icon: Building2,
      badge: 'SOCIETY LEGAL',
      highlights: [
        'Society Share Certificate Endorsement',
        'NOC & Membership Transfer Clearance',
        'Managing Committee Process'
      ]
    },
    {
      id: 'gift-release-poa',
      title: 'GIFT DEED, RELEASE & POA',
      subtitle: 'ADVOCATE-DRAFTED LEGAL DEEDS',
      icon: Scale,
      badge: 'LEGAL DRAFTING',
      highlights: [
        'Blood Relation Stamp Duty Rebate',
        'Special Power of Attorney (POA) Setup',
        'Sub-Registrar Execution & Index-2'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#F2F2F2] text-black swiss-dots border-b-4 border-black">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Numbered Prefix */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="bg-[#FF3000] text-white font-black text-xs px-2.5 py-1 tracking-widest uppercase">
            02. PRACTICE AREAS
          </span>
          <span className="font-bold text-xs uppercase tracking-widest text-black">
            LEGAL & REAL ESTATE SERVICES
          </span>
        </div>

        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-black text-4xl sm:text-6xl uppercase tracking-tighter text-black">
            SERVICES & <span className="text-[#FF3000]">DOCUMENTATION</span>
          </h2>
          <p className="mt-2 font-bold text-xs uppercase tracking-wider text-black">
            COMPLETE TITLE CLEARANCE, E-STAMPING & PROPERTY BROKERAGE IN MIRA ROAD.
          </p>
        </div>

        {/* 6 Rectangular Swiss Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white border-2 border-black border-t-4 border-t-[#FF3000] p-6 flex flex-col justify-between group hover:bg-black hover:text-white transition-colors duration-150"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 bg-black text-white group-hover:bg-[#FF3000] flex items-center justify-center border border-black transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <span className="bg-[#FF3000] text-white font-black text-[9px] uppercase tracking-widest px-2 py-0.5">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="font-black text-xl uppercase tracking-tight mb-1 group-hover:text-white">
                    {service.title}
                  </h3>
                  <span className="font-bold text-[10px] uppercase tracking-wider text-[#FF3000] block mb-4">
                    {service.subtitle}
                  </span>

                  <ul className="space-y-2 border-t-2 border-black group-hover:border-white pt-3 mb-6">
                    {service.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs font-bold uppercase tracking-wider">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF3000] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onOpenConsultation(service.title)}
                  className="w-full btn-swiss-secondary text-xs py-3 flex items-center justify-center gap-2 group-hover:bg-[#FF3000] group-hover:text-white group-hover:border-[#FF3000]"
                >
                  <span>INQUIRE NOW</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
