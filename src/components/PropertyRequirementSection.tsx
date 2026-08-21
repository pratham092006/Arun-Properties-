import React, { useState } from 'react';
import { Home, Building2, Landmark, ShieldCheck, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { WhatsappIcon } from './WhatsappIcon';

interface PropertyRequirementProps {
  onOpenConsultation: () => void;
}

export const PropertyRequirementSection: React.FC<PropertyRequirementProps> = ({ onOpenConsultation }) => {
  const [intent, setIntent] = useState<'BUY' | 'RENT' | 'SELL'>('BUY');
  const [propertyType, setPropertyType] = useState<string>('1 BHK Flat');
  const [budget, setBudget] = useState<string>('₹45 Lakhs – ₹60 Lakhs');
  const [locality, setLocality] = useState<string>('Sheetal Nagar / Mira Road East');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Arun Property Consultancy, I would like to submit my requirement:
- Requirement: ${intent}
- Property Type: ${propertyType}
- Budget Range: ${budget}
- Preferred Locality: ${locality}
- Client Name: ${name || 'Prospective Buyer'}
- Phone Contact: ${phone || 'Not provided'}
Please contact me with matching options.`;

    window.open(`https://wa.me/919820607688?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="requirements" className="py-20 bg-white relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: HEADING & TRUST DETAILS */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 bg-[#4A0E17]/10 border border-[#BD2A2A]/30 text-[#4A0E17] text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              <Home className="w-3.5 h-3.5 text-[#BD2A2A]" />
              <span>CUSTOM PROPERTY MATCHING</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1617] tracking-tight leading-tight">
              Looking To Buy, Rent or Sell A Property In <span className="text-[#BD2A2A]">Mira Road?</span>
            </h2>

            <p className="text-base text-[#4A383A] leading-relaxed">
              Tell us your specific requirement! Whether you're searching for a budget 1 BHK, a spacious 2 BHK, a commercial shop on Station Road, or need complete legal document verification for a resale property.
            </p>

            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-extrabold text-sm text-[#1C1617]">Verified Direct Owners & Genuine Sellers</h4>
                  <p className="text-xs text-[#6E5D5D]">No inflated pricing or fake photos. Clear legal titles checked.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-extrabold text-sm text-[#1C1617]">End-to-End Documentation Handling</h4>
                  <p className="text-xs text-[#6E5D5D]">From Token agreement to Stamp Duty registration and Society NOC.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-extrabold text-sm text-[#1C1617]">Bank Loan Assistance</h4>
                  <p className="text-xs text-[#6E5D5D]">Assistance with SBI, HDFC, ICICI, and major nationalized bank approvals.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-3">
              <button
                onClick={onOpenConsultation}
                className="bg-[#1C1617] hover:bg-[#2A2022] text-white font-extrabold text-xs sm:text-sm px-5 py-3 rounded-xl flex items-center gap-2 shadow-md transition-all"
              >
                <ShieldCheck className="w-4 h-4 text-[#BD2A2A]" />
                <span>Talk to Arun Sir</span>
              </button>
            </div>
          </div>

          {/* RIGHT: INQUIRY FORM */}
          <div className="lg:col-span-7 bg-[#F7F1EE] rounded-3xl p-6 sm:p-8 border border-[#EAE3E0] shadow-xl">
            
            <form onSubmit={handleSubmitWhatsApp} className="space-y-5">
              
              <div className="border-b border-[#EAE3E0] pb-4">
                <h3 className="text-xl font-extrabold text-[#1C1617]">Share Your Property Requirement</h3>
                <p className="text-xs text-[#6E5D5D]">Direct submission to Arun Property Consultancy WhatsApp.</p>
              </div>

              {/* Requirement Type Selector */}
              <div>
                <label className="block text-xs font-extrabold text-[#1C1617] uppercase tracking-wider mb-2">
                  I Want To:
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'BUY', label: 'Buy Property' },
                    { id: 'RENT', label: 'Rent / Lease' },
                    { id: 'SELL', label: 'Sell / List' },
                  ].map((item) => (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => setIntent(item.id as any)}
                      className={`py-3 px-3 rounded-xl text-xs font-black border transition-all text-center ${
                        intent === item.id
                          ? 'bg-[#BD2A2A] text-white border-[#BD2A2A] shadow'
                          : 'bg-white text-[#1C1617] border-[#EAE3E0] hover:border-[#BD2A2A]'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Grid 2 Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div>
                  <label className="block text-xs font-extrabold text-[#1C1617] uppercase tracking-wider mb-1.5">
                    Property Type
                  </label>
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full bg-white border border-[#EAE3E0] rounded-xl px-3.5 py-3 text-xs font-bold text-[#1C1617] focus:outline-none focus:border-[#BD2A2A]"
                  >
                    <option value="1 BHK Flat">1 BHK Residential Flat</option>
                    <option value="2 BHK Flat">2 BHK Residential Flat</option>
                    <option value="3 BHK / Premium Flat">3 BHK / Penthouse</option>
                    <option value="Commercial Shop">Commercial Shop / Office</option>
                    <option value="Row House / Bungalow">Row House / Independent Plot</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-[#1C1617] uppercase tracking-wider mb-1.5">
                    Estimated Budget Range
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full bg-white border border-[#EAE3E0] rounded-xl px-3.5 py-3 text-xs font-bold text-[#1C1617] focus:outline-none focus:border-[#BD2A2A]"
                  >
                    <option value="Under ₹35 Lakhs">Under ₹35 Lakhs</option>
                    <option value="₹35 Lakhs – ₹50 Lakhs">₹35 Lakhs – ₹50 Lakhs</option>
                    <option value="₹50 Lakhs – ₹75 Lakhs">₹50 Lakhs – ₹75 Lakhs</option>
                    <option value="₹75 Lakhs – ₹1.2 Cr">₹75 Lakhs – ₹1.2 Cr</option>
                    <option value="Above ₹1.2 Cr">Above ₹1.2 Cr</option>
                  </select>
                </div>

              </div>

              {/* Locality */}
              <div>
                <label className="block text-xs font-extrabold text-[#1C1617] uppercase tracking-wider mb-1.5">
                  Preferred Locality
                </label>
                <input
                  type="text"
                  value={locality}
                  onChange={(e) => setLocality(e.target.value)}
                  placeholder="e.g. Sheetal Nagar, Station Road, Kanakia, Shanti Nagar"
                  className="w-full bg-white border border-[#EAE3E0] rounded-xl px-3.5 py-3 text-xs font-bold text-[#1C1617] focus:outline-none focus:border-[#BD2A2A]"
                />
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-extrabold text-[#1C1617] uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    required
                    className="w-full bg-white border border-[#EAE3E0] rounded-xl px-3.5 py-3 text-xs font-bold text-[#1C1617] focus:outline-none focus:border-[#BD2A2A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-[#1C1617] uppercase tracking-wider mb-1.5">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter 10-digit mobile number"
                    required
                    className="w-full bg-white border border-[#EAE3E0] rounded-xl px-3.5 py-3 text-xs font-bold text-[#1C1617] focus:outline-none focus:border-[#BD2A2A]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-black text-sm py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
              >
                <WhatsappIcon className="w-5 h-5 fill-white" />
                <span>Submit Requirement via WhatsApp</span>
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};
