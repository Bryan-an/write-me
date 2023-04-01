// Import the functions you need from the SDKs you need
import { FirebaseOptions, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyBnzjW08mKSTSakBfibSVCqXz8m_Y6AbME",
  authDomain: "write-me-ab042.firebaseapp.com",
  projectId: "write-me-ab042",
  storageBucket: "write-me-ab042.appspot.com",
  messagingSenderId: "11099329522",
  appId: "1:11099329522:web:6d5848191640907b4d116b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
