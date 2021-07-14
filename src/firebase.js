import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDR8U8zRCABMi-nhi2-wHqcwpPRcTBJn04",
    authDomain: "textit-91994.firebaseapp.com",
    projectId: "textit-91994",
    storageBucket: "textit-91994.appspot.com",
    messagingSenderId: "471952494178",
    appId: "1:471952494178:web:e6065ba514bc712e614b3b"
  }).auth();