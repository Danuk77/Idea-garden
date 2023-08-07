import { getFunctions, connectFunctionsEmulator } from 'firebase/functions';
import { initializeApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator  } from "firebase/firestore"; 

// Firebase configuration information
const firebaseConfig = {
    apiKey: "AIzaSyAomQixQ9gGMNCYeYoeo66kFWYWrQfEN2g",
    authDomain: "idea-garden-a35f6.firebaseapp.com",
    projectId: "idea-garden-a35f6",
    storageBucket: "idea-garden-a35f6.appspot.com",
    messagingSenderId: "615250599761",
    appId: "1:615250599761:web:40bd4571838df549197d70",
    measurementId: "G-3QF8JBH91H"
};

// Initialize Firebase
const firebaseReference = initializeApp(firebaseConfig);
// const functions = getFunctions(firebaseReference, "us-central1");
const db = getFirestore(firebaseReference);

// If we are running in development mode use the emulator instead
if (__DEV__){
    // connectFunctionsEmulator(functions, '127.0.0.1', 5001);
    connectFirestoreEmulator(db, '127.0.0.1', 8080);
}


export { db};