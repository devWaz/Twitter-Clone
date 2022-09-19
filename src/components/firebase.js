import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAkve-Ah3v_V7z4H_p-i9tPa0FqrDdQW2A",
    authDomain: "twitter-e460d.firebaseapp.com",
    projectId: "twitter-e460d",
    storageBucket: "twitter-e460d.appspot.com",
    messagingSenderId: "150501721303",
    appId: "1:150501721303:web:1147eb3bdd81e9d3ce1c92",
    measurementId: "G-F73G2RVL3B"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;