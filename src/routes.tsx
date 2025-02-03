import { Route, Routes as MyRoutes } from "react-router";
import { Home } from "./pages/Home";
import { Questions } from "./pages/Questions";
import { Score } from "./pages/Score";

export function Routes() {
  return (
    <MyRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/questions" element={<Questions />} />
      <Route path="/questions/finished" element={<Score />} />
    </MyRoutes>
  );
}
