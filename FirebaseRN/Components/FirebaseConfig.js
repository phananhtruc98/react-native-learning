import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCltBJaZEyKKk0NzIdaKcQ6ls5VsN7ZOo0",
    authDomain: "trucphan-ebbfb.firebaseapp.com",
    databaseURL: "https://trucphan-ebbfb.firebaseio.com",
    projectId: "trucphan-ebbfb",
    storageBucket: "trucphan-ebbfb.appspot.com",
    messagingSenderId: "706936330451",
    appId: "1:706936330451:web:30bd1145caaccff6825c26",
    measurementId: "G-3P5VP2LB5S"
  };

export const firebaseApp = firebase.initializeApp(config);