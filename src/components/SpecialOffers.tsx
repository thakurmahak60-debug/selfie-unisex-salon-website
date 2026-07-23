import { useState } from 'react';
import { motion } from 'motion/react';
import { SPECIAL_OFFERS } from '../data/salonData';
import { Sparkles, Tag, Check, Copy, CheckCircle2, Calendar } from 'lucide-react';

interface SpecialOffersProps {
  onOpenBooking: (offerTitle?: string) => void;
}

export default function SpecialOffers({ onOpenBooking }: SpecialOffersProps) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FCF9F6] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF9F9] border border-[#F3DCDE] text-[11px] font-medium text-[#71383F] uppercase tracking-widest">
            <Tag className="w-3.5 h-3.5 text-[#C28289]" />
            <span>Limited Time Privileges</span>
          </div>
          <h2 className="font-serif-section text-4xl sm:text-5xl lg:text-6xl text-[#4A3E3D] font-normal leading-tight">
            Exclusive Offers & VIP Memberships
          </h2>
          <p className="text-sm sm:text-base text-[#6A5A58] font-normal leading-relaxed tracking-normal max-w-2xl mx-auto">
            Unlock seasonal beauty discounts, bridal early-bird benefits, student specials, and VIP pass credits.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SPECIAL_OFFERS.map((offer, idx) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-3xl overflow-hidden border border-[#F3DCDE] flex flex-col justify-between group shadow-sm hover:shadow-xl transition-all"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4A3E3D]/80 via-transparent to-transparent" />
                  
                  <span className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-[#71383F] text-white text-[11px] font-bold uppercase tracking-wider shadow-md">
                    {offer.discountBadge}
                  </span>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#C28289] font-bold">
                      {offer.validUntil}
                    </span>
                    <h3 className="font-serif-section text-2xl font-normal text-[#4A3E3D] mt-1 leading-snug">
                      {offer.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#71383F] mt-0.5">
                      {offer.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#6A5A58] leading-relaxed">
                    {offer.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-[#F3DCDE]">
                    {offer.perks.map((perk, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-medium text-[#71383F]">
                        <Check className="w-3.5 h-3.5 text-[#C28289] shrink-0" />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 space-y-3">
                {/* Code Copy Bar */}
                <div className="flex items-center justify-between p-2.5 rounded-2xl bg-[#FFF9F9] border border-[#F3DCDE]">
                  <span className="text-xs font-mono font-bold text-[#71383F] tracking-wider uppercase px-2">
                    CODE: {offer.code}
                  </span>
                  <button
                    onClick={() => handleCopyCode(offer.code)}
                    className="px-3 py-1 rounded-xl bg-[#F9EFEF] hover:bg-[#F3DCDE] text-[#71383F] text-[11px] font-semibold transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    {copiedCode === offer.code ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1C9B8E]" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#C28289]" />
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>
                </div>

                <button
                  onClick={() => onOpenBooking(`Claim Offer: ${offer.title}`)}
                  className="w-full py-3 rounded-full bg-[#71383F] hover:bg-[#8E4B54] text-white text-xs font-semibold tracking-widest uppercase shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Claim Offer & Book</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
