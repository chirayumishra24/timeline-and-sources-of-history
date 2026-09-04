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
    <div className="w-full flex flex-col space-y-6">
      {/* Prompt Header */}
      <div className="bg-white/95 rounded-2xl border-2 border-stone-200 p-5 sm:p-6 shadow-sm">
        <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-teal-800 mb-2">
          <Wrench className="w-4 h-4 text-teal-600" />
          <span>Timeline Repair Laboratory</span>
        </div>
        <h3 className="text-lg sm:text-xl font-serif font-bold text-stone-900 leading-snug">
          {question.prompt}
        </h3>
        <p className="text-xs text-stone-600 mt-2">
          Click on the card that is placed in the <strong className="text-teal-900">WRONG chronological order</strong>.
        </p>
      </div>

      {/* Visual Timeline Bar (Past to Present) */}
      <div className="bg-stone-100/90 rounded-3xl p-5 border border-stone-200 shadow-inner">
        {/* Direction Flow Marker */}
        <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-stone-500 mb-3 px-2">
          <span>PAST (Earlier in Time)</span>
          <div className="flex-1 mx-4 border-t-2 border-dashed border-stone-300 relative">
            <div className="absolute right-0 -top-1.5 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-8 border-l-stone-400" />
          </div>
          <span>PRESENT (Later in Time)</span>
        </div>

        {/* Timeline Cards in Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {question.timeline.map((event, index) => {
            const isSelected = selectedWrongId === event.id;

            return (
              <button
                key={event.id}
                onClick={() => handleSelectEvent(event.id)}
                disabled={disabled}
                className={`p-4 rounded-2xl border-2 text-left transition-all duration-200 flex flex-col justify-between relative shadow-sm ${
                  isSelected
                    ? 'bg-teal-50 border-teal-500 ring-2 ring-teal-300 scale-[1.03] shadow-md'
                    : 'bg-white hover:bg-stone-50 border-stone-300 hover:border-teal-400'
                } ${disabled ? 'cursor-not-allowed opacity-80' : ''}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider bg-stone-100 px-2 py-0.5 rounded-md">
                      Pos {index + 1}
                    </span>
                    {isSelected && (
                      <AlertCircle className="w-5 h-5 text-teal-600 animate-pulse" />
                    )}
                  </div>
                  <h4 className="text-sm font-bold text-stone-900 font-serif leading-snug">
                    {event.label}
                  </h4>
                </div>

                <div className="mt-4 pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] font-semibold text-teal-800">
                  <span>{event.era}</span>
                  {isSelected ? (
                    <span className="text-teal-700 font-bold underline">Selected as Error</span>
                  ) : (
                    <span className="text-stone-400 hover:text-stone-600">Click to Flag</span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Error Resolution Explanation Preview */}
      {selectedWrongId && (
        <div className="bg-teal-50/80 border border-teal-200 rounded-2xl p-4 flex items-center space-x-3 text-sm text-teal-900 animate-fadeIn">
          <CheckCircle2 className="w-5 h-5 text-teal-700 shrink-0" />
          <span>
            You have flagged this item as the chronological error. Click <strong>Confirm Repair</strong> to test your historical deduction!
          </span>
        </div>
      )}

      {/* Submit Button */}
      <div className="flex justify-end pt-2">
        <button
          onClick={handleSubmit}
          disabled={!selectedWrongId || disabled}
          className={`px-8 py-3 rounded-2xl font-serif font-bold text-base tracking-wider transition-all shadow-md ${
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
