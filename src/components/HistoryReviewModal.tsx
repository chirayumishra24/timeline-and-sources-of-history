import React from 'react';
import { AnswerLog } from '@/types/game';
import { getCategoryMeta } from '@/data/questions';
import { BookOpen, CheckCircle2, XCircle, ChevronRight } from 'lucide-react';

interface HistoryReviewModalProps {
  logs: AnswerLog[];
  teamAName: string;
  teamBName: string;
  onClose: () => void;
}

export const HistoryReviewModal: React.FC<HistoryReviewModalProps> = ({
  logs,
  teamAName,
  teamBName,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fadeIn">
      <div className="bg-white rounded-3xl border-2 border-stone-300 shadow-2xl p-6 max-w-4xl w-full max-h-[88vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-stone-200">
          <div className="flex items-center space-x-2.5">
            <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-900">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-stone-900">
                REVIEW THE HISTORY
              </h3>
              <p className="text-xs text-stone-500">
                Educational summary of {logs.length} challenges answered in this game session
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center font-bold text-base transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Scrollable List of Answered Challenges */}
        <div className="flex-1 overflow-y-auto py-4 space-y-4 pr-1">
          {logs.length === 0 ? (
            <div className="text-center py-12 text-sm text-stone-400 italic">
              No challenges have been completed yet. Answer questions to populate this historical review catalog.
            </div>
          ) : (
            logs.map((log, index) => {
              const meta = getCategoryMeta(log.question.category);
              const teamName = log.teamId === 'teamA' ? teamAName : teamBName;

              return (
                <div
                  key={index}
                  className={`p-4 rounded-2xl border-2 transition-all shadow-sm ${
                    log.isCorrect
                      ? 'bg-emerald-50/50 border-emerald-200'
                      : 'bg-stone-50 border-stone-200'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-lg bg-stone-100 text-stone-700">
                        Round {log.round}
                      </span>
                      <span
                        className={`text-xs font-bold px-2.5 py-0.5 rounded-lg border flex items-center space-x-1 ${meta.badgeBg} ${meta.badgeBorder} ${meta.textColor}`}
                      >
                        <span>{meta.icon}</span>
                        <span>{meta.name}</span>
                      </span>
                      <span className="text-xs font-semibold text-stone-600">
                        Answered by <strong>{teamName}</strong>
                      </span>
                    </div>

                    <div className="flex items-center space-x-1.5">
                      {log.isCorrect ? (
                        <span className="flex items-center space-x-1 text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-md">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>+{log.pointsAwarded} Pts</span>
                        </span>
                      ) : (
                        <span className="flex items-center space-x-1 text-xs font-bold text-stone-600 bg-stone-200 px-2.5 py-0.5 rounded-md">
                          <XCircle className="w-3.5 h-3.5 text-stone-500" />
                          <span>0 Pts</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Question Content */}
                  <h4 className="text-sm font-serif font-bold text-stone-900 leading-snug">
                    {'question' in log.question ? log.question.question : ('prompt' in log.question ? log.question.prompt : log.question.id)}
                  </h4>

                  {/* Answer Summary */}
                  <div className="mt-2.5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div className="p-2 rounded-xl bg-white border border-stone-200">
                      <span className="text-[10px] font-bold uppercase text-stone-400 block">
                        Team Answer:
                      </span>
                      <span className="font-semibold text-stone-800">
                        {Array.isArray(log.selectedAnswer) ? log.selectedAnswer.join(' → ') : String(log.selectedAnswer || 'Time Expired')}
                      </span>
                    </div>

                    <div className="p-2 rounded-xl bg-white border border-emerald-300">
                      <span className="text-[10px] font-bold uppercase text-emerald-700 block">
                        Correct Answer:
                      </span>
                      <span className="font-semibold text-emerald-950">
                        {'correctAnswer' in log.question ? log.question.correctAnswer : ('correctOrder' in log.question ? log.question.correctOrder.join(' → ') : 'Verified Sequence')}
                      </span>
                    </div>
                  </div>

                  {/* Learning Explanation */}
                  <p className="text-xs text-stone-600 mt-2 bg-stone-100/80 p-2.5 rounded-xl italic">
                    <strong>Historical Insight:</strong> {log.explanation}
                  </p>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-stone-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-serif text-xs font-bold tracking-wider"
          >
            CLOSE REVIEW
          </button>
        </div>
      </div>
    </div>
  );
};
