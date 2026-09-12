import React, { useEffect } from 'react';
import { ArrowRight, HelpCircle } from 'lucide-react';

interface InstructionsScreenProps {
  onStart: () => void;
}

export const InstructionsScreen: React.FC<InstructionsScreenProps> = ({ onStart }) => {
  // Press Enter key to start
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        onStart();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onStart]);

  const steps = [
    {
      num: '1',
      title: 'Spin for the Topic',
      desc: 'Each round, spin the wheel to land on one of 8 historical categories for both teams.',
      icon: '🎡',
    },
    {
      num: '2',
      title: 'Unique Challenge for Both Teams',
      desc: 'Both teams face questions on the chosen topic, but each team receives a completely different question!',
      icon: '🤔',
    },
    {
      num: '3',
      title: 'Earn Team Points',
      desc: 'Score points for your team (+5 to +15 depending on challenge difficulty). No penalty for trying!',
      icon: '⭐',
    },
    {
      num: '4',
      title: 'Collect Historical Discoveries',
      desc: 'Every correct answer unlocks an authentic artifact into your team’s visual History Archive.',
      icon: '🏺',
    },
    {
      num: '5',
      title: 'Fresh Questions Every Time',
      desc: 'The question non-repetition engine guarantees every single challenge in your session is unique.',
      icon: '📜',
    },
    {
      num: '6',
      title: 'Build the Greatest Archive',
      desc: 'Compete through all rounds and conquer the Final Challenge to earn the title of Master Historians!',
      icon: '👑',
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-2 sm:p-4 my-auto animate-fadeIn">
      <div className="bg-white/95 rounded-3xl border-4 border-amber-300 shadow-2xl p-4 sm:p-6">
        <div className="text-center mb-4">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-[11px] font-bold uppercase tracking-widest mb-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
            <span>Classroom Guide</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-black text-stone-900 tracking-wide">
            HOW TO PLAY
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
            Two teams. One shared screen. Think like historians and make history!
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-5">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-parchment-50 rounded-2xl border-2 border-stone-200 p-3.5 flex flex-col justify-between shadow-xs hover:border-amber-400 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-2xl">{step.icon}</span>
                  <span className="w-5 h-5 rounded-full bg-amber-200 text-amber-900 font-serif font-bold text-xs flex items-center justify-center">
                    {step.num}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-xs sm:text-sm text-stone-900 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Start Button */}
        <div className="flex flex-col items-center justify-center">
          <button
            type="button"
            onClick={onStart}
            className="px-8 sm:px-10 py-3 sm:py-3.5 rounded-2xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-500 text-white font-serif font-bold text-base sm:text-lg tracking-wider transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center space-x-2.5 border-2 border-amber-400 animate-pulse"
          >
            <span>LET&apos;S PLAY</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <span className="text-[10px] text-stone-400 font-medium mt-1.5 hidden sm:block">
            Press Enter ↵ to begin
          </span>
        </div>
      </div>
    </div>
  );
};
