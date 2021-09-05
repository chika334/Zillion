import firebase from "firebase/app";
import 'firebase/database'

var firebaseConfig = {
  apiKey: "AIzaSyBteavv51scSH30rk8gquXvDMzYQ6eVZfo",
  authDomain: "zillion-1590e.firebaseapp.com",
  projectId: "zillion-1590e",
  storageBucket: "zillion-1590e.appspot.com",
  messagingSenderId: "684931615868",
  appId: "1:684931615868:web:57744749cc33b3dd328df9",
  measurementId: "G-VLBDT18B1R",
};
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();
