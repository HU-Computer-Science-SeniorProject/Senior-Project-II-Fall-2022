import { Header } from "../../Team_Ace/components/Header";
import { Footer } from "../../Team_Ace/components/Footer";
import "../../CodeCrew/Components/MatriculationHome.css";

export function AdvisorMeeting() {
  return (
    <div className="gh">
      <Header />
      <div className="gh_body">
        <div className="matric_title">Schedule Advisor Meeting</div>
         <div className="matric_body"> Please find your advisor based on the first letter of your LAST name and click on their name to make an appointment</div>
         <div className="advisor_links_routes"><p>A-B&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<a href="mailto:jli@howard.edu">Dr. Jiang Li</a></p></div>
         <div className="advisor_links_routes"><p>C-F&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<a href="https://calendly.com/professorblackstone/15min?month=2022-10">Dr. Jeremy Blackstone</a></p></div>
         <div className="advisor_links_routes"><p>G-J&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<a href="https://outlook.office365.com/owa/calendar/Advising1%40howardu.onmicrosoft.com/bookings/">Dr. Noha Hazzazi</a></p></div>
         <div className="advisor_links_routes"><p>K-N&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&nbsp;<a href="mailto:chuLiu@howard.edu">Dr. Chunmei Liu</a></p></div>
         <div className="advisor_links_routes"><p>O-Q&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&nbsp;<a href="mailto:gloria.washington@howard.edu">Dr. Gloria Washington</a></p></div>
         <div className="advisor_links_routes"><p>R-Z&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<a href="https://calendly.com/hkeeling/10-minute-meeting-clone?month=2022-11">Dr. Harry Keeling</a></p></div>
         <div className="advisor_links_routes"><p>Tech Exchange&emsp;&emsp;<a href="mailto:blegand@scs.howard.edu">Dr. Legand Burge</a></p></div>
    </div>
      <Footer />
    </div>
  );
}
