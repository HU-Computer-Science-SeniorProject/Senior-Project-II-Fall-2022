import "./App.css";
import { GraduationHome } from "./Team_Ace/@calmdaysamuel/GraduationHome";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GraduationApplication } from "./Team_Ace/@calmdaysamuel/GraduationApplication";
import { GraduationChecklist } from "./Team_Ace/@dInquisitor/GraduationChecklist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GraduationHome />,
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
    path: "/graduation-checklist",
    element: <GraduationChecklist />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
