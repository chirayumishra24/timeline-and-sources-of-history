import React, { useState } from 'react';
import { Team, DiscoveredArtifact } from '@/types/team';
import { EmblemIcon } from './EmblemIcon';
import { getTeamMilestone } from '@/utils/scoring';
import { Info, Sparkles, BookOpen } from 'lucide-react';

interface HistoryArchiveProps {
  teamA: Team;
  teamB: Team;
  activeTeamId: string;
}

export interface HistoryArchiveTeamCardProps {
  team: Team;
  isActive: boolean;
  onInspect?: (artifact: DiscoveredArtifact, teamName: string) => void;
  className?: string;
}

export const HistoryArchiveTeamCard: React.FC<HistoryArchiveTeamCardProps> = ({
  team,
  isActive,
  onInspect,
  className = '',
}) => {
  const isTeamA = team.id === 'teamA';
  const milestone = getTeamMilestone(team.discoveries.length);

  return (
    <div
      className={`rounded-2xl border-2 transition-all duration-300 p-3 sm:p-3.5 flex flex-col justify-between shadow-sm h-full ${
        isActive
          ? isTeamA
            ? 'bg-gradient-to-b from-blue-50/80 to-white border-blue-400 shadow-md ring-2 ring-blue-200/60'
            : 'bg-gradient-to-b from-orange-50/80 to-white border-orange-400 shadow-md ring-2 ring-orange-200/60'
          : 'bg-white/85 border-stone-200 opacity-90'
      } ${className}`}
    >
      {/* Team Identity Banner */}
      <div>
        <div className="flex items-center justify-between gap-1.5 mb-1.5">
          <div className="flex items-center space-x-2">
            <div
              className={`w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs shadow-sm shrink-0 ${
                isTeamA ? 'bg-[#2B4C7E]' : 'bg-[#C85A32]'
              }`}
            >
              <EmblemIcon emblem={team.emblem} className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <h3 className="text-xs sm:text-sm font-serif font-bold text-stone-900 leading-tight truncate">
                {team.name}
              </h3>
              <span className="text-[10px] font-semibold text-stone-500 uppercase tracking-wider block">
                {team.score} Pts &bull; {team.discoveries.length} Artifacts
              </span>
            </div>
          </div>

          {/* Current Milestone Badge */}
          <div
            className={`px-2 py-0.5 rounded-lg text-[10px] font-bold border flex items-center space-x-1 shrink-0 ${milestone.borderClass} bg-stone-50 text-stone-800`}
            title={milestone.description}
          >
            <span>{milestone.badge}</span>
            <span className="hidden sm:inline font-serif">{milestone.title}</span>
          </div>
        </div>

        {/* Museum Archive Shelves */}
        <div className="mt-1.5 bg-stone-50/80 rounded-xl p-2 border border-stone-200 min-h-[75px] max-h-[140px] overflow-y-auto flex flex-col justify-center">
          {team.discoveries.length === 0 ? (
            <div className="text-center py-2 text-[10px] text-stone-400 italic flex flex-col items-center justify-center space-y-0.5">
              <BookOpen className="w-4 h-4 text-stone-300" />
              <span>No discoveries yet. Answer correctly to collect!</span>
            </div>
          ) : (
            <div className="grid grid-cols-4 sm:grid-cols-4 gap-1.5">
              {team.discoveries.map((art, idx) => (
                <button
                  key={`${art.id}_${idx}`}
                  onClick={() => onInspect?.(art, team.name)}
                  className="group relative p-1 rounded-lg bg-white border border-stone-200 hover:border-amber-400 hover:scale-105 active:scale-95 transition-all shadow-xs flex flex-col items-center justify-center"
                  title={`${art.name} (${art.type}) - Click to inspect`}
                >
                  <span className="text-base sm:text-lg">{art.icon}</span>
                  <span className="text-[8px] font-medium text-stone-600 truncate max-w-[40px] text-center mt-0.5">
                    {art.type}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Bottom Status Stats */}
      <div className="mt-2 pt-1.5 border-t border-stone-100 flex items-center justify-between text-[10px] font-medium text-stone-500">
        <span>Correct: <strong className="text-emerald-700">{team.correctCount}</strong></span>
        <span>Streak: <strong className="text-amber-700">{team.currentStreak}</strong> (Best: {team.bestStreak})</span>
      </div>
    </div>
  );
};

export const HistoryArchive: React.FC<HistoryArchiveProps> = ({
  teamA,
  teamB,
  activeTeamId,
}) => {
  const [inspectedArtifact, setInspectedArtifact] = useState<{
    artifact: DiscoveredArtifact;
    teamName: string;
  } | null>(null);

  return (
    <section className="w-full max-w-5xl mx-auto my-1 px-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <HistoryArchiveTeamCard
          team={teamA}
          isActive={activeTeamId === 'teamA'}
          onInspect={(artifact, teamName) => setInspectedArtifact({ artifact, teamName })}
        />
        <HistoryArchiveTeamCard
          team={teamB}
          isActive={activeTeamId === 'teamB'}
          onInspect={(artifact, teamName) => setInspectedArtifact({ artifact, teamName })}
        />
      </div>

      {/* Artifact Inspection Modal */}
      {inspectedArtifact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl border-2 border-amber-400 shadow-2xl p-6 max-w-md w-full text-center relative animate-scaleUp">
            <button
              onClick={() => setInspectedArtifact(null)}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 font-bold text-lg"
            >
              ✕
            </button>

            <div className="w-20 h-20 mx-auto rounded-2xl bg-amber-50 border border-amber-300 flex items-center justify-center text-4xl shadow-sm mb-3">
              {inspectedArtifact.artifact.icon}
            </div>

            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-3 py-0.5 rounded-full">
              {inspectedArtifact.artifact.type} &bull; {inspectedArtifact.artifact.era}
            </span>

            <h4 className="text-lg font-serif font-bold text-stone-900 mt-2">
              {inspectedArtifact.artifact.name}
            </h4>

            <p className="text-xs text-stone-600 my-3 leading-relaxed bg-stone-50 p-3 rounded-xl border border-stone-200">
              {inspectedArtifact.artifact.description}
            </p>

            <div className="text-xs text-stone-500 font-semibold mb-4">
              Discovered in Round {inspectedArtifact.artifact.discoveredAtRound} by {inspectedArtifact.teamName}
            </div>

            <button
              onClick={() => setInspectedArtifact(null)}
              className="w-full py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-serif text-xs font-bold tracking-wider"
            >
              CLOSE ARCHIVE INSPECTION
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
