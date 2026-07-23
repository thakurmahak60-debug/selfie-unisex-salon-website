import { useState, useRef, TouchEvent, MouseEvent } from 'react';
import { Sparkles, MoveHorizontal } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  title?: string;
  subtitle?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'Before Hair Therapy',
  afterLabel = 'After Keratin Botox',
  title = 'Real Client Hair Transformation',
  subtitle = 'Drag the slider to experience the mirror-like shine and frizz reduction achieved at Selfie Salon.'
}: BeforeAfterSliderProps) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let pos = (x / rect.width) * 100;
    if (pos < 0) pos = 0;
    if (pos > 100) pos = 100;
    setSliderPos(pos);
  };

  const handleTouchMove = (e: TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (e.buttons === 1) {
      handleMove(e.clientX);
    }
  };

  return (
    <div className="space-y-4">
      {title && (
        <div className="text-center max-w-xl mx-auto space-y-2 mb-6">
          <h4 className="font-serif-section text-2xl sm:text-3xl text-[#71383F] font-normal">{title}</h4>
          <p className="text-xs sm:text-sm text-[#6A5A58] leading-relaxed">{subtitle}</p>
        </div>
      )}

      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onClick={(e) => handleMove(e.clientX)}
        className="relative w-full h-[360px] sm:h-[420px] rounded-3xl overflow-hidden select-none border border-[#F3DCDE] shadow-xl cursor-ew-resize group"
      >
        {/* After Image (Background) */}
        <img
          src={afterImage}
          alt={afterLabel}
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#71383F] text-white text-[11px] font-semibold uppercase tracking-wider shadow-md">
          {afterLabel}
        </div>

        {/* Before Image (Clipped Foreground) */}
        <div
          className="absolute top-0 bottom-0 left-0 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <img
            src={beforeImage}
            alt={beforeLabel}
            referrerPolicy="no-referrer"
            className="absolute top-0 bottom-0 left-0 max-w-none h-full object-cover pointer-events-none"
            style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%' }}
          />
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#FAF5F0]/90 backdrop-blur-md text-[#71383F] text-[11px] font-semibold uppercase tracking-wider border border-[#F3DCDE]">
            {beforeLabel}
          </div>
        </div>

        {/* Slider Handle Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none z-20"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-[#71383F] shadow-2xl border border-[#F3DCDE] flex items-center justify-center">
            <MoveHorizontal className="w-5 h-5 text-[#71383F]" />
          </div>
        </div>
      </div>
    </div>
  );
}
