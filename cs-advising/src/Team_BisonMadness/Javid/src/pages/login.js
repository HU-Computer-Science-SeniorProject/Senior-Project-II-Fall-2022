import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

const login = () => {
  return (
    <Authenticator>
      {({ signOut }) => (
        <div>
          <h1>Main Page</h1>
          <p>You have successfully logged in!</p>
          <button onClick={signOut}>Sign Out</button>
        </div>
      )}
    </Authenticator>
  );
};

export default login;
