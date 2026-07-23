import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { SALON_INFO } from '../data/salonData';
import { Phone, MessageSquare, Calendar } from 'lucide-react';

interface FloatingControlsProps {
  onOpenBooking: () => void;
}

export default function FloatingControls({ onOpenBooking }: FloatingControlsProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openWhatsApp = () => {
    const msg = encodeURIComponent("Hi Selfie Salon! I would like to inquire about booking an appointment at TI Mall Indore.");
    window.open(`https://wa.me/${SALON_INFO.whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <>
      {/* Top Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-transparent z-[100] pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#C28289] via-[#71383F] to-[#C28289] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Action Buttons (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* Call Button */}
        <a
          href={`tel:${SALON_INFO.phone}`}
          className="w-12 h-12 rounded-full bg-[#71383F] text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform group"
          aria-label="Call Salon"
        >
          <Phone className="w-5 h-5 text-[#E8C5C8]" />
          <span className="absolute right-14 bg-[#4A3E3D] text-white text-[11px] font-medium px-3 py-1 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-md pointer-events-none">
            Call {SALON_INFO.phone}
          </span>
        </a>

        {/* WhatsApp Button */}
        <button
          onClick={openWhatsApp}
          className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform group cursor-pointer"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-6 h-6 fill-current" />
          <span className="absolute right-14 bg-[#25D366] text-white text-[11px] font-medium px-3 py-1 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-md pointer-events-none">
            Chat on WhatsApp
          </span>
        </button>
      </div>

      {/* Sticky Mobile Book Appointment Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#FCF9F6]/95 backdrop-blur-md border-t border-[#F3DCDE] shadow-2xl flex items-center gap-3">
        <a
          href={`tel:${SALON_INFO.phone}`}
          className="p-3 rounded-full border border-[#D8A5AA] text-[#71383F] flex items-center justify-center shrink-0"
        >
          <Phone className="w-5 h-5 text-[#C28289]" />
        </a>

        <button
          onClick={onOpenBooking}
          className="w-full py-3 rounded-full bg-gradient-to-r from-[#71383F] to-[#8E4B54] text-white text-xs font-semibold tracking-wider uppercase shadow-md flex items-center justify-center gap-2 cursor-pointer"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Appointment</span>
        </button>
      </div>
    </>
  );
}
