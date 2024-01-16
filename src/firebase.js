// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhu__w7-1xiVdkreXdn1SzlIOm1scUp7c",
  authDomain: "realtor-66e96.firebaseapp.com",
  projectId: "realtor-66e96",
  storageBucket: "realtor-66e96.appspot.com",
  messagingSenderId: "872259873211",
  appId: "1:872259873211:web:87308e4e17df5fe94a7c9e",
  measurementId: "G-R24TGM7NKW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;