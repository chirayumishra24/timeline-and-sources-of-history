import { Question, WheelCategory, MCQQuestion, BlitzQuestion } from '@/types/question';
import { ALL_QUESTIONS } from '@/data/questions';

/**
 * Robust question engine ensuring NO questions ever repeat within a game session.
 */
export class QuestionEngine {
  /**
   * Retrieves a random unused question for the target category.
   * If the category has no remaining unused questions, it gracefully selects
   * from any remaining unused questions across all categories.
   */
  public static getUnusedQuestion(
    category: WheelCategory,
    usedQuestionIds: string[]
  ): { question: Question; categoryFallbacked: boolean } | null {
    // 1. Filter questions for category that have not been used
    const categoryAvailable = ALL_QUESTIONS.filter(
      q => q.category === category && !usedQuestionIds.includes(q.id)
    );

    if (categoryAvailable.length > 0) {
      const randomIndex = Math.floor(Math.random() * categoryAvailable.length);
      const selected = categoryAvailable[randomIndex];
      return {
        question: this.prepareQuestionForDisplay(selected),
        categoryFallbacked: false,
      };
    }

    // 2. Category exhausted! Fallback to any unused question in the game bank
    const anyAvailable = ALL_QUESTIONS.filter(
      q => !usedQuestionIds.includes(q.id)
    );

    if (anyAvailable.length > 0) {
      const randomIndex = Math.floor(Math.random() * anyAvailable.length);
      const selected = anyAvailable[randomIndex];
      return {
        question: this.prepareQuestionForDisplay(selected),
        categoryFallbacked: true,
      };
    }

    // 3. Complete question bank exhausted (only if played 99+ questions in one session)
    return null;
  }

  /**
   * Safely shuffles options for MCQs and Blitz questions so option order is fresh,
   * without ever breaking the `correctAnswer` key or explanations.
   */
  private static prepareQuestionForDisplay(question: Question): Question {
    // Deep copy to prevent mutating the original question bank
    const qCopy = JSON.parse(JSON.stringify(question)) as Question;

    if (qCopy.type === 'mcq' || qCopy.type === 'blitz') {
      const shuffledOptions = [...qCopy.options];
      // Fisher-Yates shuffle
      for (let i = shuffledOptions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
      }
      qCopy.options = shuffledOptions as [string, string, string, string];
    } else if (qCopy.type === 'ordering') {
      // Shuffle initial presentation order of ordering cards so they aren't shown in pre-solved order
      const shuffledItems = [...qCopy.items];
      let attempts = 0;
      do {
        for (let i = shuffledItems.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledItems[i], shuffledItems[j]] = [shuffledItems[j], shuffledItems[i]];
        }
        attempts++;
      } while (
        attempts < 5 &&
        shuffledItems.map(item => item.id).join(',') === qCopy.correctOrder.join(',')
      );
      qCopy.items = shuffledItems;
    }

    return qCopy;
  }

  /**
   * Returns total questions available and used in session.
   */
  public static getStats(usedQuestionIds: string[]) {
    return {
      totalInBank: ALL_QUESTIONS.length,
      usedCount: usedQuestionIds.length,
      remainingCount: Math.max(0, ALL_QUESTIONS.length - usedQuestionIds.length),
    };
  }
}
