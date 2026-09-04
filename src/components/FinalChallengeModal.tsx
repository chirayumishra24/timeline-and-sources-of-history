'use client';

import React, { useState } from 'react';
import { Team } from '@/types/team';
import { Crown, Sparkles, Check, ArrowRight } from 'lucide-react';
import { soundManager } from '@/utils/sound';

interface FinalChallengeModalProps {
  teamA: Team;
  teamB: Team;
  onComplete: (results: { teamACorrect: boolean; teamBCorrect: boolean }) => void;
}

export const FinalChallengeModal: React.FC<FinalChallengeModalProps> = ({
  teamA,
  teamB,
  onComplete,
}) => {
  // Step 1: Team A answers, Step 2: Team B answers, Step 3: Reveal results
  const [currentStep, setCurrentStep] = useState<'teamA' | 'teamB' | 'reveal'>('teamA');
  const [teamAChoice, setTeamAChoice] = useState<string | null>(null);
  const [teamBChoice, setTeamBChoice] = useState<string | null>(null);

  // Grand Final synthesis challenge
  const finalScenario = {
    title: "The Mystery of the Multi-Source Dynasty",
    evidence: [
      {
        source: "Source 1 (Rock Pillar)",
        text: "The ruler claims to have conquered 9 kings of Aryavarta, 12 kings of Dakshinapatha, and received tributes from frontier kings."
      },
      {
        source: "Source 2 (Gold Coins)",
        text: "Coins depict the emperor performing the Ashvamedha (horse sacrifice) ritual with an altar and sacrificial post."
      },
      {
        source: "Source 3 (Court Biography)",
        text: "Court poet Harishena composed the Allahabad Prashasti praising the emperor's military campaigns and poetic compositions."
      }
    ],
    question: "When a historian compares all three sources, which conclusion is legitimately proven?",
    options: [
      "The emperor established a vast subcontinental empire, performed royal Vedic legitimacy rituals, and maintained court poets who documented his victories",
      "The emperor lost every battle and was secretly exiled to a faraway deserted island",
      "Coins and rock pillars were manufactured by foreign enemies to insult the royal family",
      "Ancient India had no kings or political boundaries at this time"
    ],
    correctAnswer: "The emperor established a vast subcontinental empire, performed royal Vedic legitimacy rituals, and maintained court poets who documented his victories",
    explanation: "The Allahabad pillar confirms conquests; the Ashvamedha coins corroborate sovereign religious rituals; and the court biography confirms official patronage of poetry."
  };

  const handleTeamASubmit = () => {
    if (!teamAChoice) return;
    setCurrentStep('teamB');
  };

  const handleTeamBSubmit = () => {
    if (!teamBChoice) return;
    setCurrentStep('reveal');

    const teamACorrect = teamAChoice === finalScenario.correctAnswer;
    const teamBCorrect = teamBChoice === finalScenario.correctAnswer;

    if (teamACorrect || teamBCorrect) {
      soundManager.playCorrect();
    } else {
      soundManager.playIncorrect();
    }
  };

  const handleFinish = () => {
    const teamACorrect = teamAChoice === finalScenario.correctAnswer;
    const teamBCorrect = teamBChoice === finalScenario.correctAnswer;
    onComplete({ teamACorrect, teamBCorrect });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4 animate-fadeIn">
      <div className="bg-gradient-to-b from-white via-parchment-50 to-parchment-100 rounded-3xl border-4 border-amber-400 shadow-2xl p-6 sm:p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        {/* Banner */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-widest mb-2">
            <Crown className="w-4 h-4 text-amber-600" />
            <span>High-Stakes Final Round &bull; Worth +20 Points</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-black text-stone-900 tracking-wide">
            THE FINAL HISTORY CHALLENGE
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            Both teams must independently analyze three pieces of historical evidence. A correct answer awards <strong>+20 points</strong> and can change the course of history!
          </p>
        </div>

        {/* Evidence Sources */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
          {finalScenario.evidence.map((ev, i) => (
            <div key={i} className="bg-white p-3.5 rounded-2xl border-2 border-stone-200 shadow-sm">
              <span className="text-[11px] font-bold uppercase text-amber-800 block mb-1">
                {ev.source}
              </span>
              <p className="text-xs text-stone-700 italic leading-relaxed">
                &ldquo;{ev.text}&rdquo;
              </p>
            </div>
          ))}
        </div>

        {/* Step: Team A Answering */}
        {currentStep === 'teamA' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="bg-blue-50 border border-blue-300 rounded-2xl p-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-serif font-bold text-blue-900">
                  {teamA.name} is Answering
                </span>
                <span className="text-xs text-blue-700">(Team B, look away or discuss quietly!)</span>
              </div>
              <span className="text-xs font-bold px-3 py-0.5 rounded-full bg-blue-600 text-white">
                Team A Choice
              </span>
            </div>

            <h4 className="text-base font-serif font-bold text-stone-900">
              {finalScenario.question}
            </h4>

            <div className="space-y-2">
              {finalScenario.options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => setTeamAChoice(opt)}
                  className={`w-full text-left p-3.5 rounded-xl border-2 text-xs sm:text-sm font-medium transition-all ${
                    teamAChoice === opt
                      ? 'bg-blue-100 border-blue-600 text-blue-950 font-bold'
                      : 'bg-white hover:bg-stone-50 border-stone-200 text-stone-800'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={handleTeamASubmit}
                disabled={!teamAChoice}
                className="px-6 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-serif text-sm font-bold tracking-wider disabled:opacity-40"
              >
                LOCK TEAM A SELECTION & PASS TO TEAM B &rarr;
              </button>
            </div>
          </div>
        )}

        {/* Step: Team B Answering */}
        {currentStep === 'teamB' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="bg-orange-50 border border-orange-300 rounded-2xl p-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-serif font-bold text-orange-900">
                  {teamB.name} is Answering
                </span>
                <span className="text-xs text-orange-700">(Team A has locked their answer!)</span>
              </div>
              <span className="text-xs font-bold px-3 py-0.5 rounded-full bg-orange-600 text-white">
                Team B Choice
              </span>
            </div>

            <h4 className="text-base font-serif font-bold text-stone-900">
              {finalScenario.question}
            </h4>

            <div className="space-y-2">
              {finalScenario.options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => setTeamBChoice(opt)}
                  className={`w-full text-left p-3.5 rounded-xl border-2 text-xs sm:text-sm font-medium transition-all ${
                    teamBChoice === opt
                      ? 'bg-orange-100 border-orange-600 text-orange-950 font-bold'
                      : 'bg-white hover:bg-stone-50 border-stone-200 text-stone-800'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={handleTeamBSubmit}
                disabled={!teamBChoice}
                className="px-6 py-2.5 rounded-xl bg-orange-700 hover:bg-orange-800 text-white font-serif text-sm font-bold tracking-wider disabled:opacity-40"
              >
                LOCK TEAM B SELECTION & REVEAL &rarr;
              </button>
            </div>
          </div>
        )}

        {/* Step: Reveal Results */}
        {currentStep === 'reveal' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-300 text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                Correct Historical Conclusion:
              </span>
              <p className="text-sm font-serif font-bold text-stone-900 mt-1">
                &ldquo;{finalScenario.correctAnswer}&rdquo;
              </p>
              <p className="text-xs text-stone-600 mt-1 italic">
                {finalScenario.explanation}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                className={`p-4 rounded-2xl border-2 text-center ${
                  teamAChoice === finalScenario.correctAnswer
                    ? 'bg-emerald-50 border-emerald-400 text-emerald-950'
                    : 'bg-stone-50 border-stone-300 text-stone-700'
                }`}
              >
                <h5 className="font-serif font-bold text-sm">{teamA.name}</h5>
                <div className="text-lg font-bold my-1">
                  {teamAChoice === finalScenario.correctAnswer ? '✓ CORRECT! (+20 pts)' : '✗ Incorrect (0 pts)'}
                </div>
              </div>

              <div
                className={`p-4 rounded-2xl border-2 text-center ${
                  teamBChoice === finalScenario.correctAnswer
                    ? 'bg-emerald-50 border-emerald-400 text-emerald-950'
                    : 'bg-stone-50 border-stone-300 text-stone-700'
                }`}
              >
                <h5 className="font-serif font-bold text-sm">{teamB.name}</h5>
                <div className="text-lg font-bold my-1">
                  {teamBChoice === finalScenario.correctAnswer ? '✓ CORRECT! (+20 pts)' : '✗ Incorrect (0 pts)'}
                </div>
              </div>
            </div>

            <button
              onClick={handleFinish}
              className="w-full mt-4 py-3.5 rounded-2xl bg-[#2B4C7E] hover:bg-[#1E3557] text-white font-serif font-bold text-base tracking-wider transition-all shadow-md flex items-center justify-center space-x-2"
            >
              <span>PROCEED TO FINAL REVEAL</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
