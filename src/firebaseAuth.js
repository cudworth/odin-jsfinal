// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from "./firebase-key";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

function firebaseAuth(props) {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const analytics = getAnalytics(app);

  function addAuthStateListener(fn) {
    onAuthStateChanged(auth, (user) => {
      fn(user);
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log(`User signed in: ${uid}`);
      } else {
        // User is signed out
        console.log("User signed out per authstatechange listener");
      }
    });
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
        console.log(error);
        // ..
      });
  }

  function signUserIn(args) {
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
        console.log(error);
      });
  }

  function signUserOut() {
    signOut(auth)
      .then(() => {
        console.log("Signed user out");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return {
    createUser,
    signUserIn,
    signUserOut,
    addAuthStateListener,
  };
}

export { firebaseAuth };
