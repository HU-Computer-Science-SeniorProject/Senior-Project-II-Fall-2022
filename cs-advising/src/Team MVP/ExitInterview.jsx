import { Header } from "../Team_Ace/components/Header";
import { Footer } from "../Team_Ace/components/Footer";


export function ExitInterview() {
  let routes = [
      {
        title: "Advisor Interviews",
        route: "/StageOne",
        info: "Click here to get Started with an Interview with your Advisor or Dr. Keeling",
      },
     
      {
        title: "Exit Interview Form",
        route: "/StageThree",
        info: "Click here to complete your exit interview",
      },

];

return (
    <div className="gh">
      <Header />
      <div className="gh_body">
        <div className="main_gh_title">Welcome to the Exit Interview Process!</div>
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
        <section className="info">
        During each interview, please have the three following:\n
        1. Student Transcript
        2. Student Checklist
        3. Student Folder
        </section>
      </div>
      <Footer />
    </div>
  );


    /*
    return (
        <div className="gh">
          <Header />
          <div className="gh_body">
            <div className="main_gh_title">Exit Interview Information</div>
          </div>
          <Footer />
        </div>
      );
      */
}