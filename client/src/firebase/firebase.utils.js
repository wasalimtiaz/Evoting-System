import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDhFdXp2LcvQEPIHN9VBb2LE3sdLL08X0I",
    authDomain: "evote-943d4.firebaseapp.com",
    databaseURL: "https://evote-943d4.firebaseio.com",
    projectId: "evote-943d4",
    storageBucket: "evote-943d4.appspot.com",
    messagingSenderId: "546469788359",
    appId: "1:546469788359:web:643c72377cddca1b365ce2",
    measurementId: "G-BGGJ6XVHBL"
  }; 

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export const signInWithEmailAndPassword = () => auth.signInWithEmailAndPassword();
  //export const signInWithEmailAndPassword = () => auth.signInWithEmailAndPassword(provider);

  export default firebase;