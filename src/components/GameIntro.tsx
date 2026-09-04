import React from 'react';
import { ArrowRight, Sparkles, Compass, Scroll, Hourglass } from 'lucide-react';

interface GameIntroProps {
  onProceedToSetup: () => void;
}

export const GameIntro: React.FC<GameIntroProps> = ({ onProceedToSetup }) => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 animate-fadeIn">
      <div className="bg-gradient-to-b from-white via-parchment-50 to-parchment-100 rounded-3xl border-4 border-amber-300 shadow-2xl p-8 sm:p-12 text-center relative overflow-hidden">
        {/* Subtle decorative background symbols */}
        <div className="absolute top-6 left-6 text-amber-200/50 text-5xl select-none pointer-events-none">
          📜
        </div>
        <div className="absolute bottom-6 right-6 text-amber-200/50 text-5xl select-none pointer-events-none">
          🏺
        </div>
        <div className="absolute top-8 right-10 text-amber-200/40 text-4xl select-none pointer-events-none">
          ⏳
        </div>
        <div className="absolute bottom-8 left-10 text-amber-200/40 text-4xl select-none pointer-events-none">
          🪙
        </div>

        {/* Academic Theme Tag */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-100/90 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-widest mb-4">
          <Sparkles className="w-4 h-4 text-amber-600" />
          <span>Grade 6 Social Science &bull; Theme B: Tapestry of the Past</span>
        </div>

        {/* Grand Title */}
        <h1 className="text-4xl sm:text-6xl font-serif font-black text-stone-900 tracking-tight leading-none mt-2">
          THE HISTORY WHEEL
        </h1>

        <p className="text-lg sm:text-xl font-serif italic text-amber-900 font-semibold mt-3">
          &ldquo;Every answer reveals another piece of the past.&rdquo;
        </p>

        {/* Tagline */}
        <div className="mt-4 inline-block px-5 py-2 rounded-2xl bg-white border border-parchment-300 shadow-sm text-xs sm:text-sm font-serif font-bold text-stone-700 tracking-wider">
          Spin &bull; Think &bull; Answer &bull; Make History
        </div>

        {/* Team Matchup Silhouette Preview */}
        <div className="my-8 max-w-lg mx-auto bg-white/90 rounded-2xl p-4 border border-stone-200 shadow-sm flex items-center justify-around">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto rounded-xl bg-[#2B4C7E] text-white flex items-center justify-center text-xl shadow">
              <Scroll className="w-6 h-6" />
            </div>
            <span className="text-xs font-serif font-bold text-stone-800 mt-2 block">
              The Chroniclers
            </span>
          </div>

          <div className="font-serif font-black text-stone-400 text-xl italic">
            VS
          </div>

          <div className="text-center">
            <div className="w-12 h-12 mx-auto rounded-xl bg-[#C85A32] text-white flex items-center justify-center text-xl shadow">
              <Hourglass className="w-6 h-6" />
            </div>
            <span className="text-xs font-serif font-bold text-stone-800 mt-2 block">
              The Timekeepers
            </span>
          </div>
        </div>

        {/* Enter Button */}
        <div className="flex justify-center">
          <button
            onClick={onProceedToSetup}
            className="px-10 py-4 rounded-2xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-500 text-white font-serif font-bold text-lg tracking-wider transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center space-x-2.5 border-2 border-amber-400"
          >
            <span>ENTER THE ARCHIVES</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
