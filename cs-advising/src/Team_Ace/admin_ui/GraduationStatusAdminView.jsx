import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function GraduationStatusAdminViewHome() {
  return (
    <div className="gh">
      <Header showExtra={false} headerLabel="CS Advising Admin Panel" />
      <div className="gh_body">
        <div className="main_gh_title">Graduation Status</div>
      </div>
      <Footer />
    </div>
  );
}
