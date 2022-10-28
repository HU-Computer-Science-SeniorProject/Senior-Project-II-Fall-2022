import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "./GraduationHome.css";
export function GraduationHome() {
  let routes = [
    { title: "Graduation Status" },
    { title: "Part-time Student Registration" },
    { title: "Graduation Clearance" },
    { title: "Graduation Application" },
  ];
  return (
    <div className="gh">
      <Header />
      <div className="gh_body">
        <div className="main_gh_title">Graduation Information</div>
        <div className="grad_home_routes">
          {routes.map((route) => {
            return <div className="grad_routes">{route.title}</div>;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
