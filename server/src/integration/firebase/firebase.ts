// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAaDK3LjZCxuKGnwXLit8KcLF7pXK8B44Q",
  authDomain: "accountmanagement-2134d.firebaseapp.com",
  projectId: "accountmanagement-2134d",
  storageBucket: "accountmanagement-2134d.appspot.com",
  messagingSenderId: "750273976938",
  appId: "1:750273976938:web:65ded9950b16bb71300813",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
