// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider, getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4xGlWtaYtijXSLEnS1BLy0WCv4sN5W4c",
  authDomain: "chalo-india-app.firebaseapp.com",
  projectId: "chalo-india-app",
  storageBucket: "chalo-india-app.appspot.com",
  messagingSenderId: "353339742301",
  appId: "1:353339742301:web:4a92a048ca9168d79415b4",
  measurementId: "G-N5Q5JPQ1EE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export {app, auth, provider}