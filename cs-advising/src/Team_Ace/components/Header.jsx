import "./Header.css";

export function Header() {
  const routes = [
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
        <div className="howard_logo"></div>
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
