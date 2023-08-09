import { initializeApp } from "firebase/app";
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions';
import { getFirestore, connectFirestoreEmulator  } from "firebase/firestore"; 
import { getAuth, connectAuthEmulator } from "firebase/auth";

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
const functions = getFunctions(firebaseReference);
const db = getFirestore(firebaseReference);
const auth = getAuth(firebaseReference);

// If we are running in development mode use the emulator instead
// Ensure the emulator is running before running npx expo start
if (__DEV__){
    connectFunctionsEmulator(functions, '127.0.0.1', 5001);
    connectFirestoreEmulator(db, '127.0.0.1', 8080);
    connectAuthEmulator(auth, "http://127.0.0.1:9099");
}


export { db, functions, auth };