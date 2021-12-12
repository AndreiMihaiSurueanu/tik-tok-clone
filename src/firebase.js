// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsN-NRC3iArMfE0gypNuDbMyLDu5CJsr4",
  authDomain: "clone-projects-9.firebaseapp.com",
  projectId: "clone-projects-9",
  storageBucket: "clone-projects-9.appspot.com",
  messagingSenderId: "174316682985",
  appId: "1:174316682985:web:f7da81c7bc26e0cb6dba78"
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export { db, collection, onSnapshot };
