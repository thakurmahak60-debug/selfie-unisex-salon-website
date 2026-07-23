import { motion } from 'motion/react';
import { UserCheck, Award, Sparkles, HeartHandshake, Cpu, PiggyBank, ShieldCheck, Smile } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: UserCheck,
      title: 'Professional Stylists',
      desc: 'Top-tier beauty professionals dedicated to perfecting your personalized look.'
    },
    {
      icon: Award,
      title: 'Certified Experts',
      desc: 'Master artists trained at world-renowned academies like L’Oréal & MAC.'
    },
    {
      icon: Sparkles,
      title: 'Premium Products',
      desc: 'Authentic Kerastase, Olaplex, and Dermatologica skin and hair formulas.'
    },
    {
      icon: HeartHandshake,
      title: 'Luxury Experience',
      desc: 'Soft blush aesthetic ambience, calming spa aroma, and plush seating.'
    },
    {
      icon: Cpu,
      title: 'Modern Equipment',
      desc: 'Advanced 24K Hydra-Facial vortex machines and infrared scalp therapy.'
    },
    {
      icon: PiggyBank,
      title: 'Affordable Packages',
      desc: 'Transparent pricing with zero hidden charges and high-value combi plans.'
    },
    {
      icon: ShieldCheck,
      title: 'Excellent Hygiene',
      desc: 'Single-use disposables, UV autoclave sterilization, and hospital-grade sanitization.'
    },
    {
      icon: Smile,
      title: 'Customer Satisfaction',
      desc: '4.9★ Google rating backed by over 680+ glowing client reviews in Indore.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-[#FCF9F6] via-[#FAF5F0] to-[#FCF9F6] relative overflow-hidden">
      
      {/* Decorative Orbs */}
      <div className="absolute -top-20 left-1/3 w-96 h-96 bg-[#F3DCDE]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF9F9] border border-[#F3DCDE] text-[11px] font-medium text-[#71383F] uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#C28289]" />
            <span>Why Choose Us</span>
          </div>
          <h2 className="font-serif-section text-4xl sm:text-5xl lg:text-6xl text-[#4A3E3D] font-normal leading-tight">
            Why Selfie Salon is Indore’s Favorite Choice
          </h2>
          <p className="text-sm sm:text-base text-[#6A5A58] font-normal leading-relaxed tracking-normal max-w-2xl mx-auto">
            We don’t just offer salon services—we craft unforgettable pampering experiences rooted in hygiene, hospitality, and precision beauty.
          </p>
        </div>

        {/* 8 Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="glass-card glass-card-hover p-6 rounded-3xl border border-[#F3DCDE] flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#F9EFEF] to-[#FFF9F9] border border-[#F3DCDE] text-[#71383F] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#71383F] group-hover:text-white transition-all duration-300 shadow-xs">
                    <IconComp className="w-6 h-6 text-[#C28289] group-hover:text-[#E8C5C8]" />
                  </div>

                  <h3 className="font-serif-section text-xl sm:text-2xl font-normal text-[#4A3E3D] mb-2.5 group-hover:text-[#71383F] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#6A5A58] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#F3DCDE]/60 flex items-center justify-between text-[10px] text-[#C28289] font-medium uppercase tracking-widest">
                  <span>TI Mall Excellence</span>
                  <span>0{idx + 1}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
