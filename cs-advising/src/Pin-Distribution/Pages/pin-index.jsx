import { Header } from "../../Team_Ace/components/Header";
import { Footer } from "../../Team_Ace/components/Footer";
import "../Styles/pin-index.css";
import "../../CodeCrew/@c-admas18/MatriculationHome.css";
/**import "./MatriculationHome.css";**/
export function PinIndex() {
  return (
    <div className="gh">
        <Header />
        <div className="container">
            <div className="menu-placeholder">
                <p>*side menu placeholder</p>
            </div>
            <div className="instruction-container">
                <h1>Pin Distribution</h1>
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
        <Footer />
    </div>
  );
}