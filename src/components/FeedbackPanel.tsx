import React from 'react';
import { CheckCircle2, XCircle, ArrowRight, Sparkles } from 'lucide-react';
import { Team } from '@/types/team';

interface FeedbackPanelProps {
  isCorrect: boolean;
  pointsEarned: number;
  explanation: string;
  activeTeam: Team;
  nextTeam: Team;
  onProceed: () => void;
}

export const FeedbackPanel: React.FC<FeedbackPanelProps> = ({
  isCorrect,
  pointsEarned,
  explanation,
  activeTeam,
  nextTeam,
  onProceed,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-fadeIn">
      <div
        className={`bg-white rounded-3xl border-4 shadow-2xl p-6 sm:p-8 max-w-xl w-full text-center transform animate-scaleUp ${
          isCorrect ? 'border-emerald-400' : 'border-amber-400'
        }`}
      >
        {/* Result Icon */}
        <div className="flex justify-center mb-3">
          {isCorrect ? (
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 border-2 border-emerald-300 flex items-center justify-center text-emerald-600 animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>
          ) : (
            <div className="w-16 h-16 rounded-2xl bg-amber-100 border-2 border-amber-300 flex items-center justify-center text-amber-600">
              <XCircle className="w-10 h-10" />
            </div>
          )}
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-serif font-black text-stone-900 tracking-wide">
          {isCorrect ? 'HISTORICAL INSIGHT CONFIRMED!' : 'NOT QUITE! KEEP THINKING'}
        </h2>

        {/* Points & Discovery Notification */}
        {isCorrect ? (
          <div className="my-3 flex items-center justify-center space-x-2">
            <span className="text-lg font-mono font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-200">
              +{pointsEarned} Points for {activeTeam.name}
            </span>
            <span className="flex items-center space-x-1 text-xs font-bold text-amber-800 bg-amber-50 px-3 py-1 rounded-xl border border-amber-200">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Discovery Unlocked!</span>
            </span>
          </div>
        ) : (
          <p className="text-xs font-semibold text-stone-500 my-2">
            0 points awarded &bull; Turn passes to {nextTeam.name}
          </p>
        )}

        {/* Conceptual Learning Explanation (Mandatory) */}
        <div className="my-5 p-4 rounded-2xl bg-stone-50 border border-stone-200 text-left">
          <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block mb-1">
            Historical Explanation:
          </span>
          <p className="text-sm font-medium text-stone-800 leading-relaxed">
            {explanation}
          </p>
        </div>

        {/* Proceed Action */}
        <button
          onClick={onProceed}
          className={`w-full py-3.5 px-6 rounded-2xl font-serif font-bold text-base tracking-wider text-white transition-all shadow-md flex items-center justify-center space-x-2 ${
            isCorrect
              ? 'bg-emerald-700 hover:bg-emerald-800 hover:scale-105 active:scale-95'
              : 'bg-[#2B4C7E] hover:bg-[#1E3557] hover:scale-105 active:scale-95'
          }`}
        >
          <span>{isCorrect ? 'REVEAL HISTORICAL DISCOVERY' : `CONTINUE TO ${nextTeam.name.toUpperCase()}'S TURN`}</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
