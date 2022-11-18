import { Header } from "../../Team_Ace/components/Header";
import { Footer } from "../../Team_Ace/components/Footer";
import "../Styles/confirmation.css";
import "../../CodeCrew/@c-admas18/MatriculationHome.css";
/**import "./MatriculationHome.css";**/
export function PinRequestConfirmation() {
  return (
    <div className="gh">
        <Header />
        <div className="container">
            <div className="menu-placeholder">
                <p>*side menu placeholder</p>
            </div>
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
        <Footer />
    </div>
  );
}