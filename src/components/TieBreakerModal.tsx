'use client';

import React, { useState } from 'react';
import { Team } from '@/types/team';
import { Scale, CheckCircle2, ArrowRight } from 'lucide-react';
import { soundManager } from '@/utils/sound';

interface TieBreakerModalProps {
  teamA: Team;
  teamB: Team;
  onResolved: (winnerTeamId: 'teamA' | 'teamB') => void;
}

export const TieBreakerModal: React.FC<TieBreakerModalProps> = ({
  teamA,
  teamB,
  onResolved,
}) => {
  const [teamAChoice, setTeamAChoice] = useState<string | null>(null);
  const [teamBChoice, setTeamBChoice] = useState<string | null>(null);
  const [turn, setTurn] = useState<'teamA' | 'teamB' | 'result'>('teamA');

  const suddenQuestion = {
    question: "Which of the following is the most scientifically accurate method used by archaeologists to date ancient organic timber beams and bones?",
    options: [
      "Radiocarbon (C-14) Isotope Decay Dating",
      "Counting the number of letters written in a book",
      "Weighing the stone bricks on a bathroom scale",
      "Guessing based on the color of the dirt"
    ],
    correctAnswer: "Radiocarbon (C-14) Isotope Decay Dating",
    explanation: "Radiocarbon dating measures the steady rate of carbon-14 radioactive decay in once-living organic remains."
  };

  const handleTeamASubmit = () => {
    if (!teamAChoice) return;
    setTurn('teamB');
  };

  const handleTeamBSubmit = () => {
    if (!teamBChoice) return;
    setTurn('result');

    const aCorrect = teamAChoice === suddenQuestion.correctAnswer;
    const bCorrect = teamBChoice === suddenQuestion.correctAnswer;

    if (aCorrect || bCorrect) {
      soundManager.playVictory();
    }
  };

  const handleFinish = () => {
    const aCorrect = teamAChoice === suddenQuestion.correctAnswer;
    const bCorrect = teamBChoice === suddenQuestion.correctAnswer;

    if (aCorrect && !bCorrect) {
      onResolved('teamA');
    } else if (!aCorrect && bCorrect) {
      onResolved('teamB');
    } else {
      // Both got it right or wrong - tie resolved by highest streak
      if (teamA.bestStreak >= teamB.bestStreak) {
        onResolved('teamA');
      } else {
        onResolved('teamB');
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4 animate-fadeIn">
      <div className="bg-white rounded-3xl border-4 border-amber-400 shadow-2xl p-6 sm:p-8 max-w-xl w-full text-center">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 mb-3">
          <Scale className="w-8 h-8" />
        </div>

        <h2 className="text-2xl font-serif font-black text-stone-900 tracking-wide">
          THE ARCHIVES ARE TIED!
        </h2>
        <p className="text-xs uppercase tracking-widest text-amber-700 font-bold mt-1">
          SUDDEN HISTORY TIE-BREAKER
        </p>

        {turn === 'teamA' && (
          <div className="mt-5 space-y-3 text-left animate-fadeIn">
            <span className="text-xs font-bold text-blue-800 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              {teamA.name}&apos;s Secret Choice
            </span>
            <h4 className="text-sm sm:text-base font-serif font-bold text-stone-900 mt-2">
              {suddenQuestion.question}
            </h4>

            <div className="space-y-2 mt-2">
              {suddenQuestion.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => setTeamAChoice(opt)}
                  className={`w-full p-3 rounded-xl border text-xs font-medium text-left transition-all ${
                    teamAChoice === opt
                      ? 'bg-blue-100 border-blue-600 font-bold text-blue-900'
                      : 'bg-stone-50 border-stone-200 text-stone-800 hover:bg-stone-100'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>

            <button
              onClick={handleTeamASubmit}
              disabled={!teamAChoice}
              className="w-full mt-3 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-serif text-xs font-bold tracking-wider disabled:opacity-40"
            >
              LOCK TEAM A ANSWER & PASS TO TEAM B &rarr;
            </button>
          </div>
        )}

        {turn === 'teamB' && (
          <div className="mt-5 space-y-3 text-left animate-fadeIn">
            <span className="text-xs font-bold text-orange-800 bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
              {teamB.name}&apos;s Secret Choice
            </span>
            <h4 className="text-sm sm:text-base font-serif font-bold text-stone-900 mt-2">
              {suddenQuestion.question}
            </h4>

            <div className="space-y-2 mt-2">
              {suddenQuestion.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => setTeamBChoice(opt)}
                  className={`w-full p-3 rounded-xl border text-xs font-medium text-left transition-all ${
                    teamBChoice === opt
                      ? 'bg-orange-100 border-orange-600 font-bold text-orange-900'
                      : 'bg-stone-50 border-stone-200 text-stone-800 hover:bg-stone-100'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>

            <button
              onClick={handleTeamBSubmit}
              disabled={!teamBChoice}
              className="w-full mt-3 py-2.5 rounded-xl bg-orange-700 hover:bg-orange-800 text-white font-serif text-xs font-bold tracking-wider disabled:opacity-40"
            >
              LOCK TEAM B ANSWER & EVALUATE TIE &rarr;
            </button>
          </div>
        )}

        {turn === 'result' && (
          <div className="mt-5 space-y-4 animate-fadeIn">
            <p className="text-xs text-stone-600">
              Correct Answer: <strong>{suddenQuestion.correctAnswer}</strong>
            </p>

            <div className="grid grid-cols-2 gap-3 text-xs font-bold">
              <div className={`p-3 rounded-xl border ${teamAChoice === suddenQuestion.correctAnswer ? 'bg-emerald-50 border-emerald-300 text-emerald-900' : 'bg-stone-50 border-stone-200'}`}>
                {teamA.name}: {teamAChoice === suddenQuestion.correctAnswer ? '✓ Correct' : '✗ Incorrect'}
              </div>
              <div className={`p-3 rounded-xl border ${teamBChoice === suddenQuestion.correctAnswer ? 'bg-emerald-50 border-emerald-300 text-emerald-900' : 'bg-stone-50 border-stone-200'}`}>
                {teamB.name}: {teamBChoice === suddenQuestion.correctAnswer ? '✓ Correct' : '✗ Incorrect'}
              </div>
            </div>

            <button
              onClick={handleFinish}
              className="w-full py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-serif text-sm font-bold tracking-wider"
            >
              REVEAL ULTIMATE VICTOR &rarr;
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
