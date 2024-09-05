// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfmP2NHliIkfWZnYy22jjMj3K7qwE8G9g",
  authDomain: "numeralagro-e58b7.firebaseapp.com",
  projectId: "numeralagro-e58b7",
  storageBucket: "numeralagro-e58b7.appspot.com",
  messagingSenderId: "2265156181",
  appId: "1:2265156181:web:c5bd137e79b5f980cc62dc",
  measurementId: "G-FKFJ043JK6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);