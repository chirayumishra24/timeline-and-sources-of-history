'use client';

import React, { useState, useEffect } from 'react';
import {
  X,
  Trophy,
  History,
  Calendar,
  ChevronDown,
  ChevronUp,
  Award,
  CheckCircle2,
  XCircle,
  RefreshCw,
  Sparkles,
} from 'lucide-react';
import { EmblemIcon } from '@/components/EmblemIcon';
import { EmblemType } from '@/types/team';

interface RoundLogData {
  id: string;
  roundNumber: number;
  category: string;
  activeTeamId: string;
  teamACorrect: boolean;
  teamBCorrect: boolean;
  pointsAwardedA: number;
  pointsAwardedB: number;
}

interface GameSessionData {
  id: string;
  createdAt: string;
  totalRounds: number;
  winnerId: string | null;
  teamAName: string;
  teamBName: string;
  teamAScore: number;
  teamBScore: number;
  teamAEmblem: string;
  teamBEmblem: string;
  roundLogs: RoundLogData[];
}

interface MatchHistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MatchHistoryModal({ isOpen, onClose }: MatchHistoryModalProps) {
  const [sessions, setSessions] = useState<GameSessionData[]>([]);
  const [loading, setLoading] = useState(false);
  const [expandedSessionId, setExpandedSessionId] = useState<string | null>(null);

  const fetchSessions = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/game-sessions');
      const json = await res.json();
      if (json.success && Array.isArray(json.data)) {
        setSessions(json.data);
      }
    } catch (err) {
      console.error('Error fetching match history:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchSessions();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-3xl max-h-[85vh] bg-[#FDFBF7] rounded-3xl shadow-2xl border-2 border-amber-300 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-amber-200 bg-amber-50/70">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center shadow-md">
              <History className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-serif font-bold text-xl text-stone-900">
                Classroom Chronicles & Match History
              </h2>
              <p className="text-xs text-stone-600">
                Recorded via Prisma ORM local database
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={fetchSessions}
              disabled={loading}
              className="p-2 text-stone-600 hover:text-amber-800 hover:bg-amber-100 rounded-xl transition-colors"
              title="Refresh Records"
            >
              <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-stone-500 hover:text-stone-800 hover:bg-stone-200 rounded-xl transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {loading && sessions.length === 0 ? (
            <div className="py-16 text-center text-stone-500 flex flex-col items-center space-y-3">
              <RefreshCw className="w-8 h-8 animate-spin text-amber-600" />
              <p className="font-serif text-sm">Consulting historical archives...</p>
            </div>
          ) : sessions.length === 0 ? (
            <div className="py-16 text-center text-stone-500 border-2 border-dashed border-stone-200 rounded-2xl p-8">
              <History className="w-12 h-12 mx-auto mb-3 text-stone-400" />
              <p className="font-serif text-base font-bold text-stone-700">No match records logged yet</p>
              <p className="text-xs text-stone-500 mt-1 max-w-sm mx-auto">
                Complete a duel round and the full scores and round breakdowns will be preserved here permanently.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {sessions.map((session) => {
                const isExpanded = expandedSessionId === session.id;
                const formattedDate = new Date(session.createdAt).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                });

                return (
                  <div
                    key={session.id}
                    className="border border-amber-200 rounded-2xl bg-white shadow-sm hover:shadow transition-all overflow-hidden"
                  >
                    {/* Session Summary Card */}
                    <div
                      onClick={() => setExpandedSessionId(isExpanded ? null : session.id)}
                      className="p-4 flex items-center justify-between cursor-pointer hover:bg-amber-50/40 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center -space-x-2">
                          <div className="w-8 h-8 rounded-full bg-[#2B4C7E] text-white flex items-center justify-center border-2 border-white shadow-sm">
                            <EmblemIcon emblem={session.teamAEmblem as EmblemType} className="w-4 h-4" />
                          </div>
                          <div className="w-8 h-8 rounded-full bg-[#C85A32] text-white flex items-center justify-center border-2 border-white shadow-sm">
                            <EmblemIcon emblem={session.teamBEmblem as EmblemType} className="w-4 h-4" />
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="font-serif font-bold text-stone-900 text-sm">
                              {session.teamAName} ({session.teamAScore}) vs {session.teamBName} ({session.teamBScore})
                            </span>
                            {session.winnerId ? (
                              <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-300">
                                <Trophy className="w-3 h-3 text-amber-700" />
                                <span>
                                  Winner: {session.winnerId === 'teamA' ? session.teamAName : session.teamBName}
                                </span>
                              </span>
                            ) : (
                              <span className="text-[10px] px-2 py-0.5 rounded-full bg-stone-100 text-stone-600 font-bold">
                                Tie
                              </span>
                            )}
                          </div>
                          <div className="flex items-center space-x-3 text-xs text-stone-500 mt-0.5">
                            <span className="flex items-center space-x-1">
                              <Calendar className="w-3 h-3" />
                              <span>{formattedDate}</span>
                            </span>
                            <span>•</span>
                            <span>{session.totalRounds} Rounds</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <span className="text-xs font-bold text-amber-800">
                          {isExpanded ? 'Hide Rounds' : 'View Rounds'}
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-stone-400" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-stone-400" />
                        )}
                      </div>
                    </div>

                    {/* Detailed Round Logs Accordion */}
                    {isExpanded && session.roundLogs && (
                      <div className="p-4 bg-stone-50/70 border-t border-amber-100 space-y-2">
                        <div className="text-xs font-bold uppercase tracking-wider text-stone-600 mb-2">
                          Round Breakdown
                        </div>
                        <div className="grid grid-cols-1 gap-2">
                          {session.roundLogs.map((log) => (
                            <div
                              key={log.id}
                              className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-stone-200 text-xs"
                            >
                              <div className="flex items-center space-x-3">
                                <span className="font-bold text-stone-700 px-2 py-0.5 bg-stone-100 rounded-md">
                                  Round {log.roundNumber}
                                </span>
                                <span className="font-medium text-stone-800 font-serif">
                                  {log.category}
                                </span>
                              </div>

                              <div className="flex items-center space-x-4">
                                <div className="flex items-center space-x-1">
                                  <span className="text-stone-500">{session.teamAName}:</span>
                                  {log.teamACorrect ? (
                                    <span className="flex items-center text-emerald-700 font-bold">
                                      <CheckCircle2 className="w-3.5 h-3.5 mr-0.5" />+{log.pointsAwardedA}
                                    </span>
                                  ) : (
                                    <span className="flex items-center text-red-600">
                                      <XCircle className="w-3.5 h-3.5 mr-0.5" />0
                                    </span>
                                  )}
                                </div>

                                <div className="flex items-center space-x-1">
                                  <span className="text-stone-500">{session.teamBName}:</span>
                                  {log.teamBCorrect ? (
                                    <span className="flex items-center text-emerald-700 font-bold">
                                      <CheckCircle2 className="w-3.5 h-3.5 mr-0.5" />+{log.pointsAwardedB}
                                    </span>
                                  ) : (
                                    <span className="flex items-center text-red-600">
                                      <XCircle className="w-3.5 h-3.5 mr-0.5" />0
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-amber-200 bg-amber-50/40 text-center">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-xl bg-stone-800 text-white font-serif font-bold text-sm hover:bg-stone-900 transition-colors shadow-md"
          >
            Close Chronicles
          </button>
        </div>
      </div>
    </div>
  );
}
