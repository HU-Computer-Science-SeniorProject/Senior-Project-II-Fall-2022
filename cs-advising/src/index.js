import React from "react";
import ReactDOM from "react-dom/client";
import "./Team_BisonMadness/Javid/src/index.css";
import App from "./Team_BisonMadness/Javid/src/App";
import reportWebVitals from "./Team_BisonMadness/Javid/src/reportWebVitals";
import Amplify from "aws-amplify";
import config from "./Team_BisonMadness/Javid/src/aws-exports";
Amplify.configure(config);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
