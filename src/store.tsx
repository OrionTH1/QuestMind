import { create } from "zustand";
import type { Questions } from "./api";

interface StoreType {
  correctCount: number;
  questionCount: number;
  questions: Questions;
  setQuestions: (questions: Questions) => void;
  increaseCorrectCount: () => void;
  increaseQuestionCount: () => void;
  resetStore: () => void;
}

export const useStore = create<StoreType>()((set) => ({
  correctCount: 0,
  questionCount: 1,
  questions: [],
  setQuestions: (questions: Questions) => set(() => ({ questions })),
  increaseCorrectCount: () =>
    set((state) => ({
      correctCount: state.correctCount + 1,
    })),
  increaseQuestionCount: () =>
    set((state) => ({
      questionCount: state.questionCount + 1,
    })),
  resetStore: () => set(() => ({ correctCount: 0, questionCount: 1 })),
}));
