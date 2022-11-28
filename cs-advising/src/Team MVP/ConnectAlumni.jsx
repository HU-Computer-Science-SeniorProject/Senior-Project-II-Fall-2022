import { Header } from "../Team_Ace/components/Header";
import { Footer } from "../Team_Ace/components/Footer";
export default ConnectAlumni;


export function ConnectAlumni() {
  return (
    <div className="App">
      <div className="gh">
          <Header />
          <div className="gh_body">
            <div className="main_gh_title">Connect With Alumni!</div>
            <h3>Harry Keeling Linkden</h3>
            <iframe src="https://www.linkedin.com/in/harry-keeling-235b1918/" height="200" width="300" title="Harry Keeling LinkedIn"></iframe>
          </div>
          <Footer />
        </div>
    
    </div>

  );
}