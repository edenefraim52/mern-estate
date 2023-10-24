// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-b16b2.firebaseapp.com",
  projectId: "mern-estate-b16b2",
  storageBucket: "mern-estate-b16b2.appspot.com",
  messagingSenderId: "178203872357",
  appId: "1:178203872357:web:5b2ffc19760752cc4a4a8c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
