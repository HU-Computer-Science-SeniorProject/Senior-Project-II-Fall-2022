import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { AdvisorView } from "../@aayush/AdvisorView";

export function GraduationStatusAdminViewHome() {
  return (
    <div className="gh">
      <Header showExtra={false} headerLabel="CS Advising Admin Panel" />
        <AdvisorView />
      <Footer />
    </div>
  );
}
