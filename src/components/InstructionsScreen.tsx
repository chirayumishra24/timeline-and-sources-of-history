import React from 'react';
import { ArrowRight, HelpCircle, Shield, Award, Sparkles } from 'lucide-react';

interface InstructionsScreenProps {
  onStart: () => void;
}

export const InstructionsScreen: React.FC<InstructionsScreenProps> = ({ onStart }) => {
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
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 animate-fadeIn">
      <div className="bg-white/95 rounded-3xl border-4 border-amber-300 shadow-2xl p-6 sm:p-8">
        <div className="text-center mb-6">
          <div className="inline-flex items-center space-x-1.5 px-4 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-widest mb-2">
            <HelpCircle className="w-4 h-4 text-amber-600" />
            <span>Classroom Guide</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-stone-900 tracking-wide">
            HOW TO PLAY
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            Two teams. One shared screen. Think like historians and make history!
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-parchment-50 rounded-2xl border-2 border-stone-200 p-4 flex flex-col justify-between shadow-sm hover:border-amber-400 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">{step.icon}</span>
                  <span className="w-6 h-6 rounded-full bg-amber-200 text-amber-900 font-serif font-bold text-xs flex items-center justify-center">
                    {step.num}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-sm text-stone-900 leading-snug">
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
        <div className="flex justify-center">
          <button
            onClick={onStart}
            className="px-10 py-4 rounded-2xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-500 text-white font-serif font-bold text-lg tracking-wider transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center space-x-2.5 border-2 border-amber-400"
          >
            <span>LET&apos;S PLAY</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
