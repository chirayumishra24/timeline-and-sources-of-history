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
    <div className="w-full flex flex-col space-y-6">
      {/* Header Prompt */}
      <div className="bg-white/95 rounded-2xl border-2 border-stone-200 p-5 sm:p-6 shadow-sm">
        <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-rose-800 mb-2">
          <Clock className="w-4 h-4 text-rose-600" />
          <span>Before or After Comparison</span>
        </div>
        <h3 className="text-lg sm:text-xl font-serif font-bold text-stone-900 leading-snug">
          {question.prompt}
        </h3>
        <p className="text-sm font-semibold text-rose-900 mt-2 bg-rose-50 inline-block px-3 py-1 rounded-lg border border-rose-200">
          Question: {question.question}
        </p>
      </div>

      {/* Side-by-Side Comparison Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {question.options.map((optionText, idx) => {
          const isSelected = selected === optionText;
          const isOptionA = idx === 0;
          const eventData = isOptionA ? question.eventA : question.eventB;

          return (
            <button
              key={idx}
              onClick={() => handleSelect(optionText)}
              disabled={disabled}
              className={`p-6 rounded-3xl border-3 text-left transition-all duration-200 shadow-md flex flex-col justify-between relative ${
                isSelected
                  ? 'bg-rose-50/90 border-rose-500 ring-2 ring-rose-300 scale-[1.02]'
                  : 'bg-white hover:bg-stone-50 border-stone-200 hover:border-rose-300'
              } ${disabled ? 'cursor-not-allowed opacity-80' : ''}`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-stone-100 text-stone-700 border border-stone-200">
                    Option {idx === 0 ? 'A' : 'B'}
                  </span>
                  {isSelected && <CheckCircle2 className="w-6 h-6 text-rose-600" />}
                </div>

                <h4 className="text-lg font-serif font-bold text-stone-900 leading-snug">
                  {eventData.label}
                </h4>

                {eventData.detail && (
                  <p className="text-xs text-stone-500 mt-2 italic bg-stone-50 p-2 rounded-xl border border-stone-100">
                    {eventData.detail}
                  </p>
                )}
              </div>

              <div className="mt-6 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-stone-600">
                <span>Select this event</span>
                <span className="text-base font-serif">&rarr;</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Submit Button */}
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
          CONFIRM SELECTION
        </button>
      </div>
    </div>
  );
};
