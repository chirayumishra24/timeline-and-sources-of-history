'use client';

import React, { useEffect, useState } from 'react';
import { Team } from '@/types/team';
import { EmblemIcon } from './EmblemIcon';
import { Trophy, Award, Sparkles, BookOpen, RotateCcw, Flame, CheckCircle, Target } from 'lucide-react';
import { soundManager } from '@/utils/sound';
import confetti from 'canvas-confetti';

interface ResultsScreenProps {
  teamA: Team;
  teamB: Team;
  roundsCompleted: number;
  onPlayAgain: () => void;
  onOpenReview: () => void;
}

export const ResultsScreen: React.FC<ResultsScreenProps> = ({
  teamA,
  teamB,
  roundsCompleted,
  onPlayAgain,
  onOpenReview,
}) => {
  const [revealed, setRevealed] = useState(false);

  // Determine winner
  const isTie = teamA.score === teamB.score;
  const winningTeam = teamA.score > teamB.score ? teamA : teamB;
  const runnerUp = teamA.score > teamB.score ? teamB : teamA;

  useEffect(() => {
    const timer = setTimeout(() => {
      setRevealed(true);
      soundManager.playVictory();

      // Trigger refined golden confetti celebration
      try {
        confetti({
          particleCount: 75,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#D4AF37', '#8C6239', '#2B4C7E', '#C85A32', '#FDFBF7'],
        });
      } catch {}
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const getAccuracy = (team: Team) => {
    const total = team.correctCount + team.incorrectCount;
    if (total === 0) return 0;
    return Math.round((team.correctCount / total) * 100);
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4 sm:p-6 flex flex-col items-center space-y-6 animate-fadeIn">
      {/* Top Climax Banner */}
      <div className="text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-widest mb-2">
          <Sparkles className="w-4 h-4 text-amber-600" />
          <span>Summative Expedition Concluded</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif font-black text-stone-900 tracking-wide">
          THE HISTORY ARCHIVES ARE COMPLETE
        </h2>
        <p className="text-sm text-stone-600 mt-1">
          {roundsCompleted} Historical Challenges Mastered across Timelines & Sources of History
        </p>
      </div>

      {/* Dramatic Reveal Area */}
      {revealed ? (
        <div className="w-full bg-gradient-to-b from-amber-50 via-white to-parchment-100 rounded-3xl border-4 border-amber-400 p-6 sm:p-8 shadow-2xl text-center relative overflow-hidden animate-scaleUp">
          {/* Historical Seal / Stamp */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full bg-gradient-to-tr from-amber-500 via-yellow-400 to-amber-600 border-4 border-amber-700 shadow-xl flex flex-col items-center justify-center text-white relative animate-bounce">
            <Trophy className="w-10 h-10 drop-shadow" />
            <span className="text-[9px] font-black uppercase tracking-tighter mt-0.5">
              SEAL OF EXCELLENCE
            </span>
          </div>

          <div className="mt-4">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-800">
              Proclaimed by the Guild of Historians
            </span>
            <h3 className="text-3xl sm:text-5xl font-serif font-black text-stone-900 tracking-tight mt-1">
              🏆 MASTER HISTORIANS 🏆
            </h3>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-amber-700 mt-2">
              {winningTeam.name}
            </div>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Honored for superior evidentiary deduction, chronological precision, and historical inquiry.
            </p>
          </div>
        </div>
      ) : (
        <div className="p-8 rounded-3xl bg-white border-2 border-amber-200 text-center animate-pulse">
          <div className="text-4xl mb-2">⚖️</div>
          <p className="font-serif font-bold text-lg text-stone-800">
            Tallying Archaeological Artifacts & Chronicle Records...
          </p>
        </div>
      )}

      {/* Side-by-Side Completed Archives & Final Scorecards */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Team A Card */}
        <div
          className={`rounded-3xl border-3 p-6 transition-all shadow-md ${
            winningTeam.id === 'teamA' && revealed
              ? 'bg-gradient-to-b from-blue-50 to-white border-blue-500 shadow-blue-500/20 ring-4 ring-blue-200'
              : 'bg-white border-stone-200'
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-2xl bg-[#2B4C7E] text-white flex items-center justify-center shadow-md">
                <EmblemIcon emblem={teamA.emblem} className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-xl font-serif font-bold text-stone-900">{teamA.name}</h4>
                <span className="text-xs font-semibold text-stone-500">The Chroniclers Archive</span>
              </div>
            </div>
            {winningTeam.id === 'teamA' && revealed && (
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-900 border border-blue-300 text-xs font-bold uppercase">
                Victor
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3 my-4">
            <div className="bg-stone-50 p-3 rounded-2xl border border-stone-200 text-center">
              <span className="text-[11px] font-bold text-stone-500 uppercase">Final Score</span>
              <div className="text-2xl sm:text-3xl font-mono font-black text-blue-900 mt-0.5">
                {teamA.score}
              </div>
            </div>
            <div className="bg-stone-50 p-3 rounded-2xl border border-stone-200 text-center">
              <span className="text-[11px] font-bold text-stone-500 uppercase">Discoveries</span>
              <div className="text-2xl sm:text-3xl font-mono font-black text-amber-800 mt-0.5">
                {teamA.discoveries.length}
              </div>
            </div>
          </div>

          {/* Artifact Tokens Collected */}
          <div className="bg-parchment-50 rounded-2xl p-3 border border-parchment-300 min-h-[70px]">
            <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block mb-1">
              Collected Artifacts:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {teamA.discoveries.map((a, i) => (
                <span key={i} className="text-lg" title={a.name}>
                  {a.icon}
                </span>
              ))}
            </div>
          </div>

          {/* Detailed Statistics */}
          <div className="mt-4 pt-3 border-t border-stone-200 space-y-1 text-xs text-stone-600">
            <div className="flex justify-between">
              <span>Historical Accuracy:</span>
              <strong className="text-stone-800">{getAccuracy(teamA)}%</strong>
            </div>
            <div className="flex justify-between">
              <span>Correct Challenges:</span>
              <strong className="text-emerald-700">{teamA.correctCount}</strong>
            </div>
            <div className="flex justify-between">
              <span>Longest Answering Streak:</span>
              <strong className="text-amber-700">{teamA.bestStreak}</strong>
            </div>
          </div>
        </div>

        {/* Team B Card */}
        <div
          className={`rounded-3xl border-3 p-6 transition-all shadow-md ${
            winningTeam.id === 'teamB' && revealed
              ? 'bg-gradient-to-b from-orange-50 to-white border-orange-500 shadow-orange-500/20 ring-4 ring-orange-200'
              : 'bg-white border-stone-200'
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-2xl bg-[#C85A32] text-white flex items-center justify-center shadow-md">
                <EmblemIcon emblem={teamB.emblem} className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-xl font-serif font-bold text-stone-900">{teamB.name}</h4>
                <span className="text-xs font-semibold text-stone-500">The Timekeepers Archive</span>
              </div>
            </div>
            {winningTeam.id === 'teamB' && revealed && (
              <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-900 border border-orange-300 text-xs font-bold uppercase">
                Victor
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3 my-4">
            <div className="bg-stone-50 p-3 rounded-2xl border border-stone-200 text-center">
              <span className="text-[11px] font-bold text-stone-500 uppercase">Final Score</span>
              <div className="text-2xl sm:text-3xl font-mono font-black text-orange-900 mt-0.5">
                {teamB.score}
              </div>
            </div>
            <div className="bg-stone-50 p-3 rounded-2xl border border-stone-200 text-center">
              <span className="text-[11px] font-bold text-stone-500 uppercase">Discoveries</span>
              <div className="text-2xl sm:text-3xl font-mono font-black text-amber-800 mt-0.5">
                {teamB.discoveries.length}
              </div>
            </div>
          </div>

          {/* Artifact Tokens Collected */}
          <div className="bg-parchment-50 rounded-2xl p-3 border border-parchment-300 min-h-[70px]">
            <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block mb-1">
              Collected Artifacts:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {teamB.discoveries.map((a, i) => (
                <span key={i} className="text-lg" title={a.name}>
                  {a.icon}
                </span>
              ))}
            </div>
          </div>

          {/* Detailed Statistics */}
          <div className="mt-4 pt-3 border-t border-stone-200 space-y-1 text-xs text-stone-600">
            <div className="flex justify-between">
              <span>Historical Accuracy:</span>
              <strong className="text-stone-800">{getAccuracy(teamB)}%</strong>
            </div>
            <div className="flex justify-between">
              <span>Correct Challenges:</span>
              <strong className="text-emerald-700">{teamB.correctCount}</strong>
            </div>
            <div className="flex justify-between">
              <span>Longest Answering Streak:</span>
              <strong className="text-amber-700">{teamB.bestStreak}</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
        <button
          onClick={onOpenReview}
          className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-stone-100 hover:bg-stone-200 border-2 border-stone-300 text-stone-800 font-serif font-bold text-sm tracking-wider transition-all shadow-sm flex items-center justify-center space-x-2"
        >
          <BookOpen className="w-4 h-4 text-stone-600" />
          <span>REVIEW THE HISTORY (QUESTIONS & ANSWERS)</span>
        </button>

        <button
          onClick={onPlayAgain}
          className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-[#2B4C7E] hover:bg-[#1E3557] text-white font-serif font-bold text-base tracking-wider transition-all shadow-md hover:scale-105 active:scale-95 flex items-center justify-center space-x-2"
        >
          <RotateCcw className="w-5 h-5" />
          <span>START NEW HISTORY EXPEDITION</span>
        </button>
      </div>
    </div>
  );
};
