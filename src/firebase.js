// Import functions from SDKs
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase-key";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";

import {
  getFirestore,
  collection,
  doc,
  addDoc,
  setDoc,
  getDocs,
} from "firebase/firestore";

function Firebase(props) {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  let currentUser = null;
  addAuthStateListener((user) => {
    currentUser = user;
  });

  function addAuthStateListener(fn) {
    onAuthStateChanged(auth, (user) => {
      fn(user);
    });
  }

  // ###### AUTH METHODS ######
  function createUser(args) {
    const { email, password, displayName } = { ...args };
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(`User ID: ${user.uid}`);
        updateProfile(auth.currentUser, { displayName });
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

  // ###### FIRESTORE METHODS #######
  async function createDataUser() {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  function addData(_collection, data) {
    return addDoc(collection(db, _collection), data)
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((e) => {
        console.log("Error adding document: ", e);
      });
  }

  function setData(_collection, id, data) {
    return setDoc(doc(db, _collection, id), data)
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((e) => {
        console.log("Error adding document: ", e);
      });
  }

  async function readData() {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  }

  function getUser() {
    return currentUser;
  }

  return {
    createUser,
    signUserIn,
    signUserOut,
    addAuthStateListener,
    createDataUser,
    addData,
    setData,
    readData,
    getUser,
  };
}

export { Firebase };
