// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyADFq8Wfw9irFdEy7huTC9U_Y0y-FbM0Uo",
  authDomain: "netflixgpt-ed644.firebaseapp.com",
  projectId: "netflixgpt-ed644",
  storageBucket: "netflixgpt-ed644.appspot.com",
  messagingSenderId: "442815788066",
  appId: "1:442815788066:web:9eac0e83769abd3290867b",
  measurementId: "G-NQB9QPFR53",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
