'use client';

import React from 'react';
import { Question, MCQQuestion, OrderingQuestion, BeforeAfterQuestion, FixTimelineQuestion, SourceDetectiveQuestion, ConnectCluesQuestion, EvidenceEvalQuestion, BlitzQuestion } from '@/types/question';
import { Team } from '@/types/team';
import { getCategoryMeta } from '@/data/questions';
import { EmblemIcon } from './EmblemIcon';
import { MCQView } from './questions/MCQView';
import { OrderingView } from './questions/OrderingView';
import { BeforeAfterView } from './questions/BeforeAfterView';
import { FixTimelineView } from './questions/FixTimelineView';
import { SourceDetectiveView } from './questions/SourceDetectiveView';
import { ConnectCluesView } from './questions/ConnectCluesView';
import { EvidenceEvalView } from './questions/EvidenceEvalView';
import { BlitzView } from './questions/BlitzView';

interface QuestionScreenProps {
  question: Question;
  activeTeam: Team;
  currentRound: number;
  maxRounds: number;
  questionNumberInTopic?: number;
  onAnswerSubmit: (answerData: any) => void;
  disabled?: boolean;
}

export const QuestionScreen: React.FC<QuestionScreenProps> = ({
  question,
  activeTeam,
  currentRound,
  maxRounds,
  questionNumberInTopic = 1,
  onAnswerSubmit,
  disabled = false,
}) => {
  const meta = getCategoryMeta(question.category);
  const isTeamA = activeTeam.id === 'teamA';

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 flex flex-col space-y-5 animate-fadeIn">
      {/* Top Academic Status Strip */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white/90 border border-parchment-300 rounded-2xl p-4 shadow-sm">
        {/* Left: Round & Category */}
        <div className="flex items-center space-x-3">
          <div
            className={`px-3 py-1 rounded-xl text-xs font-bold border flex items-center space-x-1.5 ${meta.badgeBg} ${meta.badgeBorder} ${meta.textColor}`}
          >
            <span>{meta.icon}</span>
            <span className="uppercase tracking-wider font-serif">{meta.name}</span>
          </div>

          <span className="text-xs font-semibold text-stone-500">
            Round {currentRound} of {maxRounds} &bull; Question {questionNumberInTopic} of 2
          </span>
        </div>

        {/* Right: Active Team & Stake */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2 bg-stone-50 border border-stone-200 rounded-xl px-3 py-1">
            <div
              className={`w-5 h-5 rounded-lg flex items-center justify-center text-white text-xs ${
                isTeamA ? 'bg-[#2B4C7E]' : 'bg-[#C85A32]'
              }`}
            >
              <EmblemIcon emblem={activeTeam.emblem} className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-bold text-stone-800">
              {activeTeam.name}
            </span>
          </div>

          <span className="text-xs font-bold px-2.5 py-1 rounded-xl bg-amber-50 text-amber-900 border border-amber-300">
            +{question.points} Pts
          </span>
        </div>
      </div>

      {/* Dynamic Question Type View */}
      <div className="w-full">
        {question.type === 'mcq' && (
          <MCQView
            question={question as MCQQuestion}
            onSubmitAnswer={onAnswerSubmit}
            disabled={disabled}
          />
        )}

        {question.type === 'ordering' && (
          <OrderingView
            question={question as OrderingQuestion}
            onSubmitAnswer={onAnswerSubmit}
            disabled={disabled}
          />
        )}

        {question.type === 'before-after' && (
          <BeforeAfterView
            question={question as BeforeAfterQuestion}
            onSubmitAnswer={onAnswerSubmit}
            disabled={disabled}
          />
        )}

        {question.type === 'fix-timeline' && (
          <FixTimelineView
            question={question as FixTimelineQuestion}
            onSubmitAnswer={onAnswerSubmit}
            disabled={disabled}
          />
        )}

        {question.type === 'source-detective' && (
          <SourceDetectiveView
            question={question as SourceDetectiveQuestion}
            onSubmitAnswer={onAnswerSubmit}
            disabled={disabled}
          />
        )}

        {question.type === 'connect-clues' && (
          <ConnectCluesView
            question={question as ConnectCluesQuestion}
            onSubmitAnswer={onAnswerSubmit}
            disabled={disabled}
          />
        )}

        {question.type === 'evidence-eval' && (
          <EvidenceEvalView
            question={question as EvidenceEvalQuestion}
            onSubmitAnswer={onAnswerSubmit}
            disabled={disabled}
          />
        )}

        {question.type === 'blitz' && (
          <BlitzView
            question={question as BlitzQuestion}
            onSubmitAnswer={onAnswerSubmit}
            disabled={disabled}
          />
        )}
      </div>
    </div>
  );
};
