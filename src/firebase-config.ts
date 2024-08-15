// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_NW99buRBjtox7yOV9P0JgWF97BaBzHM",
  authDomain: "host-3d3e3.firebaseapp.com",
  projectId: "host-3d3e3",
  storageBucket: "host-3d3e3.appspot.com",
  messagingSenderId: "838695583435",
  appId: "1:838695583435:web:c287f0aab46d13c7eaa54e",
  measurementId: "G-1EC8QQ9L9W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)