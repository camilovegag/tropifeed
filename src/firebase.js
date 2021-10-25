// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAh030hzIfRLLuWhsp4bo23bKWlY0zFZ5M",
  authDomain: "tropifeed.firebaseapp.com",
  projectId: "tropifeed",
  storageBucket: "tropifeed.appspot.com",
  messagingSenderId: "17625428212",
  appId: "1:17625428212:web:e68052490ed42f2f4f2ea1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export default db;
