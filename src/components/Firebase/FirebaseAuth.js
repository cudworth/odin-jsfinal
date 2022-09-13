import "./FirebaseAuth.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { useState } from "react";
import { setStateHelper } from "../../library";

import { firebaseConfig } from "./firebase-key";

import { NewUserForm } from "./NewUserForm";
import { LoginForm } from "./LoginForm";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

function FirebaseAuth(props) {
  const { onError } = { ...props };

  const [state, setState] = useState({
    user: null,
    NewUserForm: false,
    LoginForm: false,
  });

  //REQUIRES IMPLEMENTATION - SETSTATE CAUSES A LOOP IN THIS CFG
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      //const uid = user.uid;
      //setStateHelper(setState, { user: uid });
    } else {
      // User is signed out
      //setStateHelper(setState, { user: null });
    }
  });

  if (state.user) {
    return renderAuth();
  } else {
    return renderNoAuth();
  }

  function renderNoAuth() {
    if (state.NewUserForm) {
      return (
        <div>
          <NewUserForm
            onSubmit={createUser}
            onEscape={() =>
              setStateHelper(setState, { LoginForm: null, NewUserForm: null })
            }
          />
        </div>
      );
    }
    if (state.LoginForm) {
      return (
        <div>
          <LoginForm
            onSubmit={signIn}
            onEscape={() =>
              setStateHelper(setState, { LoginForm: null, NewUserForm: null })
            }
          />
        </div>
      );
    }
    return (
      <div className="FirebaseAuth">
        <input
          type="button"
          value="Sign In"
          onClick={(e) => {
            setStateHelper(setState, { LoginForm: true, NewUserForm: false });
          }}
        />
        <input
          type="button"
          value="Register"
          onClick={(e) => {
            setStateHelper(setState, { NewUserForm: true, LoginForm: false });
          }}
        />
      </div>
    );
  }

  function renderAuth() {
    return (
      <div className="FirebaseAuth">
        <div>Logged in as {state.user}</div>
        <input
          type="button"
          value="Sign Out"
          onClick={(e) => {
            signUserOut();
          }}
        />
      </div>
    );
  }

  function createUser(args) {
    const { email, password } = { ...args };
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(`User: ${user}`);
        console.log(`User ID: ${user.uid}`);
        setStateHelper(setState, { NewUserForm: false, user: user.uid });

        // ...
      })
      .catch((error) => {
        onError(error);
        // ..
      });
  }

  function signIn(args) {
    const { email, password } = { ...args };
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(`User: ${user}`);
        console.log(`User ID: ${user.uid}`);
        setStateHelper(setState, { LoginForm: false, user: user.uid });
        // ...
      })
      .catch((error) => {
        onError(error);
      });
  }

  function signUserOut() {
    signOut(auth)
      .then(() => {
        console.log("Signed user out");
        setStateHelper(setState, { user: null });
      })
      .catch((error) => {
        onError(error);
      });
  }
}

export { FirebaseAuth };
