import { motion } from 'motion/react';
import { TEAM_MEMBERS } from '../data/salonData';
import { Sparkles, Award, Calendar, Scissors } from 'lucide-react';

interface TeamProps {
  onOpenBooking: (stylistName?: string) => void;
}

export default function Team({ onOpenBooking }: TeamProps) {
  return (
    <section className="py-20 lg:py-28 bg-[#FAF5F0]/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF9F9] border border-[#F3DCDE] text-[11px] font-medium text-[#71383F] uppercase tracking-widest">
            <Scissors className="w-3.5 h-3.5 text-[#C28289]" />
            <span>Master Artists</span>
          </div>
          <h2 className="font-serif-section text-4xl sm:text-5xl lg:text-6xl text-[#4A3E3D] font-normal leading-tight">
            Meet Our Senior Stylists & Artists
          </h2>
          <p className="text-sm sm:text-base text-[#6A5A58] font-normal leading-relaxed tracking-normal max-w-2xl mx-auto">
            Internationally certified beauty professionals with years of experience bringing runway elegance and personal consultation to TI Mall Indore.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card glass-card-hover rounded-3xl overflow-hidden border border-[#F3DCDE] flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4A3E3D]/70 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-[#FCF9F6]/90 backdrop-blur-md text-[#71383F] text-[10px] font-bold uppercase tracking-wider border border-[#F3DCDE]">
                    {member.experience} Exp.
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="font-serif-section text-2xl font-normal text-[#4A3E3D] group-hover:text-[#71383F] transition-colors leading-snug">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#C28289] mt-0.5">
                      {member.role}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#6A5A58] leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>

                  <div className="pt-2 border-t border-[#F3DCDE]/70">
                    <p className="text-[10px] uppercase tracking-wider text-[#8C7A78] font-bold">Specialization</p>
                    <p className="text-xs text-[#71383F] font-medium mt-0.5">{member.specialization}</p>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => onOpenBooking(`Consultation with ${member.name}`)}
                  className="w-full py-2.5 rounded-full border border-[#D8A5AA] text-[#71383F] hover:bg-[#71383F] hover:text-white text-xs font-semibold tracking-widest uppercase transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book {member.name.split(' ')[0]}</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
