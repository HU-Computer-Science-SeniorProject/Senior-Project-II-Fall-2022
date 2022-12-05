/* eslint-disable react/jsx-no-target-blank */
import "./Footer.css";

export function Footer() {
  return (
    <div className="footer_main">
      <a
        className="link"
        href="https://ssb-prod.ec.howard.edu/PROD/twbkwbis.P_GenMenu?name=homepage"
        target="_blank"
      >
        BISONWEB
      </a>
      <a className="link" href="https://howard.edu/students" target="_blank">
        GET HELP
      </a>
      <a className="link" href="mailto:admission@howard.edu" target="_blank">
        CONTACT INFORMATION
      </a>
    </div>
  );
}
