// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore, onSnapshot } from "firebase/firestore";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3aCRYXx05DHFZHesfxQO7AU_Zlh0h_gg",
  authDomain: "diploma-67301.firebaseapp.com",
  projectId: "diploma-67301",
  storageBucket: "diploma-67301.appspot.com",
  messagingSenderId: "1090921941220",
  appId: "1:1090921941220:web:87dd19c0b3b9636a0644f1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth(app);
export const storage = getStorage(app);

// получить список категорий (коллекция документов).
export const categoryCollection = collection(db, "categories");
export const productCollection = collection(db, "products");
export const orderCollection = collection(db, "orders");

const provider = new GoogleAuthProvider();
export const logIn = () => signInWithPopup(auth, provider);
export const logOut = () => signOut(auth);
export const onAuthChange = (callback) => onAuthStateChanged(auth, callback);

export const onCategoriesLoad = (callback) =>
  onSnapshot(categoryCollection, (snapshot) =>
    callback(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    )
  );
export const onProductsLoad = (callback) =>
  onSnapshot(productCollection, (snapshot) =>
    callback(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    )
  );
export const onOrdersLoad = (callback) =>
  onSnapshot(orderCollection, (snapshot) =>
    callback(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    )
  );
  // отправка фотографии и получение ее url
export const uploadProductPhoto = async (file) => {
  const storageRef = ref(storage, `products/${file.name}`);
  await uploadBytes(storageRef, file);

  const url = await getDownloadURL(storageRef);
  return url;
};
