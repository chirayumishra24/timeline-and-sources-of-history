import React, { useState } from 'react';
import { SourceDetectiveQuestion } from '@/types/question';
import { Search, CheckCircle2, Lightbulb } from 'lucide-react';

interface SourceDetectiveViewProps {
  question: SourceDetectiveQuestion;
  onSubmitAnswer: (selectedOption: string) => void;
  disabled?: boolean;
}

export const SourceDetectiveView: React.FC<SourceDetectiveViewProps> = ({
  question,
  onSubmitAnswer,
  disabled = false,
}) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [showHint, setShowHint] = useState<boolean>(false);

  const optionLetters = ['A', 'B', 'C', 'D'];

  const handleSelect = (option: string) => {
    if (disabled) return;
    setSelected(option);
  };

  const handleSubmit = () => {
    if (!selected || disabled) return;
    onSubmitAnswer(selected);
  };

  const source = question.source;

  return (
    <div className="w-full flex flex-col space-y-2.5">
      {/* Museum Artifact Presentation Card */}
      <div className="bg-white rounded-2xl border-2 border-stone-200 shadow-xs overflow-hidden">
        {/* Artifact Top Ribbon */}
        <div className="bg-stone-50 border-b border-stone-200 px-3 py-1.5 flex flex-wrap items-center justify-between gap-1.5">
          <div className="flex items-center space-x-1.5">
            <Search className="w-3.5 h-3.5 text-blue-700" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-950 font-serif">
              Source Detective
            </span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="text-[10px] font-bold px-2 py-0.2 rounded-full bg-blue-100 text-blue-900 border border-blue-200">
              {source.sourceType}
            </span>
            <span className="text-[10px] font-bold px-2 py-0.2 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
              {source.eraOrContext}
            </span>
          </div>
        </div>

        {/* Source Content Body */}
        <div className="p-3 flex flex-row items-center gap-3">
          {/* Artifact Visual Display Badge */}
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-50 to-stone-100 border-2 border-amber-300 shadow-inner flex items-center justify-center text-3xl shrink-0">
            {source.icon}
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-serif font-bold text-stone-900 leading-snug truncate">
              {source.title}
            </h3>
            <p className="text-[11px] text-stone-700 mt-1 leading-snug bg-parchment-50 p-2 rounded-lg border border-parchment-200 italic line-clamp-2">
              &ldquo;{source.visualDescription}&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Deduction Challenge */}
      <div className="bg-white/95 rounded-2xl border-2 border-stone-200 p-3 sm:p-3.5 shadow-xs">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-xs sm:text-sm font-serif font-bold text-stone-900 leading-snug">
            {question.question}
          </h4>
          {question.deductionGuide && (
            <button
              type="button"
              onClick={() => setShowHint(!showHint)}
              className="text-[10px] font-bold text-blue-700 hover:text-blue-900 bg-blue-50 px-2 py-0.5 rounded-lg border border-blue-200 transition-colors flex items-center space-x-1 shrink-0 ml-1.5"
            >
              <Lightbulb className="w-3 h-3 text-amber-600" />
              <span>{showHint ? 'Hide Clue' : 'Clue'}</span>
            </button>
          )}
        </div>

        {showHint && (
          <div className="mb-2 p-2 bg-amber-50 border border-amber-300 rounded-lg text-[11px] text-amber-900 flex items-center space-x-1.5 animate-fadeIn">
            <Lightbulb className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span><strong>Tip:</strong> {question.deductionGuide}</span>
          </div>
        )}

        {/* Options */}
        <div className="grid grid-cols-1 gap-1.5 mt-2">
          {question.options.map((option, idx) => {
            const isSelected = selected === option;
            const letter = optionLetters[idx];

            return (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelect(option)}
                disabled={disabled}
                className={`w-full text-left p-2.5 rounded-xl border-2 transition-all duration-150 flex items-center space-x-2.5 shadow-xs ${
                  isSelected
                    ? 'bg-blue-50 border-blue-500 shadow-blue-500/15 scale-[1.01]'
                    : 'bg-white hover:bg-stone-50 border-stone-200 hover:border-blue-300'
                } ${disabled ? 'cursor-not-allowed opacity-80' : ''}`}
              >
                <div
                  className={`w-6 h-6 rounded-lg flex items-center justify-center font-serif font-bold text-xs shrink-0 transition-colors ${
                    isSelected
                      ? 'bg-blue-700 text-white'
                      : 'bg-stone-100 text-stone-700 border border-stone-300'
                  }`}
                >
                  {letter}
                </div>
                <span className="text-xs sm:text-sm font-medium text-stone-800 flex-1">
                  {option}
                </span>
                {isSelected && (
                  <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Submit Action */}
      <div className="flex justify-end pt-1">
        <button
          type="button"
          onClick={handleSubmit}
          disabled={!selected || disabled}
          className={`px-6 py-2 rounded-xl font-serif font-bold text-xs sm:text-sm tracking-wider transition-all shadow-sm ${
            selected && !disabled
              ? 'bg-[#2B4C7E] hover:bg-[#1E3557] text-white hover:scale-105 active:scale-95 cursor-pointer'
              : 'bg-stone-200 text-stone-400 cursor-not-allowed'
          }`}
        >
          CONFIRM DEDUCTION
        </button>
      </div>
    </div>
  );
};
