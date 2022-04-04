import firebase from "firebase";
//import { initializeApp } from 'firebase/app';
//import {getFirestore} from "@firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEMQksimFw4lduNegveacPn9tc_gkqFQk",
  authDomain: "samarthenterprise-a2d7e.firebaseapp.com",
  projectId: "samarthenterprise-a2d7e",
  storageBucket: "samarthenterprise-a2d7e.appspot.com",
  messagingSenderId: "819233095537",
  appId: "1:819233095537:web:388895ca006ba1f88500d0",
  measurementId: "G-P2D3XLDZGB"
};

const firebaseApp= firebase.initializeApp(firebaseConfig);

//const app=initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
//const db =getFirestore(app);

//const collection=firebase.firestore();

const auth= firebase.auth();

export { db, auth};