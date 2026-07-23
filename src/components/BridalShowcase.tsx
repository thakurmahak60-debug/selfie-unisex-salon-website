import { motion } from 'motion/react';
import { Sparkles, Crown, Check, Calendar, Heart, ShieldCheck } from 'lucide-react';
import BeforeAfterSlider from './BeforeAfterSlider';
import { SALON_IMAGES } from '../data/salonData';

interface BridalShowcaseProps {
  onOpenBooking: (serviceName?: string) => void;
}

export default function BridalShowcase({ onOpenBooking }: BridalShowcaseProps) {
  const bridalPackages = [
    {
      title: 'Royal HD Bridal Makeup',
      price: '₹11,999',
      tag: 'Most Popular',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
      includes: [
        'HD Camera-Ready Makeup',
        'MAC & Huda Beauty Cosmetics',
        'Custom Hair Styling & Extensions',
        'Saree / Lehenga Dupatta Draping',
        'Lashes & Nail Color Application'
      ]
    },
    {
      title: '3D Airbrush Glamour Bride',
      price: '₹15,999',
      tag: 'Ultra Luxury',
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80',
      includes: [
        'TEMPTU Micro-Airbrush Makeup',
        '100% Sweat & Water Resistant Finish',
        'Bridal Hair Artistry & Fresh Flowers',
        'Jewelry & Dupatta Styling',
        'Complimentary Groom Trial Discount'
      ]
    },
    {
      title: 'Engagement & Sagan Glam',
      price: '₹6,999',
      tag: 'Pre-Wedding',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
      includes: [
        'Soft Radiant Skin Makeup',
        'Designer Hairdo or Hollywood Waves',
        'Outfit Draping',
        'Eyelash Enhancement'
      ]
    },
    {
      title: 'Pre-Wedding Radiance Ritual',
      price: '₹8,999',
      tag: 'Full Body Care',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
      includes: [
        '24K Rose Gold Hydra-Facial',
        'Full Body Waxing & Organic Scrub',
        'Aroma Spa Mani-Pedi Session',
        'Kerastase Hair Spa & Trim'
      ]
    }
  ];

  return (
    <section id="bridal" className="py-20 lg:py-28 bg-[#FAF5F0] relative overflow-hidden">
      
      {/* Decorative Blush Glow */}
      <div className="absolute top-1/4 -right-10 w-96 h-96 bg-[#F3DCDE]/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF9F9] border border-[#F3DCDE] text-[11px] font-medium text-[#71383F] uppercase tracking-widest">
            <Crown className="w-3.5 h-3.5 text-[#C28289]" />
            <span>Bridal Sanctuary</span>
          </div>
          <h2 className="font-serif-section text-4xl sm:text-5xl lg:text-6xl text-[#4A3E3D] font-normal leading-tight">
            Royal Bridal Makeup & Beauty Experience
          </h2>
          <p className="text-sm sm:text-base text-[#6A5A58] font-normal leading-relaxed tracking-normal max-w-2xl mx-auto">
            Crafting glowing, luminous, and timeless wedding looks for brides across Madhya Pradesh. Step into our private bridal suite at TI Mall Indore.
          </p>
        </div>

        {/* Bridal Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {bridalPackages.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card glass-card-hover rounded-3xl overflow-hidden border border-[#F3DCDE] flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4A3E3D]/60 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#71383F] text-white text-[10px] font-bold uppercase tracking-wider shadow-md">
                    {pkg.tag}
                  </span>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-serif-section text-2xl font-normal text-[#4A3E3D] group-hover:text-[#71383F] transition-colors leading-snug">
                      {pkg.title}
                    </h3>
                    <p className="font-serif-luxury text-xl font-bold text-[#71383F] mt-1">
                      {pkg.price}
                    </p>
                  </div>

                  <div className="space-y-2 border-t border-[#F3DCDE] pt-3">
                    {pkg.includes.map((inc, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-medium text-[#6A5A58]">
                        <Check className="w-3.5 h-3.5 text-[#C28289] shrink-0" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => onOpenBooking(pkg.title)}
                  className="w-full py-3 rounded-full bg-[#71383F] hover:bg-[#8E4B54] text-white text-xs font-semibold tracking-widest uppercase transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Before & After Transformation Section */}
        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-[#F3DCDE] max-w-4xl mx-auto shadow-xl">
          <BeforeAfterSlider
            beforeImage="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80"
            afterImage="https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1200&q=80"
            beforeLabel="Before (Frizzy & Damaged)"
            afterLabel="After (Keratin Botox Mirror Shine)"
            title="Signature Hair Botox & Transformation"
            subtitle="Drag slider left/right to witness the silkiness and hair revival created by our master hair stylists at TI Mall."
          />

          <div className="mt-8 text-center">
            <button
              onClick={() => onOpenBooking('Bridal & Transformation Consultation')}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#71383F] text-white text-xs font-medium uppercase tracking-widest hover:bg-[#8E4B54] shadow-md transition-all cursor-pointer"
            >
              <Heart className="w-4 h-4 text-[#E8C5C8]" />
              <span>Book Personal Consultation</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
