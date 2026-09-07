'use client';

import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Sparkles as DreiSparkles } from '@react-three/drei';
import WheelScene from './WheelScene';
import { WheelCategory } from '@/types/question';
import { Sparkles, HelpCircle } from 'lucide-react';
import { WHEEL_CATEGORIES } from '@/data/questions';

interface HistoryWheel3DProps {
  onSpinComplete: (category: WheelCategory) => void;
  isSpinning: boolean;
  disabled?: boolean;
}

export default function HistoryWheel3D({
  onSpinComplete,
  isSpinning,
  disabled = false,
}: HistoryWheel3DProps) {
  const [manualFallbackOpen, setManualFallbackOpen] = useState(false);

  return (
    <div className="relative flex flex-col items-center justify-center select-none w-full max-w-[540px] mx-auto">
      {/* 3D Canvas Viewport */}
      <div className="relative w-full aspect-square max-w-[480px] rounded-full p-2 bg-gradient-to-b from-amber-900/40 via-amber-950/20 to-black/50 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-amber-600/60 backdrop-blur-sm overflow-hidden">
        <Canvas
          camera={{ position: [0, -0.4, 6.2], fov: 48 }}
          shadows
          gl={{ antialias: true, alpha: true }}
          className="w-full h-full"
        >
          {/* Ambient Historical Lighting */}
          <ambientLight intensity={0.8} />
          {/* Warm Sun / Astrolabe Key Light */}
          <directionalLight
            position={[5, 8, 5]}
            intensity={1.8}
            castShadow
            shadow-mapSize={[1024, 1024]}
          />
          {/* Soft Fill Light from opposite side */}
          <pointLight position={[-6, -4, 4]} intensity={0.6} color="#FFE6A3" />
          {/* Golden Rim Highlight */}
          <pointLight position={[0, 4, 3]} intensity={1.2} color="#FFD700" />

          {/* Celestial Dust / Ambient Particles */}
          <DreiSparkles
            count={35}
            scale={5}
            size={2.5}
            speed={0.4}
            color="#E6C25B"
            opacity={0.6}
          />

          {/* 3D Astrolabe Wheel */}
          <WheelScene
            isSpinning={isSpinning}
            onSpinComplete={onSpinComplete}
            disabled={disabled}
          />
        </Canvas>

        {/* Outer Beveled Brass Glow Frame */}
        <div className="absolute inset-0 rounded-full border-2 border-amber-400/40 pointer-events-none shadow-[inset_0_0_30px_rgba(212,175,55,0.3)]" />
      </div>

      {/* Interactive Bottom Control Helper */}
      <div className="mt-4 flex items-center space-x-3">
        <div className="text-xs font-serif text-amber-900 font-bold bg-amber-100/90 border border-amber-300 px-4 py-1.5 rounded-full shadow-sm flex items-center space-x-1.5">
          <Sparkles className="w-3.5 h-3.5 text-amber-700 animate-pulse" />
          <span>Click Astrolabe to Spin ✦ 3D WebGL Mode</span>
        </div>

        {/* Teacher Manual Selection Fallback */}
        <button
          onClick={() => setManualFallbackOpen(!manualFallbackOpen)}
          className="p-1.5 rounded-full bg-white/80 border border-amber-300 text-stone-600 hover:text-stone-900 hover:bg-amber-50 shadow-sm transition-all text-xs"
          title="Manual Category Override"
        >
          <HelpCircle className="w-4 h-4" />
        </button>
      </div>

      {/* Manual Selection Dropdown */}
      {manualFallbackOpen && (
        <div className="mt-3 p-3 bg-white/95 rounded-2xl border border-amber-300 shadow-xl flex flex-wrap justify-center gap-1.5 max-w-md z-30 animate-fadeIn">
          <div className="w-full text-center text-[10px] font-bold uppercase tracking-wider text-stone-500 mb-1">
            Teacher Manual Override
          </div>
          {WHEEL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setManualFallbackOpen(false);
                onSpinComplete(cat.id);
              }}
              className="px-2 py-1 rounded-lg text-xs font-semibold text-stone-800 hover:text-white transition-colors border border-stone-200"
              style={{ backgroundColor: `${cat.color}22` }}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
