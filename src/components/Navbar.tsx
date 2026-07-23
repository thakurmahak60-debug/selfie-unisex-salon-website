import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Calendar, Menu, X, Sparkles, MapPin } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface NavbarProps {
  onOpenBooking: (serviceName?: string) => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check active section
      const sections = ['home', 'about', 'services', 'bridal', 'gallery', 'pricing', 'reviews', 'faq', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Bridal', href: '#bridal' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-nav shadow-lg shadow-[#D8A5AA]/10 py-3'
          : 'bg-gradient-to-b from-[#FCF9F6]/90 via-[#FCF9F6]/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#E8C5C8] via-[#F3DCDE] to-[#FAF8F2] p-0.5 shadow-md group-hover:scale-105 transition-transform">
              <div className="w-full h-full rounded-full bg-[#FCF9F6] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#71383F]" />
              </div>
            </div>
            <div>
              <span className="font-serif-luxury text-2xl sm:text-3xl font-semibold tracking-wider text-[#71383F] block leading-none">
                SELFIE
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#C28289] uppercase font-medium block mt-1">
                Unisex Salon • TI Mall
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-[#FFF9F9]/80 backdrop-blur-md px-5 py-2 rounded-full border border-[#F3DCDE]/80 shadow-xs">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 relative ${
                    isActive
                      ? 'text-[#71383F] bg-[#F9EFEF]'
                      : 'text-[#6A5A58] hover:text-[#71383F] hover:bg-[#FDF8F8]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-full bg-[#F3DCDE]/50 -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${SALON_INFO.phone}`}
              className="flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold tracking-wider text-[#71383F] hover:bg-[#F9EFEF] transition-colors border border-transparent hover:border-[#F3DCDE]"
            >
              <Phone className="w-3.5 h-3.5 text-[#C28289]" />
              <span>{SALON_INFO.phone}</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="relative group overflow-hidden rounded-full bg-gradient-to-r from-[#71383F] to-[#8E4B54] text-white px-5 py-2.5 text-xs font-semibold tracking-widest uppercase shadow-md shadow-[#71383F]/20 hover:shadow-lg hover:shadow-[#71383F]/30 transition-all active:scale-98 flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenBooking()}
              className="bg-[#71383F] text-white p-2 rounded-full text-xs font-medium flex items-center justify-center shadow-xs"
              aria-label="Book appointment"
            >
              <Calendar className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-[#71383F] hover:bg-[#F9EFEF] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#FCF9F6]/95 backdrop-blur-xl border-b border-[#E8C5C8]/40 overflow-hidden shadow-xl"
          >
            <div className="px-6 pt-4 pb-8 space-y-3">
              <div className="grid grid-cols-2 gap-2 pb-4 border-b border-[#F3DCDE]">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="px-4 py-2.5 rounded-xl text-sm font-medium text-[#4A3E3D] hover:bg-[#F9EFEF] hover:text-[#71383F] transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="pt-2 space-y-3">
                <div className="flex items-center gap-2 text-xs text-[#71383F] bg-[#FAF5F0] p-3 rounded-xl border border-[#F3DCDE]">
                  <MapPin className="w-4 h-4 text-[#C28289] shrink-0" />
                  <span>TI Mall, 3rd Floor, MG Road, Indore</span>
                </div>

                <a
                  href={`tel:${SALON_INFO.phone}`}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-[#D8A5AA] text-[#71383F] font-medium text-sm hover:bg-[#F9EFEF]"
                >
                  <Phone className="w-4 h-4 text-[#C28289]" />
                  <span>Call {SALON_INFO.phone}</span>
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3.5 rounded-xl bg-[#71383F] text-white font-medium text-sm tracking-wider uppercase shadow-md flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment Now</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
