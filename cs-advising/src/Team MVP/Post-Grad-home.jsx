import { Header } from "../Team_Ace/components/Header";
import { Footer } from "../Team_Ace/components/Footer";
import "./Post-Grad-home.css";

export function PostGraduateHome() {
  let routes = [
    {
      title: "Exit Interview",
      route: "/exitinterview",
      info: "Click here to fill out a post graduate interview where you can reflect on your undergraduate experience!",
    },
    {
      title: "Alumni Information",
      route: "/AlumniInfo",
      info: "Howard Unverisity computer science department honors alumni involvment communication click here to find ways to stay connected!",
    },
  ];
  return (
    <div className="gh">
      <Header />
      <div className="gh_body">
        <div className="main_gh_title">Post Graduate Information</div>
        <div className="post_grad_routes">
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
