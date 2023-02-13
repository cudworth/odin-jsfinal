import "./App.css";
import { useState } from "react";
import { Firebase } from "./firebase";
import { Notice } from "./components/Notice";
import { Body } from "./components/Body";

const fb = Firebase();

function App() {
  const [notice, setNotice] = useState(null);

  return (
    <div className="App">
      <Notice message={notice} onClick={clearNotice} />
      <Body fb={fb} onError={createNotice} />
    </div>
  );

  function createNotice(arg) {
    setNotice(arg);
  }
  function clearNotice() {
    setNotice(null);
  }
}

export default App;
