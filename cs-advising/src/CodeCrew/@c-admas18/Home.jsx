import { Header } from "../../Team_Ace/components/Header";
import { Footer } from "../../Team_Ace/components/Footer";
import HUBand from "./HUBand.jpeg";
import "./Home.css";
export function Home() {
  let routes = [
    {
      title: "Fill out post graduation survey",
      route: "/graduation-status",
      info: "",
    },
    {
      title: "View your course checklist",
      route: "/graduation-part-time",
      info: "",
    },
    {
      title: "Frequently Asked Freshman Questions",
      route: "/graduation-checlist",
      info: "",
    },
    {
      title: "Learn how to Apply for Graduation",
      route: "/graduation-application",
      info: "Apply for graduation and learn about graduation requirements",
    },
  ];
  return (
    <div className="gh">
      <Header />
      <div className="gqqh_body">
        <img
          className="main_img"
          src="https://studentaffairs.howard.edu/sites/studentaffairs.howard.edu/files/styles/hc_hero_image/public/2021-07/Screen%20Shot%202021-07-29%20at%209.49.46%20AM.png?h=816a1af4&amp;itok=_daCqP0-https://studentaffairs.howard.edu/sites/studentaffairs.howard.edu/files/styles/hc_hero_image/public/2021-07/Screen%20Shot%202021-07-29%20at%209.49.46%20AM.png?h=816a1af4&amp;itok=_daCqP0-"
          alt="CS Advising"
        />

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
