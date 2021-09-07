import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCzGRG46mIsPxUFY_rg-oqhmB3TzZzcJwQ",
    authDomain: "unichat-dd08b.firebaseapp.com",
    projectId: "unichat-dd08b",
    storageBucket: "unichat-dd08b.appspot.com",
    messagingSenderId: "721866701478",
    appId: "1:721866701478:web:9b2d8a9de99f076dfa5267"
  }).auth();
  
