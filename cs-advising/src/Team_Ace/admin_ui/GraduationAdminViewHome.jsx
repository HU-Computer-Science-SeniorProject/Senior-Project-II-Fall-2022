import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "./GraduationHome.css";
export function GraduationAdminViewHome() {
  let routes = [
    {
      title: "View Students Graduation Status",
      route: "/admin/graduation/graduation-status",
      info: "View students graduation status and completed courses",
    },
    // {
    //   title: "View Part Time Student Applications",
    //   route: "/admin/graduation/graduation-part-time",
    //   info: "View part time student applications and update application form",
    // },
    {
      title: "Confirm Students Are Cleared For Graduation",
      route: "/admin/graduation/graduation-checlist",
      info: "View students who are cleared for graduation",
    },
    {
      title: "Update Graduation Application Intructions",
      route: "/admin/graduation/graduation-application",
      info: "Update graduation informations and application forms",
    },
  ];

  return (
    <div className="gh">
      <Header showExtra={false} headerLabel="CS Advising Admin Panel" />
      <div className="gh_body">
        <div className="main_gh_title">Graduation Admin Panel</div>
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
