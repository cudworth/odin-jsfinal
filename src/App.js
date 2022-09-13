import "./App.css";
import { FirebaseAuth } from "./components/Firebase/FirebaseAuth";
import { Notice } from "./components/Notice";
import { useState } from "react";
import { setStateHelper } from "./library";

function App() {
  const [state, setState] = useState({ notice: "Hello world!" });

  return (
    <div className="App">
      <Notice message={state.notice} onClick={clearNotice} />
      <FirebaseAuth onError={setNotice} />
    </div>
  );

  function setNotice(arg) {
    setStateHelper(setState, { notice: arg });
  }
  function clearNotice() {
    setStateHelper(setState, { notice: null });
  }
}

export default App;
