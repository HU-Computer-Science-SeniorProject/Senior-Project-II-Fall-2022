import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "./GraduationApplication.css";

export function GraduationApplication() {
  return (
    <div>
      <Header />
      <div className="content">
        <div className="subtitle">Complete the CEA Graduation Application</div>
        <div className="info">
          Application is available now through November 4, 2022. You must submit
          the CEA Graduation Application and receive an approval notification
          from the CEA Office of Student Services (OSS) before you can advance
          to the next step. The CEA Graduation Application is available here.
          <a className="aa" href="https://forms.office.com/r/rXSS9xFb9E">
            CEA Graduation Forms
          </a>
        </div>

        <div className="subtitle">
          Complete the University’s Graduation Application via Bison Web
        </div>
        <div className="info">
          The University’s Graduation Application is available now through
          November 11, 2022. Be sure the information you provide on the
          University’s Graduation Application is consistent with the information
          you provide on the CEA Graduation Application. Please note you will be
          unable to access the University’s Graduation Application until you
          have been cleared by CEA OSS. Completion and approval of the CEA
          Graduation Application and the University’s Graduation Application
          will get your name added to the official prospective graduate list for
          Fall 2022. The prospective graduate list will be shared with your
          department chair, program director, and academic advisor to initiate
          the academic clearance process.
          <a className="aa" href="https://howard.edu/registrar/graduation">
            More details instructions here
          </a>
        </div>

        <div className="subtitle">Meet with your academic advisor</div>
        <div className="info">
          I trust that all of you have been meeting with your major academic
          advisor, regularly! Nonetheless, it bears mentioning that you need to
          meet with your academic advisor ASAP to review your academic record
          and prepare your check sheet to ensure you are on track to receive
          academic clearance by the end of the Fall 2022 semester. Prospective
          graduates must satisfy all degree and other academic requirements,
          including completion of required coursework, minimum cumulative (2.0)
          and major (2.0) GPAs, and maximum number of credits of “D” grades (no
          more than 1/6th of the total credit hours required in the academic
          scheme for your degree program), to receive academic clearance. Your
          check sheet will be presented to the faculty in your department, and
          the faculty will vote to academically clear you to receive your
          degree.
        </div>
        <div className="subtitle"> Obtain financial clearance</div>
        <div className="info">
          You must be cleared of all financial obligations to the University
          before you can receive your diploma. Financial obligations include
          tuition and fee balances, graduation fee, outstanding library,
          residence life, and parking fees, and financial aid exit interview.
          Additionally, you are expected to return borrowed equipment, including
          laptops issued by your department. Contact the Office of the Bursar to
          settle your account.
        </div>
      </div>
      <Footer />
    </div>
  );
}
