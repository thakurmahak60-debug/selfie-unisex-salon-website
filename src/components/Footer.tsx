import { SALON_INFO } from '../data/salonData';
import { Sparkles, Heart, Phone, Mail, MapPin, Instagram, Facebook, MessageSquare, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export default function Footer({ onOpenBooking }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#4A3E3D] text-[#FAF5F0] pt-16 pb-12 relative overflow-hidden">
      
      {/* Soft Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 bg-gradient-to-t from-[#2A1E1D]/60 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#6A5A58]/50">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#E8C5C8] text-[#71383F] flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif-luxury text-2xl tracking-wide text-[#FAF5F0] block leading-none">
                  SELFIE
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[#E8C5C8] uppercase block mt-1">
                  Unisex Salon • TI Mall
                </span>
              </div>
            </div>

            <p className="text-xs text-[#D8C2C0] leading-relaxed max-w-sm">
              Indore’s premier unisex salon and spa destination. Experience precision hair transformations, royal HD bridal makeup, and clinical skin rejuvenation at TI Mall, MG Road.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://instagram.com/${SALON_INFO.instagram}`}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#6A5A58]/40 hover:bg-[#E8C5C8] hover:text-[#71383F] flex items-center justify-center transition-colors text-[#FAF5F0]"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={`https://facebook.com/${SALON_INFO.facebook}`}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#6A5A58]/40 hover:bg-[#E8C5C8] hover:text-[#71383F] flex items-center justify-center transition-colors text-[#FAF5F0]"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${SALON_INFO.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-105 transition-transform"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif-section text-xl text-[#E8C5C8]">Navigation</h4>
            <ul className="space-y-2 text-xs text-[#D8C2C0] font-medium">
              {['Home', 'About', 'Services', 'Bridal', 'Gallery', 'Pricing', 'Reviews', 'FAQ', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-[#E8C5C8] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif-section text-xl text-[#E8C5C8]">Top Services</h4>
            <ul className="space-y-2 text-xs text-[#D8C2C0] font-medium">
              <li>• Precision Haircuts & Styling</li>
              <li>• Hair Botox & Keratin Smoothening</li>
              <li>• Balayage & Global Hair Color</li>
              <li>• 24K Rose Hydra-Facial</li>
              <li>• HD Royal Bridal Makeup</li>
              <li>• Gel Nail Extensions & 3D Art</li>
              <li>• Men’s Executive Grooming</li>
            </ul>
          </div>

          {/* Working Hours & Address */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif-section text-xl text-[#E8C5C8]">Visit Salon</h4>
            <div className="space-y-2 text-xs text-[#D8C2C0] font-medium">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E8C5C8] shrink-0 mt-0.5" />
                <span>3rd Floor, TI Mall, MG Road, Indore, MP</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E8C5C8] shrink-0" />
                <span>{SALON_INFO.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E8C5C8] shrink-0" />
                <span>{SALON_INFO.email}</span>
              </p>
              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-2.5 rounded-full bg-[#E8C5C8] text-[#71383F] font-semibold text-xs tracking-widest uppercase hover:bg-white transition-colors cursor-pointer"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#B8A2A0] gap-4">
          <p>© {new Date().getFullYear()} Selfie Unisex Salon. All Rights Reserved. TI Mall Indore.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-[#E8C5C8] hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
