// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUi8gP-xnVCxJ4d2r8pm2-SZxOeGHK5Io",
  authDomain: "luxorides-clone.firebaseapp.com",
  projectId: "luxorides-clone",
  storageBucket: "luxorides-clone.appspot.com",
  messagingSenderId: "754037026534",
  appId: "1:754037026534:web:7561dda943b26094159527"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();