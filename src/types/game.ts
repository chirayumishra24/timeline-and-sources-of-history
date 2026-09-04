import { Team, TeamId, DiscoveredArtifact } from './team';
import { Question, WheelCategory } from './question';

export type GamePhase =
  | 'intro'
  | 'setup'
  | 'instructions'
  | 'spin'
  | 'category_reveal'
  | 'question'
  | 'feedback'
  | 'discovery'
  | 'turn_transition'
  | 'final_challenge'
  | 'tie_breaker'
  | 'results'
  | 'review';

export interface AnswerLog {
  round: number;
  teamId: TeamId;
  question: Question;
  selectedAnswer: any;
  isCorrect: boolean;
  pointsAwarded: number;
  explanation: string;
}

export interface GameSettings {
  maxRounds: number; // 10, 15, 20, 25, 30
  soundEnabled: boolean;
  timerEnabled: boolean;
  videoBgEnabled: boolean;
  videoBgId: string;
}

export interface TeamAnswerStatus {
  answered: boolean;
  selectedAnswer: any;
  isCorrect: boolean;
  pointsAwarded: number;
  explanation: string;
}

export interface GameState {
  phase: GamePhase;
  currentRound: number;
  maxRounds: number;
  currentTurn: TeamId;
  teams: Record<TeamId, Team>;
  usedQuestionIds: string[];
  currentCategory: WheelCategory | null;
  currentQuestion: Question | null;
  dualQuestions: {
    teamA: Question | null;
    teamB: Question | null;
  } | null;
  dualAnswers: {
    teamA: TeamAnswerStatus | null;
    teamB: TeamAnswerStatus | null;
  };
  lastAnswerResult: {
    isCorrect: boolean;
    points: number;
    teamId: TeamId;
    userChoice: any;
    explanation: string;
  } | null;
  pendingDiscovery: DiscoveredArtifact | null;
  answerHistory: AnswerLog[];
  settings: GameSettings;
  roundStartingTeam: TeamId;
  topicQuestionsAnswered: number;
}
