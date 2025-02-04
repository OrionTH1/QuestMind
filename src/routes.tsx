import { Route, Routes as MyRoutes } from "react-router";
import { Home } from "./pages/Home";
import { Questions } from "./pages/Questions";
import { Score } from "./pages/Score";
import { IsQuestionExists } from "./components/IsQuestionExists";
import { IsQuestionsFinished } from "./components/IsQuestionsFinished";

export function Routes() {
  return (
    <MyRoutes>
      <Route path="/" element={<Home />} />

      <Route element={<IsQuestionExists />}>
        <Route path="/questions" element={<Questions />} />
      </Route>
      <Route element={<IsQuestionsFinished />}>
        <Route path="/questions/finished" element={<Score />} />
      </Route>
    </MyRoutes>
  );
}
