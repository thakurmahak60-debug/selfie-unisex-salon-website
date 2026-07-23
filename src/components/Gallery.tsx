import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS } from '../data/salonData';
import { GalleryItem } from '../types';
import { Sparkles, Maximize2, X, ZoomIn, Calendar } from 'lucide-react';

interface GalleryProps {
  onOpenBooking: (serviceName?: string) => void;
}

export default function Gallery({ onOpenBooking }: GalleryProps) {
  const [filter, setFilter] = useState<string>('all');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Photos' },
    { id: 'interior', label: 'Salon Interior' },
    { id: 'bridal', label: 'Bridal Looks' },
    { id: 'hair', label: 'Hair Transformations' },
    { id: 'skincare', label: 'Skin & Facials' },
    { id: 'nails', label: 'Nail Studio' },
  ];

  const filteredItems = filter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === filter);

  return (
    <section id="gallery" className="py-20 lg:py-28 relative bg-[#FCF9F6]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF9F9] border border-[#F3DCDE] text-[11px] font-medium text-[#71383F] uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#C28289]" />
            <span>Visual Tour</span>
          </div>
          <h2 className="font-serif-section text-4xl sm:text-5xl lg:text-6xl text-[#4A3E3D] font-normal leading-tight">
            Selfie Salon Gallery
          </h2>
          <p className="text-sm sm:text-base text-[#6A5A58] font-normal leading-relaxed tracking-normal max-w-2xl mx-auto">
            Step inside our luxury salon at TI Mall Indore and explore real hair transformations, bridal glow aesthetics, and tranquil spa suites.
          </p>
        </div>

        {/* Filters */}
        <div className="flex items-center justify-center gap-2.5 flex-wrap mb-10">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4.5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                filter === tab.id
                  ? 'bg-[#71383F] text-white shadow-md'
                  : 'bg-[#FFF9F9] text-[#6A5A58] border border-[#F3DCDE] hover:bg-[#F9EFEF] hover:text-[#71383F]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Pinterest Masonry Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setActiveLightboxItem(item)}
                className="break-inside-avoid glass-card rounded-3xl overflow-hidden border border-[#F3DCDE] relative group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4A3E3D]/80 via-[#4A3E3D]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                    <div className="self-end w-9 h-9 rounded-full bg-white/90 text-[#71383F] flex items-center justify-center shadow-md">
                      <Maximize2 className="w-4 h-4" />
                    </div>

                    <div className="text-white space-y-1">
                      <span className="text-[10px] uppercase tracking-widest text-[#E8C5C8] font-bold">
                        {item.category.toUpperCase()}
                      </span>
                      <h4 className="font-serif-section text-xl sm:text-2xl font-normal leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#FAF5F0]/80 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeLightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#2A1E1D]/90 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setActiveLightboxItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full bg-[#FCF9F6] border border-[#F3DCDE] rounded-3xl overflow-hidden shadow-2xl relative"
            >
              <button
                onClick={() => setActiveLightboxItem(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-[#71383F] flex items-center justify-center shadow-lg transition-all"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 items-center">
                <div className="md:col-span-7 bg-black flex items-center justify-center max-h-[75vh]">
                  <img
                    src={activeLightboxItem.image}
                    alt={activeLightboxItem.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain max-h-[75vh]"
                  />
                </div>

                <div className="md:col-span-5 p-8 space-y-6">
                  <div>
                    <span className="px-3 py-1 rounded-full bg-[#F9EFEF] text-[#71383F] text-[10px] font-bold uppercase tracking-wider border border-[#F3DCDE]">
                      {activeLightboxItem.category.toUpperCase()}
                    </span>
                    <h3 className="font-serif-section text-2xl sm:text-3xl font-normal text-[#4A3E3D] mt-3">
                      {activeLightboxItem.title}
                    </h3>
                  </div>

                  <p className="text-xs text-[#6A5A58] leading-relaxed">
                    {activeLightboxItem.description}
                  </p>

                  <div className="pt-4 border-t border-[#F3DCDE] space-y-3">
                    <p className="text-[11px] text-[#8C7A78]">
                      Interested in achieving this look or exploring our salon?
                    </p>
                    <button
                      onClick={() => {
                        const t = activeLightboxItem.title;
                        setActiveLightboxItem(null);
                        onOpenBooking(t);
                      }}
                      className="w-full py-3 rounded-full bg-[#71383F] text-white text-xs font-semibold uppercase tracking-wider shadow-md hover:bg-[#8E4B54] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book Appointment</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
