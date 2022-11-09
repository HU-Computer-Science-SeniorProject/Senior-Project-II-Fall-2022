import { Routes, Route, useNavigate } from 'react-router-dom';
import "./graduationProgress.css";


export default function graduationChecklistHeader() {
    const navigate = useNavigate();

    const submitAdvAppr = () => {
        navigate('/advisorApproval');
    };

    const submitAdvRej = () => {
        navigate('/advisorRejection');
    };

    const stuSubmit = () => {
        navigate('/studentSubmission');
    };


    return (
        <header>
            <p id="header-title">
                Graduation Progress
                <button type="button" id="adv-approve-btn" onClick={submitAdvAppr}>Approve</button>
                <button type="button" id="adv-reject-btn" onClick={submitAdvRej}>Reject</button>
                <button type="button" id="st-submit-btn" onClick={stuSubmit}>Submit</button>
            </p>
            <table id="student-details">
                <tr>
                    <td>College</td>
                    <td>&nbsp;</td>
                    <td>$UserCollegeName</td>
                </tr>
                <tr>
                    <td>Degree</td>
                    <td>&nbsp;</td>
                    <td>$UserDegree</td>
                </tr>
                <tr>
                    <td>Student Name</td>
                    <td>&nbsp;</td>
                    <td>$UserName</td>
                </tr>
                <tr>
                    <td>Student ID</td>
                    <td>&nbsp;</td>
                    <td>$UserStudentID</td>
                </tr>
                <tr>
                    <td>Classification</td>
                    <td>&nbsp;</td>
                    <td>$UserClassification</td>
                </tr>
                <tr>
                    <td>Registration Status</td>
                    <td>&nbsp;</td>
                    <td>$UserRegistrationStatus</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                </tr>
            </table>
        </header>
    );
}

export function graduationChecklist() {
    return (
        <body>
            <table id="progress-table">
                //YEAR HEADER
                <tr>
                    <td id="year-header" colspan="8">Freshman</td>
                    <td id="year-header" colspan="8">Sophomore</td>
                </tr>

                //SEMESTER HEADER
                <tr>
                    //Freshman
                    <td id="progress-table-header" colspan="4">Fall</td>
                    <td id="progress-table-header" colspan="4">Spring</td>
                    //Sophomore
                    <td id="progress-table-header" colspan="4">Fall</td>
                    <td id="progress-table-header" colspan="4">Spring</td>
                </tr>

                /*DETAILS HEADER
                Each Row represents 1 class for both fall and spring*/
                <tr>
                    //Freshman - Fall
                    <td id="progress-table-header">Course Number</td>
                    <td id="progress-table-header">Course Title</td>
                    <td id="progress-table-header">Credits</td>
                    <td id="progress-table-header">Grade</td>
                    // Freshman - Spring
                    <td id="progress-table-header">Course Number</td>
                    <td id="progress-table-header">Course Title</td>
                    <td id="progress-table-header">Credits</td>
                    <td id="progress-table-header">Grade</td>
                    //Sophomore - Fall
                    <td id="progress-table-header">Course Number</td>
                    <td id="progress-table-header">Course Title</td>
                    <td id="progress-table-header">Credits</td>
                    <td id="progress-table-header">Grade</td>
                    //Sophomore - Spring
                    <td id="progress-table-header">Course Number</td>
                    <td id="progress-table-header">Course Title</td>
                    <td id="progress-table-header">Credits</td>
                    <td id="progress-table-header">Grade</td>
                </tr>
                <tr>
                    //Freshman - Fall
                    <td id="progress-table-data" contenteditable="true">$CrsNum</td>
                    <td id="progress-table-data" contenteditable="true">$CrsTitle</td>
                    <td id="progress-table-data" contenteditable="true">$CrsCrd</td>
                    <td id="progress-table-data" contenteditable="true"> </td>
                    //Freshman - Spring
                    <td id="progress-table-data" contenteditable="true">$CrsNum</td>
                    <td id="progress-table-data" contenteditable="true">$CrsTitle</td>
                    <td id="progress-table-data" contenteditable="true">$CrsCrd</td>
                    <td id="progress-table-data" contenteditable="true"> </td>
                    //Sophomore - Fall
                    <td id="progress-table-data" contenteditable="true">$CrsNum</td>
                    <td id="progress-table-data" contenteditable="true">$CrsTitle</td>
                    <td id="progress-table-data" contenteditable="true">$CrsCrd</td>
                    <td id="progress-table-data" contenteditable="true"> </td>
                    //Sophomore - Spring
                    <td id="progress-table-data" contenteditable="true">$CrsNum</td>
                    <td id="progress-table-data" contenteditable="true">$CrsTitle</td>
                    <td id="progress-table-data" contenteditable="true">$CrsCrd</td>
                    <td id="progress-table-data" contenteditable="true"> </td>
                </tr>
                <tr>
                    //Freshman - Fall
                    <td id="progress-table-data" contenteditable="true">$CrsNum</td>
                    <td id="progress-table-data" contenteditable="true">$CrsTitle</td>
                    <td id="progress-table-data" contenteditable="true">$CrsCrd</td>
                    <td id="progress-table-data" contenteditable="true"> </td>
                    //Freshman - Spring
                    <td id="progress-table-data" contenteditable="true">$CrsNum</td>
                    <td id="progress-table-data" contenteditable="true">$CrsTitle</td>
                    <td id="progress-table-data" contenteditable="true">$CrsCrd</td>
                    <td id="progress-table-data" contenteditable="true"> </td>
                    //Sophomore - Fall
                    <td id="progress-table-data" contenteditable="true">$CrsNum</td>
                    <td id="progress-table-data" contenteditable="true">$CrsTitle</td>
                    <td id="progress-table-data" contenteditable="true">$CrsCrd</td>
                    <td id="progress-table-data" contenteditable="true"> </td>
                    //Sophomore - Spring 
                    <td id="progress-table-data" contenteditable="true">$CrsNum</td>
                    <td id="progress-table-data" contenteditable="true">$CrsTitle</td>
                    <td id="progress-table-data" contenteditable="true">$CrsCrd</td>
                    <td id="progress-table-data" contenteditable="true"> </td>
                </tr>
                <tr>
                    //Freshman - Fall
                    <td id="progress-table-data" contenteditable="true">$CrsNum</td>
                    <td id="progress-table-data" contenteditable="true">$CrsTitle</td>
                    <td id="progress-table-data" contenteditable="true">$CrsCrd</td>
                    <td id="progress-table-data" contenteditable="true"> </td>
                    //Freshman - Spring 
                    <td id="progress-table-data" contenteditable="true">$CrsNum</td>
                    <td id="progress-table-data" contenteditable="true">$CrsTitle</td>
                    <td id="progress-table-data" contenteditable="true">$CrsCrd</td>
                    <td id="progress-table-data" contenteditable="true"> </td>
                    //Sophomore - Fall 
                    <td id="progress-table-data" contenteditable="true">$CrsNum</td>
                    <td id="progress-table-data" contenteditable="true">$CrsTitle</td>
                    <td id="progress-table-data" contenteditable="true">$CrsCrd</td>
                    <td id="progress-table-data" contenteditable="true"> </td>
                    //Sophomore - Spring
                    <td id="progress-table-data" contenteditable="true">$CrsNum</td>
                    <td id="progress-table-data" contenteditable="true">$CrsTitle</td>
                    <td id="progress-table-data" contenteditable="true">$CrsCrd</td>
                    <td id="progress-table-data" contenteditable="true"> </td>
                </tr>
                <tr>
                    //Freshman - Fall
                    <td id="progress-table-data" contenteditable="true">$CrsNum</td>
                    <td id="progress-table-data" contenteditable="true">$CrsTitle</td>
                    <td id="progress-table-data" contenteditable="true">$CrsCrd</td>
                    <td id="progress-table-data" contenteditable="true"> </td>
                    //Freshman - Spring 
                    <td id="progress-table-data" contenteditable="true">$CrsNum</td>
                    <td id="progress-table-data" contenteditable="true">$CrsTitle</td>
                    <td id="progress-table-data" contenteditable="true">$CrsCrd</td>
                    <td id="progress-table-data" contenteditable="true"> </td>
                    //Sophomore - Fall 
                    <td id="progress-table-data" contenteditable="true">$CrsNum</td>
                    <td id="progress-table-data" contenteditable="true">$CrsTitle</td>
                    <td id="progress-table-data" contenteditable="true">$CrsCrd</td>
                    <td id="progress-table-data" contenteditable="true"> </td>
                    //Sophomore - Spring 
                    <td id="progress-table-data" contenteditable="true">$CrsNum</td>
                    <td id="progress-table-data" contenteditable="true">$CrsTitle</td>
                    <td id="progress-table-data" contenteditable="true">$CrsCrd</td>
                    <td id="progress-table-data" contenteditable="true"> </td>
                </tr>
                <tr>
                    //Freshman - Fall 
                    <td id="progress-table-data">&nbsp;</td>
                    <td id="progress-table-data">&nbsp;</td>
                    <td id="progress-table-data">$TtlCrsCrd</td>
                    <td id="progress-table-data">&nbsp;</td>
                    //Freshman - Spring 
                    <td id="progress-table-data">&nbsp;</td>
                    <td id="progress-table-data">&nbsp;</td>
                    <td id="progress-table-data">$TtlCrsCrd</td>
                    <td id="progress-table-data">&nbsp;</td>
                    //Sophomore - Fall
                    <td id="progress-table-data">&nbsp;</td>
                    <td id="progress-table-data">&nbsp;</td>
                    <td id="progress-table-data">$TtlCrsCrd</td>
                    <td id="progress-table-data">&nbsp;</td>
                    //Sophomore - Spring
                    <td id="progress-table-data">&nbsp;</td>
                    <td id="progress-table-data">&nbsp;</td>
                    <td id="progress-table-data">$TtlCrsCrd</td>
                    <td id="progress-table-data">&nbsp;</td>
                </tr>



                //YEAR HEADER
                <tr>
                    <td id="year-header" colspan="8">Junior</td>
                    <td id="year-header" colspan="8">Senior</td>
                </tr>

                //SEMESTER HEADER
                <tr>
                    //Junior
                    <td id="progress-table-header" colspan="4">Fall</td>
                    <td id="progress-table-header" colspan="4">Spring</td>
                    //Senior
                    <td id="progress-table-header" colspan="4">Fall</td>
                    <td id="progress-table-header" colspan="4">Spring</td>
                </tr>

                //DETAILS HEADER
                <tr>
                    //Junior - Fall 
                    <td id="progress-table-header">Course Number</td>
                    <td id="progress-table-header">Course Title</td>
                    <td id="progress-table-header">Credits</td>
                    <td id="progress-table-header">Grade</td>
                    //Junior - Spring
                    <td id="progress-table-header">Course Number</td>
                    <td id="progress-table-header">Course Title</td>
                    <td id="progress-table-header">Credits</td>
                    <td id="progress-table-header">Grade</td>
                    //Senior - Fall
                    <td id="progress-table-header">Course Number</td>
                    <td id="progress-table-header">Course Title</td>
                    <td id="progress-table-header">Credits</td>
                    <td id="progress-table-header">Grade</td>
                    //Senior - Spring 
                    <td id="progress-table-header">Course Number</td>
                    <td id="progress-table-header">Course Title</td>
                    <td id="progress-table-header">Credits</td>
                    <td id="progress-table-header">Grade</td>
                </tr>

                /*DETAILS DATA
                Each Row represents 1 class for both fall and spring*/
                <tr>
                    // Junior - Fall 
                    <td id="progress-table-data" contenteditable="true">$CrsNum</td>
                    <td id="progress-table-data" contenteditable="true">$CrsTitle</td>
                    <td id="progress-table-data" contenteditable="true">$CrsCrd</td>
                    <td id="progress-table-data" contenteditable="true"> </td>
                    //Junior - Spring 
                    <td id="progress-table-data" contenteditable="true">$CrsNum</td>
                    <td id="progress-table-data" contenteditable="true">$CrsTitle</td>
                    <td id="progress-table-data" contenteditable="true">$CrsCrd</td>
                    <td id="progress-table-data" contenteditable="true"> </td>
                    //Senior - Fall 
                    <td id="progress-table-data" contenteditable="true">$CrsNum</td>
                    <td id="progress-table-data" contenteditable="true">$CrsTitle</td>
                    <td id="progress-table-data" contenteditable="true">$CrsCrd</td>
                    <td id="progress-table-data" contenteditable="true"> </td>
                    //Senior - Spring 
                    <td id="progress-table-data" contenteditable="true">$CrsNum</td>
                    <td id="progress-table-data" contenteditable="true">$CrsTitle</td>
                    <td id="progress-table-data" contenteditable="true">$CrsCrd</td>
                    <td id="progress-table-data" contenteditable="true"> </td>
                </tr>
                <tr>
                    //Junior - Fall
                    <td id="progress-table-data" contenteditable="true">$CrsNum</td>
                    <td id="progress-table-data" contenteditable="true">$CrsTitle</td>
                    <td id="progress-table-data" contenteditable="true">$CrsCrd</td>
                    <td id="progress-table-data" contenteditable="true"> </td>
                    //Junior - Spring 
                    <td id="progress-table-data" contenteditable="true">$CrsNum</td>
                    <td id="progress-table-data" contenteditable="true">$CrsTitle</td>
                    <td id="progress-table-data" contenteditable="true">$CrsCrd</td>
                    <td id="progress-table-data" contenteditable="true"> </td>
                    //Senior - Fall 
                    <td id="progress-table-data" contenteditable="true">$CrsNum</td>
                    <td id="progress-table-data" contenteditable="true">$CrsTitle</td>
                    <td id="progress-table-data" contenteditable="true">$CrsCrd</td>
                    <td id="progress-table-data" contenteditable="true"> </td>
                    //Senior - Spring
                    <td id="progress-table-data" contenteditable="true">$CrsNum</td>
                    <td id="progress-table-data" contenteditable="true">$CrsTitle</td>
                    <td id="progress-table-data" contenteditable="true">$CrsCrd</td>
                    <td id="progress-table-data" contenteditable="true"> </td>
                </tr>
                <tr>
                    //Junior - Fall 
                    <td id="progress-table-data" contenteditable="true">$CrsNum</td>
                    <td id="progress-table-data" contenteditable="true">$CrsTitle</td>
                    <td id="progress-table-data" contenteditable="true">$CrsCrd</td>
                    <td id="progress-table-data" contenteditable="true"> </td>
                    //Junior - Spring
                    <td id="progress-table-data" contenteditable="true">$CrsNum</td>
                    <td id="progress-table-data" contenteditable="true">$CrsTitle</td>
                    <td id="progress-table-data" contenteditable="true">$CrsCrd</td>
                    <td id="progress-table-data" contenteditable="true"> </td>
                    //Senior - Fall
                    <td id="progress-table-data" contenteditable="true">$CrsNum</td>
                    <td id="progress-table-data" contenteditable="true">$CrsTitle</td>
                    <td id="progress-table-data" contenteditable="true">$CrsCrd</td>
                    <td id="progress-table-data" contenteditable="true"> </td>
                    //Senior - Spring
                    <td id="progress-table-data" contenteditable="true">$CrsNum</td>
                    <td id="progress-table-data" contenteditable="true">$CrsTitle</td>
                    <td id="progress-table-data" contenteditable="true">$CrsCrd</td>
                    <td id="progress-table-data" contenteditable="true"> </td>
                </tr>
                <tr>
                    //Junior - Fall 
                    <td id="progress-table-data" contenteditable="true">$CrsNum</td>
                    <td id="progress-table-data" contenteditable="true">$CrsTitle</td>
                    <td id="progress-table-data" contenteditable="true">$CrsCrd</td>
                    <td id="progress-table-data" contenteditable="true"> </td>
                    //Junior - Spring
                    <td id="progress-table-data" contenteditable="true">$CrsNum</td>
                    <td id="progress-table-data" contenteditable="true">$CrsTitle</td>
                    <td id="progress-table-data" contenteditable="true">$CrsCrd</td>
                    <td id="progress-table-data" contenteditable="true"> </td>
                    //Senior - Fall
                    <td id="progress-table-data" contenteditable="true">$CrsNum</td>
                    <td id="progress-table-data" contenteditable="true">$CrsTitle</td>
                    <td id="progress-table-data" contenteditable="true">$CrsCrd</td>
                    <td id="progress-table-data" contenteditable="true"> </td>
                    //Senior - Spring
                    <td id="progress-table-data" contenteditable="true">$CrsNum</td>
                    <td id="progress-table-data" contenteditable="true">$CrsTitle</td>
                    <td id="progress-table-data" contenteditable="true">$CrsCrd</td>
                    <td id="progress-table-data" contenteditable="true"> </td>
                </tr>
                <tr>
                    //Junior - Fall 
                    <td id="progress-table-data">&nbsp;</td>
                    <td id="progress-table-data">&nbsp;</td>
                    <td id="progress-table-data">$TtlCrsCrd</td>
                    <td id="progress-table-data">&nbsp;</td>
                    //Junior - Spring
                    <td id="progress-table-data">&nbsp;</td>
                    <td id="progress-table-data">&nbsp;</td>
                    <td id="progress-table-data">$TtlCrsCrd</td>
                    <td id="progress-table-data">&nbsp;</td>
                    //Senior - Fall
                    <td id="progress-table-data">&nbsp;</td>
                    <td id="progress-table-data">&nbsp;</td>
                    <td id="progress-table-data">$TtlCrsCrd</td>
                    <td id="progress-table-data">&nbsp;</td>
                    //Senior - Spring
                    <td id="progress-table-data">&nbsp;</td>
                    <td id="progress-table-data">&nbsp;</td>
                    <td id="progress-table-data">$TtlCrsCrd</td>
                    <td id="progress-table-data">&nbsp;</td>
                </tr>
            </table>
        </body>
    );
}

function advisorApproval() {
    return (
        <div>
            <h2>Your Approval has been sent to your student</h2>
        </div>
    );
}

function advisorRejection() {
    return (
        <div>
            <h2>Your Rejection has been sent to your student</h2>
            <p>Please enter your comments below on what your student should fix before approval below </p>
            <p contenteditable="true">&nbsp;</p>
        </div>
    );

}

function studentSubmission() {
    return (
        <div>
            <h2>Your Graduation Checklist has been sent to your advisor for review</h2>
        </div>
    );
}