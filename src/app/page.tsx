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
import { CategoryRevealModal } from '@/components/CategoryRevealModal';
import { QuestionScreen } from '@/components/QuestionScreen';
import { FeedbackPanel } from '@/components/FeedbackPanel';
import { DiscoveryModal } from '@/components/DiscoveryModal';
import { HistoryArchive } from '@/components/HistoryArchive';
import { HistoryBalance } from '@/components/HistoryBalance';
import { FinalChallengeModal } from '@/components/FinalChallengeModal';
import { TieBreakerModal } from '@/components/TieBreakerModal';
import { ResultsScreen } from '@/components/ResultsScreen';
import { HistoryReviewModal } from '@/components/HistoryReviewModal';
import { GameIntro } from '@/components/GameIntro';
import { GameSetup } from '@/components/GameSetup';
import { InstructionsScreen } from '@/components/InstructionsScreen';
import { TeacherSettingsModal } from '@/components/TeacherSettingsModal';
import { BackgroundVideo } from '@/components/BackgroundVideo';
import { EmblemIcon } from '@/components/EmblemIcon';
import { ArrowRight, Sparkles } from 'lucide-react';

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

  // 1. Wheel Spin Completion Handler
  const handleSpinComplete = useCallback((category: WheelCategory) => {
    // Select an unused question for this category
    const result = QuestionEngine.getUnusedQuestion(category, state.usedQuestionIds);

    if (!result) {
      alert("The historical archives are exhausted! Moving to final challenge.");
      setState(prev => ({ ...prev, phase: 'final_challenge' }));
      return;
    }

    setState(prev => ({
      ...prev,
      currentCategory: category,
      currentQuestion: result.question,
      topicQuestionsAnswered: 0,
      phase: 'category_reveal',
    }));
  }, [state.usedQuestionIds]);

  // 2. Transition from Category Reveal to Question
  const handleProceedToQuestion = () => {
    setState(prev => ({ ...prev, phase: 'question' }));
  };

  // 3. Question Answer Submission & Evaluation
  const handleAnswerSubmit = (userAnswer: any) => {
    const q = state.currentQuestion;
    if (!q) return;

    let isCorrect = false;

    if (q.type === 'mcq' || q.type === 'before-after' || q.type === 'source-detective' || q.type === 'connect-clues' || q.type === 'blitz') {
      isCorrect = userAnswer === (q as any).correctAnswer;
    } else if (q.type === 'ordering') {
      // Compare arrays
      isCorrect = JSON.stringify(userAnswer) === JSON.stringify(q.correctOrder);
    } else if (q.type === 'fix-timeline') {
      isCorrect = userAnswer === q.wrongEventId;
    } else if (q.type === 'evidence-eval') {
      isCorrect = userAnswer === q.correctAnswer;
    }

    const pointsAwarded = isCorrect ? q.points : 0;

    // Sound effect
    if (isCorrect) {
      soundManager.playCorrect();
    } else {
      soundManager.playIncorrect();
    }

    // Prepare discovery if correct
    let newDiscovery: DiscoveredArtifact | null = null;
    if (isCorrect) {
      newDiscovery = getDiscoveryForCategory(q.category, state.currentRound);
    }

    // Update Team Stats
    setState(prev => {
      const currentTeam = prev.teams[prev.currentTurn];
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
        teamId: prev.currentTurn,
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
          [prev.currentTurn]: updatedTeam,
        },
        usedQuestionIds: [...prev.usedQuestionIds, q.id],
        lastAnswerResult: {
          isCorrect,
          points: pointsAwarded,
          teamId: prev.currentTurn,
          userChoice: userAnswer,
          explanation: q.explanation,
        },
        pendingDiscovery: newDiscovery,
        answerHistory: [...prev.answerHistory, updatedLog],
        phase: 'feedback',
      };
    });
  };

  // 4. Feedback -> Discovery OR Turn Transition
  const handleProceedFromFeedback = () => {
    if (state.lastAnswerResult?.isCorrect && state.pendingDiscovery) {
      setState(prev => ({ ...prev, phase: 'discovery' }));
    } else {
      advanceTurn();
    }
  };

  // 5. Discovery Modal Proceed -> Turn Transition
  const handleProceedFromDiscovery = () => {
    advanceTurn();
  };

  // 6. Turn Advancement
  const advanceTurn = () => {
    setState(prev => {
      // If only 1 team has answered this topic, give the other team a DIFFERENT question from the same category!
      if (prev.topicQuestionsAnswered === 0 && prev.currentCategory) {
        const nextTeamId = prev.roundStartingTeam === 'teamA' ? 'teamB' : 'teamA';
        const result = QuestionEngine.getUnusedQuestion(prev.currentCategory, prev.usedQuestionIds);

        if (!result) {
          return { ...prev, phase: 'final_challenge' };
        }

        return {
          ...prev,
          currentTurn: nextTeamId,
          currentQuestion: result.question,
          topicQuestionsAnswered: 1,
          phase: 'turn_transition',
          lastAnswerResult: null,
          pendingDiscovery: null,
        };
      }

      // Both teams have now completed their question on this topic! Advance to next round
      const nextRound = prev.currentRound + 1;

      // Check if regular rounds are complete
      if (nextRound > prev.maxRounds) {
        return {
          ...prev,
          phase: 'final_challenge',
          currentQuestion: null,
          currentCategory: null,
          lastAnswerResult: null,
          pendingDiscovery: null,
          topicQuestionsAnswered: 0,
        };
      }

      // Alternate the round starting team for next spin
      const nextStarter = prev.roundStartingTeam === 'teamA' ? 'teamB' : 'teamA';

      return {
        ...prev,
        currentRound: nextRound,
        currentTurn: nextStarter,
        roundStartingTeam: nextStarter,
        phase: 'spin',
        currentQuestion: null,
        currentCategory: null,
        lastAnswerResult: null,
        pendingDiscovery: null,
        topicQuestionsAnswered: 0,
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

        {/* Phase 5: Question Screen */}
        {state.phase === 'question' && state.currentQuestion && (
          <div className="animate-fadeIn">
            <QuestionScreen
              question={state.currentQuestion}
              activeTeam={activeTeam}
              currentRound={state.currentRound}
              maxRounds={state.maxRounds}
              questionNumberInTopic={state.topicQuestionsAnswered === 0 ? 1 : 2}
              onAnswerSubmit={handleAnswerSubmit}
            />
          </div>
        )}

        {/* Phase 5b: Second Team Turn Transition on Same Topic */}
        {state.phase === 'turn_transition' && state.currentQuestion && (
          <div className="max-w-xl w-full mx-auto p-6 sm:p-8 bg-white/95 rounded-3xl border-4 border-amber-300 shadow-2xl text-center space-y-6 animate-scaleUp my-8">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>Round {state.currentRound} &bull; Part 2 of 2</span>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-serif font-black text-stone-900">
                {activeTeam.name}&apos;s Turn!
              </h2>
              <p className="text-sm text-stone-600 max-w-md mx-auto">
                Next up on this same topic: <strong>{activeTeam.name}</strong> faces a brand-new, different question!
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex items-center justify-center space-x-3">
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md ${
                  activeTeam.id === 'teamA' ? 'bg-[#2B4C7E]' : 'bg-[#C85A32]'
                }`}
              >
                <EmblemIcon emblem={activeTeam.emblem} className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="text-xs uppercase font-bold text-stone-500">Ready to Answer</div>
                <div className="font-serif font-bold text-lg text-stone-900">{activeTeam.name}</div>
              </div>
            </div>

            <button
              onClick={() => setState(p => ({ ...p, phase: 'question' }))}
              className={`w-full py-3.5 px-6 rounded-2xl text-white font-serif font-bold text-base tracking-wider transition-all shadow-md flex items-center justify-center space-x-2 ${
                activeTeam.id === 'teamA' ? 'bg-[#2B4C7E] hover:bg-[#1E3557]' : 'bg-[#C85A32] hover:bg-[#A34220]'
              }`}
            >
              <span>BEGIN {activeTeam.name.toUpperCase()}&apos;S QUESTION</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
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

        {/* Overlays / Modals */}
        {/* Category Reveal */}
        {state.phase === 'category_reveal' && state.currentCategory && (
          <CategoryRevealModal
            category={state.currentCategory}
            firstTeamName={activeTeam.name}
            secondTeamName={nextTeam.name}
            onProceed={handleProceedToQuestion}
          />
        )}

        {/* Feedback Panel */}
        {state.phase === 'feedback' && state.lastAnswerResult && (
          <FeedbackPanel
            isCorrect={state.lastAnswerResult.isCorrect}
            pointsEarned={state.lastAnswerResult.points}
            explanation={state.lastAnswerResult.explanation}
            activeTeam={activeTeam}
            nextTeam={nextTeam}
            onProceed={handleProceedFromFeedback}
          />
        )}

        {/* Discovery Modal */}
        {state.phase === 'discovery' && state.pendingDiscovery && (
          <DiscoveryModal
            artifact={state.pendingDiscovery}
            team={activeTeam}
            onProceed={handleProceedFromDiscovery}
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
