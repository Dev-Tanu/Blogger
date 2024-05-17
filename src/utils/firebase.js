// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-app-416010.firebaseapp.com",
  projectId: "blog-app-416010",
  storageBucket: "blog-app-416010.appspot.com",
  messagingSenderId: "94511042879",
  appId: "1:94511042879:web:8d3ce429dbcad0ba8d438a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);