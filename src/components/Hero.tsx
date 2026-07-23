import { motion } from 'motion/react';
import { Calendar, Phone, Sparkles, Star, MapPin, Award, ArrowRight } from 'lucide-react';
import { SALON_INFO, SALON_IMAGES } from '../data/salonData';

interface HeroProps {
  onOpenBooking: (serviceName?: string) => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden">
      
      {/* Background Soft Gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-radial from-[#F9EFEF] via-[#F3DCDE]/40 to-transparent blur-3xl -z-10 rounded-full opacity-70 animate-pulse pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-radial from-[#FAF8F2] via-[#E8C5C8]/30 to-transparent blur-3xl -z-10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF9F9] border border-[#F3DCDE] shadow-xs text-xs font-medium text-[#71383F]">
              <Sparkles className="w-3.5 h-3.5 text-[#C28289]" />
              <span className="font-medium tracking-widest uppercase text-[11px]">TI Mall • MG Road • Indore</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C28289]" />
              <span className="flex items-center gap-1 text-[#C28289] font-semibold">
                <Star className="w-3 h-3 fill-current" /> {SALON_INFO.googleRating}
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif-luxury text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-[#4A3E3D] font-bold leading-[1.08] tracking-tight">
              Luxury Hair <span className="text-[#C28289] font-normal italic">•</span> Beauty{' '}
              <span className="text-[#C28289] font-normal italic">•</span> Makeup Experience{' '}
              <span className="block mt-3 shimmer-text font-bold">in Indore</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-[#6A5A58] font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed tracking-normal">
              Professional Hair Styling, Hair Treatments, Bridal Makeup, Skin Care, Nail Services, and Premium Grooming for Men & Women.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-4">
              <button
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#71383F] via-[#8E4B54] to-[#71383F] text-white font-semibold text-xs tracking-widest uppercase shadow-lg shadow-[#71383F]/25 hover:shadow-xl hover:shadow-[#71383F]/35 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>

              <button
                onClick={scrollToServices}
                className="w-full sm:w-auto px-7 py-4 rounded-full bg-[#FFF9F9] hover:bg-[#F9EFEF] text-[#71383F] font-semibold text-xs tracking-widest uppercase border border-[#F3DCDE] hover:border-[#D8A5AA] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>View Services</span>
                <ArrowRight className="w-4 h-4 text-[#C28289]" />
              </button>

              <a
                href={`tel:${SALON_INFO.phone}`}
                className="w-full sm:w-auto px-6 py-4 rounded-full bg-transparent text-[#71383F] hover:bg-[#F9EFEF]/60 font-semibold text-xs tracking-widest uppercase transition-colors flex items-center justify-center gap-2 border border-transparent hover:border-[#F3DCDE]"
              >
                <Phone className="w-4 h-4 text-[#C28289]" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Key Trust Highlights */}
            <div className="pt-8 border-t border-[#F3DCDE]/60 grid grid-cols-3 gap-4 max-w-xl mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <p className="font-serif-luxury text-3xl lg:text-4xl font-bold text-[#71383F]">10k+</p>
                <p className="text-[11px] font-medium text-[#8C7A78] uppercase tracking-widest mt-1">Happy Clients</p>
              </div>

              <div className="text-center lg:text-left border-x border-[#F3DCDE]/80 px-2">
                <p className="font-serif-luxury text-3xl lg:text-4xl font-bold text-[#71383F]">15+</p>
                <p className="text-[11px] font-medium text-[#8C7A78] uppercase tracking-widest mt-1">Master Artists</p>
              </div>

              <div className="text-center lg:text-left">
                <p className="font-serif-luxury text-3xl lg:text-4xl font-bold text-[#71383F]">4.9 ★</p>
                <p className="text-[11px] font-medium text-[#8C7A78] uppercase tracking-widest mt-1">680+ Reviews</p>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Hero Visual Feature Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            {/* Outer Decorative Glow & Ring */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-tr from-[#E8C5C8] via-[#FAF8F2] to-[#F3DCDE] opacity-60 blur-xl pointer-events-none" />

              <div className="relative rounded-[2rem] overflow-hidden border border-[#F3DCDE] bg-[#FFF9F9] shadow-2xl shadow-[#D8A5AA]/20 group">
                <img
                  src={SALON_IMAGES.mainInterior}
                  alt="Selfie Unisex Salon Interior TI Mall Indore"
                  referrerPolicy="no-referrer"
                  className="w-full h-[420px] sm:h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#4A3E3D]/60 via-transparent to-transparent pointer-events-none" />

                {/* Floating Glassmorphism Badge Bottom Right */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                  className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl glass-card border border-white/60 shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#71383F] text-white flex items-center justify-center shrink-0">
                        <Award className="w-5 h-5 text-[#E8C5C8]" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[#4A3E3D]">Luxury Ambience & Hygiene</p>
                        <p className="text-[11px] text-[#6A5A58]">TI Mall, MG Road, Indore</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#F9EFEF] text-[#71383F] border border-[#F3DCDE]">
                      Open Now
                    </span>
                  </div>
                </motion.div>

                {/* Floating Badge Top Left */}
                <div className="absolute top-5 left-5 px-3.5 py-1.5 rounded-full bg-[#FCF9F6]/90 backdrop-blur-md text-[#71383F] text-xs font-semibold border border-[#F3DCDE] shadow-xs flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C28289]" />
                  <span>3rd Floor, TI Mall</span>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
