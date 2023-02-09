import "./App.css";
import { useState, useEffect } from "react";
import { Firebase } from "./firebase";
import { Notice } from "./components/Notice";
import { Body } from "./components/Body";

const fb = Firebase();

function App() {
  const [user, setUser] = useState(null);
  const [notice, setNotice] = useState(null);

  useEffect(() => {
    fb.addAuthStateListener((user) => {
      setUser(user ? user : null);
    });
  }, []);

  return (
    <div className="App">
      <Notice message={notice} onClick={clearNotice} />
      <Body fb={fb} user={user} onError={createNotice} />
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
