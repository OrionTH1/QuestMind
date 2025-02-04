import { create } from "zustand";
import { Languages, Themes } from "../utils/types";
import { persist } from "zustand/middleware";

interface SystemStore {
  language: Languages;
  theme: Themes;
  studySubject?: string;
  setLanguage: (language: Languages) => void;
  setTheme: (theme: Themes) => void;
  setStudySubject: (subject: string) => void;
}

export const useSystemStore = create<SystemStore>()(
  persist(
    (set) => ({
      language: "english",
      theme: "light",
      setLanguage: (language: Languages) =>
        set(() => ({
          language,
        })),
      setTheme: (theme: Themes) => set(() => ({ theme })),
      setStudySubject: (subject: string) =>
        set(() => ({ studySubject: subject })),
    }),
    { name: "settings" }
  )
);
