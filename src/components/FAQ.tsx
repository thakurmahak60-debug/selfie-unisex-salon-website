import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../data/salonData';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 relative bg-[#FAF5F0]/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF9F9] border border-[#F3DCDE] text-[11px] font-medium text-[#71383F] uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5 text-[#C28289]" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-serif-section text-4xl sm:text-5xl lg:text-6xl text-[#4A3E3D] font-normal leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#6A5A58] font-normal leading-relaxed tracking-normal">
            Everything you need to know about our salon services, hygiene standards, and appointments at TI Mall Indore.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl border border-[#F3DCDE] overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FFF9F9] transition-colors"
                >
                  <span className="font-serif-section text-lg sm:text-xl font-normal text-[#4A3E3D]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#F9EFEF] text-[#71383F] flex items-center justify-center transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 bg-[#71383F] text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-[#6A5A58] border-t border-[#F3DCDE]/60 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
