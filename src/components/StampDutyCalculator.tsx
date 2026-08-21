import React, { useState } from 'react';
import { Calculator, FileText, Check, Info, ChevronRight } from 'lucide-react';
import { WhatsappIcon } from './WhatsappIcon';

export const StampDutyCalculator: React.FC = () => {
  const [propertyValue, setPropertyValue] = useState<number>(7500000);
  const [isFemaleOwner, setIsFemaleOwner] = useState<boolean>(false);
  const [jurisdiction, setJurisdiction] = useState<'MBMC' | 'TMC' | 'GRAM_PANCHAYAT'>('MBMC');

  // Stamp Duty Rates for Thane / Mira-Bhayandar
  const getStampDutyRate = () => {
    let baseRate = 6.0; // 5% Stamp Duty + 1% Local Body Tax (LBT) / Metro Cess
    if (isFemaleOwner) {
      baseRate -= 1.0; // 1% concession for female sole ownership
    }
    return baseRate;
  };

  const stampDutyRate = getStampDutyRate();
  const stampDutyAmount = Math.round((propertyValue * stampDutyRate) / 100);

  // Registration fee capped at ₹30,000 in Maharashtra if valuation > 30 Lakhs
  const registrationFee = Math.min(30000, Math.round(propertyValue * 0.01));
  const estimatedLegalFee = 15000;
  const totalAmount = stampDutyAmount + registrationFee + estimatedLegalFee;

  const whatsappBreakdownText = `Hello Arun Property Consultancy, I calculated stamp duty on your website:
- Property Value: ₹${propertyValue.toLocaleString('en-IN')}
- Stamp Duty (${stampDutyRate}%): ₹${stampDutyAmount.toLocaleString('en-IN')}
- Registration Fee: ₹${registrationFee.toLocaleString('en-IN')}
- Est. Total Legal Cost: ₹${totalAmount.toLocaleString('en-IN')}
Please assist me with document registration & stamp duty process.`;

  return (
    <section id="calculator" className="py-16 sm:py-20 bg-gradient-to-b from-[#F7F1EE] to-white border-y border-[#EAE3E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-[#4A0E17]/10 border border-[#BD2A2A]/30 text-[#4A0E17] text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5 text-[#BD2A2A]" />
            <span>MAHARASHTRA STAMP DUTY ESTIMATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1617] tracking-tight">
            Calculate Stamp Duty & <span className="text-[#BD2A2A]">Registration Fees</span>
          </h2>
          <p className="mt-3 text-base text-[#4A383A]">
            Get an instant estimated cost breakdown for registering your residential flat or shop in Mira Road, Bhayandar, or Thane.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* CALCULATOR CONTROLS */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-[#EAE3E0] space-y-6">
            
            {/* Property Value Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-extrabold text-sm text-[#1C1617]">
                  Agreed Property Valuation / Agreement Value
                </label>
                <span className="text-xl font-black text-[#BD2A2A]">
                  ₹{propertyValue.toLocaleString('en-IN')}
                </span>
              </div>

              <input
                type="range"
                min="1000000"
                max="30000000"
                step="250000"
                value={propertyValue}
                onChange={(e) => setPropertyValue(Number(e.target.value))}
                className="w-full h-3 bg-[#EAE3E0] rounded-lg appearance-none cursor-pointer accent-[#BD2A2A]"
              />

              <div className="flex justify-between text-xs text-[#6E5D5D] font-bold mt-1">
                <span>₹10 Lakhs</span>
                <span>₹1.5 Cr</span>
                <span>₹3 Cr</span>
              </div>
            </div>

            {/* Female Concession Option */}
            <div className="bg-[#F7F1EE] rounded-2xl p-4 border border-[#EAE3E0] flex items-center justify-between">
              <div>
                <h4 className="font-extrabold text-xs sm:text-sm text-[#1C1617]">Female Purchaser 1% Rebate</h4>
                <p className="text-xs text-[#6E5D5D]">1% concession applies if property is registered solely in a woman's name.</p>
              </div>

              <label className="relative inline-flex items-center cursor-pointer shrink-0">
                <input
                  type="checkbox"
                  checked={isFemaleOwner}
                  onChange={(e) => setIsFemaleOwner(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-zinc-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#BD2A2A]"></div>
              </label>
            </div>

            {/* Jurisdiction Selector */}
            <div>
              <label className="block font-extrabold text-xs sm:text-sm text-[#1C1617] mb-2">
                Municipal Jurisdiction Area
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'MBMC', label: 'Mira Bhayandar (MBMC)' },
                  { id: 'TMC', label: 'Thane City (TMC)' },
                  { id: 'GRAM_PANCHAYAT', label: 'Rural / Gram Panchayat' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setJurisdiction(item.id as any)}
                    className={`py-3 px-2 rounded-xl text-xs font-bold border transition-all text-center ${
                      jurisdiction === item.id
                        ? 'bg-[#1C1617] text-white border-[#1C1617] shadow'
                        : 'bg-white text-[#4A383A] border-[#EAE3E0] hover:border-[#BD2A2A]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="text-xs text-[#6E5D5D] bg-amber-50 border border-amber-200 p-3 rounded-xl flex items-start gap-2">
              <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <span>Note: Stamp Duty & Registration charges are subject to official government ready-reckoner rates and final title verification by sub-registrar officer.</span>
            </div>

          </div>

          {/* ESTIMATION RESULT BOX */}
          <div className="lg:col-span-5 bg-[#1C1617] text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#3A2D30]">
            
            <div className="border-b border-[#3A2D30] pb-4 mb-5">
              <span className="text-[11px] font-extrabold text-[#BCA39A] uppercase tracking-wider">Estimated Breakdown</span>
              <h3 className="text-2xl font-black text-white">Govt & Legal Charges</h3>
            </div>

            <div className="space-y-4 text-sm font-medium">
              <div className="flex justify-between items-center">
                <span className="text-zinc-300">Stamp Duty ({stampDutyRate}%):</span>
                <span className="font-bold text-white text-base">₹{stampDutyAmount.toLocaleString('en-IN')}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-zinc-300">Govt Registration Fee (Max ₹30k):</span>
                <span className="font-bold text-white text-base">₹{registrationFee.toLocaleString('en-IN')}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-zinc-300">Est. Legal & Typing Documentation:</span>
                <span className="font-bold text-white text-base">₹{estimatedLegalFee.toLocaleString('en-IN')}</span>
              </div>

              <div className="pt-4 border-t border-[#3A2D30] flex justify-between items-center">
                <span className="font-extrabold text-base text-white">Total Estimated Payable:</span>
                <span className="text-2xl font-black text-[#BD2A2A]">
                  ₹{totalAmount.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <a
                href={`https://wa.me/919820607688?text=${encodeURIComponent(whatsappBreakdownText)}`}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all text-sm"
              >
                <WhatsappIcon className="w-4 h-4 fill-white" />
                <span>Send Breakdown via WhatsApp</span>
              </a>

              <a
                href="tel:09820607688"
                className="w-full bg-[#4A0E17] hover:bg-[#5E121D] text-white font-extrabold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 border border-[#BD2A2A]/40 transition-all text-sm"
              >
                <FileText className="w-4 h-4 text-[#BD2A2A]" />
                <span>Consult Arun Sir Directly</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
