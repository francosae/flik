// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIe-nVBk65-CvqvlOlpVIasqRRyVdClZQ",

  authDomain: "flickit-64a40.firebaseapp.com",

  projectId: "flickit-64a40",

  storageBucket: "flickit-64a40.appspot.com",

  messagingSenderId: "104160542135",

  appId: "1:104160542135:web:be900432f3414cdd5ebc32",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default fire;
