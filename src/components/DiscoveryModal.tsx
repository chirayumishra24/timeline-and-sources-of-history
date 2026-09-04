import React, { useEffect } from 'react';
import { DiscoveredArtifact, Team } from '@/types/team';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { soundManager } from '@/utils/sound';

interface DiscoveryModalProps {
  artifact: DiscoveredArtifact;
  team: Team;
  onProceed: () => void;
  autoProceedDelay?: number;
}

export const DiscoveryModal: React.FC<DiscoveryModalProps> = ({
  artifact,
  team,
  onProceed,
  autoProceedDelay = 3500,
}) => {
  const isTeamA = team.id === 'teamA';

  useEffect(() => {
    soundManager.playDiscovery();
    const timer = setTimeout(() => {
      onProceed();
    }, autoProceedDelay);
    return () => clearTimeout(timer);
  }, [onProceed, autoProceedDelay]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 backdrop-blur-sm p-4 animate-fadeIn">
      <div className="bg-gradient-to-b from-white via-parchment-50 to-parchment-100 rounded-3xl border-4 border-amber-400 shadow-2xl p-6 sm:p-8 max-w-lg w-full text-center relative overflow-hidden animate-scaleUp">
        {/* Glow effect */}
        <div className="absolute -top-12 -left-12 w-36 h-36 bg-amber-300/30 rounded-full blur-2xl" />
        <div className="absolute -bottom-12 -right-12 w-36 h-36 bg-amber-400/20 rounded-full blur-2xl" />

        {/* Discovery Ribbon */}
        <div className="inline-flex items-center space-x-1.5 px-4 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>New Archive Discovery Added</span>
        </div>

        {/* Large Artifact Display with 3D Tilt Glow */}
        <div className="relative w-28 h-28 mx-auto my-3 rounded-3xl bg-gradient-to-tr from-amber-100 to-white border-2 border-amber-300 flex items-center justify-center text-6xl shadow-parchment-lg transform transition-transform hover:scale-105 animate-pulse">
          {artifact.icon}
          <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs shadow">
            <ShieldCheck className="w-4 h-4" />
          </div>
        </div>

        {/* Artifact Name & Metadata */}
        <h3 className="text-xl sm:text-2xl font-serif font-black text-stone-900 tracking-wide mt-2">
          {artifact.name}
        </h3>

        <div className="flex items-center justify-center space-x-2 my-2">
          <span className="text-xs font-bold px-3 py-0.5 rounded-full bg-stone-100 text-stone-700 border border-stone-200">
            {artifact.type}
          </span>
          <span className="text-xs font-bold px-3 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
            {artifact.era}
          </span>
        </div>

        {/* Artifact Lore Description */}
        <p className="text-xs sm:text-sm text-stone-600 my-4 leading-relaxed bg-white/80 p-3.5 rounded-2xl border border-parchment-300">
          {artifact.description}
        </p>

        {/* Team Collection Tag */}
        <div
          className={`py-2 px-4 rounded-xl text-xs font-bold inline-block border ${
            isTeamA
              ? 'bg-blue-50 text-blue-900 border-blue-200'
              : 'bg-orange-50 text-orange-900 border-orange-200'
          }`}
        >
          Catalogued into <strong>{team.name}</strong> Archive &bull; Total Discoveries: {team.discoveries.length + 1}
        </div>

        {/* Manual Skip/Proceed Button */}
        <div className="mt-5">
          <button
            onClick={onProceed}
            className="w-full py-3 px-6 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-serif font-bold text-sm tracking-wider transition-all shadow-md flex items-center justify-center space-x-2"
          >
            <span>ADD TO ARCHIVE & CONTINUE</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
