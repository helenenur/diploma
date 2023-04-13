// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {collection, getFirestore} from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3aCRYXx05DHFZHesfxQO7AU_Zlh0h_gg",
  authDomain: "diploma-67301.firebaseapp.com",
  projectId: "diploma-67301",
  storageBucket: "diploma-67301.appspot.com",
  messagingSenderId: "1090921941220",
  appId: "1:1090921941220:web:87dd19c0b3b9636a0644f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const categoryCollection = collection(db, 'categories');
export const productCollection = collection(db,'products');