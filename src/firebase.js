import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBP-E-SIM3RFfC37abzeVUqL6V7vByGkzE",
  authDomain: "abekus-1654a.firebaseapp.com",
  databaseURL: "https://abekus-1654a.firebaseio.com",
  projectId: "abekus-1654a",
  storageBucket: "abekus-1654a.appspot.com",
  messagingSenderId: "61856733865",
  appId: "1:61856733865:web:b90b1f861667cc8520a7b8",
  measurementId: "G-9P3WYHV20R",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
