import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDUzRtDjeL_1NJd31drCiolWYB3FuQGG6o",
  authDomain: "react-will-do.firebaseapp.com",
  databaseURL: "https://react-will-do.firebaseio.com",
  projectId: "react-will-do",
  storageBucket: "react-will-do.appspot.com",
  messagingSenderId: "604869351549"
};
firebase.initializeApp(config);

export default firebase;
