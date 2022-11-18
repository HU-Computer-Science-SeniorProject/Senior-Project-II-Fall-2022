import { Header } from "../../Team_Ace/components/Header";
import { Footer } from "../../Team_Ace/components/Footer";
import "./MatriculationHome.css";

export function MatriculationHome() {
    const registration_routes = [
        { title: "Processing", link: "/matriculation/processing" },
        { title: "Pin Distribution", link: "/matriculation-pin" },
        { title: "Error Resolution", link: "/matriculation/error-resolution" },
        { title: "Graduation Progress", link: "/matriculation/graduation-progress" },
    ];

    const advising_routes = [
        { title: "ContactAdvisor", link: "/contact-advisor" },
        { title: "Schedule Advisor Meeting", link: "/matriculation/advisor-meeting" },
    ];

    return (
    <div className="gh">
        <Header />
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

            <div class="sidenav">
                <div class="sidenav-parent"></div>
                <ul>
                    <li>Registration</li>
                    <ul>
                        {registration_routes.map((route) => {
                            return (
                                <div><a href={route.link}>
                                    {route.title}
                                </a></div>
                            );
                        })}
                    </ul>
                    <li>Advising</li>
                    <ul>
                        {advising_routes.map((route) => {
                            return (
                                <div><a href={route.link}>
                                    {route.title}
                                </a></div>
                            );
                        })}
                    </ul>
                </ul>
            </div>
        </div>
        <Footer />
    </div>
    );
}