import React, { useState } from 'react';
import { MCQQuestion } from '@/types/question';
import { CheckCircle2 } from 'lucide-react';

interface MCQViewProps {
  question: MCQQuestion;
  onSubmitAnswer: (selectedOption: string) => void;
  disabled?: boolean;
}

export const MCQView: React.FC<MCQViewProps> = ({
  question,
  onSubmitAnswer,
  disabled = false,
}) => {
  const [selected, setSelected] = useState<string | null>(null);

  const optionLabels = ['A', 'B', 'C', 'D'];

  const handleSelect = (option: string) => {
    if (disabled) return;
    setSelected(option);
  };

  const handleSubmit = () => {
    if (!selected || disabled) return;
    onSubmitAnswer(selected);
  };

  return (
    <div className="w-full flex flex-col space-y-6">
      {/* Question Prompt */}
      <div className="bg-white/95 rounded-2xl border-2 border-stone-200 p-5 sm:p-6 shadow-sm">
        <h3 className="text-lg sm:text-xl font-serif font-bold text-stone-900 leading-relaxed">
          {question.question}
        </h3>
      </div>

      {/* Options Grid */}
      <div className="grid grid-cols-1 gap-3.5">
        {question.options.map((option, index) => {
          const isSelected = selected === option;
          const letter = optionLabels[index] || String(index + 1);

          return (
            <button
              key={index}
              onClick={() => handleSelect(option)}
              disabled={disabled}
              className={`w-full text-left p-4 rounded-2xl border-2 transition-all duration-200 flex items-center space-x-4 shadow-sm ${
                isSelected
                  ? 'bg-amber-50 border-amber-500 shadow-amber-500/15 scale-[1.01]'
                  : 'bg-white hover:bg-stone-50 border-stone-200 hover:border-stone-300'
              } ${disabled ? 'cursor-not-allowed opacity-80' : ''}`}
            >
              {/* Option Letter Badge */}
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center font-serif font-bold text-sm shrink-0 transition-colors ${
                  isSelected
                    ? 'bg-amber-600 text-white'
                    : 'bg-stone-100 text-stone-700 border border-stone-300'
                }`}
              >
                {letter}
              </div>

              {/* Option Text */}
              <span className="text-sm sm:text-base font-medium text-stone-800 flex-1">
                {option}
              </span>

              {isSelected && (
                <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0" />
              )}
            </button>
          );
        })}
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
          CONFIRM ANSWER
        </button>
      </div>
    </div>
  );
};
