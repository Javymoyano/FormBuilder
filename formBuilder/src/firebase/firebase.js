// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import dotenv from "dotenv";

// dotenv.config();

import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore, getDoc, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_APIKEY,
  // authDomain: process.env.REACT_APP_AUTHDOMAIN,
  // projectId: process.env.REACT_APP_PROYECTID,
  // storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  // appId: process.env.REACT_APP_APPID,
  // measurementId: process.env.REACT_APP_MEASUREMENTID,

  apiKey: "AIzaSyAgojpArZq_FMmVnrO2hJqrV5oxJM2eiZo",
  authDomain: "form-builder-379e6.firebaseapp.com",
  projectId: "form-builder-379e6",
  storageBucket: "form-builder-379e6.appspot.com",
  messagingSenderId: "71111907759",
  appId: "1:71111907759:web:f6851f6b766112597bb75a",
  measurementId: "G-GJ25JP6VGW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
const storage = getStorage(app);

export const addCollectionAndDocuments = async (user, responses) => {
  const userRef = doc(db, "users", user);
  const userSnapshot = await getDoc(userRef);
  if (!userSnapshot.exists()) {
    try {
      await setDoc(userRef, responses);
      console.log("done!");
    } catch (error) {
      console.log("error fatal");
    }
  }
  console.log(userRef);
};

export const getDocument = async (user) => {
  const collectionRef = doc(db, "users", user);
  console.log(collectionRef);
  const querySnapshot = await getDoc(collectionRef);
  if (querySnapshot) {
    try {
      return querySnapshot.data();
    } catch (error) {
      console.log("error fatal");
    }

    //console.log("data documento", querySnapshot);
  }
};

// export const getDocumentoPorId = async (user) => {
//   const docRef = doc(db, "users", user);
//   const docSnap = await getDoc(docRef);
//   if (docSnap.exists()) {
//     console.log("ID del documento:", docSnap.id);
//     console.log("Datos del documento:", docSnap.data());
//   } else {
//     console.log("No se encontró el documento");
//   }
// };
