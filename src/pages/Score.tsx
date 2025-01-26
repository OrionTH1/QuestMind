import { useNavigate } from "react-router";
import { Button } from "../components/Button";

export function Score() {
  const navigate = useNavigate();

  const handleGenerateNewQuestionsClick = () => {
    console.log("generate");
  };
  const handleBackToHomeClick = () => {
    navigate("/");
  };

  return (
    <div className="min-h-svh flex flex-col items-center justify-center">
      <h1 className="font-medium text-[2.5rem]">Você acertou 4/5 🎉</h1>
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
