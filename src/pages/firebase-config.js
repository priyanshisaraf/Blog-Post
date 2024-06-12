// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTWvPare4i0fp_Su1UVrMeOtkH3DL-L78",
  authDomain: "blog-post-cf68c.firebaseapp.com",
  projectId: "blog-post-cf68c",
  storageBucket: "blog-post-cf68c.appspot.com",
  messagingSenderId: "677046586484",
  appId: "1:677046586484:web:d4da90b8641be0fdb95521"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth();