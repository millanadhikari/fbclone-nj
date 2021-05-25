import firebase from 'firebase'
import "firebase/storage"


const firebaseConfig = {
    apiKey: "AIzaSyDb_1X1tG-ljoRif4-ptFgB9bbmfUzTcgc",
    authDomain: "fb-clonenj.firebaseapp.com",
    projectId: "fb-clonenj",
    storageBucket: "fb-clonenj.appspot.com",
    messagingSenderId: "882048471186",
    appId: "1:882048471186:web:182d4b1eebf4045c6ed64b"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app() 

  const db = app.firestore();

  const storage = firebase.storage();
  

  export {db, storage}