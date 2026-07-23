import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[100] bg-[#FAF5F0] flex flex-col items-center justify-center p-6 text-center select-none"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col items-center"
          >
            {/* Logo Emblem */}
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#E8C5C8] via-[#F3DCDE] to-[#FAF8F2] p-0.5 shadow-xl shadow-[#D8A5AA]/20 mb-4 flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-[#FCF9F6] flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-[#71383F] animate-pulse" />
              </div>
            </div>

            <h1 className="font-serif-luxury text-3xl md:text-4xl text-[#71383F] tracking-widest uppercase font-light">
              Selfie
            </h1>
            <p className="text-xs tracking-[0.3em] uppercase text-[#C28289] mt-1 font-medium">
              Unisex Salon • TI Mall Indore
            </p>

            <div className="w-48 h-0.5 bg-[#F3DCDE] rounded-full mt-6 overflow-hidden relative">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
                className="w-1/2 h-full bg-gradient-to-r from-[#C28289] to-[#71383F] rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
