// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA1OAZkIyfSnN1spGcGtSo2tvNAutTL_fs",
    authDomain: "blogging-89009.firebaseapp.com",
    projectId: "blogging-89009",
    storageBucket: "blogging-89009.appspot.com",
    messagingSenderId: "1034454160306",
    appId: "1:1034454160306:web:aad75d14f816290e11caab",
    measurementId: "G-TDWVL2LK9T"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebaseApp.auth();

  export { auth };