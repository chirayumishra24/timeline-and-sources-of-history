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
    <div className="w-full flex flex-col space-y-6">
      {/* Museum Artifact Presentation Card */}
      <div className="bg-white rounded-3xl border-2 border-stone-200 shadow-sm overflow-hidden">
        {/* Artifact Top Ribbon */}
        <div className="bg-stone-50 border-b border-stone-200 px-6 py-3 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-2">
            <Search className="w-4 h-4 text-blue-700" />
            <span className="text-xs font-bold uppercase tracking-widest text-blue-950 font-serif">
              Source Detective Investigation
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xs font-bold px-3 py-0.5 rounded-full bg-blue-100 text-blue-900 border border-blue-300">
              Type: {source.sourceType}
            </span>
            <span className="text-xs font-bold px-3 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
              {source.eraOrContext}
            </span>
          </div>
        </div>

        {/* Source Content Body */}
        <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          {/* Artifact Visual Display Badge */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-amber-50 to-stone-100 border-2 border-amber-300 shadow-inner flex items-center justify-center text-5xl sm:text-6xl shrink-0 mx-auto sm:mx-0">
            {source.icon}
          </div>

          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 leading-tight">
              {source.title}
            </h3>
            <p className="text-sm text-stone-700 mt-2 leading-relaxed bg-parchment-50 p-3.5 rounded-xl border border-parchment-300 italic">
              &ldquo;{source.visualDescription}&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Deduction Challenge */}
      <div className="bg-white/95 rounded-2xl border-2 border-stone-200 p-5 sm:p-6 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-base sm:text-lg font-serif font-bold text-stone-900 leading-snug">
            {question.question}
          </h4>
          {question.deductionGuide && (
            <button
              onClick={() => setShowHint(!showHint)}
              className="text-xs font-bold text-blue-700 hover:text-blue-900 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200 transition-colors flex items-center space-x-1 shrink-0 ml-2"
            >
              <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
              <span>{showHint ? 'Hide Clue' : 'Detective Clue'}</span>
            </button>
          )}
        </div>

        {showHint && (
          <div className="mb-4 p-3 bg-amber-50 border border-amber-300 rounded-xl text-xs text-amber-900 flex items-center space-x-2 animate-fadeIn">
            <Lightbulb className="w-4 h-4 text-amber-600 shrink-0" />
            <span><strong>Detective Tip:</strong> {question.deductionGuide}</span>
          </div>
        )}

        {/* Options */}
        <div className="grid grid-cols-1 gap-3 mt-4">
          {question.options.map((option, idx) => {
            const isSelected = selected === option;
            const letter = optionLetters[idx];

            return (
              <button
                key={idx}
                onClick={() => handleSelect(option)}
                disabled={disabled}
                className={`w-full text-left p-4 rounded-2xl border-2 transition-all duration-200 flex items-center space-x-3.5 shadow-sm ${
                  isSelected
                    ? 'bg-blue-50 border-blue-500 shadow-blue-500/15 scale-[1.01]'
                    : 'bg-white hover:bg-stone-50 border-stone-200 hover:border-blue-300'
                } ${disabled ? 'cursor-not-allowed opacity-80' : ''}`}
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center font-serif font-bold text-sm shrink-0 transition-colors ${
                    isSelected
                      ? 'bg-blue-700 text-white'
                      : 'bg-stone-100 text-stone-700 border border-stone-300'
                  }`}
                >
                  {letter}
                </div>
                <span className="text-sm sm:text-base font-medium text-stone-800 flex-1">
                  {option}
                </span>
                {isSelected && (
                  <CheckCircle2 className="w-5 h-5 text-blue-700 shrink-0" />
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
          SUBMIT HISTORICAL DEDUCTION
        </button>
      </div>
    </div>
  );
};
