import "./App.css";
import { useState, useEffect } from "react";
import { firebaseAuth } from "./firebaseAuth";
import { Notice } from "./components/Notice";
import { Body } from "./components/Body";

const auth = firebaseAuth();

function App() {
  const [user, setUser] = useState(null);
  const [notice, setNotice] = useState(null);

  useEffect(() => {
    auth.addAuthStateListener((user) => {
      setUser(user ? user : null);
    });
  }, []);

  return (
    <div className="App">
      <Notice message={notice} onClick={clearNotice} />
      <Body auth={auth} user={user} onError={createNotice} />
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
