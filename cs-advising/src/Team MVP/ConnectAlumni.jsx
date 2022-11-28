import { Header } from "../Team_Ace/components/Header";
import { Footer } from "../Team_Ace/components/Footer";
import "./ConnectAlumni.css";
export default ConnectAlumni;


export function ConnectAlumni() {
  return (
    <div className="App">
      <div className="gh">
          <Header />
          <section>
            <div className="background_img">
              <h3>Want to Stay Connected?</h3>
              <p className="paragraph_title"> Browse below on how to stay connected with fellow CEA alumni and staff.</p>
            </div>
          </section>
          <section>
            <p className="paragraph_linkedin">Connect with Harry Keeling
            <br></br>
            <br></br>
            <a href="https://www.linkedin.com/in/harry-keeling-235b1918/"><button className="button_linkedin" onclick="https://www.linkedin.com/in/harry-keeling-235b1918/">Click Here</button></a>
            </p>
            
          </section>
          <Footer />
        </div>
    
    </div>

  );
}