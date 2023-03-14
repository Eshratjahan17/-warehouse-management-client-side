
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7G9fO_XRvqHkBqqQdexU1aXGvvZMz8eA",
  authDomain: "warehouse-977a4.firebaseapp.com",
  projectId: "warehouse-977a4",
  storageBucket: "warehouse-977a4.appspot.com",
  messagingSenderId: "67753120965",
  appId: "1:67753120965:web:3c2f0584c861a10f4d8cac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
