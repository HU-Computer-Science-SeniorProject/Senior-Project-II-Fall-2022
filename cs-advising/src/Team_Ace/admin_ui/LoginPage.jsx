import { useState } from "react";
import { useNavigate } from "react-router";
import { Header } from "../components/Header";

export function LoginPage() {
  const navigate = useNavigate();

  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
  let adminView = () => {
    navigate("/admin");
  };

  let studentView = () => {
    navigate("/home");
  };
  return (
    <div className="logi">
      <Header
        showExtra={false}
        headerLabel="Computer Science Advising"
      ></Header>
      <div className="gh_body">
        <div className="pt-form">
          <div className="main_gh_title">Login</div>

          <input
            type="email"
            placeholder="Howard Email Address"
            onChange={(e) => {
              setLoginInfo({ email: e.target.value, ...loginInfo });
            }}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setLoginInfo({ password: e.target.value, ...loginInfo });
            }}
          />
          <input type="submit" onClick={studentView} value="Student Login" />
          <input
            type="submit"
            onClick={adminView}
            value="Administrator Login"
          />
        </div>
      </div>
    </div>
  );
}
