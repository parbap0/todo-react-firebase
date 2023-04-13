// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLnu8VJVGWLEXhvyEOb6t7-E8Kh1dXSjg",
  authDomain: "todo-react-firebase-8c70b.firebaseapp.com",
  projectId: "todo-react-firebase-8c70b",
  storageBucket: "todo-react-firebase-8c70b.appspot.com",
  messagingSenderId: "512630617948",
  appId: "1:512630617948:web:7d1e9df81ed7c92c0af399",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
