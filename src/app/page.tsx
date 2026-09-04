'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { GameState, GamePhase } from '@/types/game';
import { WheelCategory, Question } from '@/types/question';
import { EmblemType, DiscoveredArtifact } from '@/types/team';
import { INITIAL_GAME_STATE, saveGameState, loadGameState, clearGameSession } from '@/utils/gameState';
import { QuestionEngine } from '@/utils/questionEngine';
import { getDiscoveryForCategory } from '@/data/artifactsCatalog';
import { soundManager } from '@/utils/sound';

import { GameHeader } from '@/components/GameHeader';
import { TurnBanner } from '@/components/TurnBanner';
import { HistoryWheel } from '@/components/HistoryWheel';
import { HistoryArchive } from '@/components/HistoryArchive';
import { HistoryBalance } from '@/components/HistoryBalance';
import { FinalChallengeModal } from '@/components/FinalChallengeModal';
import { TieBreakerModal } from '@/components/TieBreakerModal';
import { ResultsScreen } from '@/components/ResultsScreen';
import { HistoryReviewModal } from '@/components/HistoryReviewModal';
import { DualQuestionsArena } from '@/components/DualQuestionsArena';
import { GameIntro } from '@/components/GameIntro';
import { GameSetup } from '@/components/GameSetup';
import { InstructionsScreen } from '@/components/InstructionsScreen';
import { TeacherSettingsModal } from '@/components/TeacherSettingsModal';
import { BackgroundVideo } from '@/components/BackgroundVideo';

export default function HistoryWheelApp() {
  const [state, setState] = useState<GameState>(INITIAL_GAME_STATE);
  const [isClient, setIsClient] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [reviewOpen, setReviewOpen] = useState(false);

  // Restore game session on client mount
  useEffect(() => {
    setIsClient(true);
    const saved = loadGameState();
    if (saved) {
      setState(saved);
      soundManager.setEnabled(saved.settings.soundEnabled);
    }
  }, []);

  // Save game state automatically
  useEffect(() => {
    if (isClient) {
      saveGameState(state);
    }
  }, [state, isClient]);

  const activeTeam = state.teams[state.currentTurn];
  const nextTeamId = state.currentTurn === 'teamA' ? 'teamB' : 'teamA';
  const nextTeam = state.teams[nextTeamId];

  // 1. Wheel Spin Completion Handler - Lands on topic and gives questions to BOTH teams
  const handleSpinComplete = useCallback((category: WheelCategory) => {
    // Pick question for Team A
    const resA = QuestionEngine.getUnusedQuestion(category, state.usedQuestionIds);
    if (!resA) {
      alert("The historical archives are exhausted! Moving to final challenge.");
      setState(prev => ({ ...prev, phase: 'final_challenge' }));
      return;
    }

    // Pick a DIFFERENT question for Team B from the same category
    const usedWithA = [...state.usedQuestionIds, resA.question.id];
    const resB = QuestionEngine.getUnusedQuestion(category, usedWithA);
    if (!resB) {
      alert("The historical archives are exhausted! Moving to final challenge.");
      setState(prev => ({ ...prev, phase: 'final_challenge' }));
      return;
    }

    // Directly show both questions on screen - NO POPUP NOTHING!
    setState(prev => ({
      ...prev,
      currentCategory: category,
      dualQuestions: {
        teamA: resA.question,
        teamB: resB.question,
      },
      dualAnswers: {
        teamA: null,
        teamB: null,
      },
      usedQuestionIds: [...prev.usedQuestionIds, resA.question.id, resB.question.id],
      phase: 'question',
      lastAnswerResult: null,
      pendingDiscovery: null,
    }));
  }, [state.usedQuestionIds]);

  // 2. Question Answer Submission for a Team (Inline Feedback, NO POPUP)
  const handleDualAnswerSubmit = (teamId: 'teamA' | 'teamB', userAnswer: any) => {
    if (!state.dualQuestions) return;
    const q = state.dualQuestions[teamId];
    if (!q) return;

    let isCorrect = false;
    if (q.type === 'mcq' || q.type === 'before-after' || q.type === 'source-detective' || q.type === 'connect-clues' || q.type === 'blitz') {
      isCorrect = userAnswer === (q as any).correctAnswer;
    } else if (q.type === 'ordering') {
      isCorrect = JSON.stringify(userAnswer) === JSON.stringify(q.correctOrder);
    } else if (q.type === 'fix-timeline') {
      isCorrect = userAnswer === q.wrongEventId;
    } else if (q.type === 'evidence-eval') {
      isCorrect = userAnswer === q.correctAnswer;
    }

    const pointsAwarded = isCorrect ? q.points : 0;

    if (isCorrect) {
      soundManager.playCorrect();
    } else {
      soundManager.playIncorrect();
    }

    const newDiscovery = isCorrect ? getDiscoveryForCategory(q.category, state.currentRound) : null;

    setState(prev => {
      const currentTeam = prev.teams[teamId];
      const newStreak = isCorrect ? currentTeam.currentStreak + 1 : 0;
      const bestStreak = Math.max(currentTeam.bestStreak, newStreak);

      const updatedTeam = {
        ...currentTeam,
        score: currentTeam.score + pointsAwarded,
        correctCount: currentTeam.correctCount + (isCorrect ? 1 : 0),
        incorrectCount: currentTeam.incorrectCount + (isCorrect ? 0 : 1),
        currentStreak: newStreak,
        bestStreak: bestStreak,
        discoveries: newDiscovery
          ? [...currentTeam.discoveries, newDiscovery]
          : currentTeam.discoveries,
        categoriesAnswered: {
          ...currentTeam.categoriesAnswered,
          [q.category]: (currentTeam.categoriesAnswered[q.category] || 0) + 1,
        },
      };

      const updatedLog = {
        round: prev.currentRound,
        teamId,
        question: q,
        selectedAnswer: userAnswer,
        isCorrect,
        pointsAwarded,
        explanation: q.explanation,
      };

      return {
        ...prev,
        teams: {
          ...prev.teams,
          [teamId]: updatedTeam,
        },
        dualAnswers: {
          ...prev.dualAnswers,
          [teamId]: {
            answered: true,
            selectedAnswer: userAnswer,
            isCorrect,
            pointsAwarded,
            explanation: q.explanation,
          },
        },
        answerHistory: [...prev.answerHistory, updatedLog],
      };
    });
  };

  // 3. Proceed to Next Spin
  const handleProceedToNextSpin = () => {
    setState(prev => {
      const nextRound = prev.currentRound + 1;

      if (nextRound > prev.maxRounds) {
        return {
          ...prev,
          phase: 'final_challenge',
          currentCategory: null,
          dualQuestions: null,
          dualAnswers: { teamA: null, teamB: null },
        };
      }

      // Next team turns the wheel!
      const nextSpinTeamId = prev.currentTurn === 'teamA' ? 'teamB' : 'teamA';

      return {
        ...prev,
        currentRound: nextRound,
        currentTurn: nextSpinTeamId,
        roundStartingTeam: nextSpinTeamId,
        phase: 'spin',
        currentCategory: null,
        dualQuestions: null,
        dualAnswers: { teamA: null, teamB: null },
        lastAnswerResult: null,
        pendingDiscovery: null,
      };
    });
  };

  // 7. Final Challenge Completion
  const handleFinalChallengeComplete = ({
    teamACorrect,
    teamBCorrect,
  }: {
    teamACorrect: boolean;
    teamBCorrect: boolean;
  }) => {
    setState(prev => {
      const updatedTeamA = {
        ...prev.teams.teamA,
        score: prev.teams.teamA.score + (teamACorrect ? 20 : 0),
        correctCount: prev.teams.teamA.correctCount + (teamACorrect ? 1 : 0),
      };
      const updatedTeamB = {
        ...prev.teams.teamB,
        score: prev.teams.teamB.score + (teamBCorrect ? 20 : 0),
        correctCount: prev.teams.teamB.correctCount + (teamBCorrect ? 1 : 0),
      };

      const isTie = updatedTeamA.score === updatedTeamB.score;

      return {
        ...prev,
        teams: {
          teamA: updatedTeamA,
          teamB: updatedTeamB,
        },
        phase: isTie ? 'tie_breaker' : 'results',
      };
    });
  };

  // 8. Tie-breaker resolution
  const handleTieResolved = (winnerId: 'teamA' | 'teamB') => {
    setState(prev => {
      const winner = prev.teams[winnerId];
      const updatedWinner = {
        ...winner,
        score: winner.score + 5, // decisive edge
      };
      return {
        ...prev,
        teams: {
          ...prev.teams,
          [winnerId]: updatedWinner,
        },
        phase: 'results',
      };
    });
  };

  // 9. Reset Game
  const handleResetGame = () => {
    clearGameSession();
    setState(INITIAL_GAME_STATE);
  };

  // Setup Completion
  const handleCompleteSetup = ({
    teamAName,
    teamBName,
    teamAEmblem,
    teamBEmblem,
    maxRounds,
  }: {
    teamAName: string;
    teamBName: string;
    teamAEmblem: EmblemType;
    teamBEmblem: EmblemType;
    maxRounds: number;
  }) => {
    setState(prev => ({
      ...prev,
      maxRounds,
      teams: {
        teamA: {
          ...prev.teams.teamA,
          name: teamAName,
          emblem: teamAEmblem,
        },
        teamB: {
          ...prev.teams.teamB,
          name: teamBName,
          emblem: teamBEmblem,
        },
      },
      settings: {
        ...prev.settings,
        maxRounds,
      },
      phase: 'instructions',
    }));
  };

  const questionStats = QuestionEngine.getStats(state.usedQuestionIds);

  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center font-serif text-lg text-amber-900 animate-pulse">
          Opening Historical Archives...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col justify-between relative">
      {/* Historical Ambient Background Video */}
      <BackgroundVideo
        enabled={state.settings.videoBgEnabled}
        videoId={state.settings.videoBgId}
      />

      {/* Top Academic Header */}
      <GameHeader
        currentRound={state.currentRound}
        maxRounds={state.maxRounds}
        usedQuestionsCount={questionStats.usedCount}
        totalQuestionsCount={questionStats.totalInBank}
        soundEnabled={state.settings.soundEnabled}
        onToggleSound={() => {
          setState(prev => ({
            ...prev,
            settings: { ...prev.settings, soundEnabled: !prev.settings.soundEnabled },
          }));
        }}
        onResetGame={handleResetGame}
        onOpenSettings={() => setSettingsOpen(true)}
        onOpenReview={() => setReviewOpen(true)}
        hasAnswerHistory={state.answerHistory.length > 0}
      />

      {/* Main Game Arena */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-2 sm:p-4 flex flex-col justify-center">
        {/* Phase 1: Intro */}
        {state.phase === 'intro' && (
          <GameIntro onProceedToSetup={() => setState(p => ({ ...p, phase: 'setup' }))} />
        )}

        {/* Phase 2: Setup */}
        {state.phase === 'setup' && (
          <GameSetup
            initialTeamAName={state.teams.teamA.name}
            initialTeamBName={state.teams.teamB.name}
            initialTeamAEmblem={state.teams.teamA.emblem}
            initialTeamBEmblem={state.teams.teamB.emblem}
            initialRounds={state.maxRounds}
            onCompleteSetup={handleCompleteSetup}
          />
        )}

        {/* Phase 3: Instructions */}
        {state.phase === 'instructions' && (
          <InstructionsScreen
            onStart={() => setState(p => ({ ...p, phase: 'spin' }))}
          />
        )}

        {/* Phase 4: Spin the Wheel Arena */}
        {state.phase === 'spin' && (
          <div className="flex flex-col items-center animate-fadeIn">
            <TurnBanner
              activeTeam={activeTeam}
              round={state.currentRound}
              promptText={`${activeTeam.name} spins for topic`}
            />
            <HistoryWheel
              onSpinComplete={handleSpinComplete}
              isSpinning={false}
            />
            <HistoryBalance teamA={state.teams.teamA} teamB={state.teams.teamB} />
            <HistoryArchive
              teamA={state.teams.teamA}
              teamB={state.teams.teamB}
              activeTeamId={state.currentTurn}
            />
          </div>
        )}

        {/* Phase 5: Dual Team Questions on Spun Topic (NO POPUPS) */}
        {state.phase === 'question' && state.currentCategory && state.dualQuestions?.teamA && state.dualQuestions?.teamB && (
          <DualQuestionsArena
            category={state.currentCategory}
            currentRound={state.currentRound}
            maxRounds={state.maxRounds}
            teamA={state.teams.teamA}
            teamB={state.teams.teamB}
            questionTeamA={state.dualQuestions.teamA}
            questionTeamB={state.dualQuestions.teamB}
            answerTeamA={state.dualAnswers.teamA}
            answerTeamB={state.dualAnswers.teamB}
            onAnswerSubmit={handleDualAnswerSubmit}
            onProceedToNextSpin={handleProceedToNextSpin}
            nextSpinTeam={nextTeam}
          />
        )}

        {/* Phase 6: Results Screen */}
        {state.phase === 'results' && (
          <ResultsScreen
            teamA={state.teams.teamA}
            teamB={state.teams.teamB}
            roundsCompleted={state.maxRounds}
            onPlayAgain={handleResetGame}
            onOpenReview={() => setReviewOpen(true)}
          />
        )}

        {/* Final Challenge Round */}
        {state.phase === 'final_challenge' && (
          <FinalChallengeModal
            teamA={state.teams.teamA}
            teamB={state.teams.teamB}
            onComplete={handleFinalChallengeComplete}
          />
        )}

        {/* Sudden History Tie-Breaker */}
        {state.phase === 'tie_breaker' && (
          <TieBreakerModal
            teamA={state.teams.teamA}
            teamB={state.teams.teamB}
            onResolved={handleTieResolved}
          />
        )}

        {/* Review Modal */}
        {reviewOpen && (
          <HistoryReviewModal
            logs={state.answerHistory}
            teamAName={state.teams.teamA.name}
            teamBName={state.teams.teamB.name}
            onClose={() => setReviewOpen(false)}
          />
        )}

        {/* Teacher Settings Modal */}
        {settingsOpen && (
          <TeacherSettingsModal
            settings={state.settings}
            currentMaxRounds={state.maxRounds}
            onUpdateSettings={(newSettings) => {
              setState(prev => ({
                ...prev,
                maxRounds: newSettings.maxRounds ?? prev.maxRounds,
                settings: { ...prev.settings, ...newSettings },
              }));
              if (newSettings.soundEnabled !== undefined) {
                soundManager.setEnabled(newSettings.soundEnabled);
              }
            }}
            onResetGame={handleResetGame}
            onClose={() => setSettingsOpen(false)}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="w-full text-center py-3 text-[11px] text-stone-500 border-t border-parchment-200">
        Grade 6 Social Science &bull; Theme B: Tapestry of the Past &bull; Chapter 4: Timeline and Sources of History
      </footer>
    </div>
  );
}
