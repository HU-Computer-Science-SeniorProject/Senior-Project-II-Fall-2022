import { Header } from "../Team_Ace/components/Header";
import { Footer } from "../Team_Ace/components/Footer";
import "./StageThree.css";

export function StageThree(){

    return (
        <div className="gh">
          <Header />
          <div className="gh_body">
            <div className="main_gh_title">Exit Interview</div>
            <a href="https://forms.gle/cj6jc34F92dvv8vs9"><button className="button_interview" onclick="https://forms.gle/cj6jc34F92dvv8vs9">Click Here</button></a>

          </div>
          <Footer />
        </div>
      );
}