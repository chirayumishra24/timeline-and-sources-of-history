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

export const HistoryArchive: React.FC<HistoryArchiveProps> = ({
  teamA,
  teamB,
  activeTeamId,
}) => {
  const [inspectedArtifact, setInspectedArtifact] = useState<{
    artifact: DiscoveredArtifact;
    teamName: string;
  } | null>(null);

  const renderArchivePanel = (team: Team) => {
    const isTeamA = team.id === 'teamA';
    const isActive = activeTeamId === team.id;
    const milestone = getTeamMilestone(team.discoveries.length);

    return (
      <div
        className={`flex-1 rounded-3xl border-2 transition-all duration-300 p-4 sm:p-5 flex flex-col justify-between shadow-sm ${
          isActive
            ? isTeamA
              ? 'bg-gradient-to-b from-blue-50/70 to-white border-blue-400 shadow-md ring-2 ring-blue-200'
              : 'bg-gradient-to-b from-orange-50/70 to-white border-orange-400 shadow-md ring-2 ring-orange-200'
            : 'bg-white/80 border-stone-200 opacity-90'
        }`}
      >
        {/* Team Identity Banner */}
        <div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <div className="flex items-center space-x-2.5">
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center text-white text-sm shadow-sm ${
                  isTeamA ? 'bg-[#2B4C7E]' : 'bg-[#C85A32]'
                }`}
              >
                <EmblemIcon emblem={team.emblem} className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-serif font-bold text-stone-900 leading-tight">
                  {team.name}
                </h3>
                <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
                  {team.score} Points &bull; {team.discoveries.length} Discoveries
                </span>
              </div>
            </div>

            {/* Current Milestone Badge */}
            <div
              className={`px-2.5 py-1 rounded-xl text-[11px] font-bold border flex items-center space-x-1 shrink-0 ${milestone.borderClass} bg-stone-50 text-stone-800`}
              title={milestone.description}
            >
              <span>{milestone.badge}</span>
              <span className="hidden sm:inline font-serif">{milestone.title}</span>
            </div>
          </div>

          {/* Museum Archive Shelves */}
          <div className="mt-3 bg-stone-50/80 rounded-2xl p-3 border border-stone-200 min-h-[110px] flex flex-col justify-center">
            {team.discoveries.length === 0 ? (
              <div className="text-center py-4 text-xs text-stone-400 italic flex flex-col items-center justify-center space-y-1">
                <BookOpen className="w-5 h-5 text-stone-300" />
                <span>No discoveries yet. Answer correctly to collect artifacts!</span>
              </div>
            ) : (
              <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-2">
                {team.discoveries.map((art, idx) => (
                  <button
                    key={`${art.id}_${idx}`}
                    onClick={() => setInspectedArtifact({ artifact: art, teamName: team.name })}
                    className="group relative p-2 rounded-xl bg-white border border-stone-200 hover:border-amber-400 hover:scale-110 active:scale-95 transition-all shadow-sm flex flex-col items-center justify-center"
                    title={`${art.name} (${art.type}) - Click to inspect`}
                  >
                    <span className="text-xl sm:text-2xl">{art.icon}</span>
                    <span className="text-[9px] font-medium text-stone-600 truncate max-w-[48px] text-center mt-0.5">
                      {art.type}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Bottom Status Stats */}
        <div className="mt-3 pt-2.5 border-t border-stone-100 flex items-center justify-between text-[11px] font-medium text-stone-500">
          <span>Correct: <strong className="text-emerald-700">{team.correctCount}</strong></span>
          <span>Best Streak: <strong className="text-amber-700">{team.bestStreak}</strong></span>
          <span className="text-stone-400">Round {team.discoveries.length > 0 ? team.discoveries[team.discoveries.length - 1].discoveredAtRound : '-'} latest</span>
        </div>
      </div>
    );
  };

  return (
    <section className="w-full max-w-5xl mx-auto my-3 px-4">
      <div className="flex flex-col md:flex-row gap-4">
        {renderArchivePanel(teamA)}
        {renderArchivePanel(teamB)}
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
