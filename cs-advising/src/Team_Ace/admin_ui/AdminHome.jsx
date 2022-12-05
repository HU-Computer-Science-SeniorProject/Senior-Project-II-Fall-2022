import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function AdminHome() {
  let routes = [
    {
      title: "Update Graduation Instructions",
      route: "/admin/graduation",
      info: "View and update student's graduation information and status. Update graduation status",
    },
    {
      title: "Team 1",
      route: "/graduation-part-time",
      info: "",
    },
    {
      title: "Team 2",
      route: "/graduation-checlist",
      info: "",
    },
    {
      title: "Team 3",
      route: "/graduation-application",
      info: "",
    },
  ];
  return (
    <div className="gh">
      <Header showExtra={false} headerLabel="CS Advising Admin Panel" />
      <div className="gh_body">
        <div className="main_gh_title">Admin Panel</div>
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
