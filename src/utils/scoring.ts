import { Team } from '@/types/team';

export interface ArchiveMilestone {
  threshold: number;
  title: string;
  badge: string;
  description: string;
  borderClass: string;
}

export const ARCHIVE_MILESTONES: ArchiveMilestone[] = [
  {
    threshold: 0,
    title: "Field Excavation Desk",
    badge: "⛺",
    description: "Initial field camp where initial artifacts are recorded.",
    borderClass: "border-stone-300",
  },
  {
    threshold: 5,
    title: "Archive Shelf",
    badge: "📚",
    description: "First dedicated library shelf holding authenticated historical discoveries.",
    borderClass: "border-amber-400",
  },
  {
    threshold: 10,
    title: "Artifact Chamber",
    badge: "🏛️",
    description: "Reinforced exhibition gallery displaying precious numismatic and epigraphic treasures.",
    borderClass: "border-blue-400",
  },
  {
    threshold: 15,
    title: "Timeline Hall",
    badge: "⏳",
    description: "Grand chronological corridor linking prehistoric tools to ancient urban civilizations.",
    borderClass: "border-purple-400",
  },
  {
    threshold: 20,
    title: "Grand History Hall",
    badge: "👑",
    description: "The pinnacle of historical scholarship housing an exhaustive museum collection.",
    borderClass: "border-amber-500",
  },
];

export function getTeamMilestone(discoveriesCount: number): ArchiveMilestone {
  for (let i = ARCHIVE_MILESTONES.length - 1; i >= 0; i--) {
    if (discoveriesCount >= ARCHIVE_MILESTONES[i].threshold) {
      return ARCHIVE_MILESTONES[i];
    }
  }
  return ARCHIVE_MILESTONES[0];
}

/**
 * Calculates History Balance tilt degree between Team A and Team B.
 * Returns a number between -30 (heavily tilted to Team A) and +30 (heavily tilted to Team B),
 * where 0 is dead level.
 */
export function calculateBalanceTilt(teamA: Team, teamB: Team): {
  tiltDegrees: number;
  leadingTeamId: 'teamA' | 'teamB' | 'tied';
  pointDiff: number;
} {
  const scoreDiff = teamB.score - teamA.score; // Positive if Team B leads
  const discoveryDiff = (teamB.discoveries.length - teamA.discoveries.length) * 5;
  const netDelta = scoreDiff + discoveryDiff;

  if (netDelta === 0) {
    return {
      tiltDegrees: 0,
      leadingTeamId: 'tied',
      pointDiff: 0,
    };
  }

  // Cap tilt to maximum 22 degrees for elegant museum aesthetics
  const rawTilt = Math.max(-22, Math.min(22, netDelta * 0.45));

  return {
    tiltDegrees: rawTilt,
    leadingTeamId: netDelta < 0 ? 'teamA' : 'teamB',
    pointDiff: Math.abs(teamA.score - teamB.score),
  };
}
