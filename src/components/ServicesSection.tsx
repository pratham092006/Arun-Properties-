import React from 'react';
import { 
  FileText, 
  Home, 
  Landmark, 
  Key, 
  FileCheck, 
  Scale, 
  CheckCircle2, 
  ArrowUpRight, 
  Sparkles, 
  ShieldCheck,
  Building2,
  Award
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenConsultation: (serviceTitle?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenConsultation }) => {
  const services = [
    {
      id: 'stamp-duty',
      title: 'Stamp Duty & Registration',
      subtitle: 'Official E-Stamping & Sub-Registrar Filing',
      description: 'End-to-end stamp duty payment, document drafting, online slot booking, and physical representation at Sub-Registrar Office in Mira Road & Thane.',
      icon: FileText,
      badge: 'SPECIALITY',
      badgeColor: 'bg-[#BD2A2A] text-white',
      highlights: [
        'Ready-Reckoner Valuation Calculation',
        'Female Purchaser 1% Rebate Filing',
        'Index-2 Generation & E-Receipt'
      ],
      popular: true
    },
    {
      id: 'property-buy-sell',
      title: 'Flat & Commercial Shop Trading',
      subtitle: 'Sale, Purchase & Resale Brokerage',
      description: 'Verified direct owner listings for 1 BHK, 2 BHK, 3 BHK flats, row houses, and high-footfall commercial shops on Station Road & Sheetal Nagar.',
      icon: Home,
      badge: '100% TITLE CLEAR',
      badgeColor: 'bg-[#4A0E17] text-[#BCA39A] border border-[#BD2A2A]/40',
      highlights: [
        'Direct Owner Meetings (No Misleading Pricing)',
        'Chain of Original Agreements Verification',
        'Market Valuation & Price Negotiation'
      ]
    },
    {
      id: 'home-loans',
      title: 'Home Loan Paperwork Clearance',
      subtitle: 'Bank Legal Approvals & Title Search',
      description: 'Hassle-free document preparation and clearance for SBI, HDFC, ICICI, Axis, LIC Housing, and all major nationalized bank home loan sanctions.',
      icon: Landmark,
      badge: 'ALL BANKS APPROVED',
      badgeColor: 'bg-emerald-950 text-emerald-300 border border-emerald-800',
      highlights: [
        'Search Report & Title Clearance Certificate',
        'Bank Legal Advocate Vetting',
        'Disbursement Documentation Setup'
      ]
    },
    {
      id: 'rental-agreements',
      title: 'Leave & License Rental Agreements',
      subtitle: 'Registered Rent Agreement with Biometrics',
      description: 'Government registered Leave & License agreements for landlords and tenants with doorstep biometric verification and police intimation.',
      icon: Key,
      badge: 'QUICK 24-HR PROCESS',
      badgeColor: 'bg-amber-950 text-amber-300 border border-amber-800',
      highlights: [
        'Doorstep Biometric Verification',
        'Police Intimation Submission',
        'Legal Tenant Background Checks'
      ]
    },
    {
      id: 'society-noc',
      title: 'Society NOC & Share Certificate Transfer',
      subtitle: 'Housing Society Legal Transfer',
      description: 'Complete assistance in obtaining Co-operative Housing Society NOC, share certificate transfer, membership endorsement, and maintenance clearance.',
      icon: Building2,
      badge: 'SOCIETY LEGAL',
      badgeColor: 'bg-[#4A0E17] text-white',
      highlights: [
        'Society Share Certificate Endorsement',
        'Transfer Premium & Maintenance Clearance',
        'Managing Committee Approval Assistance'
      ]
    },
    {
      id: 'gift-release-poa',
      title: 'Gift Deed, Release Deed & POA',
      subtitle: 'Family Property Legal Documentation',
      description: 'Legal drafting and sub-registrar execution of Gift Deeds between family members, Release Deeds, Power of Attorney (POA), and Rectification Deeds.',
      icon: Scale,
      badge: 'LEGAL DRAFTING',
      badgeColor: 'bg-purple-950 text-purple-300 border border-purple-800',
      highlights: [
        'Blood Relation Stamp Duty Concessions',
        'Advocate-Drafted Legal Terms',
        'Registrar Registration & Index-2'
      ]
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-gradient-to-b from-white via-[#F9F6F4] to-white relative overflow-hidden">
      
      {/* Background Decor Glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#BD2A2A]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#4A0E17]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Badge & Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#4A0E17]/10 border border-[#BD2A2A]/30 text-[#4A0E17] text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#BD2A2A]" />
            <span>EXPERTISE SINCE 2005</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1C1617] tracking-tight leading-tight">
            Comprehensive Real Estate & <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A0E17] via-[#BD2A2A] to-[#4A0E17]">
              Legal Documentation Services
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#4A383A] leading-relaxed">
            Specializing in complete title search, government stamp duty e-stamping, sub-registrar document registration, and home loan documentation in Mira Road East & Thane.
          </p>
        </div>

        {/* Hero Highlight Banner */}
        <div className="bg-gradient-to-r from-[#1C1617] via-[#2D1B1E] to-[#1C1617] text-white rounded-3xl p-6 sm:p-8 mb-12 shadow-2xl border border-[#3A2D30] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#BD2A2A]/20 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="space-y-2 text-center md:text-left z-10">
            <span className="inline-block bg-[#BD2A2A] text-white text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-widest">
              PROVEN TRACK RECORD
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              10,000+ Property Documents Successfully Registered
            </h3>
            <p className="text-xs sm:text-sm text-[#BCA39A] max-w-2xl">
              From individual flat buyers to commercial shop owners and housing societies, we ensure 100% legal compliance and zero documentation rejection.
            </p>
          </div>

          <button
            onClick={() => onOpenConsultation('General Legal Inquiry')}
            className="z-10 shrink-0 bg-white hover:bg-[#F7F1EE] text-[#1C1617] font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-2xl shadow-xl transition-all flex items-center gap-2 transform active:scale-95 border border-white/20"
          >
            <ShieldCheck className="w-4 h-4 text-[#BD2A2A]" />
            <span>Consult Legal Team</span>
          </button>
        </div>

        {/* 6 Luxury Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-3xl p-7 border border-[#EAE3E0] shadow-lg hover:shadow-2xl transition-all duration-300 luxury-card-glow flex flex-col justify-between relative group overflow-hidden"
              >
                {/* Glowing Top Accent Line */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#BD2A2A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div>
                  {/* Card Header: Icon & Badge */}
                  <div className="flex justify-between items-start mb-5">
                    <div className="w-13 h-13 rounded-2xl bg-[#F7F1EE] border border-[#EAE0DC] group-hover:bg-[#4A0E17] group-hover:border-[#BD2A2A] flex items-center justify-center transition-colors duration-300 shadow-sm">
                      <IconComponent className="w-6 h-6 text-[#BD2A2A] group-hover:text-white transition-colors duration-300" />
                    </div>

                    <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider ${service.badgeColor}`}>
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-black text-[#1C1617] tracking-tight group-hover:text-[#BD2A2A] transition-colors">
                    {service.title}
                  </h3>
                  <span className="text-xs font-bold text-[#BD2A2A] block mt-0.5 mb-3">
                    {service.subtitle}
                  </span>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#4A383A] leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-2 border-t border-[#F2EBE8] pt-4 mb-6">
                    {service.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#1C1617] font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Footer */}
                <div className="pt-2">
                  <button
                    onClick={() => onOpenConsultation(service.title)}
                    className="w-full bg-[#F7F1EE] group-hover:bg-[#1C1617] text-[#1C1617] group-hover:text-white font-extrabold text-xs py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 active:scale-98 shadow-xs"
                  >
                    <span>Inquire About This Service</span>
                    <ArrowUpRight className="w-4 h-4 text-[#BD2A2A] group-hover:text-white transition-colors" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Trust Guarantee Strip */}
        <div className="mt-14 bg-[#F7F1EE] rounded-2xl p-6 border border-[#EAE3E0] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#BD2A2A] text-white flex items-center justify-center shrink-0 shadow-md">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-extrabold text-sm text-[#1C1617]">Guaranteed Legal Title Accuracy</h4>
              <p className="text-xs text-[#6E5D5D]">All property agreement drafting supervised directly by senior real estate advocates.</p>
            </div>
          </div>

          <a
            href="tel:09820607688"
            className="bg-[#1C1617] hover:bg-[#2A2022] text-white font-extrabold text-xs px-5 py-3 rounded-xl shadow transition-all shrink-0 active:scale-95"
          >
            Direct Call: 098206 07688
          </a>
        </div>

      </div>
    </section>
  );
};
