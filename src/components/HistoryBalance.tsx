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

  // SVG dimensions for the antique balance scale (compact)
  const scaleWidth = 200;
  const scaleHeight = 36;
  const pivotX = scaleWidth / 2;
  const pivotY = 12;
  const beamLength = 70;

  // Beam endpoints calculated with tilt angle
  const rad = (tiltDegrees * Math.PI) / 180;
  const leftPanX = pivotX - beamLength * Math.cos(rad);
  const leftPanY = pivotY - beamLength * Math.sin(rad);

  const rightPanX = pivotX + beamLength * Math.cos(rad);
  const rightPanY = pivotY + beamLength * Math.sin(rad);

  return (
    <div className="w-full max-w-sm mx-auto my-1 px-2">
      <div className="bg-white/90 border border-parchment-300 rounded-xl p-1.5 shadow-sm flex flex-col items-center">
        {/* Title */}
        <div className="flex items-center space-x-1.5 text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-0.5">
          <Scale className="w-3 h-3 text-amber-700" />
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
            y2={scaleHeight - 6}
            stroke="#8C6239"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Base Stand Foot */}
          <path
            d={`M ${pivotX - 18} ${scaleHeight - 6} L ${pivotX + 18} ${scaleHeight - 6}`}
            stroke="#8C6239"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Central Pivot Fulcrum Hub */}
          <circle cx={pivotX} cy={pivotY} r="4" fill="#D4AF37" stroke="#2D2B28" strokeWidth="1.2" />

          {/* Tilting Cross Beam */}
          <line
            x1={leftPanX}
            y1={leftPanY}
            x2={rightPanX}
            y2={rightPanY}
            stroke="#8C6239"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="transition-all duration-500 ease-out"
          />

          {/* Left Pan (Team A) Chains and Tray */}
          <g className="transition-all duration-500 ease-out">
            <line x1={leftPanX} y1={leftPanY} x2={leftPanX - 8} y2={leftPanY + 16} stroke="#A88D61" strokeWidth="1" />
            <line x1={leftPanX} y1={leftPanY} x2={leftPanX + 8} y2={leftPanY + 16} stroke="#A88D61" strokeWidth="1" />
            <ellipse
              cx={leftPanX}
              cy={leftPanY + 17}
              rx="14"
              ry="3"
              fill={leadingTeamId === 'teamA' ? '#2B4C7E' : '#C5AA83'}
              stroke="#2D2B28"
              strokeWidth="1"
            />
          </g>

          {/* Right Pan (Team B) Chains and Tray */}
          <g className="transition-all duration-500 ease-out">
            <line x1={rightPanX} y1={rightPanY} x2={rightPanX - 8} y2={rightPanY + 16} stroke="#A88D61" strokeWidth="1" />
            <line x1={rightPanX} y1={rightPanY} x2={rightPanX + 8} y2={rightPanY + 16} stroke="#A88D61" strokeWidth="1" />
            <ellipse
              cx={rightPanX}
              cy={rightPanY + 17}
              rx="14"
              ry="3"
              fill={leadingTeamId === 'teamB' ? '#C85A32' : '#C5AA83'}
              stroke="#2D2B28"
              strokeWidth="1"
            />
          </g>
        </svg>

        {/* Lead Status Text */}
        <div className="text-[10px] font-semibold text-stone-600 mt-0.5">
          {leadingTeamId === 'tied' ? (
            <span className="text-amber-800 font-bold">Equilibrium (Tied)</span>
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
