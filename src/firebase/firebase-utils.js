import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyArgk2A9JVf7Vkt_hI-enE1flP8qAkeWLI",
  authDomain: "crwn-db-da042.firebaseapp.com",
  databaseURL: "https://crwn-db-da042.firebaseio.com",
  projectId: "crwn-db-da042",
  storageBucket: "",
  messagingSenderId: "262911703354",
  appId: "1:262911703354:web:97b499386a7d4ed0cc3803"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
