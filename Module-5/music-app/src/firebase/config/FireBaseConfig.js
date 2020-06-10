import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDD4_KLTulSwALMWLlGvQpYlbr24uOhj3s",
  authDomain: "my-playground-85bf6.firebaseapp.com",
  databaseURL: "https://my-playground-85bf6.firebaseio.com",
  projectId: "my-playground-85bf6",
  storageBucket: "my-playground-85bf6.appspot.com",
  messagingSenderId: "1066759744413",
  appId: "1:1066759744413:web:3b1b3ac602142eacd29d74",
  measurementId: "G-6FZ3R6QELT",
};
// Initialize Firebase
firebase.initializeApp(config);
export const database = firebase.firestore();

export default firebase;
