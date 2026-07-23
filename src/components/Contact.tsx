import { motion } from 'motion/react';
import { SALON_INFO } from '../data/salonData';
import { MapPin, Phone, Mail, Clock, Navigation, MessageSquare, Instagram, Facebook, ExternalLink } from 'lucide-react';

export default function Contact() {
  const handleDirections = () => {
    window.open('https://maps.google.com/?q=Treasure+Island+Mall+MG+Road+Indore', '_blank');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative bg-[#FCF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF9F9] border border-[#F3DCDE] text-[11px] font-medium text-[#71383F] uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5 text-[#C28289]" />
            <span>Visit Us</span>
          </div>
          <h2 className="font-serif-section text-4xl sm:text-5xl lg:text-6xl text-[#4A3E3D] font-normal leading-tight">
            Visit Selfie Unisex Salon in Indore
          </h2>
          <p className="text-sm sm:text-base text-[#6A5A58] font-normal leading-relaxed tracking-normal max-w-2xl mx-auto">
            Located on the 3rd Floor of Treasure Island Mall (TI Mall), MG Road, Indore.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-8 rounded-3xl border border-[#F3DCDE] space-y-6 shadow-md">
              
              <h3 className="font-serif-section text-2xl font-normal text-[#71383F] pb-4 border-b border-[#F3DCDE]">
                Concierge & Directions
              </h3>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-[#F9EFEF] text-[#71383F] flex items-center justify-center shrink-0 border border-[#F3DCDE]">
                  <MapPin className="w-5 h-5 text-[#C28289]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#71383F]">Address</h4>
                  <p className="text-xs text-[#6A5A58] mt-1 leading-relaxed">
                    {SALON_INFO.address}
                  </p>
                  <p className="text-[11px] text-[#C28289] font-medium mt-0.5">
                    Landmark: {SALON_INFO.landmark}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-[#F9EFEF] text-[#71383F] flex items-center justify-center shrink-0 border border-[#F3DCDE]">
                  <Phone className="w-5 h-5 text-[#C28289]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#71383F]">Phone Numbers</h4>
                  <a href={`tel:${SALON_INFO.phone}`} className="text-xs font-semibold text-[#4A3E3D] hover:text-[#71383F] block mt-1">
                    {SALON_INFO.phone}
                  </a>
                  <a href={`tel:${SALON_INFO.alternatePhone}`} className="text-xs text-[#6A5A58] hover:text-[#71383F] block">
                    {SALON_INFO.alternatePhone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-[#F9EFEF] text-[#71383F] flex items-center justify-center shrink-0 border border-[#F3DCDE]">
                  <Mail className="w-5 h-5 text-[#C28289]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#71383F]">Email Inquiry</h4>
                  <a href={`mailto:${SALON_INFO.email}`} className="text-xs text-[#6A5A58] hover:text-[#71383F] block mt-1">
                    {SALON_INFO.email}
                  </a>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-[#F9EFEF] text-[#71383F] flex items-center justify-center shrink-0 border border-[#F3DCDE]">
                  <Clock className="w-5 h-5 text-[#C28289]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#71383F]">Business Hours</h4>
                  <p className="text-xs text-[#6A5A58] mt-1 font-medium">
                    {SALON_INFO.operatingHours}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#F3DCDE] grid grid-cols-2 gap-3">
                <a
                  href={`tel:${SALON_INFO.phone}`}
                  className="py-3 rounded-full bg-[#71383F] text-white text-xs font-semibold uppercase tracking-wider shadow-md hover:bg-[#8E4B54] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>

                <button
                  onClick={handleDirections}
                  className="py-3 rounded-full border border-[#D8A5AA] text-[#71383F] hover:bg-[#F9EFEF] text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Navigation className="w-4 h-4 text-[#C28289]" />
                  <span>Directions</span>
                </button>
              </div>

            </div>
          </div>

          {/* Embedded Google Map Frame */}
          <div className="lg:col-span-7">
            <div className="glass-card p-3 rounded-3xl border border-[#F3DCDE] shadow-md h-[480px] overflow-hidden relative">
              <iframe
                title="Selfie Unisex Salon Location TI Mall Indore"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.123456789!2d75.8821!3d22.7231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd0d8324f61f%3A0x6b69b61d33123!2sTreasure%20Island%20Mall!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '1.25rem' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Overlay location tag */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-card border border-white/80 shadow-lg flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#71383F] text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#E8C5C8]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#4A3E3D]">TI Mall, MG Road, Indore</p>
                    <p className="text-[11px] text-[#6A5A58]">Ample Mall Parking Available</p>
                  </div>
                </div>

                <button
                  onClick={handleDirections}
                  className="px-3.5 py-1.5 rounded-full bg-[#71383F] text-white text-[11px] font-semibold flex items-center gap-1 hover:bg-[#8E4B54] transition-colors cursor-pointer"
                >
                  <span>Open Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
