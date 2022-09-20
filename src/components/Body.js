import "./Body.css";

import { useState } from "react";

import { Navbar } from "./Navbar";
import { Login } from "./Login";
import { Profile } from "./Profile";

function Body(props) {
  const { auth, user, onError } = props;

  const [state, setState] = useState("");

  function render() {
    switch (state) {
      case "Login":
        return <Login />;
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
        user={state.user}
        onClickSignIn={() => setState("Login")}
        onClickSignOut={auth.signUserOut}
        onError={onError}
      />
      <div className="Contents">{render()}</div>
    </div>
  );
}

export { Body };
