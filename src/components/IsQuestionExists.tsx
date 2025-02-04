import { Navigate, Outlet } from "react-router";
import { useQuestionsStore } from "../store/questionsStore";

export function IsQuestionExists() {
  const { questions } = useQuestionsStore();

  return questions.length > 0 ? <Outlet /> : <Navigate to={"/"} />;
}
