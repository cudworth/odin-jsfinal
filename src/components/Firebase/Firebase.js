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
} from "firebase/auth";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

function Firebase() {
  const [state, setState] = useState({ user: null });

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      setStateHelper(setState, { user: uid });
    } else {
      // User is signed out
      setStateHelper(setState, { user: null });
    }
  });

  if (state.user) {
    return (
      <div className="Firebase">
        <div>Logged in as {state.user}</div>
        <input type="button" value="Sign Out" />
      </div>
    );
  } else {
    return (
      <div className="Firebase">
        <input type="button" value="Sign In" />
        <input type="button" value="Register" />
        <NewUserForm onSubmit={createUser} />
        <LoginForm onSubmit={signIn} />
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
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`Error code: ${errorCode}`);
        console.log(`Error message: ${errorMessage}`);
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
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`Error code: ${errorCode}`);
        console.log(`Error message: ${errorMessage}`);
      });
  }
}

export { Firebase };
