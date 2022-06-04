// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import {getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCp777iaBJaGfS5D-Qm-xyJ4Pu370LoV1c",
  authDomain: "better-insta-2.firebaseapp.com",
  projectId: "better-insta-2",
  storageBucket: "better-insta-2.appspot.com",
  messagingSenderId: "437999111744",
  appId: "1:437999111744:web:3e56f281b89de3868899a5",
  measurementId: "G-XRCZJQ53CZ"
};

// Initialize Firebase
const app =  !getApps().length? initializeApp(firebaseConfig) : getApp() ;
const db = getFirestore();
const storage=getStorage();

export{app,db,storage};