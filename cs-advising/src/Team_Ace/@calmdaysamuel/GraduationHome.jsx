import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "./GraduationHome.css";
export function GraduationHome() {
  let routes = [
    {
      title: "Graduation Status",
      route: "/graduation-status",
      info: "View the status of your graduation application",
    },
    {
      title: "Part-time Student Registration",
      route: "/graduation-part-time",
      info: "Register to be a part time student",
    },
    {
      title: "Graduation Clearance",
      route: "/graduation-checlist",
      info: "Keep track of your graduation tasks",
    },
    {
      title: "Graduation Application",
      route: "/graduation-application",
      info: "Apply for graduation and learn about graduation requirements",
    },
  ];
  return (
    <div className="gh">
      <Header />
      <div className="gh_body">
        <div className="main_gh_title">Graduation Information</div>
        <div className="grad_home_routes">
          {routes.map((route) => {
            return (
              <div>
                <a className="ghr" href={route.route}>
                  {route.title}

                  <div className="ghri">{route.info}</div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
