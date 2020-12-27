import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";



var firebaseConfig = {
    apiKey: "AIzaSyCm9C_COM4n0mM50BbiPFKLJXsdOvVUgpQ",
    authDomain: "react-slack-clone-abe6c.firebaseapp.com",
    projectId: "react-slack-clone-abe6c",
    storageBucket: "react-slack-clone-abe6c.appspot.com",
    messagingSenderId: "620523152188",
    appId: "1:620523152188:web:fd487a75248b014b1c7439",
    measurementId: "G-11FNG751G3"
  };
  firebase.initializeApp(firebaseConfig);

  export default firebase;