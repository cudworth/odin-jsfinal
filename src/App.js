import "./App.css";
import { useState, useEffect } from "react";
import { stateHelper } from "./library";
import { firebaseAuth } from "./firebaseAuth";
import { Notice } from "./components/Notice";
import { Body } from "./components/Body";

const auth = firebaseAuth();

function App() {
  const [state, setState] = useState({
    user: null,
    notice: null,
  });

  useEffect(() => {
    auth.addAuthStateListener((user) => {
      stateHelper(setState, { user: user ? user : null });
    });
  }, []);

  return (
    <div className="App">
      <Notice message={state.notice} onClick={clearNotice} />
      <Body auth={auth} user={state.user} onError={setNotice} />
    </div>
  );

  function setNotice(arg) {
    stateHelper(setState, { notice: arg });
  }
  function clearNotice() {
    stateHelper(setState, { notice: null });
  }
}

export default App;
