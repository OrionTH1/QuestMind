import { useQuestionsStore } from "../store/questionsStore";
import { useSystemStore } from "../store/systemStore";

export function useResetQuestions() {
  const { setQuestions, resetCounts } = useQuestionsStore();
  const { setStudySubject } = useSystemStore();

  return (resetSubject: boolean) => {
    if (resetSubject) setStudySubject("");
    setQuestions([]);
    resetCounts();
  };
}
