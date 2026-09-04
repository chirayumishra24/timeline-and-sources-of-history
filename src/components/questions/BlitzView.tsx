import React, { useState, useEffect, useRef } from 'react';
import { BlitzQuestion } from '@/types/question';
import { Zap, Timer } from 'lucide-react';
import { soundManager } from '@/utils/sound';

interface BlitzViewProps {
  question: BlitzQuestion;
  onSubmitAnswer: (selectedOption: string) => void;
  disabled?: boolean;
}

export const BlitzView: React.FC<BlitzViewProps> = ({
  question,
  onSubmitAnswer,
  disabled = false,
}) => {
  const timeLimit = question.timeLimitSeconds || 15;
  const [secondsRemaining, setSecondsRemaining] = useState(timeLimit);
  const [selected, setSelected] = useState<string | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (disabled) return;

    timerRef.current = setInterval(() => {
      setSecondsRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          // Auto submit whatever is selected or empty string on time out
          onSubmitAnswer(selected || '');
          return 0;
        }
        if (prev <= 5) {
          soundManager.playBlitzTick();
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [disabled, onSubmitAnswer, selected]);

  const handleSelect = (option: string) => {
    if (disabled) return;
    setSelected(option);
    if (timerRef.current) clearInterval(timerRef.current);
    onSubmitAnswer(option);
  };

  const percentLeft = (secondsRemaining / timeLimit) * 100;
  const isWarning = secondsRemaining <= 5;

  return (
    <div className="w-full flex flex-col space-y-6">
      {/* Rapid Timer Banner */}
      <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 rounded-2xl p-4 text-white shadow-md flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="p-2 rounded-xl bg-white/20 animate-bounce">
            <Zap className="w-5 h-5 text-yellow-200 fill-yellow-300" />
          </div>
          <div>
            <span className="text-xs uppercase font-bold tracking-wider opacity-90 block">
              HISTORY BLITZ &bull; SPEED ROUND
            </span>
            <h3 className="text-base font-serif font-bold">Fast Answer = +5 Points!</h3>
          </div>
        </div>

        {/* Live Timer Gauge */}
        <div className="flex items-center space-x-2 bg-black/25 px-4 py-1.5 rounded-xl border border-white/20">
          <Timer className={`w-5 h-5 ${isWarning ? 'text-rose-300 animate-spin' : 'text-amber-200'}`} />
          <span className={`font-mono text-2xl font-black ${isWarning ? 'text-rose-200 scale-110' : 'text-white'}`}>
            {secondsRemaining}s
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-stone-200 h-2.5 rounded-full overflow-hidden shadow-inner">
        <div
          className={`h-full transition-all duration-1000 rounded-full ${
            isWarning ? 'bg-rose-600' : 'bg-amber-500'
          }`}
          style={{ width: `${percentLeft}%` }}
        />
      </div>

      {/* Prompt */}
      <div className="bg-white/95 rounded-2xl border-2 border-stone-200 p-5 sm:p-6 shadow-sm">
        <h4 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 leading-snug">
          {question.question}
        </h4>
      </div>

      {/* Blitz Quick Options Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {question.options.map((option, idx) => {
          const isSelected = selected === option;

          return (
            <button
              key={idx}
              onClick={() => handleSelect(option)}
              disabled={disabled}
              className={`p-5 rounded-2xl border-2 font-serif text-base sm:text-lg font-bold text-left transition-all duration-150 shadow-sm flex items-center justify-between ${
                isSelected
                  ? 'bg-amber-500 text-white border-amber-600 scale-[1.02]'
                  : 'bg-white hover:bg-amber-50 text-stone-800 border-stone-200 hover:border-amber-400 active:scale-95'
              } ${disabled ? 'cursor-not-allowed opacity-80' : 'cursor-pointer'}`}
            >
              <span>{option}</span>
              <span className="text-xs font-mono opacity-50 px-2 py-0.5 rounded bg-stone-100 text-stone-700 ml-2 shrink-0">
                #{idx + 1}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
