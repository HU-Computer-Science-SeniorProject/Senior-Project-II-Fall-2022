import { Header } from "../../Team_Ace/components/Header";
import { Footer } from "../../Team_Ace/components/Footer";
import { MatriculationSidebar } from "../../CodeCrew/Components/MatriculationSidebar";

import "../Styles/confirmation.css";
import "../../CodeCrew/Components/MatriculationHome.css";
/**import "./MatriculationHome.css";**/
export function PinRequestConfirmation() {
  return (
    <div className="gh">
          <Header />
          <MatriculationSidebar />
          <div className="gh_body">
        <div className="container">
            <div className="instruction-container">
                <h1>Pin Distribution</h1>
                <div className="confirmation">
                    <p>You’ve succesfuly requested your pin!</p>
                    <p>Once approved, you’ll get a notification to check the View My Pins page.</p>
                </div>
                <div className="nav-buttons">
                    <a id="button" href="/matriculation">MATRICULATION HOME</a>
                    <a id="button" href="/matriculation-pin-view-pins">VIEW MY PINS</a>
                </div>
            </div>
              </div>
              </div>
        <Footer />
    </div>
  );
}