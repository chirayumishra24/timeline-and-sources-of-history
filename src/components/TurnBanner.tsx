import React from 'react';
import { Team } from '@/types/team';
import { EmblemIcon } from './EmblemIcon';
import { Flame } from 'lucide-react';

interface TurnBannerProps {
  activeTeam: Team;
  round: number;
  promptText?: string;
}

export const TurnBanner: React.FC<TurnBannerProps> = ({
  activeTeam,
  round,
  promptText = "SPIN THE HISTORY WHEEL",
}) => {
  const isTeamA = activeTeam.id === 'teamA';

  return (
    <div className="w-full max-w-4xl mx-auto my-3 px-4">
      <div
        className={`relative overflow-hidden rounded-2xl border-2 transition-all duration-300 shadow-md p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 ${
          isTeamA
            ? 'bg-gradient-to-r from-blue-50/90 via-white to-blue-50/50 border-blue-400'
            : 'bg-gradient-to-r from-orange-50/90 via-white to-orange-50/50 border-orange-400'
        }`}
      >
        {/* Left Side: Active Team Emblem & Label */}
        <div className="flex items-center space-x-3 text-center sm:text-left">
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md transform transition-transform hover:scale-105 ${
              isTeamA ? 'bg-[#2B4C7E]' : 'bg-[#C85A32]'
            }`}
          >
            <EmblemIcon emblem={activeTeam.emblem} className="w-6 h-6" />
          </div>

          <div>
            <div className="flex items-center space-x-2">
              <span
                className={`text-xs font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full ${
                  isTeamA
                    ? 'bg-blue-100 text-blue-900 border border-blue-200'
                    : 'bg-orange-100 text-orange-900 border border-orange-200'
                }`}
              >
                Active Turn &bull; Round {round}
              </span>

              {activeTeam.currentStreak >= 2 && (
                <span className="flex items-center space-x-1 text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300 px-2 py-0.5 rounded-full animate-pulse">
                  <Flame className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
                  <span>{activeTeam.currentStreak} Streak!</span>
                </span>
              )}
            </div>

            <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 tracking-wide mt-0.5">
              {activeTeam.name}&apos;s Turn
            </h2>
          </div>
        </div>

        {/* Right Side: Action Prompt */}
        <div className="flex items-center space-x-3">
          <div className="text-center sm:text-right">
            <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold block">
              Next Action
            </span>
            <span className="text-sm font-bold text-stone-800 tracking-wide font-serif">
              {promptText}
            </span>
          </div>

          <div
            className={`w-3 h-3 rounded-full animate-ping ${
              isTeamA ? 'bg-blue-500' : 'bg-orange-500'
            }`}
          />
        </div>
      </div>
    </div>
  );
};
