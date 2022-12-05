import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { faker } from "@faker-js/faker";

export function GraduationClearanceAdminViewHome() {
  const students = new Array(30).fill(0);
  return (
    <div className="gh">
      <Header showExtra={false} headerLabel="CS Advising Admin Panel" />
      <div className="gh_body">
        <div className="main_gh_title">Students Clearance Status</div>
        <table className="students">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Clearance Status</th>
            <th>Expected Graduation Date</th>
          </tr>
          {students.map((val) => {
            return (
              <tr>
                <td></td>
                <td>{faker.name.fullName()}</td>
                <td>{faker.internet.email()}</td>
                <td>uncleared</td>
                <td>May 2023</td>
              </tr>
            );
          })}
        </table>
      </div>
      <Footer />
    </div>
  );
}
