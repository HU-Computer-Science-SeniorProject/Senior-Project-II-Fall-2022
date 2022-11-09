import { Routes, Route, useNavigate } from 'react-router-dom';
import "./matriculation.css";


export default function matriculation() {

    const navigate = useNavigate();

    const submitAdvAppr = () => {
        navigate('/advisorApproval');
    };

    return (
        <div>
            <header>
                <h1>Matriculation</h1>
                <h2>Home</h2>
                <p>
                    Explanation for how you keep track of your matriculation:
                    Here’s what each tab is for...
                </p>
            </header>
            <body>
                <label class="toggle-btn" for="sidebar-toggle">click me</label>
                <input id="sidebar-toggle" type="checkbox" />
                <aside>
                    <div>
                        <nav>
                            <ul>
                                <li>Registration</li>
                            </ul>
                            <ul>
                                <li>Processing</li>
                                <li>Pin Distribution</li>
                                <li>Error Resolution</li>
                                <li>Graduation Processing</li>
                            </ul>

                            <ul>
                                <li>Advising</li>
                            </ul>
                            <ul>
                                <li>Schedule a Meeting</li>
                                <li>Contact Your Advisor</li>
                            </ul>
                        </nav>
                    </div>
                </aside>
            </body>
        </div>
    );
}