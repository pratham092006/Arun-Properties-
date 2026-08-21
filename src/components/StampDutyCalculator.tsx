import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, FileText, Info, Sparkles, CheckCircle, Percent } from 'lucide-react';
import { WhatsappIcon } from './WhatsappIcon';

export const StampDutyCalculator: React.FC = () => {
  const [propertyValue, setPropertyValue] = useState<number>(7500000);
  const [isFemaleOwner, setIsFemaleOwner] = useState<boolean>(false);
  const [jurisdiction, setJurisdiction] = useState<'MBMC' | 'TMC' | 'GRAM_PANCHAYAT'>('MBMC');

  const getStampDutyRate = () => {
    let baseRate = 6.0;
    if (isFemaleOwner) {
      baseRate -= 1.0;
    }
    return baseRate;
  };

  const stampDutyRate = getStampDutyRate();
  const stampDutyAmount = Math.round((propertyValue * stampDutyRate) / 100);
  const registrationFee = Math.min(30000, Math.round(propertyValue * 0.01));
  const estimatedLegalFee = 15000;
  const totalAmount = stampDutyAmount + registrationFee + estimatedLegalFee;

  const whatsappBreakdownText = `Hello Arun Property Consultancy, I calculated stamp duty on your website:
- Property Value: ₹${propertyValue.toLocaleString('en-IN')}
- Stamp Duty (${stampDutyRate}%): ₹${stampDutyAmount.toLocaleString('en-IN')}
- Registration Fee: ₹${registrationFee.toLocaleString('en-IN')}
- Est. Total Legal Cost: ₹${totalAmount.toLocaleString('en-IN')}
Please assist me with document registration & stamp duty process.`;

  // Percentages for bar chart
  const stampDutyPercent = Math.round((stampDutyAmount / totalAmount) * 100);
  const regFeePercent = Math.round((registrationFee / totalAmount) * 100);
  const legalFeePercent = Math.max(1, 100 - stampDutyPercent - regFeePercent);

  return (
    <section id="calculator" className="py-16 sm:py-24 bg-gradient-to-b from-[#F7F1EE] via-white to-[#F2EBE8] border-y border-[#EAE3E0] relative overflow-hidden">
      
      {/* Background Accent Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#BD2A2A]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-1.5 bg-[#4A0E17]/10 border border-[#BD2A2A]/30 text-[#4A0E17] text-[11px] sm:text-xs font-extrabold px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5 text-[#BD2A2A]" />
            <span>INSTANT STAMP DUTY ESTIMATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1C1617] tracking-tight">
            Calculate Stamp Duty & <span className="text-[#BD2A2A]">Registration Fees</span>
          </h2>
          <p className="mt-2 text-xs sm:text-base text-[#4A383A] leading-relaxed">
            Get an instant estimated cost breakdown for registering your residential flat or shop in Mira Road, Bhayandar, or Thane.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* CALCULATOR CONTROLS */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-[#EAE3E0] space-y-6"
          >
            
            {/* Property Value Slider */}
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 mb-3">
                <label className="font-extrabold text-xs sm:text-sm text-[#1C1617] uppercase tracking-wider flex items-center gap-1.5">
                  <span>Agreed Property Valuation</span>
                </label>
                <motion.span 
                  key={propertyValue}
                  initial={{ scale: 1.1, color: '#BD2A2A' }}
                  animate={{ scale: 1 }}
                  className="text-xl sm:text-2xl font-black text-[#BD2A2A]"
                >
                  ₹{propertyValue.toLocaleString('en-IN')}
                </motion.span>
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

              <div className="flex justify-between text-[10px] sm:text-xs text-[#6E5D5D] font-bold mt-1.5">
                <span>₹10 Lakhs</span>
                <span>₹1.5 Cr</span>
                <span>₹3 Cr</span>
              </div>
            </div>

            {/* Female Concession Option */}
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="bg-[#F7F1EE] rounded-xl sm:rounded-2xl p-4 border border-[#EAE3E0] flex items-center justify-between gap-3 shadow-xs"
            >
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-extrabold text-xs sm:text-sm text-[#1C1617]">Female Purchaser 1% Rebate</h4>
                  {isFemaleOwner && (
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded-md uppercase">
                      -1% Saved
                    </span>
                  )}
                </div>
                <p className="text-[11px] sm:text-xs text-[#6E5D5D] mt-0.5">1% concession applies if registered solely in a woman's name.</p>
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
            </motion.div>

            {/* Jurisdiction Selector */}
            <div>
              <label className="block font-extrabold text-xs sm:text-sm text-[#1C1617] mb-2 uppercase tracking-wider">
                Municipal Jurisdiction Area
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'MBMC', label: 'Mira Bhayandar' },
                  { id: 'TMC', label: 'Thane City' },
                  { id: 'GRAM_PANCHAYAT', label: 'Gram Panchayat' },
                ].map((item) => (
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    key={item.id}
                    onClick={() => setJurisdiction(item.id as any)}
                    className={`py-3 px-2 rounded-xl text-[10px] sm:text-xs font-bold border transition-all text-center leading-tight ${
                      jurisdiction === item.id
                        ? 'bg-[#1C1617] text-white border-[#1C1617] shadow-md'
                        : 'bg-white text-[#4A383A] border-[#EAE3E0] hover:border-[#BD2A2A]'
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="text-[11px] sm:text-xs text-[#6E5D5D] bg-amber-50 border border-amber-200 p-3 rounded-xl flex items-start gap-2">
              <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <span>Note: Stamp Duty & Registration charges are subject to official ready-reckoner rates and sub-registrar verification.</span>
            </div>

          </motion.div>

          {/* ESTIMATION RESULT BOX */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 bg-[#1C1617] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#3A2D30] relative overflow-hidden"
          >
            
            <div className="border-b border-[#3A2D30] pb-4 mb-5 flex justify-between items-end">
              <div>
                <span className="text-[10px] sm:text-[11px] font-extrabold text-[#BCA39A] uppercase tracking-wider block">Official Estimation</span>
                <h3 className="text-xl sm:text-2xl font-black text-white">Government Breakdown</h3>
              </div>
              <span className="bg-[#BD2A2A] text-white font-black text-[10px] px-2.5 py-1 rounded-full uppercase">
                {stampDutyRate}% Rate
              </span>
            </div>

            {/* Visual Animated Breakdown Bar */}
            <div className="mb-6">
              <div className="text-[10px] text-[#BCA39A] font-bold uppercase tracking-wider mb-1.5 flex justify-between">
                <span>Cost Distribution</span>
                <span>Total: ₹{totalAmount.toLocaleString('en-IN')}</span>
              </div>
              <div className="h-3 w-full bg-[#2A2022] rounded-full overflow-hidden flex gap-0.5 p-0.5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${stampDutyPercent}%` }}
                  transition={{ duration: 0.8 }}
                  className="bg-[#BD2A2A] h-full rounded-l-full"
                  title={`Stamp Duty: ${stampDutyPercent}%`}
                />
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${regFeePercent}%` }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="bg-amber-500 h-full"
                  title={`Registration Fee: ${regFeePercent}%`}
                />
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${legalFeePercent}%` }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="bg-emerald-500 h-full rounded-r-full"
                  title={`Legal Fee: ${legalFeePercent}%`}
                />
              </div>
              <div className="flex items-center gap-3 text-[10px] font-bold text-[#BCA39A] mt-2">
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#BD2A2A]"></span> Stamp Duty</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-500"></span> Reg Fee</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Legal</span>
              </div>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm font-medium">
              <div className="flex justify-between items-center bg-[#241D1E] p-3 rounded-xl border border-[#3A2D30]">
                <span className="text-zinc-300">Stamp Duty ({stampDutyRate}%):</span>
                <span className="font-bold text-white text-sm sm:text-base">₹{stampDutyAmount.toLocaleString('en-IN')}</span>
              </div>

              <div className="flex justify-between items-center bg-[#241D1E] p-3 rounded-xl border border-[#3A2D30]">
                <span className="text-zinc-300">Govt Registration Fee:</span>
                <span className="font-bold text-white text-sm sm:text-base">₹{registrationFee.toLocaleString('en-IN')}</span>
              </div>

              <div className="flex justify-between items-center bg-[#241D1E] p-3 rounded-xl border border-[#3A2D30]">
                <span className="text-zinc-300">Est. Legal & Document Typing:</span>
                <span className="font-bold text-white text-sm sm:text-base">₹{estimatedLegalFee.toLocaleString('en-IN')}</span>
              </div>

              <div className="pt-3.5 border-t border-[#3A2D30] flex justify-between items-center">
                <span className="font-extrabold text-sm sm:text-base text-white">Total Estimated Cost:</span>
                <motion.span 
                  key={totalAmount}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  className="text-2xl sm:text-3xl font-black text-[#BD2A2A]"
                >
                  ₹{totalAmount.toLocaleString('en-IN')}
                </motion.span>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 space-y-3">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={`https://wa.me/919820607688?text=${encodeURIComponent(whatsappBreakdownText)}`}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all text-xs sm:text-sm"
              >
                <WhatsappIcon className="w-4 h-4 fill-white" />
                <span>Send Breakdown via WhatsApp</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="tel:09820607688"
                className="w-full bg-[#4A0E17] hover:bg-[#5E121D] text-white font-extrabold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 border border-[#BD2A2A]/40 transition-all text-xs sm:text-sm"
              >
                <FileText className="w-4 h-4 text-[#BD2A2A]" />
                <span>Consult Arun Sir Directly</span>
              </motion.a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

