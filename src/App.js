import "./App.css";
import { useState, useEffect } from "react";
import { stateHelper } from "./library";
import { firebaseAuth } from "./firebaseAuth";
import { Navbar } from "./components/Navbar";
import { NewUserForm } from "./components/NewUserForm";
import { LoginForm } from "./components/LoginForm";
import { Notice } from "./components/Notice";

const auth = firebaseAuth();

function App() {
  const [state, setState] = useState({
    auth: null,
    notice: null,
    activeForm: null,
  });

  useEffect(() => {
    auth.addAuthStateListener((user) => {
      stateHelper(setState, { auth: user ? true : false });
    });
  }, []);

  return (
    <div className="App">
      <Notice message={state.notice} onClick={clearNotice} />
      <Navbar
        authState={state.auth}
        onClickRegister={renderNewUserForm}
        onClickSignIn={renderLoginForm}
        onClickSignOut={signOut}
        onError={setNotice}
      />
      <div className="App-body">Body</div>
      {state.activeForm}
    </div>
  );

  function setNotice(arg) {
    stateHelper(setState, { notice: arg });
  }
  function clearNotice() {
    stateHelper(setState, { notice: null });
  }

  function renderNewUserForm() {
    stateHelper(setState, {
      activeForm: (
        <NewUserForm
          onSubmit={(args) => {
            auth.createUser(args);
            stateHelper(setState, { activeForm: null });
          }}
          onEscape={() => stateHelper(setState, { activeForm: null })}
        />
      ),
    });
  }
  function renderLoginForm() {
    stateHelper(setState, {
      activeForm: (
        <LoginForm
          onSubmit={(args) => {
            auth.signUserIn(args);
            stateHelper(setState, { activeForm: null });
          }}
          onEscape={() => stateHelper(setState, { activeForm: null })}
        />
      ),
    });
  }
  function signOut() {
    auth.signUserOut();
  }
}

export default App;
