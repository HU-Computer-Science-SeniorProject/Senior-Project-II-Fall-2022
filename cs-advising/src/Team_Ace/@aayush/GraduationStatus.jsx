import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { AdvisorView } from "./AdvisorView";
import { StudentView } from "./StudentView";

export function GraduationStatus({ isAdvisor, student }) {
  return (
    <div>
      <Header />
      <StudentView student={student} />
      {/* {isAdvisor && <AdvisorView />}
      {!isAdvisor && student && <StudentView student={student} />} */}
      <Footer />
    </div>
  );
}
