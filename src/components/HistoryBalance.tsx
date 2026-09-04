import React from 'react';
import { Team } from '@/types/team';
import { calculateBalanceTilt } from '@/utils/scoring';
import { Scale } from 'lucide-react';

interface HistoryBalanceProps {
  teamA: Team;
  teamB: Team;
}

export const HistoryBalance: React.FC<HistoryBalanceProps> = ({ teamA, teamB }) => {
  const { tiltDegrees, leadingTeamId, pointDiff } = calculateBalanceTilt(teamA, teamB);

  // SVG dimensions for the antique balance scale
  const scaleWidth = 280;
  const scaleHeight = 70;
  const pivotX = scaleWidth / 2;
  const pivotY = 22;
  const beamLength = 110;

  // Beam endpoints calculated with tilt angle
  const rad = (tiltDegrees * Math.PI) / 180;
  const leftPanX = pivotX - beamLength * Math.cos(rad);
  const leftPanY = pivotY - beamLength * Math.sin(rad);

  const rightPanX = pivotX + beamLength * Math.cos(rad);
  const rightPanY = pivotY + beamLength * Math.sin(rad);

  return (
    <div className="w-full max-w-md mx-auto my-2 px-4">
      <div className="bg-white/90 border border-parchment-300 rounded-2xl p-3 shadow-sm flex flex-col items-center">
        {/* Title */}
        <div className="flex items-center space-x-1.5 text-[11px] font-bold uppercase tracking-widest text-stone-500 mb-1">
          <Scale className="w-3.5 h-3.5 text-amber-700" />
          <span>The Balance of History</span>
        </div>

        {/* SVG Antique Scale with Dynamic Tilt */}
        <svg
          width={scaleWidth}
          height={scaleHeight}
          className="overflow-visible"
          aria-label="History Balance Scale"
        >
          {/* Vertical Base Post */}
          <line
            x1={pivotX}
            y1={pivotY}
            x2={pivotX}
            y2={scaleHeight - 10}
            stroke="#8C6239"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* Base Stand Foot */}
          <path
            d={`M ${pivotX - 25} ${scaleHeight - 10} L ${pivotX + 25} ${scaleHeight - 10}`}
            stroke="#8C6239"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Central Pivot Fulcrum Hub */}
          <circle cx={pivotX} cy={pivotY} r="5" fill="#D4AF37" stroke="#2D2B28" strokeWidth="1.5" />

          {/* Tilting Cross Beam */}
          <line
            x1={leftPanX}
            y1={leftPanY}
            x2={rightPanX}
            y2={rightPanY}
            stroke="#8C6239"
            strokeWidth="3.5"
            strokeLinecap="round"
            className="transition-all duration-500 ease-out"
          />

          {/* Left Pan (Team A) Chains and Tray */}
          <g className="transition-all duration-500 ease-out">
            <line x1={leftPanX} y1={leftPanY} x2={leftPanX - 10} y2={leftPanY + 22} stroke="#A88D61" strokeWidth="1" />
            <line x1={leftPanX} y1={leftPanY} x2={leftPanX + 10} y2={leftPanY + 22} stroke="#A88D61" strokeWidth="1" />
            <ellipse
              cx={leftPanX}
              cy={leftPanY + 24}
              rx="18"
              ry="4"
              fill={leadingTeamId === 'teamA' ? '#2B4C7E' : '#C5AA83'}
              stroke="#2D2B28"
              strokeWidth="1"
            />
          </g>

          {/* Right Pan (Team B) Chains and Tray */}
          <g className="transition-all duration-500 ease-out">
            <line x1={rightPanX} y1={rightPanY} x2={rightPanX - 10} y2={rightPanY + 22} stroke="#A88D61" strokeWidth="1" />
            <line x1={rightPanX} y1={rightPanY} x2={rightPanX + 10} y2={rightPanY + 22} stroke="#A88D61" strokeWidth="1" />
            <ellipse
              cx={rightPanX}
              cy={rightPanY + 24}
              rx="18"
              ry="4"
              fill={leadingTeamId === 'teamB' ? '#C85A32' : '#C5AA83'}
              stroke="#2D2B28"
              strokeWidth="1"
            />
          </g>
        </svg>

        {/* Lead Status Text */}
        <div className="text-[11px] font-semibold text-stone-600 mt-1">
          {leadingTeamId === 'tied' ? (
            <span className="text-amber-800 font-bold">The Archives are in Perfect Equilibrium (Tied)</span>
          ) : leadingTeamId === 'teamA' ? (
            <span>
              <strong className="text-blue-800">{teamA.name}</strong> leads by {pointDiff} pts
            </span>
          ) : (
            <span>
              <strong className="text-orange-800">{teamB.name}</strong> leads by {pointDiff} pts
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
