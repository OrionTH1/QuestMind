import { Navigate, Outlet } from "react-router";
import { useQuestionsStore } from "../store/questionsStore";

export function IsQuestionsFinished() {
  const { isFinished } = useQuestionsStore();
  return isFinished ? <Outlet /> : <Navigate to={"/questions"} />;
}
