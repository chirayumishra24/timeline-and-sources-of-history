import { Question, WheelCategory } from '@/types/question';
import { TIMELINE_QUESTIONS } from './timelineQuestions';
import { SOURCE_QUESTIONS } from './sourceQuestions';
import { DETECTIVE_QUESTIONS } from './detectiveQuestions';
import { CLUE_QUESTIONS } from './clueQuestions';
import { BEFORE_AFTER_QUESTIONS } from './beforeAfterQuestions';
import { FIX_TIMELINE_QUESTIONS } from './fixTimelineQuestions';
import { EVIDENCE_QUESTIONS } from './evidenceQuestions';
import { BLITZ_QUESTIONS } from './blitzQuestions';

export const ALL_QUESTIONS: Question[] = [
  ...TIMELINE_QUESTIONS,
  ...SOURCE_QUESTIONS,
  ...DETECTIVE_QUESTIONS,
  ...CLUE_QUESTIONS,
  ...BEFORE_AFTER_QUESTIONS,
  ...FIX_TIMELINE_QUESTIONS,
  ...EVIDENCE_QUESTIONS,
  ...BLITZ_QUESTIONS,
];

export interface WheelCategoryMeta {
  id: WheelCategory;
  name: string;
  tagline: string;
  icon: string;
  color: string;
  badgeBg: string;
  badgeBorder: string;
  textColor: string;
  pointsDefault: number;
}

export const WHEEL_CATEGORIES: WheelCategoryMeta[] = [
  {
    id: 'timeline',
    name: 'TIMELINE',
    tagline: 'Chronology & Time Ordering',
    icon: '⏳',
    color: '#D4AF37', // Gold / Amber
    badgeBg: 'bg-amber-100',
    badgeBorder: 'border-amber-400',
    textColor: 'text-amber-900',
    pointsDefault: 10,
  },
  {
    id: 'sources',
    name: 'SOURCES',
    tagline: 'Primary & Secondary Evidence',
    icon: '📜',
    color: '#C85A32', // Terracotta
    badgeBg: 'bg-orange-100',
    badgeBorder: 'border-orange-400',
    textColor: 'text-orange-900',
    pointsDefault: 10,
  },
  {
    id: 'source-detective',
    name: 'SOURCE DETECTIVE',
    tagline: 'Investigate Artifacts & Coins',
    icon: '🔍',
    color: '#2B4C7E', // Royal Indigo
    badgeBg: 'bg-blue-100',
    badgeBorder: 'border-blue-400',
    textColor: 'text-blue-900',
    pointsDefault: 15,
  },
  {
    id: 'connect-the-clues',
    name: 'CONNECT THE CLUES',
    tagline: 'Synthesize Multiple Clues',
    icon: '🧩',
    color: '#2E7D32', // Forest Jade
    badgeBg: 'bg-emerald-100',
    badgeBorder: 'border-emerald-400',
    textColor: 'text-emerald-900',
    pointsDefault: 15,
  },
  {
    id: 'before-or-after',
    name: 'BEFORE OR AFTER?',
    tagline: 'Relative Eras & Sequences',
    icon: '↔️',
    color: '#9E2A2B', // Antique Crimson
    badgeBg: 'bg-rose-100',
    badgeBorder: 'border-rose-400',
    textColor: 'text-rose-900',
    pointsDefault: 10,
  },
  {
    id: 'fix-the-timeline',
    name: 'FIX THE TIMELINE',
    tagline: 'Find Chronological Errors',
    icon: '🛠️',
    color: '#0D9488', // Deep Teal
    badgeBg: 'bg-teal-100',
    badgeBorder: 'border-teal-400',
    textColor: 'text-teal-900',
    pointsDefault: 15,
  },
  {
    id: 'what-can-we-know',
    name: 'WHAT CAN WE KNOW?',
    tagline: 'Supported vs Not Established',
    icon: '⚖️',
    color: '#7C3AED', // Antique Amethyst
    badgeBg: 'bg-purple-100',
    badgeBorder: 'border-purple-400',
    textColor: 'text-purple-900',
    pointsDefault: 15,
  },
  {
    id: 'history-blitz',
    name: 'HISTORY BLITZ',
    tagline: '15-Second Rapid Challenge',
    icon: '⚡',
    color: '#EA580C', // Flame Orange
    badgeBg: 'bg-amber-100',
    badgeBorder: 'border-amber-400',
    textColor: 'text-amber-900',
    pointsDefault: 5,
  },
];

export function getCategoryMeta(category: WheelCategory): WheelCategoryMeta {
  return WHEEL_CATEGORIES.find(c => c.id === category) || WHEEL_CATEGORIES[0];
}
