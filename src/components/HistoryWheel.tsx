'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { WheelCategory } from '@/types/question';
import { WHEEL_CATEGORIES, WheelCategoryMeta } from '@/data/questions';
import { soundManager } from '@/utils/sound';
import { Sparkles, HelpCircle } from 'lucide-react';

interface HistoryWheelProps {
  onSpinComplete: (category: WheelCategory) => void;
  isSpinning: boolean;
  disabled?: boolean;
}

export const HistoryWheel: React.FC<HistoryWheelProps> = ({
  onSpinComplete,
  isSpinning: externalIsSpinning,
  disabled = false,
}) => {
  const [internalSpinning, setInternalSpinning] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<WheelCategoryMeta | null>(null);
  const [manualFallbackOpen, setManualFallbackOpen] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animFrameIdRef = useRef<number | null>(null);
  const lastTickAngleRef = useRef<number>(0);

  const numSegments = WHEEL_CATEGORIES.length;
  const segmentAngle = 360 / numSegments; // 45 degrees

  // Draw the ornamental History Wheel on Canvas
  const drawWheel = useCallback((currentRotation: number, winningCategory?: WheelCategoryMeta | null) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const size = canvas.width;
    const center = size / 2;
    const radius = center - 20;

    ctx.clearRect(0, 0, size, size);

    // 1. Draw outer antique brass border with studs
    ctx.save();
    ctx.beginPath();
    ctx.arc(center, center, radius + 12, 0, 2 * Math.PI);
    ctx.fillStyle = '#8C6239';
    ctx.fill();

    // Outer gold trim
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#D4AF37';
    ctx.stroke();

    // Antique rim studs
    const numStuds = 32;
    for (let i = 0; i < numStuds; i++) {
      const angle = (i * 2 * Math.PI) / numStuds;
      const x = center + (radius + 6) * Math.cos(angle);
      const y = center + (radius + 6) * Math.sin(angle);
      ctx.beginPath();
      ctx.arc(x, y, 2.5, 0, 2 * Math.PI);
      ctx.fillStyle = '#FDFBF7';
      ctx.fill();
    }
    ctx.restore();

    // 2. Draw Wheel Segments
    const radCurrentRotation = (currentRotation * Math.PI) / 180;

    WHEEL_CATEGORIES.forEach((cat, index) => {
      const startAngle = radCurrentRotation + (index * segmentAngle * Math.PI) / 180 - Math.PI / 2;
      const endAngle = startAngle + (segmentAngle * Math.PI) / 180;

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(center, center);
      ctx.arc(center, center, radius, startAngle, endAngle);
      ctx.closePath();

      // Segment fill color
      ctx.fillStyle = cat.color;
      ctx.fill();

      // Segment inner border
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#FFFFFF88';
      ctx.stroke();

      // Highlight winning segment if stopped
      if (winningCategory && winningCategory.id === cat.id) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.28)';
        ctx.fill();
      }

      // 3. Draw Category Text & Icon
      ctx.save();
      ctx.translate(center, center);
      ctx.rotate(startAngle + (segmentAngle * Math.PI) / 360);

      // Icon
      ctx.font = '24px serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(cat.icon, radius * 0.72, 0);

      // Label
      ctx.font = 'bold 12px system-ui, -apple-system, sans-serif';
      ctx.fillStyle = '#FFFFFF';
      ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
      ctx.shadowBlur = 4;
      ctx.shadowOffsetX = 1;
      ctx.shadowOffsetY = 1;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // Split long category labels into two lines for perfect readability
      const words = cat.name.split(' ');
      if (words.length > 1 && cat.name.length > 9) {
        ctx.fillText(words[0], radius * 0.44, -7);
        ctx.fillText(words.slice(1).join(' '), radius * 0.44, 8);
      } else {
        ctx.fillText(cat.name, radius * 0.44, 0);
      }

      ctx.restore();
      ctx.restore();
    });

    // 4. Center Hub / Compass Rose
    ctx.save();
    // Shadow under center hub
    ctx.beginPath();
    ctx.arc(center, center, 44, 0, 2 * Math.PI);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fill();

    // Outer hub ring
    ctx.beginPath();
    ctx.arc(center, center, 40, 0, 2 * Math.PI);
    ctx.fillStyle = '#2D2B28';
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#D4AF37';
    ctx.stroke();

    // Inner gold core
    ctx.beginPath();
    ctx.arc(center, center, 28, 0, 2 * Math.PI);
    ctx.fillStyle = '#D4AF37';
    ctx.fill();

    // Compass star
    ctx.fillStyle = '#FDFBF7';
    ctx.font = 'bold 18px serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('✦', center, center);
    ctx.restore();
  }, [segmentAngle]);

  // Initial draw
  useEffect(() => {
    drawWheel(rotationAngle, selectedCategory);
  }, [drawWheel, rotationAngle, selectedCategory]);

  // Spin the wheel with physics-based deceleration
  const spinWheel = (forcedCategory?: WheelCategory) => {
    if (internalSpinning || externalIsSpinning || disabled) return;

    setInternalSpinning(true);
    setSelectedCategory(null);

    // Pick random category or use forcedCategory
    const targetCategoryMeta = forcedCategory
      ? WHEEL_CATEGORIES.find(c => c.id === forcedCategory) || WHEEL_CATEGORIES[0]
      : WHEEL_CATEGORIES[Math.floor(Math.random() * WHEEL_CATEGORIES.length)];

    const targetIndex = WHEEL_CATEGORIES.findIndex(c => c.id === targetCategoryMeta.id);

    // Calculate rotation:
    // Pointer is at TOP (12 o'clock = 0 deg in our coordinate system relative to top pointer).
    // Segment index `i` center is at `i * segmentAngle + segmentAngle / 2`.
    // When wheel rotates by angle R, segment at top is given by: (360 - (R % 360)) = i * 45 + 22.5
    // => R % 360 = 360 - (targetIndex * 45 + 22.5).
    const randomJitter = (Math.random() - 0.5) * (segmentAngle * 0.6); // ±13.5 deg inside slice
    const targetSliceCenter = 360 - (targetIndex * segmentAngle + segmentAngle / 2) + randomJitter;

    // Full rotations (5 to 7 full circles = 1800 to 2520 degrees)
    const extraSpins = (5 + Math.floor(Math.random() * 3)) * 360;
    const currentNorm = rotationAngle % 360;
    const targetTotalRotation = rotationAngle + (extraSpins + ((targetSliceCenter - currentNorm + 360) % 360));

    const startRotation = rotationAngle;
    const distance = targetTotalRotation - startRotation;
    const startTime = performance.now();
    const duration = 4200; // 4.2 seconds smooth spin

    lastTickAngleRef.current = startRotation;

    // Cubic ease-out function
    const easeOutCubic = (t: number) => {
      const f = t - 1.0;
      return f * f * f + 1.0;
    };

    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(1, elapsed / duration);
      const easedProgress = easeOutCubic(progress);

      const currentAngle = startRotation + distance * easedProgress;
      setRotationAngle(currentAngle);
      drawWheel(currentAngle);

      // Trigger audio tick when passing segment boundaries
      const deltaAngle = currentAngle - lastTickAngleRef.current;
      if (deltaAngle >= segmentAngle * 0.8) {
        const speed = (1 - progress);
        soundManager.playTick(Math.max(0.6, speed * 1.5));
        lastTickAngleRef.current = currentAngle;
      }

      if (progress < 1) {
        animFrameIdRef.current = requestAnimationFrame(animate);
      } else {
        // Finished spin!
        soundManager.playWheelLand();
        setSelectedCategory(targetCategoryMeta);
        drawWheel(targetTotalRotation, targetCategoryMeta);
        setInternalSpinning(false);

        // Small delay for category reveal
        setTimeout(() => {
          onSpinComplete(targetCategoryMeta.id);
        }, 1200);
      }
    };

    animFrameIdRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    return () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, []);

  const isBusy = internalSpinning || externalIsSpinning || disabled;

  return (
    <div className="flex flex-col items-center justify-center p-1 sm:p-2">
      {/* Centerpiece Wheel Container */}
      <div className="relative flex items-center justify-center">
        {/* Top Pointer Needle */}
        <div className="absolute -top-3 z-20 flex flex-col items-center filter drop-shadow-md">
          {/* Triangular Brass Pointer */}
          <div
            className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[22px] border-t-amber-600 transform transition-transform"
            style={{
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))',
            }}
          />
          <div className="w-3 h-3 -mt-6 rounded-full bg-amber-400 border border-stone-800 shadow-sm" />
        </div>

        {/* Canvas Wheel */}
        <div className="relative rounded-full p-1.5 bg-gradient-to-b from-amber-100 via-stone-100 to-stone-200 shadow-parchment-lg border-4 border-amber-300">
          <canvas
            ref={canvasRef}
            width={440}
            height={440}
            className="w-[min(260px,32vh)] h-[min(260px,32vh)] sm:w-[min(300px,36vh)] sm:h-[min(300px,36vh)] md:w-[min(330px,38vh)] md:h-[min(330px,38vh)] rounded-full transition-transform"
          />
        </div>
      </div>

      {/* Selected Category Highlight Banner (When Stopped) */}
      <div className="min-h-[36px] my-1 flex items-center justify-center">
        {selectedCategory ? (
          <div
            className={`px-4 py-1 rounded-full border-2 shadow-sm animate-bounce flex items-center space-x-1.5 ${selectedCategory.badgeBg} ${selectedCategory.badgeBorder}`}
          >
            <span className="text-base">{selectedCategory.icon}</span>
            <span className={`text-xs sm:text-sm font-bold tracking-wider ${selectedCategory.textColor}`}>
              {selectedCategory.name}
            </span>
          </div>
        ) : (
          <p className="text-[11px] text-stone-500 italic tracking-wide">
            {isBusy ? 'Consulting the Archives of Time...' : 'Ready for the next spin!'}
          </p>
        )}
      </div>

      {/* Primary Spin Button */}
      <div className="mt-1 flex flex-row items-center gap-2">
        <button
          onClick={() => spinWheel()}
          disabled={isBusy}
          className={`group relative px-6 py-2.5 rounded-xl font-serif text-sm sm:text-base font-bold tracking-wider transition-all duration-200 shadow-md flex items-center space-x-2 ${
            isBusy
              ? 'bg-stone-300 text-stone-500 cursor-not-allowed shadow-none'
              : 'bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-500 text-white hover:scale-105 active:scale-95 shadow-amber-500/25 border-2 border-amber-400'
          }`}
        >
          <Sparkles className={`w-4 h-4 ${isBusy ? 'animate-spin' : 'group-hover:rotate-12 transition-transform'}`} />
          <span>{isBusy ? 'SPINNING THE PAST...' : 'SPIN THE WHEEL'}</span>
        </button>

        {/* Fallback Selector Button (Accessibility & Teacher Control) */}
        <button
          onClick={() => setManualFallbackOpen(!manualFallbackOpen)}
          disabled={isBusy}
          className="px-2.5 py-2 rounded-xl text-xs font-medium text-stone-600 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 border border-stone-300 transition-colors flex items-center space-x-1"
          title="Manual Category Selector (Accessibility / Fallback)"
        >
          <HelpCircle className="w-3.5 h-3.5 text-stone-500" />
          <span className="hidden sm:inline">Select</span>
        </button>
      </div>

      {/* Manual Category Dropdown Modal / Picker */}
      {manualFallbackOpen && !isBusy && (
        <div className="mt-4 p-4 rounded-2xl bg-white border border-stone-300 shadow-xl max-w-md w-full animate-fadeIn">
          <div className="flex items-center justify-between mb-3 pb-2 border-b border-stone-200">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-600">
              Direct Category Selection
            </span>
            <button
              onClick={() => setManualFallbackOpen(false)}
              className="text-stone-400 hover:text-stone-600 text-sm font-bold"
            >
              ✕
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {WHEEL_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => {
                  setManualFallbackOpen(false);
                  spinWheel(cat.id);
                }}
                className="flex items-center space-x-2 p-2 rounded-xl border border-stone-200 hover:border-amber-400 hover:bg-amber-50 text-left transition-all"
              >
                <span className="text-lg">{cat.icon}</span>
                <span className="text-xs font-bold text-stone-800">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
