import "./Body.css";

import { useState, useEffect } from "react";

import { Navbar } from "./Navbar";
import { Login } from "./Login";
import { Profile } from "./Profile";

function Body(props) {
  const { auth, user, onError } = props;

  const [state, setState] = useState("");

  useEffect(() => {
    auth.addAuthStateListener((user) => {
      setState(user ? "Profile" : "");
    });
  }, [auth]);

  function render() {
    switch (state) {
      case "Login":
        return <Login auth={auth} />;
      case "Maps":
        return <div>Maps</div>;
      case "Journal":
        return <div>Journal</div>;
      case "Profile":
        return <Profile user={user} />;
      default:
        return <div>Welcome screen</div>;
    }
  }

  return (
    <div className="Body">
      <Navbar
        user={user}
        gotoSignIn={() => setState("Login")}
        gotoSignOut={auth.signUserOut}
        gotoMaps={() => setState("Maps")}
        gotoJournal={() => setState("Journal")}
        gotoProfile={() => setState("Profile")}
        onError={onError}
      />
      <div className="Contents">{render()}</div>
    </div>
  );
}

export { Body };
