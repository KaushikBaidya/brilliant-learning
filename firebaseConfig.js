// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_3GWHGjj0RoZ2NjH5RJISEhftvG4Hk9Y",
  authDomain: "brilliant-ef27d.firebaseapp.com",
  projectId: "brilliant-ef27d",
  storageBucket: "brilliant-ef27d.appspot.com",
  messagingSenderId: "354513214701",
  appId: "1:354513214701:web:559578f62fc3c6920dc0e4",
  measurementId: "G-6VPQFTDY2H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
