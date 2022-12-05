import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function GraduationApplicationAdminViewHome() {
  const vals = [1, 2, 3, 4, 5];
  return (
    <div className="gh">
      <Header showExtra={false} headerLabel="CS Advising Admin Panel" />
      <div className="gh_body">
        <div className="pt-form">
          <div className="main_gh_title">Update Graduation Information</div>

          {vals.map((val) => {
            return (
              <>
                <h4>Section {val}</h4>
                <input type="text" placeholder="Section Title" />
                <textarea
                  rows="15"
                  placeholder="Add information here"
                ></textarea>
              </>
            );
          })}

          <input type="submit" value="Update Information" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
