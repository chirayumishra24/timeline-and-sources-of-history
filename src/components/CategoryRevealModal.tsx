import React, { useEffect } from 'react';
import { WheelCategory } from '@/types/question';
import { getCategoryMeta } from '@/data/questions';
import { Sparkles, ArrowRight } from 'lucide-react';

interface CategoryRevealModalProps {
  category: WheelCategory;
  firstTeamName?: string;
  secondTeamName?: string;
  onProceed: () => void;
  autoProceedDelay?: number; // ms
}

export const CategoryRevealModal: React.FC<CategoryRevealModalProps> = ({
  category,
  firstTeamName,
  secondTeamName,
  onProceed,
  autoProceedDelay = 2600,
}) => {
  const meta = getCategoryMeta(category);

  useEffect(() => {
    const timer = setTimeout(() => {
      onProceed();
    }, autoProceedDelay);
    return () => clearTimeout(timer);
  }, [onProceed, autoProceedDelay]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-fadeIn">
      <div className="bg-white rounded-3xl border-4 border-amber-300 shadow-2xl p-6 sm:p-8 max-w-lg w-full text-center transform animate-scaleUp">
        {/* Subtle Category Header */}
        <div className="text-xs uppercase font-bold tracking-widest text-amber-700 bg-amber-50 border border-amber-200 rounded-full px-4 py-1 inline-flex items-center space-x-1.5 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>Round Topic Chosen</span>
        </div>

        {/* Large Animated Category Icon */}
        <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-stone-100 to-amber-100 border-2 border-amber-300 flex items-center justify-center text-4xl shadow-md my-2 animate-bounce">
          {meta.icon}
        </div>

        {/* Category Name */}
        <h2 className="text-2xl sm:text-3xl font-serif font-black text-stone-900 tracking-wide mt-1">
          {meta.name}
        </h2>

        {/* Tagline */}
        <p className="text-xs sm:text-sm font-medium text-stone-600 mt-1">
          {meta.tagline}
        </p>

        {/* Dual Team Notice */}
        <div className="mt-4 p-3 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs text-amber-950 font-medium space-y-1">
          <div className="font-bold flex items-center justify-center space-x-1 text-amber-800">
            <span>🎯</span>
            <span>Both teams will face different questions on this topic!</span>
          </div>
          {firstTeamName && (
            <p className="text-stone-700">
              First up: <strong className="text-stone-900">{firstTeamName}</strong>, followed by <strong className="text-stone-900">{secondTeamName}</strong>.
            </p>
          )}
        </div>

        {/* Proceed CTA */}
        <div className="mt-5">
          <button
            onClick={onProceed}
            className="w-full py-3 px-6 rounded-2xl bg-[#2B4C7E] hover:bg-[#1E3557] text-white font-serif font-bold text-base tracking-wider transition-all shadow-md flex items-center justify-center space-x-2"
          >
            <span>START {firstTeamName ? `${firstTeamName.toUpperCase()}'S` : 'FIRST'} QUESTION</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
