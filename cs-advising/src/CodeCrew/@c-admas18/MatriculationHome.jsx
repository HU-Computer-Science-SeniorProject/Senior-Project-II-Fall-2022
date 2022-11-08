import { Header } from "../../Team_Ace/components/Header";
import { Footer } from "../../Team_Ace/components/Footer";
import "./MatriculationHome.css";
export function MatriculationHome() {
  const routes = [
    { title: "Schedule Advisor Meeting", link: "/matriculation-advisormeeting" },
  ];
  return (
    <div className="gh">
      <Header />
      <div className="gh_body">
        <div className="main_gh_title">Matriculation Information</div>
         <div className="grad_home_routes ">
        {routes.map((route) => {
          return (
            <a href={route.link} className="grad_routes">
              {route.title}
            </a>
          );
        })}
      </div>
      </div>
      <Footer />
    </div>
  );
}