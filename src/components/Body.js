import "./Body.css";

import { useState, useEffect } from "react";

import { Navbar } from "./Navbar";
import { Login } from "./Login";
import { Profile } from "./Profile";
import { Journal } from "./Journal";

function Body(props) {
  const { fb, user, onError } = props;

  const [state, setState] = useState("");

  useEffect(() => {
    fb.addAuthStateListener((user) => {
      setState(user ? "Profile" : "");
    });
  }, [fb]);

  function render() {
    switch (state) {
      case "Login":
        return <Login fb={fb} onCancel={() => setState("")} />;
      case "Maps":
        return <div>Maps</div>;
      case "Journal":
        return <Journal fb={fb} />;
      case "Profile":
        return <Profile fb={fb} user={user} />;
      default:
        return <div>Welcome screen</div>;
    }
  }

  return (
    <div className="Body">
      <Navbar
        user={user}
        gotoSignIn={() => setState("Login")}
        gotoSignOut={fb.signUserOut}
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
