// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANTTKIgxUxd4owRYeXUZrL9SeHs3N9eh0",
  authDomain: "netflixgpt-2d4a6.firebaseapp.com",
  projectId: "netflixgpt-2d4a6",
  storageBucket: "netflixgpt-2d4a6.appspot.com",
  messagingSenderId: "974517499968",
  appId: "1:974517499968:web:a7acf3f77ce0d94bdb47a5",
  measurementId: "G-0PJXC8ES2S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
