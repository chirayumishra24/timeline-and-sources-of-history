import { GameState } from '@/types/game';

export const INITIAL_GAME_STATE: GameState = {
  phase: 'intro',
  currentRound: 1,
  maxRounds: 20,
  currentTurn: 'teamA',
  teams: {
    teamA: {
      id: 'teamA',
      name: 'The Chroniclers',
      emblem: 'scroll',
      primaryColor: '#2B4C7E', // Imperial Indigo
      accentColor: '#60A5FA',
      score: 0,
      discoveries: [],
      correctCount: 0,
      incorrectCount: 0,
      currentStreak: 0,
      bestStreak: 0,
      categoriesAnswered: {},
    },
    teamB: {
      id: 'teamB',
      name: 'The Timekeepers',
      emblem: 'hourglass',
      primaryColor: '#C85A32', // Terracotta Amber
      accentColor: '#FB923C',
      score: 0,
      discoveries: [],
      correctCount: 0,
      incorrectCount: 0,
      currentStreak: 0,
      bestStreak: 0,
      categoriesAnswered: {},
    },
  },
  usedQuestionIds: [],
  currentCategory: null,
  currentQuestion: null,
  dualQuestions: null,
  dualAnswers: {
    teamA: null,
    teamB: null,
  },
  lastAnswerResult: null,
  pendingDiscovery: null,
  answerHistory: [],
  settings: {
    maxRounds: 20,
    soundEnabled: true,
    timerEnabled: true,
    videoBgEnabled: true,
    videoBgId: 'xDIwPfMbayQ',
    wheelMode: '3d',
  },
  roundStartingTeam: 'teamA',
  topicQuestionsAnswered: 0,
};

const STORAGE_KEY = 'HISTORY_WHEEL_GAME_SESSION_V1';

export function saveGameState(state: GameState): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (err) {
    console.warn('Failed to save game state to localStorage:', err);
  }
}

export function loadGameState(): GameState | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as GameState;
  } catch {
    return null;
  }
}

export function clearGameSession(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {}
}
