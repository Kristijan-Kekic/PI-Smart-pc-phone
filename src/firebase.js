import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyC-EM_tjLDebxa0c2aB1aLFIyOzKPOuxpU",
  authDomain: "smartpcphone-ae006.firebaseapp.com",
  projectId: "smartpcphone-ae006",
  storageBucket: "smartpcphone-ae006.appspot.com",
  messagingSenderId: "627682993076",
  appId: "1:627682993076:web:4feef15f0f7b3d0b0e48e1"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let storage = firebase.storage();

export { firebase, db, storage};
