import { Routes, Route, useNavigate } from 'react-router-dom';
import "./matriculation.css";


export default function matriculation() {

    const navigate = useNavigate();

    const submitAdvAppr = () => {
        navigate('/advisorApproval');
    };

    const RegistrationNav = () => {
        navigate('/Registration');
    }

    const ProcessingNav = () => {
        navigate('/Processing');
    }

    const PinDistributionNav = () => {
        navigate('/PinDistribution');
    }

    const ErrorResolutionNav = () => {
        navigate('/ErrorResolution');
    }

    const GraduationProcessingNav = () => {
        navigate('/GraduationProcessing');
    }

    const AdvisingNav = () => {
        navigate('/Advising');
    }

    const ScheduleMeetingNav = () => {
        navigate('/ScheduleMeeting');
    }

    const ContactAdvisorNav = () => {
        navigate('/ContactAdvisor');
    }

    return (
        <div>
            <header>
                <h1>Matriculation</h1>
                <h2>Home</h2>
                
            </header>
            <body> <!--Matriculation Tab Menu-->
                <label class="toggle-btn" for="sidebar-toggle">click me</label>
                <input id="sidebar-toggle" type="checkbox" />
                <aside>
                    <div>
                        <nav>
                            <ul>
                                <li onClick={RegistrationNav}>Registration</li>
                            </ul>
                            <ul>
                                <li onClick={ProcessingNav}>Processing</li>
                                <li onClick={PinDistributionNav}>Pin Distribution</li>
                                <li onClick={ErrorResolutionNav}>Error Resolution</li>
                                <li onClick={GraduationProcessingNav}>Graduation Processing</li>
                            </ul>

                            <ul>
                                <li onClick={AdvisingNav}>Advising</li>
                            </ul>
                            <ul>
                                <li onClick={ScheduleMeetingNav}>Schedule a Meeting</li>
                                <li onClick={ContactAdvisorNav}>Contact Your Advisor</li>
                            </ul>
                        </nav>
                        <Routes>
                            <Route path="/Registration" element="{<RegistrationNav/>}"></Route>
                            <Route path="/Processing" element="{<ProcessingNav/>}"></Route>
                            <Route path="/PinDistribution" element="{<PinDistributionNav/>}"></Route>
                            <Route path="/ErrorResolution" element="{<ErrorResolutionNav/>}"></Route>
                            <Route path="/GraduationProgressing" element="{<GraduationProgressingNav/>}"></Route>
                            <Route path="/Advising" element="{<AdvisingNav/>}"></Route>
                            <Route path="/ScheduleMeeting" element="{<ScheduleMeetingNav/>}"></Route>
                            <Route path="/ContactAdvisor" element="{<ContactAdvisorNav/>}"></Route>
                        </Routes>
                    </div>
                </aside>

                <p>
                    Explanation for how you keep track of your matriculation:
                    Here’s what each tab is for...
                </p>
            </body>
        </div>
    );
}