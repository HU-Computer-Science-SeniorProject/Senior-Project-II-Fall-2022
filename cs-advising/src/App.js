import "./App.css";
import { Home } from "../src/Home";
import { GraduationHome } from "./Team_Ace/@calmdaysamuel/GraduationHome";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GraduationApplication } from "./Team_Ace/@calmdaysamuel/GraduationApplication";
import { MatriculationHome } from "./CodeCrew/Components/MatriculationHome";
import { AdvisorMeeting } from "./CodeCrew/Advising/AdvisorMeeting";
import { GraduationProgress } from "./CodeCrew/GraduationProgress/GraduationProgress";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/graduation",
    element: <GraduationHome />,
  },
  {
    path: "/graduation-application",
    element: <GraduationApplication />,
  },
  {
    path: "/matriculation",
    element: <MatriculationHome />,
  },
  {
    path: "/matriculation/graduation-progress",
    element: <GraduationProgress />,
  },
  {
    path: "/matriculation/advisor-meeting",
    element: <AdvisorMeeting />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
