import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES } from '../data/salonData';
import { ServiceItem } from '../types';
import { Sparkles, Clock, Check, ArrowRight, X, Calendar, Scissors, Sparkle } from 'lucide-react';

interface ServicesProps {
  onOpenBooking: (serviceName?: string) => void;
}

export default function Services({ onOpenBooking }: ServicesProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Luxury Services' },
    { id: 'hair', label: 'Hair Care & Treatments' },
    { id: 'skin', label: 'Skincare & Facials' },
    { id: 'bridal', label: 'Bridal & Makeup' },
    { id: 'nails', label: 'Nails & Extensions' },
    { id: 'grooming', label: 'Grooming' },
  ];

  const filteredServices = selectedCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === selectedCategory);

  return (
    <section id="services" className="py-20 lg:py-28 relative">
      
      {/* Soft Background Accent */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#F9EFEF] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF9F9] border border-[#F3DCDE] text-[11px] font-medium text-[#71383F] uppercase tracking-widest">
            <Scissors className="w-3.5 h-3.5 text-[#C28289]" />
            <span>Bespoke Beauty Care</span>
          </div>
          <h2 className="font-serif-section text-4xl sm:text-5xl lg:text-6xl text-[#4A3E3D] font-normal leading-tight">
            Our Luxury Salon Services
          </h2>
          <p className="text-sm sm:text-base text-[#6A5A58] font-normal leading-relaxed tracking-normal max-w-2xl mx-auto">
            From precision styling and hair botox to luminous HD bridal makeup and gel nail extensions, explore our curated menu at TI Mall Indore.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2.5 flex-wrap mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#71383F] text-white shadow-md shadow-[#71383F]/20'
                  : 'bg-[#FFF9F9] text-[#6A5A58] border border-[#F3DCDE] hover:bg-[#F9EFEF] hover:text-[#71383F]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="glass-card glass-card-hover rounded-3xl overflow-hidden flex flex-col h-full border border-[#F3DCDE] relative group"
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4A3E3D]/60 via-transparent to-transparent" />

                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#71383F] text-white text-[10px] font-bold tracking-wider uppercase shadow-md flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-[#E8C5C8]" />
                      <span>Popular</span>
                    </div>
                  )}

                  {/* Duration Badge */}
                  <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-[#FCF9F6]/90 backdrop-blur-md text-[#71383F] text-xs font-semibold border border-[#F3DCDE] flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#C28289]" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-serif-section text-2xl font-normal text-[#4A3E3D] group-hover:text-[#71383F] transition-colors leading-snug">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-[#6A5A58] line-clamp-2 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Feature Pills */}
                  <div className="space-y-1.5 pt-2 border-t border-[#F3DCDE]/70">
                    {service.features.slice(0, 2).map((feat, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[11px] font-medium text-[#71383F]">
                        <Check className="w-3.5 h-3.5 text-[#C28289] shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price & Action */}
                  <div className="pt-4 flex items-center justify-between border-t border-[#F3DCDE]">
                    <div>
                      <span className="text-[10px] uppercase font-medium tracking-widest text-[#8C7A78] block">Starting From</span>
                      <span className="font-serif-luxury text-xl font-bold text-[#71383F]">
                        ₹{service.priceStartingFrom.toLocaleString('en-IN')}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setActiveModalService(service)}
                        className="px-3.5 py-2 rounded-full border border-[#D8A5AA] text-[#71383F] hover:bg-[#F9EFEF] text-xs font-semibold tracking-wider transition-colors cursor-pointer"
                      >
                        Details
                      </button>

                      <button
                        onClick={() => onOpenBooking(service.title)}
                        className="px-4 py-2 rounded-full bg-[#71383F] hover:bg-[#8E4B54] text-white text-xs font-semibold tracking-widest uppercase shadow-xs transition-colors cursor-pointer flex items-center gap-1"
                      >
                        <span>Book</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {activeModalService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#4A3E3D]/50 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setActiveModalService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#FCF9F6] border border-[#F3DCDE] max-w-xl w-full rounded-3xl overflow-hidden shadow-2xl my-8 relative"
            >
              <button
                onClick={() => setActiveModalService(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-[#71383F] flex items-center justify-center shadow-md transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-64">
                <img
                  src={activeModalService.image}
                  alt={activeModalService.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4A3E3D]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs uppercase tracking-widest text-[#E8C5C8] font-semibold">
                    {activeModalService.category.toUpperCase()} • {activeModalService.duration}
                  </span>
                  <h3 className="font-serif-luxury text-3xl font-light mt-1">
                    {activeModalService.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <p className="text-sm text-[#6A5A58] leading-relaxed">
                  {activeModalService.description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-serif-luxury text-lg text-[#71383F]">What’s Included:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeModalService.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-[#FFF9F9] border border-[#F3DCDE] text-xs text-[#4A3E3D]">
                        <Sparkle className="w-4 h-4 text-[#C28289] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#F3DCDE] flex items-center justify-between">
                  <div>
                    <span className="text-xs text-[#8C7A78] uppercase tracking-wider block">Price</span>
                    <span className="font-serif-luxury text-2xl font-semibold text-[#71383F]">
                      Starting ₹{activeModalService.priceStartingFrom.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      const title = activeModalService.title;
                      setActiveModalService(null);
                      onOpenBooking(title);
                    }}
                    className="px-6 py-3 rounded-full bg-[#71383F] text-white text-xs font-semibold tracking-wider uppercase shadow-md hover:bg-[#8E4B54] flex items-center gap-2 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Service</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
