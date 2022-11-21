import { Header } from "../../Team_Ace/components/Header";
import { Footer } from "../../Team_Ace/components/Footer";
import { MatriculationSidebar } from "../../CodeCrew/Components/MatriculationSidebar";
import "../Styles/pin-index.css";
import "../../CodeCrew/Components/MatriculationHome.css";
/**import "./MatriculationHome.css";**/
export function PinIndex() {
  return (
    <div className="gh">
        <Header />
        <MatriculationSidebar />
        <div className="gh_body">
        <div className="container">
            <div className="instruction-container">
                <div className="main_gh_title">Pin Distribution</div>
                <div className="instructions">
                    <ul>
                        <li>Please only request a new pin after meeting with your advisor</li>
                        <li>Your advisor will then approve or decline your request based on your progress in the registration process</li>
                    </ul>
                </div>
                <div className="nav-buttons">
                    <a id="button" href="/matriculation-pin-request-confirmation">REQUEST PIN</a>
                    <a id="button" href="/matriculation-pin-view-pins">VIEW MY PINS</a>
                </div>
            </div>
            </div>
        </div>
        <Footer />
    </div>
  );
}