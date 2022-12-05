import "./App.css";
import { GraduationHome } from "./Team_Ace/@calmdaysamuel/GraduationHome";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GraduationApplication } from "./Team_Ace/@calmdaysamuel/GraduationApplication";
import { MatriculationHome } from "./CodeCrew/@c-admas18/MatriculationHome";
import { AdvisorMeeting } from "./CodeCrew/@c-admas18/AdvisorMeeting";
import { Home } from "./CodeCrew/@c-admas18/Home";
import { PinIndex } from "./Pin-Distribution/Pages/pin-index";
import { PinRequestConfirmation } from "./Pin-Distribution/Pages/confirmation";
import { PinView } from "./Pin-Distribution/Pages/view_pins";
import { GraduationChecklist } from "./Team_Ace/@dInquisitor/GraduationChecklist";
import { PartTimeRegistration } from "./Team_Ace/@RainbowMan1(nikesh)/PartTimeRegistration";
import { GraduationStatus } from "./Team_Ace/@aayush/GraduationStatus";
import { GraduationAdminViewHome } from "./Team_Ace/admin_ui/GraduationAdminViewHome";
import { GraduationClearanceAdminViewHome } from "./Team_Ace/admin_ui/GraduationClearanceAdminView";
import { GraduationApplicationAdminViewHome } from "./Team_Ace/admin_ui/GraduationApplicationAdminView";
import { GraduationStatusAdminViewHome } from "./Team_Ace/admin_ui/GraduationStatusAdminView";
import { PartTimeApplicationAdminViewHome } from "./Team_Ace/admin_ui/PartTimeApplicationAdminView";
import { AdminHome } from "./Team_Ace/admin_ui/AdminHome";
import { LoginPage } from "./Team_Ace/admin_ui/LoginPage";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/admin",
    element: <AdminHome />,
  },
  {
    path: "/admin/graduation",
    element: <GraduationAdminViewHome />,
  },
  {
    path: "/admin/graduation/graduation-checlist",
    element: <GraduationClearanceAdminViewHome />,
  },
  {
    path: "/admin/graduation/graduation-application",
    element: <GraduationApplicationAdminViewHome />,
  },
  {
    path: "/admin/graduation/graduation-status",
    element: <GraduationStatusAdminViewHome />,
  },
  {
    path: "/admin/graduation/graduation-part-time",
    element: <PartTimeApplicationAdminViewHome />,
  },
  {
    path: "/graduation",
    element: <GraduationHome />,
  },
  {
    path: "/graduation-checlist",
    element: <GraduationChecklist />,
  },
  {
    path: "/graduation-application",
    element: <GraduationApplication />,
  },
  {
    path: "/graduation-status",
    element: <GraduationStatus />,
  },
  {
    path: "/graduation-part-time",
    element: <PartTimeRegistration />,
  },
  {
    path: "/matriculation",
    element: <MatriculationHome />,
  },
  {
    path: "/matriculation-advisormeeting",
    element: <AdvisorMeeting />,
  },
  {
    path: "/matriculation-pin",
    element: <PinIndex />,
  },
  {
    path: "/matriculation-pin-request-confirmation",
    element: <PinRequestConfirmation />,
  },
  {
    path: "/matriculation-pin-view-pins",
    element: <PinView />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
