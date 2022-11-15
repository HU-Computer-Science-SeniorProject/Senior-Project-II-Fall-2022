import { Header } from "../../Team_Ace/components/Header";
import { Footer } from "../../Team_Ace/components/Footer";
import "./graduationProgress.css";

export default function creditOverloadError() {

    const creditOverload = () => {
        navigate('/advisorApproval');
    }

    const overloadErrorRequest = () => {
        <p>
            A Credit Overload error requires communication with your Academic Advisor, and the Registrar's Office.
            Please click the button below to send an email to your advisor who will communicate with the Registrar's
            Office on your behalf.
        </p>
    }

    return (
        <div>
            <Header />
            {/*<!--This error should be on the error resolution page--->*/}
            <button type="button" id="cdt-ovrld-btn" onClick={creditOverload}>Credit Overload</button>


            <button type="button" id="stu-rqst-crd-ovrld-btn" onClick={overloadErrorRequest}>Request help with Credit Overload</button>
            <Footer />
        </div>
    );
}