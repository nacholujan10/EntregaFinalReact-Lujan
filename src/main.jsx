import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCJDHYklO2suQbCAlyUm0p9qGvGaBZVZWo",
  authDomain: "numeral-agro.firebaseapp.com",
  projectId: "numeral-agro",
  storageBucket: "numeral-agro.appspot.com",
  messagingSenderId: "927057738354",
  appId: "1:927057738354:web:0719c593b62873958ea0eb",
  measurementId: "G-K5ZFHMQ8GZ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
