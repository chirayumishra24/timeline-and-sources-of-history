export type TeamId = 'teamA' | 'teamB';

export type EmblemType =
  | 'scroll'
  | 'compass'
  | 'hourglass'
  | 'museum'
  | 'quill'
  | 'artifact'
  | 'sun'
  | 'shield';

export interface DiscoveredArtifact {
  id: string;
  name: string;
  type: string;
  category: string;
  era: string;
  icon: string;
  description: string;
  discoveredAtRound: number;
}

export interface Team {
  id: TeamId;
  name: string;
  emblem: EmblemType;
  primaryColor: string; // e.g. '#2B4C7E' (Indigo) or '#C85A32' (Terracotta)
  accentColor: string;
  score: number;
  discoveries: DiscoveredArtifact[];
  correctCount: number;
  incorrectCount: number;
  currentStreak: number;
  bestStreak: number;
  categoriesAnswered: Record<string, number>;
}
