'use client';

import React from 'react';
import { Question, MCQQuestion, OrderingQuestion, BeforeAfterQuestion, FixTimelineQuestion, SourceDetectiveQuestion, ConnectCluesQuestion, EvidenceEvalQuestion, BlitzQuestion, WheelCategory } from '@/types/question';
import { Team, TeamId } from '@/types/team';
import { TeamAnswerStatus } from '@/types/game';
import { getCategoryMeta } from '@/data/questions';
import { EmblemIcon } from './EmblemIcon';
import { HistoryBalance } from './HistoryBalance';
import { MCQView } from './questions/MCQView';
import { OrderingView } from './questions/OrderingView';
import { BeforeAfterView } from './questions/BeforeAfterView';
import { FixTimelineView } from './questions/FixTimelineView';
import { SourceDetectiveView } from './questions/SourceDetectiveView';
import { ConnectCluesView } from './questions/ConnectCluesView';
import { EvidenceEvalView } from './questions/EvidenceEvalView';
import { BlitzView } from './questions/BlitzView';
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

interface DualQuestionsArenaProps {
  category: WheelCategory;
  currentRound: number;
  maxRounds: number;
  teamA: Team;
  teamB: Team;
  questionTeamA: Question;
  questionTeamB: Question;
  answerTeamA: TeamAnswerStatus | null;
  answerTeamB: TeamAnswerStatus | null;
  onAnswerSubmit: (teamId: TeamId, answer: any) => void;
  onProceedToNextSpin: () => void;
  nextSpinTeam: Team;
}

export const DualQuestionsArena: React.FC<DualQuestionsArenaProps> = ({
  category,
  currentRound,
  maxRounds,
  teamA,
  teamB,
  questionTeamA,
  questionTeamB,
  answerTeamA,
  answerTeamB,
  onAnswerSubmit,
  onProceedToNextSpin,
  nextSpinTeam,
}) => {
  const meta = getCategoryMeta(category);
  const bothAnswered = !!answerTeamA && !!answerTeamB;
  const isFinalRound = currentRound >= maxRounds;

  // Press Enter key to proceed when both teams have answered
  React.useEffect(() => {
    if (!bothAnswered) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        onProceedToNextSpin();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [bothAnswered, onProceedToNextSpin]);

  const renderQuestionComponent = (question: Question, teamId: TeamId, disabled: boolean) => {
    switch (question.type) {
      case 'mcq':
        return (
          <MCQView
            question={question as MCQQuestion}
            onSubmitAnswer={(ans) => onAnswerSubmit(teamId, ans)}
            disabled={disabled}
          />
        );
      case 'ordering':
        return (
          <OrderingView
            question={question as OrderingQuestion}
            onSubmitAnswer={(ans) => onAnswerSubmit(teamId, ans)}
            disabled={disabled}
          />
        );
      case 'before-after':
        return (
          <BeforeAfterView
            question={question as BeforeAfterQuestion}
            onSubmitAnswer={(ans) => onAnswerSubmit(teamId, ans)}
            disabled={disabled}
          />
        );
      case 'fix-timeline':
        return (
          <FixTimelineView
            question={question as FixTimelineQuestion}
            onSubmitAnswer={(ans) => onAnswerSubmit(teamId, ans)}
            disabled={disabled}
          />
        );
      case 'source-detective':
        return (
          <SourceDetectiveView
            question={question as SourceDetectiveQuestion}
            onSubmitAnswer={(ans) => onAnswerSubmit(teamId, ans)}
            disabled={disabled}
          />
        );
      case 'connect-clues':
        return (
          <ConnectCluesView
            question={question as ConnectCluesQuestion}
            onSubmitAnswer={(ans) => onAnswerSubmit(teamId, ans)}
            disabled={disabled}
          />
        );
      case 'evidence-eval':
        return (
          <EvidenceEvalView
            question={question as EvidenceEvalQuestion}
            onSubmitAnswer={(ans) => onAnswerSubmit(teamId, ans)}
            disabled={disabled}
          />
        );
      case 'blitz':
        return (
          <BlitzView
            question={question as BlitzQuestion}
            onSubmitAnswer={(ans) => onAnswerSubmit(teamId, ans)}
            disabled={disabled}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-7xl 2xl:max-w-[1680px] mx-auto p-1 sm:p-2 2xl:p-4 space-y-2 2xl:space-y-4 animate-fadeIn">
      {/* Top Banner: Landed Topic & Round Info (Compact) */}
      <div className="bg-white/95 rounded-2xl border-2 border-stone-300 shadow-sm p-2 sm:p-2.5 2xl:p-4 flex flex-row items-center justify-between gap-2">
        {/* Topic Badge & Title */}
        <div className="flex items-center space-x-2.5 2xl:space-x-4">
          <div className="w-10 h-10 2xl:w-14 2xl:h-14 rounded-xl bg-gradient-to-tr from-stone-100 to-amber-100 border-2 border-amber-300 flex items-center justify-center text-xl 2xl:text-3xl shadow-xs shrink-0">
            {meta.icon}
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] 2xl:text-xs font-bold uppercase tracking-widest px-2 py-0.2 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
                Round {currentRound} of {maxRounds}
              </span>
              <span className="text-[11px] 2xl:text-xs font-semibold text-stone-500 hidden sm:inline">
                Simultaneous Challenges
              </span>
            </div>
            <h2 className="text-sm sm:text-base 2xl:text-xl font-serif font-black text-stone-900 tracking-wide leading-tight">
              {meta.name} <span className="text-xs 2xl:text-sm font-normal text-stone-500 font-sans hidden md:inline">&bull; {meta.tagline}</span>
            </h2>
          </div>
        </div>

        {/* Live Round Status */}
        <div className="flex items-center space-x-1.5 2xl:space-x-3 text-[11px] 2xl:text-sm font-bold">
          <div className={`px-2.5 2xl:px-4 py-1 2xl:py-2 rounded-lg border flex items-center space-x-1 ${
            answerTeamA
              ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
              : 'bg-blue-50 text-blue-800 border-blue-200 animate-pulse'
          }`}>
            <span>{teamA.name}:</span>
            <span>{answerTeamA ? '✓' : 'Thinking'}</span>
          </div>

          <div className={`px-2.5 2xl:px-4 py-1 2xl:py-2 rounded-lg border flex items-center space-x-1 ${
            answerTeamB
              ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
              : 'bg-orange-50 text-orange-800 border-orange-200 animate-pulse'
          }`}>
            <span>{teamB.name}:</span>
            <span>{answerTeamB ? '✓' : 'Thinking'}</span>
          </div>
        </div>
      </div>

      {/* Side-by-Side Dual Team Questions Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-3 2xl:gap-6 items-start">
        {/* Team A Column */}
        <div className="bg-white/95 rounded-2xl border-2 border-blue-300 shadow-sm p-3 sm:p-3.5 flex flex-col space-y-2 relative overflow-hidden">
          {/* Team A Header */}
          <div className="flex items-center justify-between pb-1.5 border-b border-stone-200">
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 rounded-lg bg-[#2B4C7E] text-white flex items-center justify-center shadow-xs">
                <EmblemIcon emblem={teamA.emblem} className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-900 block leading-tight">
                  Team A Challenge
                </span>
                <span className="font-serif font-bold text-xs sm:text-sm text-stone-900">
                  {teamA.name}
                </span>
              </div>
            </div>

            <div className="text-right flex items-center space-x-1.5">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-amber-50 text-amber-900 border border-amber-300">
                +{questionTeamA.points} Pts
              </span>
              <span className="text-[10px] font-mono font-bold text-stone-700 bg-stone-100 px-1.5 py-0.5 rounded">
                Score: {teamA.score}
              </span>
            </div>
          </div>

          {/* Question Interactive View */}
          <div className="flex-1">
            {renderQuestionComponent(questionTeamA, 'teamA', !!answerTeamA)}
          </div>

          {/* Team A Inline Result (NO POPUP) */}
          {answerTeamA && (
            <div
              className={`p-2.5 rounded-xl border-2 transition-all animate-fadeIn ${
                answerTeamA.isCorrect
                  ? 'bg-emerald-50/90 border-emerald-300 text-emerald-950'
                  : 'bg-amber-50/90 border-amber-300 text-amber-950'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center space-x-1.5 font-bold text-xs">
                  {answerTeamA.isCorrect ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-800">Correct! +{answerTeamA.pointsAwarded} Points</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-4 h-4 text-amber-600" />
                      <span className="text-amber-800">Incorrect! (0 Points)</span>
                    </>
                  )}
                </div>
              </div>
              <p className="text-[11px] font-medium text-stone-800 leading-relaxed">
                <strong>Explanation:</strong> {answerTeamA.explanation}
              </p>
            </div>
          )}
        </div>

        {/* Team B Column */}
        <div className="bg-white/95 rounded-2xl border-2 border-orange-300 shadow-sm p-3 sm:p-3.5 flex flex-col space-y-2 relative overflow-hidden">
          {/* Team B Header */}
          <div className="flex items-center justify-between pb-1.5 border-b border-stone-200">
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 rounded-lg bg-[#C85A32] text-white flex items-center justify-center shadow-xs">
                <EmblemIcon emblem={teamB.emblem} className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-orange-900 block leading-tight">
                  Team B Challenge
                </span>
                <span className="font-serif font-bold text-xs sm:text-sm text-stone-900">
                  {teamB.name}
                </span>
              </div>
            </div>

            <div className="text-right flex items-center space-x-1.5">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-amber-50 text-amber-900 border border-amber-300">
                +{questionTeamB.points} Pts
              </span>
              <span className="text-[10px] font-mono font-bold text-stone-700 bg-stone-100 px-1.5 py-0.5 rounded">
                Score: {teamB.score}
              </span>
            </div>
          </div>

          {/* Question Interactive View */}
          <div className="flex-1">
            {renderQuestionComponent(questionTeamB, 'teamB', !!answerTeamB)}
          </div>

          {/* Team B Inline Result (NO POPUP) */}
          {answerTeamB && (
            <div
              className={`p-2.5 rounded-xl border-2 transition-all animate-fadeIn ${
                answerTeamB.isCorrect
                  ? 'bg-emerald-50/90 border-emerald-300 text-emerald-950'
                  : 'bg-amber-50/90 border-amber-300 text-amber-950'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center space-x-1.5 font-bold text-xs">
                  {answerTeamB.isCorrect ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-800">Correct! +{answerTeamB.pointsAwarded} Points</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-4 h-4 text-amber-600" />
                      <span className="text-amber-800">Incorrect! (0 Points)</span>
                    </>
                  )}
                </div>
              </div>
              <p className="text-[11px] font-medium text-stone-800 leading-relaxed">
                <strong>Explanation:</strong> {answerTeamB.explanation}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Real-time History Balance Scale */}
      <HistoryBalance teamA={teamA} teamB={teamB} />

      {/* Central Bottom Action Bar: Ready for Next Spin */}
      <div className="sticky bottom-2 z-20 flex flex-col items-center justify-center pt-1 pb-1">
        {bothAnswered ? (
          <button
            type="button"
            onClick={onProceedToNextSpin}
            className="px-8 py-3 2xl:px-12 2xl:py-4.5 rounded-2xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-500 text-white font-serif font-bold text-sm sm:text-base 2xl:text-xl tracking-wider transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center space-x-2.5 border-2 border-amber-400 ring-4 ring-amber-400/25 animate-bounce select-none touch-manipulation"
          >
            <span>
              {isFinalRound
                ? 'PROCEED TO FINAL CHALLENGE 🏆'
                : `SPIN FOR NEXT TOPIC (${nextSpinTeam.name.toUpperCase()}'S TURN) →`}
            </span>
            <ArrowRight className="w-5 h-5" />
          </button>
        ) : (
          <div className="text-[11px] font-bold uppercase tracking-wider text-stone-600 bg-white/95 backdrop-blur-sm border border-stone-300 px-4 py-1.5 rounded-full shadow-xs">
            Waiting for both teams to submit their answers...
          </div>
        )}
      </div>
    </div>
  );
};
