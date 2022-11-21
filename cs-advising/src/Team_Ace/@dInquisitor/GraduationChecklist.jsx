import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "./GraduationChecklist.css";

export function GraduationChecklist() {
  const checklistItems = [
    "Ensure you have taken or you are currently taking the last of you 120 credits required for graduation",
    "Meet with your advisor to discuss your eligibility for graduation",
    "Complete the CEA graduation application sent to your Bison email by Assistant Dean for Student Affairs",
    "When approved by CEA for graduation, complete the university's graduation application via BisonWeb",
    "Schedule another meeting with your advisor to confirm that you are on track for graduation",
    "If on any financial holds, contact the Bursar's office to clear your holds",
    "Schedule your exit interview with your Academic Advisor",
  ];
  return (
    <div>
      <Header />
      <div className="page-body">
        <h2 className="if">
          Ensure checklist is completed to be eligible to graduate
        </h2>
        <div className="checklist">
          {checklistItems.map((item, idx) => (
            <label class="container" key={idx}>
              {item}
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
