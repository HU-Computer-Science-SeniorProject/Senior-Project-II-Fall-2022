import "./App.css";
import { GraduationHome } from "./Team_Ace/@calmdaysamuel/GraduationHome";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GraduationApplication } from "./Team_Ace/@calmdaysamuel/GraduationApplication";
import { MatriculationHome } from "./CodeCrew/@c-admas18/MatriculationHome";
import { AdvisorMeeting } from "./CodeCrew/@c-admas18/AdvisorMeeting";
import { Home } from "./CodeCrew/@c-admas18/Home";

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
    path: "/matriculation-advisormeeting",
    element: <AdvisorMeeting />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
