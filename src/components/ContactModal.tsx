import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, ShieldCheck, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { WhatsappIcon } from './WhatsappIcon';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPropertyTitle?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialPropertyTitle,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Property Legal Documentation');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappText = `Hello Arun Property Consultancy, I am interested in legal assistance:
- Service Required: ${service}
- Client Name: ${name}
- Phone Contact: ${phone}
- Additional Message: ${message || 'Please connect with me.'}`;

    window.open(`https://wa.me/919820607688?text=${encodeURIComponent(whatsappText)}`, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
        >
          
          <motion.div 
            initial={{ scale: 0.85, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="bg-white w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl border border-[#EAE3E0] relative"
          >
            
            {/* Header */}
            <div className="bg-gradient-to-r from-[#4A0E17] via-[#BD2A2A] to-[#4A0E17] text-white p-6 relative">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute top-4 right-4 text-white/80 hover:text-white bg-black/20 p-2 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </motion.button>

              <div className="flex items-center gap-3">
                <img src="/arun-logo.png" alt="Arun Logo" className="w-12 h-12 rounded-full border-2 border-white bg-white" />
                <div>
                  <span className="text-[10px] font-bold text-[#BCA39A] uppercase tracking-wider block">Legal Advisory & Stamp Duty</span>
                  <h3 className="text-xl font-black text-white">Book Legal Consultation</h3>
                </div>
              </div>
            </div>

            {/* Form Body */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              
              <div>
                <label className="block text-xs font-extrabold text-[#1C1617] uppercase tracking-wider mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  required
                  className="w-full bg-[#F7F1EE] border border-[#EAE3E0] rounded-xl px-3.5 py-2.5 text-xs font-bold text-[#1C1617] focus:outline-none focus:border-[#BD2A2A]"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold text-[#1C1617] uppercase tracking-wider mb-1">
                  Phone / WhatsApp Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 98206XXXXX"
                  required
                  className="w-full bg-[#F7F1EE] border border-[#EAE3E0] rounded-xl px-3.5 py-2.5 text-xs font-bold text-[#1C1617] focus:outline-none focus:border-[#BD2A2A]"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold text-[#1C1617] uppercase tracking-wider mb-1">
                  Service Category
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-[#F7F1EE] border border-[#EAE3E0] rounded-xl px-3.5 py-2.5 text-xs font-bold text-[#1C1617] focus:outline-none focus:border-[#BD2A2A]"
                >
                  <option value="Property Legal Documentation">Stamp Duty & Registration</option>
                  <option value="Buy / Rent Property Inquiry">Buy / Rent Property Inquiry</option>
                  <option value="Home Loan Paperwork Assistance">Home Loan Paperwork</option>
                  <option value="Society NOC & Title Search">Society NOC & Title Search</option>
                  <option value="Leave & License Agreement">Leave & License Agreement</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-extrabold text-[#1C1617] uppercase tracking-wider mb-1">
                  Additional Details / Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  placeholder="Specify flat size, locality, or document query..."
                  className="w-full bg-[#F7F1EE] border border-[#EAE3E0] rounded-xl px-3.5 py-2.5 text-xs font-bold text-[#1C1617] focus:outline-none focus:border-[#BD2A2A]"
                />
              </div>

              <div className="pt-2 space-y-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-xs sm:text-sm py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <WhatsappIcon className="w-4 h-4 fill-white" />
                  <span>Connect on WhatsApp</span>
                </motion.button>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="tel:09820607688"
                  className="w-full bg-[#1C1617] hover:bg-[#2A2022] text-white font-extrabold text-xs sm:text-sm py-3 rounded-xl flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#BD2A2A]" />
                  <span>Call Direct: 098206 07688</span>
                </motion.a>
              </div>

            </form>

          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

