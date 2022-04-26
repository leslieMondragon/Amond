// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfO17lvv46pJ_K6E16Com_ex5q7TWHnbk",
  authDomain: "amond-cd610.firebaseapp.com",
  databaseURL: "https://amond-cd610-default-rtdb.firebaseio.com",
  projectId: "amond-cd610",
  storageBucket: "amond-cd610.appspot.com",
  messagingSenderId: "941502607741",
  appId: "1:941502607741:web:e4021c34864fb405e99c14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app;
}