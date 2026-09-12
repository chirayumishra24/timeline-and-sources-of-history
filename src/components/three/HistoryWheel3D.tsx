'use client';

import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Sparkles as DreiSparkles } from '@react-three/drei';
import WheelScene from './WheelScene';
import { WheelCategory } from '@/types/question';
import { Sparkles, HelpCircle } from 'lucide-react';
import { WHEEL_CATEGORIES, WheelCategoryMeta } from '@/data/questions';

interface HistoryWheel3DProps {
  onSpinComplete: (category: WheelCategory) => void;
  isSpinning: boolean;
  disabled?: boolean;
}

export default function HistoryWheel3D({
  onSpinComplete,
  isSpinning: externalIsSpinning,
  disabled = false,
}: HistoryWheel3DProps) {
  const [internalSpinning, setInternalSpinning] = useState(false);
  const [manualFallbackOpen, setManualFallbackOpen] = useState(false);
  const [spinTriggerSignal, setSpinTriggerSignal] = useState(0);
  const [forcedCategory, setForcedCategory] = useState<WheelCategory | null>(null);
  const [landedCategory, setLandedCategory] = useState<WheelCategoryMeta | null>(null);

  const isBusy = internalSpinning || externalIsSpinning || disabled;

  const handleStartSpin = (targetCat?: WheelCategory) => {
    if (isBusy) return;
    setLandedCategory(null);
    setForcedCategory(targetCat || null);
    setInternalSpinning(true);
    setSpinTriggerSignal((prev) => prev + 1);
  };

  const handleComplete = (category: WheelCategory) => {
    const catMeta = WHEEL_CATEGORIES.find((c) => c.id === category) || null;
    setLandedCategory(catMeta);
    setInternalSpinning(false);
    setTimeout(() => {
      onSpinComplete(category);
    }, 1600);
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full max-w-[420px] mx-auto py-1">
      {/* 3D Canvas Viewport */}
      <div className="relative w-[min(320px,34vh)] h-[min(320px,34vh)] aspect-square rounded-full p-2 bg-gradient-to-b from-amber-900/40 via-amber-950/20 to-black/50 shadow-[0_15px_35px_rgba(0,0,0,0.4)] border-4 border-amber-600/60 backdrop-blur-sm overflow-hidden">
        <Canvas
          camera={{ position: [0, 0, 5.7], fov: 48 }}
          shadows
          gl={{ antialias: true, alpha: true }}
          className="w-full h-full cursor-pointer"
        >
          {/* Ambient Historical Lighting for uniform slice visibility */}
          <ambientLight intensity={1.1} />
          {/* Warm Sun / Astrolabe Key Light */}
          <directionalLight
            position={[5, 8, 5]}
            intensity={1.4}
            castShadow
            shadow-mapSize={[1024, 1024]}
          />
          {/* Soft Fill Light from opposite side */}
          <pointLight position={[-6, -4, 4]} intensity={0.5} color="#FFE6A3" />
          {/* Subtle Golden Rim Accent */}
          <pointLight position={[0, 3, 3]} intensity={0.4} color="#FFD700" />

          {/* Celestial Dust / Ambient Particles */}
          <DreiSparkles
            count={25}
            scale={5}
            size={2.2}
            speed={0.4}
            color="#E6C25B"
            opacity={0.6}
          />

          {/* 3D Astrolabe Wheel */}
          <WheelScene
            isSpinning={isBusy}
            onSpinComplete={handleComplete}
            onSpinStart={() => setInternalSpinning(true)}
            disabled={disabled}
            spinTriggerSignal={spinTriggerSignal}
            forcedCategory={forcedCategory}
          />
        </Canvas>

        {/* Outer Beveled Brass Glow Frame */}
        <div className="absolute inset-0 rounded-full border-2 border-amber-400/40 pointer-events-none shadow-[inset_0_0_30px_rgba(212,175,55,0.3)]" />
      </div>

      {/* Topic Display / Status Below Wheel */}
      <div className="w-full max-w-sm mt-2 flex flex-col items-center justify-center min-h-[46px]">
        {landedCategory ? (
          <div className="w-full px-4 py-2 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-stone-950 border-2 border-amber-300 shadow-xl flex items-center justify-between animate-bounce">
            <div className="flex items-center space-x-2.5">
              <span className="text-3xl filter drop-shadow">{landedCategory.icon}</span>
              <div className="text-left">
                <span className="text-[10px] font-black uppercase tracking-widest text-amber-950 block">
                  🎯 TOPIC SELECTED
                </span>
                <h3 className="text-sm sm:text-base font-serif font-black text-stone-950 leading-tight">
                  {landedCategory.name}
                </h3>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-xl bg-stone-950 text-amber-300 font-mono text-[11px] font-bold shadow-xs shrink-0">
              Starting...
            </span>
          </div>
        ) : (
          <div className="flex items-center space-x-2">
            <div className="text-[11px] font-serif text-amber-900 font-bold bg-amber-100/90 border border-amber-300 px-3 py-0.5 rounded-full shadow-xs flex items-center space-x-1.5">
              <Sparkles className="w-3 h-3 text-amber-700 animate-pulse" />
              <span>{isBusy ? 'Astrolabe In Motion...' : 'Click Astrolabe or Button to Spin'}</span>
            </div>

            {/* Teacher Manual Selection Fallback */}
            <button
              type="button"
              onClick={() => setManualFallbackOpen(!manualFallbackOpen)}
              disabled={isBusy}
              className="p-1 rounded-full bg-white/85 border border-amber-300 text-stone-600 hover:text-stone-900 hover:bg-amber-50 shadow-xs transition-all text-xs disabled:opacity-50"
              title="Direct Category Selector"
            >
              <HelpCircle className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>

      {/* Primary Spin Button */}
      <div className="mt-2.5 flex items-center justify-center">
        <button
          type="button"
          onClick={() => handleStartSpin()}
          disabled={isBusy}
          className={`group relative px-8 py-3 rounded-2xl font-serif text-base sm:text-lg font-bold tracking-wider transition-all duration-200 shadow-lg flex items-center space-x-2.5 ${
            isBusy
              ? 'bg-stone-300 text-stone-500 cursor-not-allowed shadow-none'
              : 'bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-500 text-white hover:scale-105 active:scale-95 shadow-amber-500/25 border-2 border-amber-400 animate-pulse'
          }`}
        >
          <Sparkles className={`w-5 h-5 ${isBusy ? 'animate-spin' : 'group-hover:rotate-12 transition-transform'}`} />
          <span>{isBusy ? 'SPINNING THE ARCHIVES...' : 'SPIN THE WHEEL'}</span>
        </button>
      </div>

      {/* Manual Selection Dropdown */}
      {manualFallbackOpen && !isBusy && (
        <div className="mt-3 p-3 bg-white/95 rounded-2xl border border-amber-300 shadow-xl flex flex-wrap justify-center gap-1.5 max-w-md z-30 animate-fadeIn">
          <div className="w-full text-center text-[10px] font-bold uppercase tracking-wider text-stone-500 mb-1">
            Direct Category Selection
          </div>
          {WHEEL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                setManualFallbackOpen(false);
                handleStartSpin(cat.id);
              }}
              className="px-2.5 py-1 rounded-lg text-xs font-semibold text-stone-800 hover:text-white transition-colors border border-stone-200 flex items-center space-x-1"
              style={{ backgroundColor: `${cat.color}22` }}
            >
              <span>{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
