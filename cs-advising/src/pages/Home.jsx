import { Header } from "./Team_Ace/components/Header";
import { Footer } from "./Team_Ace/components/Footer";
import HUBand from './HUBand.jpeg'
import "./Home.css";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

// export function Home() {
const Home = () => {
  return (
      <Authenticator>
          {({ signOut }) => (
              <div>
                  <div className="gh">
                      <Header />
                      <div className="gh_body">
                          <img className="main_img" src={HUBand} alt="CS Advising"/>
                          <div className="matric_title">WELCOME</div>
                          <p className="home_body">Here's how the site works...</p>
                      </div>
                      <Footer />
                  </div>
              </div>
          )}
      </Authenticator>
  );
}
