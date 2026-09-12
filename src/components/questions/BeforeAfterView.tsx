import React, { useState } from 'react';
import { BeforeAfterQuestion } from '@/types/question';
import { Clock, CheckCircle2 } from 'lucide-react';

interface BeforeAfterViewProps {
  question: BeforeAfterQuestion;
  onSubmitAnswer: (selectedAnswer: string) => void;
  disabled?: boolean;
}

export const BeforeAfterView: React.FC<BeforeAfterViewProps> = ({
  question,
  onSubmitAnswer,
  disabled = false,
}) => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    if (disabled) return;
    setSelected(option);
  };

  const handleSubmit = () => {
    if (!selected || disabled) return;
    onSubmitAnswer(selected);
  };

  return (
    <div className="w-full flex flex-col space-y-2.5">
      {/* Header Prompt */}
      <div className="bg-white/95 rounded-2xl border-2 border-stone-200 p-3 sm:p-3.5 shadow-xs">
        <div className="flex items-center space-x-1.5 text-[10px] font-bold uppercase tracking-wider text-rose-800 mb-1">
          <Clock className="w-3.5 h-3.5 text-rose-600" />
          <span>Before or After Comparison</span>
        </div>
        <h3 className="text-xs sm:text-sm font-serif font-bold text-stone-900 leading-snug">
          {question.prompt}
        </h3>
        <p className="text-[11px] font-semibold text-rose-900 mt-1 bg-rose-50 inline-block px-2.5 py-0.5 rounded-lg border border-rose-200">
          Question: {question.question}
        </p>
      </div>

      {/* Side-by-Side Comparison Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {question.options.map((optionText, idx) => {
          const isSelected = selected === optionText;
          const isOptionA = idx === 0;
          const eventData = isOptionA ? question.eventA : question.eventB;

          return (
            <button
              key={idx}
              type="button"
              onClick={() => handleSelect(optionText)}
              disabled={disabled}
              className={`p-3 sm:p-3.5 rounded-2xl border-2 text-left transition-all duration-150 shadow-xs flex flex-col justify-between relative ${
                isSelected
                  ? 'bg-rose-50/90 border-rose-500 ring-2 ring-rose-300 scale-[1.01]'
                  : 'bg-white hover:bg-stone-50 border-stone-200 hover:border-rose-300'
              } ${disabled ? 'cursor-not-allowed opacity-80' : ''}`}
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-stone-100 text-stone-700 border border-stone-200">
                    Option {idx === 0 ? 'A' : 'B'}
                  </span>
                  {isSelected && <CheckCircle2 className="w-4 h-4 text-rose-600" />}
                </div>

                <h4 className="text-xs sm:text-sm font-serif font-bold text-stone-900 leading-snug">
                  {eventData.label}
                </h4>

                {eventData.detail && (
                  <p className="text-[11px] text-stone-500 mt-1 italic bg-stone-50 p-1.5 rounded-lg border border-stone-100">
                    {eventData.detail}
                  </p>
                )}
              </div>

              <div className="mt-2 pt-1.5 border-t border-stone-100 flex items-center justify-between text-[10px] font-bold text-stone-600">
                <span>Select this event</span>
                <span className="text-xs font-serif">&rarr;</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Submit Button */}
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
          CONFIRM DECISION
        </button>
      </div>
    </div>
  );
};
