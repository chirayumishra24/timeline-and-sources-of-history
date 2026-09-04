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
    <div className="w-full max-w-7xl mx-auto p-2 sm:p-4 space-y-6 animate-fadeIn">
      {/* Top Banner: Landed Topic & Round Info (NO POPUPS) */}
      <div className="bg-white/95 rounded-3xl border-2 border-stone-300 shadow-md p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Topic Badge & Title */}
        <div className="flex items-center space-x-3 text-center md:text-left">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-stone-100 to-amber-100 border-2 border-amber-300 flex items-center justify-center text-3xl shadow-sm shrink-0">
            {meta.icon}
          </div>
          <div>
            <div className="flex items-center space-x-2 justify-center md:justify-start">
              <span className="text-[11px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
                Round {currentRound} of {maxRounds} Topic
              </span>
              <span className="text-xs font-semibold text-stone-500">
                Different questions for each team
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-black text-stone-900 tracking-wide mt-0.5">
              {meta.name}
            </h2>
            <p className="text-xs text-stone-600 font-medium">
              {meta.tagline}
            </p>
          </div>
        </div>

        {/* Live Round Status */}
        <div className="flex items-center space-x-2 text-xs font-bold">
          <div className={`px-3 py-1.5 rounded-xl border flex items-center space-x-1.5 ${
            answerTeamA
              ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
              : 'bg-blue-50 text-blue-800 border-blue-200 animate-pulse'
          }`}>
            <span>{teamA.name}:</span>
            <span>{answerTeamA ? '✓ Answered' : 'Thinking...'}</span>
          </div>

          <div className={`px-3 py-1.5 rounded-xl border flex items-center space-x-1.5 ${
            answerTeamB
              ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
              : 'bg-orange-50 text-orange-800 border-orange-200 animate-pulse'
          }`}>
            <span>{teamB.name}:</span>
            <span>{answerTeamB ? '✓ Answered' : 'Thinking...'}</span>
          </div>
        </div>
      </div>

      {/* Side-by-Side Dual Team Questions Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {/* Team A Column */}
        <div className="bg-white/95 rounded-3xl border-2 border-blue-300 shadow-md p-5 flex flex-col space-y-4 relative overflow-hidden">
          {/* Team A Header */}
          <div className="flex items-center justify-between pb-3 border-b border-stone-200">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#2B4C7E] text-white flex items-center justify-center shadow-sm">
                <EmblemIcon emblem={teamA.emblem} className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-900 block leading-tight">
                  Team A Challenge
                </span>
                <span className="font-serif font-bold text-base text-stone-900">
                  {teamA.name}
                </span>
              </div>
            </div>

            <div className="text-right flex items-center space-x-2">
              <span className="text-xs font-bold px-2.5 py-1 rounded-xl bg-amber-50 text-amber-900 border border-amber-300">
                +{questionTeamA.points} Pts
              </span>
              <span className="text-xs font-mono font-bold text-stone-700 bg-stone-100 px-2 py-1 rounded-lg">
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
              className={`p-4 rounded-2xl border-2 transition-all animate-fadeIn ${
                answerTeamA.isCorrect
                  ? 'bg-emerald-50/90 border-emerald-300 text-emerald-950'
                  : 'bg-amber-50/90 border-amber-300 text-amber-950'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center space-x-1.5 font-bold text-sm">
                  {answerTeamA.isCorrect ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      <span className="text-emerald-800">Correct! +{answerTeamA.pointsAwarded} Points</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-5 h-5 text-amber-600" />
                      <span className="text-amber-800">Incorrect! (0 Points)</span>
                    </>
                  )}
                </div>
              </div>
              <p className="text-xs font-medium text-stone-800 leading-relaxed">
                <strong>Explanation:</strong> {answerTeamA.explanation}
              </p>
            </div>
          )}
        </div>

        {/* Team B Column */}
        <div className="bg-white/95 rounded-3xl border-2 border-orange-300 shadow-md p-5 flex flex-col space-y-4 relative overflow-hidden">
          {/* Team B Header */}
          <div className="flex items-center justify-between pb-3 border-b border-stone-200">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#C85A32] text-white flex items-center justify-center shadow-sm">
                <EmblemIcon emblem={teamB.emblem} className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-orange-900 block leading-tight">
                  Team B Challenge
                </span>
                <span className="font-serif font-bold text-base text-stone-900">
                  {teamB.name}
                </span>
              </div>
            </div>

            <div className="text-right flex items-center space-x-2">
              <span className="text-xs font-bold px-2.5 py-1 rounded-xl bg-amber-50 text-amber-900 border border-amber-300">
                +{questionTeamB.points} Pts
              </span>
              <span className="text-xs font-mono font-bold text-stone-700 bg-stone-100 px-2 py-1 rounded-lg">
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
              className={`p-4 rounded-2xl border-2 transition-all animate-fadeIn ${
                answerTeamB.isCorrect
                  ? 'bg-emerald-50/90 border-emerald-300 text-emerald-950'
                  : 'bg-amber-50/90 border-amber-300 text-amber-950'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center space-x-1.5 font-bold text-sm">
                  {answerTeamB.isCorrect ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      <span className="text-emerald-800">Correct! +{answerTeamB.pointsAwarded} Points</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-5 h-5 text-amber-600" />
                      <span className="text-amber-800">Incorrect! (0 Points)</span>
                    </>
                  )}
                </div>
              </div>
              <p className="text-xs font-medium text-stone-800 leading-relaxed">
                <strong>Explanation:</strong> {answerTeamB.explanation}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Real-time History Balance Scale */}
      <HistoryBalance teamA={teamA} teamB={teamB} />

      {/* Central Bottom Action Bar: Ready for Next Spin */}
      <div className="flex flex-col items-center justify-center pt-2">
        {bothAnswered ? (
          <button
            onClick={onProceedToNextSpin}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-500 text-white font-serif font-bold text-lg tracking-wider transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center space-x-3 border-2 border-amber-400 animate-bounce"
          >
            <span>
              {isFinalRound
                ? 'PROCEED TO FINAL CHALLENGE'
                : `SPIN FOR NEXT TOPIC (${nextSpinTeam.name.toUpperCase()}'S TURN)`}
            </span>
            <ArrowRight className="w-5 h-5" />
          </button>
        ) : (
          <div className="text-xs font-bold uppercase tracking-wider text-stone-500 bg-white/80 border border-stone-200 px-4 py-2 rounded-full">
            Waiting for both teams to submit their answers...
          </div>
        )}
      </div>
    </div>
  );
};
