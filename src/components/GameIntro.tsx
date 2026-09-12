import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight, Sparkles, Scroll, Hourglass, Film, Compass, BookOpen, Layers } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundManager } from '@/utils/sound';

interface GameIntroProps {
  onProceedToSetup: () => void;
}

export const GameIntro: React.FC<GameIntroProps> = ({ onProceedToSetup }) => {
  const [selectedImageTab, setSelectedImageTab] = useState<'timeline' | 'sources'>('timeline');
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(true);

  const handleEnter = () => {
    soundManager.playDiscovery();
    try {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#D4AF37', '#C85A32', '#2B4C7E', '#FAF0CA'],
      });
    } catch {
      // safe fallback
    }
    setTimeout(() => {
      onProceedToSetup();
    }, 400);
  };

  // Keyboard shortcut: Press Enter to proceed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleEnter();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto p-2 sm:p-4 my-auto animate-fadeIn">
      <div className="bg-gradient-to-b from-white via-parchment-50 to-parchment-100 rounded-3xl border-4 border-amber-300 shadow-2xl p-4 sm:p-7 text-center relative overflow-hidden">
        {/* Floating Historical Glyphs */}
        <div className="absolute top-4 left-4 text-amber-300/40 text-3xl select-none pointer-events-none animate-float">
          📜
        </div>
        <div className="absolute bottom-6 right-6 text-amber-300/40 text-3xl select-none pointer-events-none animate-float" style={{ animationDelay: '1.5s' }}>
          🏺
        </div>
        <div className="absolute top-6 right-6 text-amber-300/30 text-2xl select-none pointer-events-none animate-float" style={{ animationDelay: '2.5s' }}>
          ⏳
        </div>
        <div className="absolute bottom-6 left-6 text-amber-300/30 text-2xl select-none pointer-events-none animate-float" style={{ animationDelay: '3s' }}>
          🪙
        </div>

        {/* Section 1: Academic Theme Tag & Rotating Astrolabe Wheel Medallion */}
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-100/90 border border-amber-300 text-amber-900 text-[11px] font-bold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Grade 6 Social Science &bull; Chapter 4: Timeline and Sources of History</span>
          </div>

          {/* Animated 3D Astrolabe Medallion */}
          <div className="relative my-1">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-amber-400 bg-gradient-to-tr from-amber-200 via-stone-100 to-amber-300 flex items-center justify-center shadow-md relative overflow-hidden animate-pulseGlow">
              {/* Spinning Astrolabe Ring */}
              <div className="absolute inset-1 rounded-full border-2 border-dashed border-amber-600/60 animate-spin-slow" />
              <div className="text-3xl sm:text-4xl select-none">
                🎡
              </div>
            </div>
            {/* Subtle Radiant Halo */}
            <div className="absolute inset-0 rounded-full bg-amber-400/20 blur-xl -z-10 animate-pulse" />
          </div>

          {/* Grand Title */}
          <h1 className="text-3xl sm:text-5xl font-serif font-black text-stone-900 tracking-tight leading-none">
            THE HISTORY WHEEL
          </h1>

          <p className="text-sm sm:text-lg font-serif italic text-amber-900 font-semibold max-w-xl mx-auto">
            &ldquo;Spin the wheel. Uncover the evidence. Make History.&rdquo;
          </p>
        </div>

        {/* Section 2: Historical Atmosphere Window (Video & Generated Images) */}
        <div className="mt-4 mb-4 bg-white/95 rounded-2xl border-2 border-stone-300 p-3 shadow-sm max-w-3xl mx-auto">
          {/* Controls / Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-stone-200">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-600 flex items-center space-x-1">
                <BookOpen className="w-3.5 h-3.5 text-amber-600" />
                <span>Historical Exhibits</span>
              </span>
            </div>

            <div className="flex items-center space-x-1.5">
              <button
                type="button"
                onClick={() => setSelectedImageTab('timeline')}
                className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                  selectedImageTab === 'timeline'
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                Timelines & Chronology
              </button>
              <button
                type="button"
                onClick={() => setSelectedImageTab('sources')}
                className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                  selectedImageTab === 'sources'
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                Sources & Artifacts
              </button>
              <button
                type="button"
                onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                className="px-2.5 py-1 rounded-xl text-xs font-bold bg-stone-100 text-stone-600 hover:bg-stone-200 flex items-center space-x-1 border border-stone-200"
                title="Toggle Archive Ambience Video"
              >
                <Film className="w-3.5 h-3.5 text-amber-700" />
                <span>{isVideoPlaying ? 'Video: Active' : 'Video: Paused'}</span>
              </button>
            </div>
          </div>

          {/* Dual Visual Panel: Video Backdrop + Generated Historical Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
            {/* Left: Generated Artwork with Ken Burns Effect */}
            <div className="relative aspect-[16/9] max-h-44 sm:max-h-52 rounded-xl overflow-hidden border-2 border-amber-200 shadow-inner group">
              {selectedImageTab === 'timeline' ? (
                <div className="relative w-full h-full">
                  <Image
                    src="/assets/intro/history_astrolabe.jpg"
                    alt="Ancient Astrolabe and Timeline Mechanism"
                    fill
                    className="object-cover animate-kenburns group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 text-left text-white">
                    <span className="text-[9px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-amber-500/80 text-white inline-block mb-0.5">
                      Chronology & Eras
                    </span>
                    <p className="text-xs font-serif font-bold text-amber-100 leading-snug">
                      The Measurement of Historical Time (BCE & CE)
                    </p>
                  </div>
                </div>
              ) : (
                <div className="relative w-full h-full">
                  <Image
                    src="/assets/intro/archaeology_sources.jpg"
                    alt="Archaeological Inscriptions and Ancient Sources"
                    fill
                    className="object-cover animate-kenburns group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 text-left text-white">
                    <span className="text-[9px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-amber-500/80 text-white inline-block mb-0.5">
                      Archaeological Sources
                    </span>
                    <p className="text-xs font-serif font-bold text-amber-100 leading-snug">
                      Inscriptions, Coins, Pottery & Manuscripts
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Right: Embedded YouTube History Ambience Video Window */}
            <div className="relative aspect-[16/9] max-h-44 sm:max-h-52 rounded-xl overflow-hidden border-2 border-amber-200 shadow-inner bg-black">
              {isVideoPlaying ? (
                <iframe
                  src="https://www.youtube-nocookie.com/embed/xDIwPfMbayQ?autoplay=1&mute=1&loop=1&playlist=xDIwPfMbayQ&controls=0&modestbranding=1&rel=0&playsinline=1"
                  className="w-full h-full object-cover pointer-events-none opacity-85"
                  allow="autoplay; encrypted-media"
                  title="Historical Ambience Preview"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-stone-900 text-stone-400 text-xs font-serif p-4">
                  <Film className="w-7 h-7 text-amber-500 mb-1 opacity-50" />
                  <span>Video Preview Paused</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
              <div className="absolute bottom-2.5 left-2.5 text-left text-white">
                <span className="text-[9px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-blue-600/80 text-white inline-block mb-0.5">
                  Atmospheric Video
                </span>
                <p className="text-xs font-serif font-bold text-stone-100">
                  The Royal Historical Archives
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Two Teams Competition Matchup */}
        <div className="my-3 sm:my-4 max-w-md mx-auto bg-white/90 rounded-2xl p-2.5 sm:p-3 border border-stone-200 shadow-xs flex items-center justify-around">
          <div className="text-center group">
            <div className="w-10 h-10 mx-auto rounded-xl bg-[#2B4C7E] text-white flex items-center justify-center text-lg shadow-sm group-hover:scale-110 transition-transform">
              <Scroll className="w-5 h-5" />
            </div>
            <span className="text-xs font-serif font-bold text-stone-800 mt-1 block">
              The Chroniclers
            </span>
          </div>

          <div className="font-serif font-black text-amber-800 text-sm sm:text-base italic bg-amber-50 px-3 py-0.5 rounded-full border border-amber-200">
            VS
          </div>

          <div className="text-center group">
            <div className="w-10 h-10 mx-auto rounded-xl bg-[#C85A32] text-white flex items-center justify-center text-lg shadow-sm group-hover:scale-110 transition-transform">
              <Hourglass className="w-5 h-5" />
            </div>
            <span className="text-xs font-serif font-bold text-stone-800 mt-1 block">
              The Timekeepers
            </span>
          </div>
        </div>

        {/* Section 4: Enter Button with Audio and Fanfare */}
        <div className="flex flex-col items-center justify-center mt-2">
          <button
            type="button"
            onClick={handleEnter}
            className="px-8 sm:px-10 py-3 sm:py-3.5 rounded-2xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-500 text-white font-serif font-bold text-base sm:text-lg tracking-wider transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center space-x-2.5 border-2 border-amber-400 group ring-4 ring-amber-400/20 animate-pulse"
          >
            <span>ENTER THE ARCHIVES</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <span className="text-[10px] text-stone-400 font-medium mt-1.5 hidden sm:block">
            Tip: Press Enter ↵ on your keyboard anytime to start
          </span>
        </div>
      </div>
    </div>
  );
};
