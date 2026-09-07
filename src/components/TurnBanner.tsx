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
    <div className="w-full max-w-3xl mx-auto my-1 px-2">
      <div
        className={`relative overflow-hidden rounded-xl border-2 transition-all duration-300 shadow-sm p-2 sm:p-2.5 flex items-center justify-between gap-2 ${
          isTeamA
            ? 'bg-gradient-to-r from-blue-50/90 via-white to-blue-50/50 border-blue-400'
            : 'bg-gradient-to-r from-orange-50/90 via-white to-orange-50/50 border-orange-400'
        }`}
      >
        {/* Left Side: Active Team Emblem & Label */}
        <div className="flex items-center space-x-2.5">
          <div
            className={`w-8 h-8 rounded-lg flex items-center justify-center text-white shadow-sm transform transition-transform ${
              isTeamA ? 'bg-[#2B4C7E]' : 'bg-[#C85A32]'
            }`}
          >
            <EmblemIcon emblem={activeTeam.emblem} className="w-4 h-4" />
          </div>

          <div>
            <div className="flex items-center space-x-1.5">
              <span
                className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.2 rounded-full ${
                  isTeamA
                    ? 'bg-blue-100 text-blue-900 border border-blue-200'
                    : 'bg-orange-100 text-orange-900 border border-orange-200'
                }`}
              >
                Round {round}
              </span>

              {activeTeam.currentStreak >= 2 && (
                <span className="flex items-center space-x-1 text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-300 px-1.5 py-0.2 rounded-full">
                  <Flame className="w-3 h-3 text-amber-600 fill-amber-500" />
                  <span>{activeTeam.currentStreak} Streak!</span>
                </span>
              )}
            </div>

            <h2 className="text-sm sm:text-base font-serif font-bold text-stone-900 tracking-wide leading-tight">
              {activeTeam.name}&apos;s Turn
            </h2>
          </div>
        </div>

        {/* Right Side: Action Prompt */}
        <div className="flex items-center space-x-2">
          <div className="text-right">
            <span className="text-[10px] uppercase tracking-wider text-stone-500 font-semibold block leading-none">
              Action
            </span>
            <span className="text-xs font-bold text-stone-800 tracking-wide font-serif">
              {promptText}
            </span>
          </div>

          <div
            className={`w-2.5 h-2.5 rounded-full animate-ping shrink-0 ${
              isTeamA ? 'bg-blue-500' : 'bg-orange-500'
            }`}
          />
        </div>
      </div>
    </div>
  );
};
