import { Header } from "../../Team_Ace/components/Header";
import { Footer } from "../../Team_Ace/components/Footer";
import { MatriculationSidebar } from "./MatriculationSidebar";
import "./MatriculationHome.css";

export function MatriculationHome() {
    return (
        <div>
            <div className="gh">
                <Header />
                <MatriculationSidebar />
                <div className="gh_body">
                    <div className="main_gh_title">Matriculation</div>
                    <div>
                        <header>
                            <h2>Home</h2>
                        </header>
                        <body> 
                            <p><br></br>
                                Explanation for how you keep track of your matriculation:
                                Here's what each tab is for...
                            </p>
                        </body>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}