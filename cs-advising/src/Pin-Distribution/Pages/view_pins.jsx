import { Header } from "../../Team_Ace/components/Header";
import { Footer } from "../../Team_Ace/components/Footer";
import "../Styles/view-pins.css";
import "../../CodeCrew/Components/MatriculationHome.css";
/**import "./MatriculationHome.css";**/
export function PinView() {
  return (
    <div className="gh">
        <Header />
        <div className="container">
            <div className="menu-placeholder">
                <p>*side menu placeholder</p>
            </div>
            <div className="instruction-container">
                <h1>Pin Distribution</h1>
                <div className="pin-table">
                    <p>*table placeholder*</p>
                </div>
                <div className="nav-buttons">
                    <a id="button" href="/matriculation">MATRICULATION HOME</a>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  );
}