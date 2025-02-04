import { useNavigate } from "react-router";
import { Button } from "../components/Button";
import { createQuestion } from "../api";
import { useState } from "react";
import { Loading } from "../components/Loading";
import { useResetQuestions } from "../utils/resetQuestions";
import { useSystemStore } from "../store/systemStore";
import { useQuestionsStore } from "../store/questionsStore";

export function Score() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const {
    questions,
    correctCount,
    difficulty,
    ammount,
    setQuestions,
    setIsFinished,
  } = useQuestionsStore();
  const { language, studySubject } = useSystemStore();
  const resetQuestions = useResetQuestions();

  const handleGenerateNewQuestionsClick = async () => {
    if (!studySubject) return;
    setIsLoading(true);
    resetQuestions(false);

    const newQuestions = await createQuestion(
      studySubject,
      difficulty,
      ammount,
      language
    );
    setQuestions(newQuestions);

    setIsLoading(false);
    setIsFinished(false);
    navigate("/questions");
  };
  const handleBackToHomeClick = () => {
    resetQuestions(true);
    navigate("/");
  };

  return isLoading ? (
    <Loading />
  ) : (
    <div className="min-h-svh flex flex-col items-center justify-center">
      <h1 className="font-medium text-[2.5rem]">
        Você acertou {correctCount}/{questions.length} 🎉
      </h1>
      <div className="flex gap-x-6">
        <Button
          text="Gerar mais questões"
          variant="outline"
          type="button"
          onClick={handleGenerateNewQuestionsClick}
        />

        <Button
          text="Voltar ao início"
          variant="fill"
          type="button"
          onClick={handleBackToHomeClick}
        />
      </div>
    </div>
  );
}
