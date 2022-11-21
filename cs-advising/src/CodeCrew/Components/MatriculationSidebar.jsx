import "./MatriculationHome.css";

export function MatriculationSidebar() {
    const registration_routes = [
        { title: "Pin Distribution", link: "/matriculation-pin" },
        { title: "Error Resolution", link: "/matriculation/error-resolution" },
        { title: "Graduation Progress Spreadsheet", link: "/matriculation/graduation-progress" },
    ];

    const advising_routes = [
        { title: "Schedule Advisor Meeting", link: "/matriculation/advisor-meeting" },
    ];

    return (
        <div className="gh">
            <div class="sidenav">
                <div class="sidenav-parent"></div>
                <ul>
                    <li>Registration Processing</li>
                    <ul>
                        {registration_routes.map((route) => {
                            return (
                                <div><a href={route.link}>
                                    {route.title}
                                </a></div>
                            );
                        })}
                    </ul>
                    <li>Advising</li>
                    <ul>
                        {advising_routes.map((route) => {
                            return (
                                <div><a href={route.link}>
                                    {route.title}
                                </a></div>
                            );
                        })}
                    </ul>
                </ul>
            </div>
        </div>
    );
}