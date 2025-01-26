import { useNavigate } from "react-router";
import { Button } from "../components/Button";
import { useStore } from "../store";

export function Score() {
  const navigate = useNavigate();
  const { correctCount, resetStore: resetCounts } = useStore();

  const handleGenerateNewQuestionsClick = () => {
    resetCounts();
    console.log("generate");
  };
  const handleBackToHomeClick = () => {
    resetCounts();
    navigate("/");
  };

  return (
    <div className="min-h-svh flex flex-col items-center justify-center">
      <h1 className="font-medium text-[2.5rem]">
        Você acertou {correctCount}/5 🎉
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
