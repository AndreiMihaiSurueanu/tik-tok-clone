// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiwPTvM5JOH3jGmMQy0osH899kzLGcdsM",
  authDomain: "tik-tok-clone-9.firebaseapp.com",
  projectId: "tik-tok-clone-9",
  storageBucket: "tik-tok-clone-9.appspot.com",
  messagingSenderId: "946275916866",
  appId: "1:946275916866:web:a771f3014f5c8a662ae1db",
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export { db, collection, onSnapshot };
