import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { StudentView } from "./StudentView";

export function GraduationStatus({ isAdvisor, student }) {
  return (
    <div>
      <Header />
      <StudentView student={student} />
      <Footer />
    </div>
  );
}
