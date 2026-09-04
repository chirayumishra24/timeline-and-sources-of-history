import React, { useState } from 'react';
import { EvidenceEvalQuestion } from '@/types/question';
import { Scale, CheckCircle2, HelpCircle } from 'lucide-react';

interface EvidenceEvalViewProps {
  question: EvidenceEvalQuestion;
  onSubmitAnswer: (selectedOption: 'Supported by the Evidence' | 'Not Established by the Evidence') => void;
  disabled?: boolean;
}

export const EvidenceEvalView: React.FC<EvidenceEvalViewProps> = ({
  question,
  onSubmitAnswer,
  disabled = false,
}) => {
  const [selected, setSelected] = useState<'Supported by the Evidence' | 'Not Established by the Evidence' | null>(null);

  const handleSelect = (option: 'Supported by the Evidence' | 'Not Established by the Evidence') => {
    if (disabled) return;
    setSelected(option);
  };

  const handleSubmit = () => {
    if (!selected || disabled) return;
    onSubmitAnswer(selected);
  };

  return (
    <div className="w-full flex flex-col space-y-6">
      {/* Historical Source Context Box */}
      <div className="bg-white rounded-3xl border-2 border-stone-200 shadow-sm overflow-hidden">
        <div className="bg-purple-50 border-b border-purple-200 px-6 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-purple-900">
            <Scale className="w-4 h-4 text-purple-700" />
            <span className="text-xs font-bold uppercase tracking-widest font-serif">
              Evidentiary Evaluation: What Can We Know?
            </span>
          </div>
          <span className="text-xs font-bold px-3 py-0.5 rounded-full bg-white text-purple-900 border border-purple-300">
            Evidence Type: {question.sourceType}
          </span>
        </div>

        <div className="p-6">
          <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-1">
            Historical Discovery Context:
          </span>
          <p className="text-base font-serif text-stone-800 leading-relaxed bg-stone-50 p-4 rounded-2xl border border-stone-200 italic">
            &ldquo;{question.sourceContext}&rdquo;
          </p>
        </div>
      </div>

      {/* Claim Under Investigation */}
      <div className="bg-white/95 rounded-2xl border-2 border-stone-200 p-5 sm:p-6 shadow-sm">
        <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-amber-800 mb-2">
          <HelpCircle className="w-4 h-4 text-amber-600" />
          <span>Historical Claim to Evaluate</span>
        </div>
        <h3 className="text-lg sm:text-xl font-serif font-bold text-stone-900 leading-snug">
          Claim: &ldquo;{question.claim}&rdquo;
        </h3>
        <p className="text-xs text-stone-500 mt-2">
          Does the primary archaeological or textual evidence directly support this claim, or is it unestablished?
        </p>

        {/* Dual Choice Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {/* Supported Button */}
          <button
            onClick={() => handleSelect('Supported by the Evidence')}
            disabled={disabled}
            className={`p-5 rounded-2xl border-3 text-left transition-all duration-200 flex flex-col justify-between relative shadow-sm ${
              selected === 'Supported by the Evidence'
                ? 'bg-emerald-50 border-emerald-600 ring-2 ring-emerald-300 scale-[1.02] shadow-md'
                : 'bg-white hover:bg-stone-50 border-stone-200 hover:border-emerald-400'
            } ${disabled ? 'cursor-not-allowed opacity-80' : ''}`}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300">
                  Option A
                </span>
                {selected === 'Supported by the Evidence' && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                )}
              </div>
              <h4 className="text-base sm:text-lg font-serif font-bold text-stone-900">
                SUPPORTED BY THE EVIDENCE
              </h4>
              <p className="text-xs text-stone-600 mt-1">
                The surviving evidence provides clear, legitimate proof for this conclusion.
              </p>
            </div>
          </button>

          {/* Not Established Button */}
          <button
            onClick={() => handleSelect('Not Established by the Evidence')}
            disabled={disabled}
            className={`p-5 rounded-2xl border-3 text-left transition-all duration-200 flex flex-col justify-between relative shadow-sm ${
              selected === 'Not Established by the Evidence'
                ? 'bg-amber-50 border-amber-600 ring-2 ring-amber-300 scale-[1.02] shadow-md'
                : 'bg-white hover:bg-stone-50 border-stone-200 hover:border-amber-400'
            } ${disabled ? 'cursor-not-allowed opacity-80' : ''}`}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                  Option B
                </span>
                {selected === 'Not Established by the Evidence' && (
                  <CheckCircle2 className="w-5 h-5 text-amber-600" />
                )}
              </div>
              <h4 className="text-base sm:text-lg font-serif font-bold text-stone-900">
                NOT ESTABLISHED BY EVIDENCE
              </h4>
              <p className="text-xs text-stone-600 mt-1">
                This claim goes beyond what the evidence can prove or is unsupported assumption.
              </p>
            </div>
          </button>
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
          CONFIRM HISTORICAL JUDGEMENT
        </button>
      </div>
    </div>
  );
};
