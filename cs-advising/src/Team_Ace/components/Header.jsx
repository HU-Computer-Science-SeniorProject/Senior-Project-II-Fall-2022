import "./Header.css";
import Hulogo from '../../CodeCrew/@c-admas18/Hulogo.png'
export function Header() {
  const routes = [
    { title: "Home", link: "/" },
    { title: "Matriculation", link: "/matriculation" },
    {
      title: "Team 2",
      link: "BD",
    },
    {
      title: "Team 4",
      link: "BD",
    },
    {
      title: "Graduation",
      link: "graduation",
    },
  ];
  return (
    <div className="header">
      <div className="header_top">
      <img className="logo_img" src={Hulogo} alt="CS Advising"/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <div className="header_title">Computer Science Advising</div>
        <div className="headaer_login"></div>
      </div>
      <div className="header_bottom">
        {routes.map((route) => {
          return (
            <a href={route.link} className="header_route">
              {route.title}
            </a>
          );
        })}
      </div>
    </div>
  );
}
