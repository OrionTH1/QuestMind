import { create } from "zustand";
import { Questions } from "../api";
import { QuestionsDifficulty } from "../utils/types";
import { persist } from "zustand/middleware";

interface QuestionsStore {
  difficulty: QuestionsDifficulty;
  ammount: number;
  actualCount: number;
  correctCount: number;
  questions: Questions;
  isFinished: boolean;

  setIsFinished: (isFinished: boolean) => void;
  setDifficulty: (difficulty: QuestionsDifficulty) => void;
  setQuestions: (questions: Questions) => void;
  setQuestionsAmmount: (ammout: number) => void;
  increaseCorrectCount: () => void;
  increaseActualCount: () => void;
  resetCounts: () => void;
}

export const useQuestionsStore = create<QuestionsStore>()(
  persist(
    (set) => ({
      questions: [],
      ammount: 4,
      difficulty: "normal",
      actualCount: 1,
      correctCount: 0,
      isFinished: false,
      setQuestions: (questions: Questions) => set(() => ({ questions })),
      setIsFinished: (isFinished: boolean) => set(() => ({ isFinished })),
      setDifficulty: (difficulty: QuestionsDifficulty) =>
        set(() => ({ difficulty })),
      setQuestionsAmmount: (ammount: number) => set(() => ({ ammount })),
      increaseCorrectCount: () =>
        set((state) => ({
          correctCount: state.correctCount + 1,
        })),
      increaseActualCount: () =>
        set((state) => ({
          actualCount: state.actualCount + 1,
        })),
      resetCounts: () => set(() => ({ correctCount: 0, actualCount: 1 })),
    }),
    {
      name: "questions",
      partialize: (state) => ({
        questions: state.questions,
        difficulty: state.difficulty,
        ammout: state.ammount,
        isFinished: state.isFinished,
      }),
    }
  )
);
