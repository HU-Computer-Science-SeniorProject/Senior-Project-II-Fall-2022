import logo from "./logo.svg";
import "./App.css";
import { GraduationAppliation } from "./Team_Ace/@calmdaysamuel/GraduationApplication";
import { GraduationHome } from "./Team_Ace/@calmdaysamuel/GraduationHome";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GraduationHome />,
  },
  {
    path: "/graduation",
    element: <GraduationHome />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
