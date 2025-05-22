// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAy4FQy8byImKz_njDR1el3Ezy3Io0Izg8",
  authDomain: "problem-solver-40ba1.firebaseapp.com",
  projectId: "problem-solver-40ba1",
  storageBucket: "problem-solver-40ba1.firebasestorage.app",
  messagingSenderId: "531943109446",
  appId: "1:531943109446:web:97a1a910596ce4564deb47",
  measurementId: "G-MK7JD18QGE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const analytics = getAnalytics(app);
export const auth = getAuth(app);