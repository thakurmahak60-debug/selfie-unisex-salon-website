import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES, SALON_INFO } from '../data/salonData';
import { BookingDetails } from '../types';
import { X, Calendar, Clock, User, Phone, Mail, Sparkles, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedService?: string;
}

export default function AppointmentModal({
  isOpen,
  onClose,
  preSelectedService = ''
}: AppointmentModalProps) {
  const [formData, setFormData] = useState<BookingDetails>({
    name: '',
    phone: '',
    email: '',
    service: preSelectedService || SERVICES[0].title,
    date: new Date().toISOString().split('T')[0],
    time: '11:00 AM',
    gender: 'women',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    if (preSelectedService) {
      setFormData((prev) => ({ ...prev, service: preSelectedService }));
    }
  }, [preSelectedService]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Generate reference code
    const ref = 'SLF-' + Math.floor(100000 + Math.random() * 900000);

    setTimeout(() => {
      setIsSubmitting(false);
      setBookingRef(ref);
      setIsSuccess(true);
      
      // Save locally to localStorage
      try {
        const existing = JSON.parse(localStorage.getItem('selfie_salon_bookings') || '[]');
        localStorage.setItem('selfie_salon_bookings', JSON.stringify([...existing, { ...formData, ref, createdAt: new Date() }]));
      } catch (err) {
        console.error('Storage error:', err);
      }
    }, 1000);
  };

  const sendWhatsAppConfirmation = () => {
    const text = `*New Booking Request - Selfie Salon TI Mall*\n\n` +
      `*Ref ID:* ${bookingRef}\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Service:* ${formData.service}\n` +
      `*Date:* ${formData.date}\n` +
      `*Time:* ${formData.time}\n` +
      `*Category:* ${formData.gender.toUpperCase()}\n` +
      (formData.notes ? `*Notes:* ${formData.notes}\n\n` : '\n') +
      `Please confirm my appointment slot at TI Mall Indore. Thank you!`;

    window.open(`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const resetModal = () => {
    setIsSuccess(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[80] bg-[#2A1E1D]/60 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-[#FCF9F6] border border-[#F3DCDE] max-w-xl w-full rounded-3xl overflow-hidden shadow-2xl relative my-8"
        >
          {/* Close Button */}
          <button
            onClick={resetModal}
            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#FFF9F9] hover:bg-[#F9EFEF] text-[#71383F] flex items-center justify-center shadow-md transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSuccess ? (
            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Modal Header */}
              <div className="space-y-1.5 text-center sm:text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F9EFEF] text-[#71383F] text-[10px] font-bold uppercase tracking-wider border border-[#F3DCDE]">
                  <Sparkles className="w-3 h-3 text-[#C28289]" />
                  <span>TI Mall • MG Road Indore</span>
                </div>
                <h3 className="font-serif-section text-3xl sm:text-4xl font-normal text-[#4A3E3D]">
                  Book Luxury Appointment
                </h3>
                <p className="text-xs sm:text-sm text-[#6A5A58]">
                  Select your preferred service, date, and time. Our concierge will reserve your slot.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Gender Preference */}
                <div className="grid grid-cols-3 gap-2 p-1 rounded-2xl bg-[#FFF9F9] border border-[#F3DCDE]">
                  {[
                    { id: 'women', label: "Women's Beauty" },
                    { id: 'men', label: "Men's Grooming" },
                    { id: 'couple', label: 'Couple / Bridal' }
                  ].map((g) => (
                    <button
                      type="button"
                      key={g.id}
                      onClick={() => setFormData({ ...formData, gender: g.id as any })}
                      className={`py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                        formData.gender === g.id
                          ? 'bg-[#71383F] text-white shadow-xs'
                          : 'text-[#6A5A58] hover:text-[#71383F]'
                      }`}
                    >
                      {g.label}
                    </button>
                  ))}
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-[#71383F] uppercase tracking-wider block">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-[#C28289] absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Mahak Thakur"
                        className="w-full pl-10 pr-4 py-3 rounded-2xl bg-[#FFF9F9] border border-[#F3DCDE] text-xs text-[#4A3E3D] focus:outline-none focus:border-[#C28289]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-[#71383F] uppercase tracking-wider block">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-[#C28289] absolute left-3.5 top-3.5" />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98930 00000"
                        className="w-full pl-10 pr-4 py-3 rounded-2xl bg-[#FFF9F9] border border-[#F3DCDE] text-xs text-[#4A3E3D] focus:outline-none focus:border-[#C28289]"
                      />
                    </div>
                  </div>
                </div>

                {/* Email & Service */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-[#71383F] uppercase tracking-wider block">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-[#C28289] absolute left-3.5 top-3.5" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full pl-10 pr-4 py-3 rounded-2xl bg-[#FFF9F9] border border-[#F3DCDE] text-xs text-[#4A3E3D] focus:outline-none focus:border-[#C28289]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-[#71383F] uppercase tracking-wider block">
                      Select Service *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#FFF9F9] border border-[#F3DCDE] text-xs text-[#4A3E3D] focus:outline-none focus:border-[#C28289] cursor-pointer"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title} (₹{s.priceStartingFrom}+)
                        </option>
                      ))}
                      <option value="Bridal & Transformation Consultation">Royal Bridal Consultation</option>
                      <option value="Custom Beauty Combo">Custom Multi-Service Package</option>
                    </select>
                  </div>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-[#71383F] uppercase tracking-wider block">
                      Preferred Date *
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-[#C28289] absolute left-3.5 top-3.5" />
                      <input
                        type="date"
                        required
                        value={formData.date}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-2xl bg-[#FFF9F9] border border-[#F3DCDE] text-xs text-[#4A3E3D] focus:outline-none focus:border-[#C28289]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-[#71383F] uppercase tracking-wider block">
                      Preferred Time *
                    </label>
                    <div className="relative">
                      <Clock className="w-4 h-4 text-[#C28289] absolute left-3.5 top-3.5" />
                      <select
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-2xl bg-[#FFF9F9] border border-[#F3DCDE] text-xs text-[#4A3E3D] focus:outline-none focus:border-[#C28289] cursor-pointer"
                      >
                        {['10:30 AM', '11:30 AM', '01:00 PM', '02:30 PM', '04:00 PM', '05:30 PM', '07:00 PM'].map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-[#71383F] uppercase tracking-wider block">
                    Special Requests / Notes
                  </label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Mention hair length, skin sensitivity, or specific stylist request..."
                    className="w-full p-3 rounded-2xl bg-[#FFF9F9] border border-[#F3DCDE] text-xs text-[#4A3E3D] focus:outline-none focus:border-[#C28289]"
                  />
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-gradient-to-r from-[#71383F] to-[#8E4B54] text-white text-xs font-semibold tracking-widest uppercase shadow-lg shadow-[#71383F]/20 hover:shadow-xl hover:shadow-[#71383F]/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Confirming Reservation...</span>
                  ) : (
                    <>
                      <span>Confirm & Book Appointment</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          ) : (
            /* Success Confirmation Screen */
            <div className="p-8 space-y-6 text-center">
              <div className="w-16 h-16 rounded-full bg-[#1C9B8E]/10 border border-[#1C9B8E]/30 text-[#1C9B8E] flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10 animate-bounce" />
              </div>

              <div className="space-y-2">
                <span className="px-3.5 py-1 rounded-full bg-[#FAF5F0] text-[#71383F] text-xs font-mono font-bold border border-[#F3DCDE]">
                  REF: {bookingRef}
                </span>
                <h3 className="font-serif-section text-3xl sm:text-4xl text-[#71383F] font-normal">
                  Appointment Reserved!
                </h3>
                <p className="text-xs text-[#6A5A58] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Your slot for <strong>{formData.service}</strong> has been reserved for <strong>{formData.date} at {formData.time}</strong> at Selfie Salon, TI Mall Indore.
                </p>
              </div>

              {/* Booking Summary Box */}
              <div className="p-4 rounded-2xl bg-[#FFF9F9] border border-[#F3DCDE] text-left text-xs space-y-2 max-w-sm mx-auto">
                <div className="flex justify-between">
                  <span className="text-[#8C7A78]">Location:</span>
                  <span className="font-semibold text-[#4A3E3D]">TI Mall, 3rd Floor, MG Road</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8C7A78]">Date & Time:</span>
                  <span className="font-semibold text-[#4A3E3D]">{formData.date} @ {formData.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8C7A78]">Phone:</span>
                  <span className="font-semibold text-[#4A3E3D]">{formData.phone}</span>
                </div>
              </div>

              <div className="pt-2 space-y-3 max-w-sm mx-auto">
                <button
                  onClick={sendWhatsAppConfirmation}
                  className="w-full py-3 rounded-full bg-[#25D366] text-white text-xs font-semibold tracking-wider uppercase shadow-md hover:bg-[#20bd5a] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Send Confirmation via WhatsApp</span>
                </button>

                <button
                  onClick={resetModal}
                  className="w-full py-2.5 rounded-full border border-[#D8A5AA] text-[#71383F] text-xs font-medium hover:bg-[#F9EFEF] transition-colors cursor-pointer"
                >
                  Back to Website
                </button>
              </div>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
