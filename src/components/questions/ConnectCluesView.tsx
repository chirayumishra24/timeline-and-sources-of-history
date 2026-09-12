import React, { useState } from 'react';
import { ConnectCluesQuestion } from '@/types/question';
import { Network, CheckCircle2, Layers } from 'lucide-react';

interface ConnectCluesViewProps {
  question: ConnectCluesQuestion;
  onSubmitAnswer: (selectedOption: string) => void;
  disabled?: boolean;
}

export const ConnectCluesView: React.FC<ConnectCluesViewProps> = ({
  question,
  onSubmitAnswer,
  disabled = false,
}) => {
  const [selected, setSelected] = useState<string | null>(null);

  const optionLetters = ['A', 'B', 'C', 'D'];

  const handleSelect = (option: string) => {
    if (disabled) return;
    setSelected(option);
  };

  const handleSubmit = () => {
    if (!selected || disabled) return;
    onSubmitAnswer(selected);
  };

  return (
    <div className="w-full flex flex-col space-y-3.5">
      {/* Scenario Header */}
      <div className="bg-white/95 rounded-2xl border-2 border-stone-200 p-3.5 sm:p-4 shadow-sm">
        <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
          <Network className="w-4 h-4 text-emerald-600" />
          <span>Evidence Synthesis Challenge</span>
        </div>
        <h3 className="text-lg sm:text-xl font-serif font-bold text-stone-900 leading-snug">
          {question.title}
        </h3>
        <p className="text-xs text-stone-600 mt-1">
          {question.scenario}
        </p>
      </div>

      {/* Clues Presentation Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {question.clues.map((clue, idx) => (
          <div
            key={idx}
            className="bg-emerald-50/70 rounded-2xl border-2 border-emerald-200 p-4 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-2xl">{clue.icon}</span>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-900">
                  {clue.label}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-stone-800 font-medium leading-relaxed">
                {clue.finding}
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-emerald-200/60 text-[11px] font-bold text-emerald-800 flex items-center justify-between">
              <span>Category:</span>
              <span className="bg-white/80 px-2 py-0.5 rounded-md border border-emerald-300">
                {clue.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Synthesis Question & Options */}
      <div className="bg-white/95 rounded-2xl border-2 border-stone-200 p-3.5 sm:p-4 shadow-sm">
        <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-stone-500 mb-1.5">
          <Layers className="w-4 h-4 text-emerald-600" />
          <span>Synthesize the Clues</span>
        </div>
        <h4 className="text-sm sm:text-base font-serif font-bold text-stone-900 leading-snug mb-3">
          {question.question}
        </h4>

        <div className="grid grid-cols-1 gap-2 sm:gap-2.5">
          {question.options.map((option, idx) => {
            const isSelected = selected === option;
            const letter = optionLetters[idx];

            return (
              <button
                key={idx}
                onClick={() => handleSelect(option)}
                disabled={disabled}
                className={`w-full text-left p-2.5 sm:p-3 rounded-xl border-2 transition-all duration-200 flex items-center space-x-3 shadow-sm ${
                  isSelected
                    ? 'bg-emerald-50 border-emerald-500 shadow-emerald-500/15 scale-[1.01]'
                    : 'bg-white hover:bg-stone-50 border-stone-200 hover:border-emerald-300'
                } ${disabled ? 'cursor-not-allowed opacity-80' : ''}`}
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center font-serif font-bold text-sm shrink-0 transition-colors ${
                    isSelected
                      ? 'bg-emerald-600 text-white'
                      : 'bg-stone-100 text-stone-700 border border-stone-300'
                  }`}
                >
                  {letter}
                </div>
                <span className="text-sm sm:text-base font-medium text-stone-800 flex-1">
                  {option}
                </span>
                {isSelected && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Submit Action */}
      <div className="flex justify-end pt-2">
        <button
          onClick={handleSubmit}
          disabled={!selected || disabled}
          className={`px-8 py-3 rounded-2xl font-serif font-bold text-base tracking-wider transition-all shadow-md ${
            selected && !disabled
              ? 'bg-[#2B4C7E] hover:bg-[#1E3557] text-white hover:scale-105 active:scale-95 cursor-pointer'
              : 'bg-stone-200 text-stone-400 cursor-not-allowed'
          }`}
        >
          CONFIRM SYNTHESIS
        </button>
      </div>
    </div>
  );
};
