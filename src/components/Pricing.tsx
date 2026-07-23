import { useState } from 'react';
import { motion } from 'motion/react';
import { PRICING_PACKAGES } from '../data/salonData';
import { Sparkles, Check, Calendar, ArrowRight } from 'lucide-react';

interface PricingProps {
  onOpenBooking: (packageName?: string) => void;
}

export default function Pricing({ onOpenBooking }: PricingProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = ['all', 'Hair Care', 'Skin & Facials', 'Bridal Luxury', 'Bridal Makeup', 'Men Grooming'];

  const filteredPackages = activeCategory === 'all'
    ? PRICING_PACKAGES
    : PRICING_PACKAGES.filter((p) => p.category === activeCategory);

  return (
    <section id="pricing" className="py-20 lg:py-28 relative bg-[#FAF5F0]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF9F9] border border-[#F3DCDE] text-[11px] font-medium text-[#71383F] uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#C28289]" />
            <span>Transparent Pricing</span>
          </div>
          <h2 className="font-serif-section text-4xl sm:text-5xl lg:text-6xl text-[#4A3E3D] font-normal leading-tight">
            Luxury Service Packages
          </h2>
          <p className="text-sm sm:text-base text-[#6A5A58] font-normal leading-relaxed tracking-normal max-w-2xl mx-auto">
            Curated combi therapies and bridal experiences with starting rates and complete transparency.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2.5 flex-wrap mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4.5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#71383F] text-white shadow-md'
                  : 'bg-[#FFF9F9] text-[#6A5A58] border border-[#F3DCDE] hover:bg-[#F9EFEF] hover:text-[#71383F]'
              }`}
            >
              {cat === 'all' ? 'All Packages' : cat}
            </button>
          ))}
        </div>

        {/* Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`glass-card glass-card-hover rounded-3xl p-8 border flex flex-col justify-between relative ${
                pkg.isPopular
                  ? 'border-[#C28289] shadow-xl bg-gradient-to-b from-[#FFF9F9] via-[#FCF9F6] to-[#FAF5F0]'
                  : 'border-[#F3DCDE]'
              }`}
            >
              {pkg.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#71383F] text-white text-[10px] font-bold uppercase tracking-widest shadow-md">
                  Most Recommended
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-semibold text-[#C28289] uppercase tracking-wider block">
                    {pkg.category} • {pkg.duration}
                  </span>
                  <h3 className="font-serif-section text-2xl font-normal text-[#4A3E3D] mt-1 leading-snug">
                    {pkg.name}
                  </h3>
                </div>

                <div>
                  <span className="text-[10px] text-[#8C7A78] uppercase font-medium tracking-widest block">Starting From</span>
                  <span className="font-serif-luxury text-3xl font-bold text-[#71383F]">
                    ₹{pkg.price.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="space-y-2.5 pt-4 border-t border-[#F3DCDE]">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#71383F]">What's Included:</p>
                  {pkg.includes.map((inc, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs font-medium text-[#6A5A58]">
                      <Check className="w-4 h-4 text-[#C28289] shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <p className="text-[11px] text-[#8C7A78] italic">
                    Ideal for: {pkg.recommendedFor}
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => onOpenBooking(pkg.name)}
                  className={`w-full py-3 rounded-full text-xs font-semibold tracking-widest uppercase transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer ${
                    pkg.isPopular
                      ? 'bg-[#71383F] hover:bg-[#8E4B54] text-white'
                      : 'bg-[#FFF9F9] hover:bg-[#F9EFEF] text-[#71383F] border border-[#D8A5AA]'
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book This Package</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
