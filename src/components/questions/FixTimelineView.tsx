import React, { useState } from 'react';
import { FixTimelineQuestion } from '@/types/question';
import { AlertCircle, Wrench, CheckCircle2 } from 'lucide-react';

interface FixTimelineViewProps {
  question: FixTimelineQuestion;
  onSubmitAnswer: (selectedWrongEventId: string) => void;
  disabled?: boolean;
}

export const FixTimelineView: React.FC<FixTimelineViewProps> = ({
  question,
  onSubmitAnswer,
  disabled = false,
}) => {
  const [selectedWrongId, setSelectedWrongId] = useState<string | null>(null);

  const handleSelectEvent = (id: string) => {
    if (disabled) return;
    setSelectedWrongId(id);
  };

  const handleSubmit = () => {
    if (!selectedWrongId || disabled) return;
    onSubmitAnswer(selectedWrongId);
  };

  return (
    <div className="w-full flex flex-col space-y-2.5">
      {/* Header Prompt */}
      <div className="bg-white/95 rounded-2xl border-2 border-stone-200 p-3 sm:p-3.5 shadow-xs">
        <div className="flex items-center space-x-1.5 text-[10px] font-bold uppercase tracking-wider text-teal-800 mb-1">
          <Wrench className="w-3.5 h-3.5 text-teal-600" />
          <span>Timeline Anachronism Diagnostic</span>
        </div>
        <h3 className="text-xs sm:text-sm font-serif font-bold text-stone-900 leading-snug">
          {question.prompt}
        </h3>
        <p className="text-[11px] text-stone-600 mt-1">
          Click on the card that is placed in the <strong className="text-teal-900">WRONG order</strong>.
        </p>
      </div>

      {/* Visual Timeline Bar (Past to Present) */}
      <div className="bg-stone-100/90 rounded-2xl p-3 border border-stone-200 shadow-inner">
        {/* Direction Flow Marker */}
        <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-stone-500 mb-2 px-1">
          <span>PAST</span>
          <div className="flex-1 mx-3 border-t border-dashed border-stone-300 relative">
            <div className="absolute right-0 -top-1 w-0 h-0 border-t-3 border-t-transparent border-b-3 border-b-transparent border-l-6 border-l-stone-400" />
          </div>
          <span>PRESENT</span>
        </div>

        {/* Timeline Cards in Row */}
        <div className="grid grid-cols-2 gap-2">
          {question.timeline.map((event, index) => {
            const isSelected = selectedWrongId === event.id;

            return (
              <button
                key={event.id}
                type="button"
                onClick={() => handleSelectEvent(event.id)}
                disabled={disabled}
                className={`p-2.5 rounded-xl border-2 text-left transition-all duration-150 flex flex-col justify-between relative shadow-xs ${
                  isSelected
                    ? 'bg-teal-50 border-teal-500 ring-2 ring-teal-300 scale-[1.01] shadow-xs'
                    : 'bg-white hover:bg-stone-50 border-stone-300 hover:border-teal-400'
                } ${disabled ? 'cursor-not-allowed opacity-80' : ''}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider bg-stone-100 px-1.5 py-0.2 rounded">
                      Pos {index + 1}
                    </span>
                    {isSelected && (
                      <AlertCircle className="w-3.5 h-3.5 text-teal-600 animate-pulse" />
                    )}
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-stone-900 font-serif leading-snug">
                    {event.label}
                  </h4>
                </div>

                <div className="mt-2 pt-1 border-t border-stone-100 flex items-center justify-between text-[10px] font-semibold text-teal-800">
                  <span>{event.era}</span>
                  {isSelected ? (
                    <span className="text-teal-700 font-bold underline">Error</span>
                  ) : (
                    <span className="text-stone-400">Flag</span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end pt-1">
        <button
          type="button"
          onClick={handleSubmit}
          disabled={!selectedWrongId || disabled}
          className={`px-6 py-2 rounded-xl font-serif font-bold text-xs sm:text-sm tracking-wider transition-all shadow-sm ${
            selectedWrongId && !disabled
              ? 'bg-[#2B4C7E] hover:bg-[#1E3557] text-white hover:scale-105 active:scale-95 cursor-pointer'
              : 'bg-stone-200 text-stone-400 cursor-not-allowed'
          }`}
        >
          CONFIRM REPAIR
        </button>
      </div>
    </div>
  );
};
