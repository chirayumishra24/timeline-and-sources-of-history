import React, { useState } from 'react';
import { EmblemType } from '@/types/team';
import { EmblemIcon } from './EmblemIcon';
import { Sparkles, Users, ArrowRight } from 'lucide-react';

interface GameSetupProps {
  initialTeamAName: string;
  initialTeamBName: string;
  initialTeamAEmblem: EmblemType;
  initialTeamBEmblem: EmblemType;
  initialRounds: number;
  onCompleteSetup: (setupData: {
    teamAName: string;
    teamBName: string;
    teamAEmblem: EmblemType;
    teamBEmblem: EmblemType;
    maxRounds: number;
  }) => void;
}

const AVAILABLE_EMBLEMS: { type: EmblemType; label: string }[] = [
  { type: 'scroll', label: 'Scroll' },
  { type: 'hourglass', label: 'Hourglass' },
  { type: 'compass', label: 'Compass' },
  { type: 'museum', label: 'Monument' },
  { type: 'quill', label: 'Quill' },
  { type: 'artifact', label: 'Artifact' },
  { type: 'sun', label: 'Solar' },
  { type: 'shield', label: 'Shield' },
];

const ROUND_OPTIONS = [
  { count: 5, label: '5 Rounds', hint: 'Quick Match (~6 mins)' },
  { count: 10, label: '10 Rounds', hint: 'Class Sprint (~12 mins)' },
  { count: 15, label: '15 Rounds', hint: 'Deep Inquiry (~18 mins)' },
  { count: 20, label: '20 Rounds (Standard)', hint: 'Complete Tour (~22 mins)' },
  { count: 30, label: '30 Rounds', hint: 'Grand Marathon (~35 mins)' },
];

export const GameSetup: React.FC<GameSetupProps> = ({
  initialTeamAName,
  initialTeamBName,
  initialTeamAEmblem,
  initialTeamBEmblem,
  initialRounds,
  onCompleteSetup,
}) => {
  const [teamAName, setTeamAName] = useState(initialTeamAName);
  const [teamBName, setTeamBName] = useState(initialTeamBName);
  const [teamAEmblem, setTeamAEmblem] = useState<EmblemType>(initialTeamAEmblem);
  const [teamBEmblem, setTeamBEmblem] = useState<EmblemType>(initialTeamBEmblem);
  const [maxRounds, setMaxRounds] = useState(initialRounds);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCompleteSetup({
      teamAName: teamAName.trim() || 'The Chroniclers',
      teamBName: teamBName.trim() || 'The Timekeepers',
      teamAEmblem,
      teamBEmblem,
      maxRounds,
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-2 sm:p-4 my-auto animate-fadeIn">
      <div className="bg-white/95 rounded-3xl border-4 border-amber-300 shadow-2xl p-4 sm:p-6">
        <div className="text-center mb-4">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-[11px] font-bold uppercase tracking-widest mb-1.5">
            <Users className="w-3.5 h-3.5 text-amber-600" />
            <span>Team Registration</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-black text-stone-900 tracking-wide">
            THE HISTORY WHEEL
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
            Configure team identities and challenge duration for today&apos;s history competition
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Team A Card */}
            <div className="p-5 rounded-3xl bg-blue-50/60 border-2 border-blue-300 shadow-sm">
              <div className="flex items-center space-x-2 mb-3 text-blue-900">
                <span className="text-xs font-black uppercase tracking-widest bg-blue-200/80 px-2.5 py-0.5 rounded-full">
                  Team A
                </span>
                <span className="text-xs text-stone-500">First Turn</span>
              </div>

              <label className="block text-xs font-bold uppercase text-stone-600 mb-1">
                Team Name
              </label>
              <input
                type="text"
                value={teamAName}
                onChange={(e) => setTeamAName(e.target.value)}
                maxLength={24}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-white font-serif font-bold text-stone-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base"
                placeholder="The Chroniclers"
                required
              />

              <div className="mt-4">
                <label className="block text-xs font-bold uppercase text-stone-600 mb-2">
                  Select Emblem
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {AVAILABLE_EMBLEMS.map((emb) => (
                    <button
                      key={emb.type}
                      type="button"
                      onClick={() => setTeamAEmblem(emb.type)}
                      className={`p-2.5 rounded-xl border flex flex-col items-center justify-center transition-all ${
                        teamAEmblem === emb.type
                          ? 'bg-blue-600 text-white border-blue-700 shadow-sm scale-105'
                          : 'bg-white hover:bg-stone-50 text-stone-700 border-stone-200'
                      }`}
                      title={emb.label}
                    >
                      <EmblemIcon emblem={emb.type} className="w-5 h-5" />
                      <span className="text-[9px] font-semibold mt-1">{emb.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Team B Card */}
            <div className="p-5 rounded-3xl bg-orange-50/60 border-2 border-orange-300 shadow-sm">
              <div className="flex items-center space-x-2 mb-3 text-orange-900">
                <span className="text-xs font-black uppercase tracking-widest bg-orange-200/80 px-2.5 py-0.5 rounded-full">
                  Team B
                </span>
                <span className="text-xs text-stone-500">Second Turn</span>
              </div>

              <label className="block text-xs font-bold uppercase text-stone-600 mb-1">
                Team Name
              </label>
              <input
                type="text"
                value={teamBName}
                onChange={(e) => setTeamBName(e.target.value)}
                maxLength={24}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-white font-serif font-bold text-stone-900 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base"
                placeholder="The Timekeepers"
                required
              />

              <div className="mt-4">
                <label className="block text-xs font-bold uppercase text-stone-600 mb-2">
                  Select Emblem
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {AVAILABLE_EMBLEMS.map((emb) => (
                    <button
                      key={emb.type}
                      type="button"
                      onClick={() => setTeamBEmblem(emb.type)}
                      className={`p-2.5 rounded-xl border flex flex-col items-center justify-center transition-all ${
                        teamBEmblem === emb.type
                          ? 'bg-orange-600 text-white border-orange-700 shadow-sm scale-105'
                          : 'bg-white hover:bg-stone-50 text-stone-700 border-stone-200'
                      }`}
                      title={emb.label}
                    >
                      <EmblemIcon emblem={emb.type} className="w-5 h-5" />
                      <span className="text-[9px] font-semibold mt-1">{emb.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Game Length Selection */}
          <div className="bg-stone-50 p-3 sm:p-4 rounded-2xl border border-stone-200 text-center">
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
              Select Game Length (Total Rounds)
            </label>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {ROUND_OPTIONS.map((opt) => (
                <button
                  key={opt.count}
                  type="button"
                  onClick={() => setMaxRounds(opt.count)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex flex-col items-center ${
                    maxRounds === opt.count
                      ? 'bg-amber-600 text-white shadow-md scale-105 ring-2 ring-amber-400/40'
                      : 'bg-white hover:bg-stone-100 text-stone-700 border border-stone-300'
                  }`}
                >
                  <span>{opt.label}</span>
                  <span className={`text-[10px] font-normal ${maxRounds === opt.count ? 'text-amber-100' : 'text-stone-500'}`}>
                    {opt.hint}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Action CTA */}
          <div className="flex justify-center pt-2">
            <button
              type="submit"
              className="px-10 py-4 rounded-2xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-500 text-white font-serif font-bold text-lg tracking-wider transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center space-x-2.5 border-2 border-amber-400"
            >
              <span>START HISTORY CHALLENGE</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
