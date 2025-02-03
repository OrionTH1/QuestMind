import { create } from "zustand";
import type { Questions } from "./api";

export type Languages = "portuguese" | "english";
export type QuestionsDifficulty = "easy" | "normal" | "hard";
export type Themes = "light" | "dark";

interface SystemStore {
  language: Languages;
  theme: Themes;
  studySubject?: string;
  setLanguage: (language: Languages) => void;
  setTheme: (theme: Themes) => void;
  setStudySubject: (subject: string) => void;
}

interface QuestionsStore {
  difficulty: QuestionsDifficulty;
  ammount: number;
  actualCount: number;
  correctCount: number;
  questions: Questions;

  setDifficulty: (difficulty: QuestionsDifficulty) => void;
  setQuestions: (questions: Questions) => void;
  setQuestionsAmmount: (ammout: number) => void;
  increaseCorrectCount: () => void;
  increaseActualCount: () => void;
  resetCounts: () => void;
}

export const useQuestionsStore = create<QuestionsStore>()((set) => ({
  questions: [],
  ammount: 4,
  difficulty: "normal",
  actualCount: 1,
  correctCount: 0,
  setQuestions: (questions: Questions) => set(() => ({ questions })),
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
}));

export const useSystemStore = create<SystemStore>()((set) => ({
  language: "english",
  theme: "light",
  setLanguage: (language: Languages) =>
    set(() => ({
      language,
    })),
  setTheme: (theme: Themes) => set(() => ({ theme })),
  setStudySubject: (subject: string) => set(() => ({ studySubject: subject })),
}));
