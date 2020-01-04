import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDkBNbOEjM4hk61kNuf_DH8o0xLOXVGlEM",
  authDomain: "react-slack-clone-a9435.firebaseapp.com",
  databaseURL: "https://react-slack-clone-a9435.firebaseio.com",
  projectId: "react-slack-clone-a9435",
  storageBucket: "react-slack-clone-a9435.appspot.com",
  messagingSenderId: "464548037625",
  appId: "1:464548037625:web:3b8a6b7f558eca752cb328",
  measurementId: "G-V1JZPGDNNC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
