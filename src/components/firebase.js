// import firebase from "firebase";
import * as firebase from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyD41-T4XQdehYPONr0cHvu6jTIc_h9yOcQ",
  authDomain: "twitter-c744d.firebaseapp.com",
  projectId: "twitter-c744d",
  storageBucket: "twitter-c744d.appspot.com",
  messagingSenderId: "205557462014",
  appId: "1:205557462014:web:c6518943abd3af8ceec6af",
  measurementId: "G-VZXPPTMHLV"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;