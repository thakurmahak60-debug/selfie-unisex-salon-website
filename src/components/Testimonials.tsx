import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS, SALON_INFO } from '../data/salonData';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2, MessageSquare } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="reviews" className="py-20 lg:py-28 relative bg-[#FCF9F6] overflow-hidden">
      
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F9EFEF]/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF9F9] border border-[#F3DCDE] text-[11px] font-medium text-[#71383F] uppercase tracking-widest">
            <MessageSquare className="w-3.5 h-3.5 text-[#C28289]" />
            <span>Google Reviews & Ratings</span>
          </div>
          <h2 className="font-serif-section text-4xl sm:text-5xl lg:text-6xl text-[#4A3E3D] font-normal leading-tight">
            Loved by 10,000+ Clients in Indore
          </h2>
          <div className="flex items-center justify-center gap-2 text-sm text-[#71383F] font-semibold">
            <div className="flex text-[#E5A800]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span>{SALON_INFO.googleRating} / 5.0 Rating</span>
            <span className="text-[#8C7A78] font-normal">({SALON_INFO.reviewCount}+ Verified Google Reviews)</span>
          </div>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto relative">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              className="glass-card p-8 sm:p-12 rounded-3xl border border-[#F3DCDE] shadow-xl relative"
            >
              <Quote className="w-12 h-12 text-[#E8C5C8]/40 absolute top-6 right-8 pointer-events-none" />

              <div className="space-y-6">
                
                {/* Rating Stars & Service */}
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex text-[#E5A800] gap-1">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <span className="px-3.5 py-1 rounded-full bg-[#F9EFEF] text-[#71383F] text-xs font-semibold border border-[#F3DCDE] tracking-wide">
                    {current.serviceUsed}
                  </span>
                </div>

                {/* Comment */}
                <p className="font-serif-luxury text-2xl sm:text-3xl text-[#4A3E3D] italic leading-relaxed font-normal">
                  "{current.comment}"
                </p>

                {/* Client Profile */}
                <div className="flex items-center gap-4 pt-4 border-t border-[#F3DCDE]">
                  <img
                    src={current.avatar}
                    alt={current.clientName}
                    referrerPolicy="no-referrer"
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#E8C5C8] shadow-sm"
                  />

                  <div>
                    <div className="flex items-center gap-1.5">
                      <p className="font-serif-section text-xl font-normal text-[#71383F]">
                        {current.clientName}
                      </p>
                      {current.verified && (
                        <CheckCircle2 className="w-4 h-4 text-[#1C9B8E]" />
                      )}
                    </div>
                    <p className="text-xs text-[#8C7A78] font-medium">
                      Verified Google Reviewer • {current.date}
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-[#FFF9F9] hover:bg-[#F9EFEF] border border-[#F3DCDE] text-[#71383F] flex items-center justify-center transition-all cursor-pointer shadow-xs"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? 'w-8 bg-[#71383F]' : 'w-2 bg-[#F3DCDE]'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-[#FFF9F9] hover:bg-[#F9EFEF] border border-[#F3DCDE] text-[#71383F] flex items-center justify-center transition-all cursor-pointer shadow-xs"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
