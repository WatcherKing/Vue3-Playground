// Import the functions you need from the SDKs you need
import * as firebase from "@firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import * as auth from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOsZFKUht57BLULWqVSCuQXhUbOIbpyqE",
  authDomain: "vue-tutorial-51e28.firebaseapp.com",
  projectId: "vue-tutorial-51e28",
  storageBucket: "vue-tutorial-51e28.appspot.com",
  messagingSenderId: "963618642159",
  appId: "1:963618642159:web:1ac7dfe82eb298ee42631a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default auth;