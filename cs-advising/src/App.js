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
import {withAuthenticator} from "@aws-amplify/ui-react";

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

function App({signOut, user}) {
  return (
      <div className="App">
        {user.attributes.email} <button onClick={signOut}>Sign out</button>
        <RouterProvider router={router} />;
      </div>
)
}

export default withAuthenticator(App, {
  socialProviders: ["google"]
});




