// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxB2V1cM6-Vud69kikHJw17eTgJ2EUejM",
  authDomain: "meet-or-not.firebaseapp.com",
  projectId: "meet-or-not",
  storageBucket: "meet-or-not.appspot.com",
  messagingSenderId: "881017243314",
  appId: "1:881017243314:web:a161f93876b85e0ba8ebab",
  measurementId: "G-CK2T7Y4ZRC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);