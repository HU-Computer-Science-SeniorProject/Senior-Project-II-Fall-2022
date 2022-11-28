import { Header } from "../Team_Ace/components/Header";
import { Footer } from "../Team_Ace/components/Footer";


export function AlumniInfo() {
    let routes = [
        {
          title: "Connect with Alumni",
          route: "/ConnectInfo",
          info: "Click here to connect with Alumni.",
        },
        {
          title: "Career Information",
          route: "/CareerInfo",
          info: "Getting a job post graduate is the prime goal for every student upon graduating. Click here to see the amazing companies Almuni are working at.",
        },
        {
            title: "Alumni Communication and Event Planning",
            route: "/AlumComm",
            info: "If you are an alumni interested in planning an event/ communicating with undergrad students click here.",
          },

      ];

    return (
        <div className="gh">
          <Header />
          <div className="gh_body">
            <div className="main_gh_title">How To Stay Connected !</div>
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


