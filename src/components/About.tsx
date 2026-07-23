import { motion } from 'motion/react';
import { Sparkles, ShieldCheck, Award, Heart, CheckCircle2, UserCheck, Droplet, Coffee } from 'lucide-react';
import { SALON_INFO, SALON_IMAGES } from '../data/salonData';

interface AboutProps {
  onOpenBooking: () => void;
}

export default function About({ onOpenBooking }: AboutProps) {
  const pillars = [
    {
      icon: UserCheck,
      title: 'Professional Stylists',
      desc: 'Internationally certified hair & makeup artists with years of red-carpet experience.'
    },
    {
      icon: Award,
      title: 'Certified Experts',
      desc: 'Continuous training from L’Oréal, Kerastase, and MAC Academies.'
    },
    {
      icon: Droplet,
      title: 'Luxury Products',
      desc: '100% genuine, ammonia-free, skin-dermatologist approved premium formulations.'
    },
    {
      icon: ShieldCheck,
      title: 'Premium Hygiene',
      desc: 'Autoclave UV sterilized instruments, single-use robes, and hospital-grade sanitization.'
    },
    {
      icon: Coffee,
      title: 'Comfortable Environment',
      desc: 'Soft blush aesthetics, soothing spa music, plush teal seating, and artisan coffee/tea.'
    },
    {
      icon: Heart,
      title: 'Personalized Consultation',
      desc: 'Every service begins with a tailored analysis of your face structure, hair texture, and skin tone.'
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative bg-[#FAF5F0]/60">
      
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-[#F3DCDE]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF9F9] border border-[#F3DCDE] text-[11px] font-medium text-[#71383F] uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#C28289]" />
            <span>Welcome To Luxury</span>
          </div>
          <h2 className="font-serif-section text-4xl sm:text-5xl lg:text-6xl text-[#4A3E3D] font-normal leading-tight">
            Indore’s Premier Unisex Beauty & Spa Destination
          </h2>
          <p className="text-sm sm:text-base text-[#6A5A58] font-normal leading-relaxed tracking-normal max-w-2xl mx-auto">
            Located in the iconic Treasure Island Mall (TI Mall) on MG Road, Selfie Unisex Salon blends world-class artistry with calm, relaxing, and soothing luxury.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Image Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-[#F3DCDE] shadow-xl group">
              <img
                src={SALON_IMAGES.reception}
                alt="Selfie Salon Reception TI Mall"
                referrerPolicy="no-referrer"
                className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#71383F]/70 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <p className="font-serif-section text-2xl font-normal">Serene Spa Atmosphere</p>
                <p className="text-xs text-[#F9EFEF]/90 leading-relaxed">Crafted specifically for your comfort, privacy, and pampering.</p>
              </div>
            </div>

            {/* Small floating badge */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#FCF9F6] p-5 rounded-2xl border border-[#F3DCDE] shadow-xl hidden sm:block max-w-[220px]">
              <p className="font-serif-luxury text-3xl font-bold text-[#71383F]">100%</p>
              <p className="text-xs text-[#6A5A58] mt-1 leading-normal font-normal">Authentic Premium Products & Guaranteed Satisfaction</p>
            </div>
          </motion.div>

          {/* About Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-4 text-[#4A3E3D] text-sm sm:text-base leading-relaxed">
              <h3 className="font-serif-section text-3xl sm:text-4xl text-[#71383F] font-normal leading-snug">
                Where Beauty Meets Tranquility & Precision Artistry
              </h3>

              <p className="leading-relaxed">
                At <strong>Selfie Unisex Salon</strong>, we believe every haircut, facial, and makeup application is an art form. Established in the heart of Indore at <strong>TI Mall, MG Road</strong>, our sanctuary was designed to escape the noise of the city and step into an oasis of pure elegance, calm, and luxury.
              </p>

              <p className="leading-relaxed">
                Whether you visit for an express hair makeover, a restorative deep-tissue hair botox session, precision beard architecture, or a breathtaking royal HD bridal makeup, our team of certified master stylists ensures an exceptional customer experience tailored specifically to your desires.
              </p>
            </div>

            {/* Quick checkmark points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {[
                'TI Mall 3rd Floor Prime Accessibility',
                'Separate Private Bridal & Spa Suites',
                '100% UV Autoclave Sanitized Tools',
                'Personalized Hair & Skin Consultations',
                'Unisex Hair, Skin, Nails & Grooming',
                'Complimentary Gourmet Beverages'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs font-medium text-[#4A3E3D]">
                  <CheckCircle2 className="w-4 h-4 text-[#C28289] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenBooking}
                className="px-8 py-4 rounded-full bg-[#71383F] hover:bg-[#8E4B54] text-white text-xs font-semibold tracking-widest uppercase shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                Experience Selfie Salon Today
              </button>
            </div>
          </motion.div>

        </div>

        {/* 6 Core Pillars Grid */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="font-serif-section text-3xl sm:text-4xl text-[#71383F] font-normal">
              The Selfie Salon Standard of Excellence
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="glass-card glass-card-hover p-7 rounded-2xl relative"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#F9EFEF] text-[#71383F] border border-[#F3DCDE] flex items-center justify-center mb-5">
                    <IconComp className="w-6 h-6 text-[#C28289]" />
                  </div>
                  <h4 className="font-serif-section text-xl sm:text-2xl font-normal text-[#4A3E3D] mb-3">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#6A5A58] leading-relaxed">
                    {pillar.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
