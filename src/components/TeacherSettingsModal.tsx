import React from 'react';
import { GameSettings } from '@/types/game';
import { Settings, Volume2, VolumeX, RotateCcw } from 'lucide-react';

interface TeacherSettingsModalProps {
  settings: GameSettings;
  currentMaxRounds: number;
  onUpdateSettings: (newSettings: Partial<GameSettings>) => void;
  onResetGame: () => void;
  onClose: () => void;
}

export const TeacherSettingsModal: React.FC<TeacherSettingsModalProps> = ({
  settings,
  currentMaxRounds,
  onUpdateSettings,
  onResetGame,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-fadeIn">
      <div className="bg-white rounded-3xl border-2 border-stone-300 shadow-2xl p-6 max-w-md w-full">
        <div className="flex items-center justify-between pb-3 border-b border-stone-200">
          <div className="flex items-center space-x-2">
            <Settings className="w-5 h-5 text-stone-700" />
            <h3 className="text-lg font-serif font-bold text-stone-900">
              Classroom Settings
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-stone-700 font-bold text-lg"
          >
            ✕
          </button>
        </div>

        <div className="py-4 space-y-4 text-sm">
          {/* Sound Toggle */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-stone-50 border border-stone-200">
            <div>
              <span className="font-bold text-stone-800 block">Game Sound Effects</span>
              <span className="text-xs text-stone-500">Ratchet ticks, fanfares, and chimes</span>
            </div>
            <button
              onClick={() => onUpdateSettings({ soundEnabled: !settings.soundEnabled })}
              className={`p-2 rounded-xl border font-bold text-xs flex items-center space-x-1 ${
                settings.soundEnabled
                  ? 'bg-amber-100 border-amber-300 text-amber-900'
                  : 'bg-stone-200 border-stone-300 text-stone-600'
              }`}
            >
              {settings.soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              <span>{settings.soundEnabled ? 'ON' : 'OFF'}</span>
            </button>
          </div>

          {/* YouTube Video Background Toggle */}
          <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-bold text-stone-800 block">Atmospheric History Video</span>
                <span className="text-xs text-stone-500">Ambient ancient archive motion background</span>
              </div>
              <button
                onClick={() => onUpdateSettings({ videoBgEnabled: !settings.videoBgEnabled })}
                className={`p-2 rounded-xl border font-bold text-xs flex items-center space-x-1 ${
                  settings.videoBgEnabled
                    ? 'bg-amber-100 border-amber-300 text-amber-900'
                    : 'bg-stone-200 border-stone-300 text-stone-600'
                }`}
              >
                <span>{settings.videoBgEnabled ? 'ACTIVE' : 'OFF'}</span>
              </button>
            </div>

            {settings.videoBgEnabled && (
              <div className="pt-2 border-t border-stone-200 flex gap-1.5">
                <button
                  type="button"
                  onClick={() => onUpdateSettings({ videoBgId: 'xDIwPfMbayQ' })}
                  className={`flex-1 py-1 px-2 rounded-lg text-[11px] font-bold border ${
                    settings.videoBgId === 'xDIwPfMbayQ'
                      ? 'bg-amber-600 text-white border-amber-700'
                      : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-100'
                  }`}
                >
                  Royal Archive
                </button>
                <button
                  type="button"
                  onClick={() => onUpdateSettings({ videoBgId: 'yBpt1AXPPqU' })}
                  className={`flex-1 py-1 px-2 rounded-lg text-[11px] font-bold border ${
                    settings.videoBgId === 'yBpt1AXPPqU'
                      ? 'bg-amber-600 text-white border-amber-700'
                      : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-100'
                  }`}
                >
                  Ancient Library
                </button>
              </div>
            )}
          </div>

          {/* Max Rounds selector */}
          <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
            <span className="font-bold text-stone-800 block mb-2">Total Session Rounds</span>
            <div className="flex gap-1.5">
              {[10, 15, 20, 25, 30].map((r) => (
                <button
                  key={r}
                  onClick={() => onUpdateSettings({ maxRounds: r })}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-bold ${
                    currentMaxRounds === r
                      ? 'bg-amber-600 text-white shadow'
                      : 'bg-white border border-stone-300 text-stone-700'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          {/* Reset session button */}
          <div className="pt-2">
            <button
              onClick={() => {
                if (confirm('Are you sure you want to reset the current game session?')) {
                  onResetGame();
                  onClose();
                }
              }}
              className="w-full py-2.5 rounded-xl bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-800 font-bold text-xs flex items-center justify-center space-x-1.5 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Game & Clear Used Questions</span>
            </button>
          </div>
        </div>

        <div className="pt-2 border-t border-stone-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-stone-900 text-white text-xs font-bold font-serif"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
