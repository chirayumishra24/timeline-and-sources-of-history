export type WheelCategory =
  | 'timeline'
  | 'sources'
  | 'source-detective'
  | 'connect-the-clues'
  | 'before-or-after'
  | 'fix-the-timeline'
  | 'what-can-we-know'
  | 'history-blitz';

export type QuestionType =
  | 'mcq'
  | 'ordering'
  | 'before-after'
  | 'fix-timeline'
  | 'source-detective'
  | 'connect-clues'
  | 'evidence-eval'
  | 'blitz';

export type Difficulty = 'easy' | 'medium' | 'challenge';

export interface BaseQuestion {
  id: string;
  category: WheelCategory;
  type: QuestionType;
  difficulty: Difficulty;
  points: number;
  explanation: string;
  hint?: string;
}

export interface MCQQuestion extends BaseQuestion {
  type: 'mcq';
  question: string;
  options: [string, string, string, string];
  correctAnswer: string;
}

export interface OrderingItem {
  id: string;
  label: string;
  detail?: string;
  yearApprox?: string;
}

export interface OrderingQuestion extends BaseQuestion {
  type: 'ordering';
  prompt: string;
  directionLabel?: string; // e.g. "Earliest (Past) → Latest (Recent)"
  items: OrderingItem[];
  correctOrder: string[]; // array of item IDs in correct order
}

export interface BeforeAfterQuestion extends BaseQuestion {
  type: 'before-after';
  prompt: string;
  eventA: { label: string; detail?: string };
  eventB: { label: string; detail?: string };
  question: string; // e.g. "Which event occurred EARLIER in history?"
  options: [string, string];
  correctAnswer: string;
}

export interface FixTimelineEvent {
  id: string;
  label: string;
  era: string;
}

export interface FixTimelineQuestion extends BaseQuestion {
  type: 'fix-timeline';
  prompt: string;
  timeline: FixTimelineEvent[]; // Contains 1 wrongly placed item
  wrongEventId: string; // The event that is out of order
  fixOptions: {
    targetId: string;
    correctPlacementDescription: string;
  }[];
  correctTargetId: string; // The correct identification
}

export interface SourceVisual {
  title: string;
  sourceType: 'Inscription' | 'Coin' | 'Pottery' | 'Monument' | 'Manuscript' | 'Map' | 'Artifact' | 'Seal';
  icon: string;
  eraOrContext: string;
  visualDescription: string; // Rich textual/graphical description of what is depicted
  badgeColor?: string;
}

export interface SourceDetectiveQuestion extends BaseQuestion {
  type: 'source-detective';
  source: SourceVisual;
  question: string;
  options: [string, string, string, string];
  correctAnswer: string;
  deductionGuide?: string; // Historian tip
}

export interface ClueItem {
  label: string;
  category: string;
  finding: string;
  icon: string;
}

export interface ConnectCluesQuestion extends BaseQuestion {
  type: 'connect-clues';
  title: string;
  scenario: string;
  clues: ClueItem[];
  question: string;
  options: [string, string, string, string];
  correctAnswer: string;
  synthesisSummary: string;
}

export interface EvidenceEvalQuestion extends BaseQuestion {
  type: 'evidence-eval';
  sourceContext: string;
  sourceType: string;
  claim: string;
  options: ['Supported by the Evidence', 'Not Established by the Evidence'];
  correctAnswer: 'Supported by the Evidence' | 'Not Established by the Evidence';
  reasoning: string;
}

export interface BlitzQuestion extends BaseQuestion {
  type: 'blitz';
  question: string;
  options: [string, string, string, string];
  correctAnswer: string;
  timeLimitSeconds: number; // default 15s
}

export type Question =
  | MCQQuestion
  | OrderingQuestion
  | BeforeAfterQuestion
  | FixTimelineQuestion
  | SourceDetectiveQuestion
  | ConnectCluesQuestion
  | EvidenceEvalQuestion
  | BlitzQuestion;
