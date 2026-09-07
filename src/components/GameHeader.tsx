import React from 'react';
import { Volume2, VolumeX, RotateCcw, Settings as SettingsIcon, BookOpen } from 'lucide-react';
import { soundManager } from '@/utils/sound';

interface GameHeaderProps {
  currentRound: number;
  maxRounds: number;
  usedQuestionsCount: number;
  totalQuestionsCount: number;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onResetGame: () => void;
  onOpenSettings?: () => void;
  onOpenReview?: () => void;
  hasAnswerHistory?: boolean;
}

export const GameHeader: React.FC<GameHeaderProps> = ({
  currentRound,
  maxRounds,
  usedQuestionsCount,
  totalQuestionsCount,
  soundEnabled,
  onToggleSound,
  onResetGame,
  onOpenSettings,
  onOpenReview,
  hasAnswerHistory,
}) => {
  return (
    <header className="w-full bg-parchment-100/95 border-b border-parchment-300 shadow-xs px-3 py-1.5 sm:px-4 shrink-0">
      <div className="max-w-7xl mx-auto flex flex-row items-center justify-between gap-2">
        {/* Title and Academic Metadata */}
        <div className="flex items-center space-x-2">
          <div className="w-7 h-7 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center text-sm shadow-inner shrink-0">
            🏛️
          </div>
          <div>
            <h1 className="text-sm sm:text-base font-serif font-bold tracking-wide text-stone-900 leading-tight">
              THE HISTORY WHEEL
            </h1>
            <p className="text-[10px] text-stone-500 font-sans tracking-tight hidden sm:block">
              Grade 6 Social Science &bull; Timeline &amp; Sources of History
            </p>
          </div>
        </div>

        {/* Center Round & Non-Repetition Indicator */}
        <div className="flex items-center space-x-2 sm:space-x-3 bg-white/80 border border-parchment-300 rounded-full px-3 py-0.5 shadow-inner">
          <div className="flex items-center space-x-1 text-xs font-semibold text-stone-800">
            <span className="text-[10px] uppercase tracking-wider text-stone-500">Round</span>
            <span className="font-mono text-sm font-bold text-amber-700">
              {String(Math.min(currentRound, maxRounds)).padStart(2, '0')}
            </span>
            <span className="text-stone-400">/</span>
            <span className="font-mono text-stone-600">{String(maxRounds).padStart(2, '0')}</span>
          </div>

          <div className="hidden md:block w-px h-3 bg-stone-300" />

          <div className="hidden md:flex items-center space-x-1.5 text-xs text-stone-600">
            <span>Challenges Used:</span>
            <span className="font-mono font-bold text-stone-800">{usedQuestionsCount}</span>
            <span className="text-stone-400">/</span>
            <span className="font-mono text-stone-500">{totalQuestionsCount}</span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center space-x-2">
          {hasAnswerHistory && onOpenReview && (
            <button
              onClick={onOpenReview}
              className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 border border-stone-300 text-stone-700 text-xs font-medium transition-colors shadow-sm"
              title="Review Question History"
            >
              <BookOpen className="w-3.5 h-3.5 text-stone-600" />
              <span>Review</span>
            </button>
          )}

          <button
            onClick={() => {
              const next = !soundEnabled;
              soundManager.setEnabled(next);
              onToggleSound();
            }}
            className={`p-2 rounded-lg border text-xs font-medium transition-colors flex items-center justify-center shadow-sm ${
              soundEnabled
                ? 'bg-amber-50 hover:bg-amber-100 border-amber-300 text-amber-800'
                : 'bg-stone-100 hover:bg-stone-200 border-stone-300 text-stone-500'
            }`}
            title={soundEnabled ? 'Mute Sound' : 'Enable Sound'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {onOpenSettings && (
            <button
              onClick={onOpenSettings}
              className="p-2 rounded-lg bg-stone-100 hover:bg-stone-200 border border-stone-300 text-stone-700 transition-colors shadow-sm"
              title="Game Settings"
            >
              <SettingsIcon className="w-4 h-4" />
            </button>
          )}

          <button
            onClick={() => {
              if (confirm('Start a new game session? Current scores and progress will be reset.')) {
                onResetGame();
              }
            }}
            className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-rose-50 border border-stone-300 hover:border-rose-300 text-stone-700 hover:text-rose-700 text-xs font-medium transition-colors shadow-sm"
            title="Reset Game"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">New Game</span>
          </button>
        </div>
      </div>
    </header>
  );
};
