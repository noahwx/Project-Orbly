import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth} from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDTVEPrLrHgJtB_XSDs7eEpGuZE3Ncnqls",
    authDomain: "orblyproject.firebaseapp.com",
    projectId: "orblyproject",
    storageBucket: "orblyproject.appspot.com",  
    messagingSenderId: "659465728102",  
    appId: "1:659465728102:web:84894f6182faa95a91bda7",  
    measurementId: "G-F5C9LJ34XH"
};
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const createUser = async (email, password) => {
    return createUserWithEmailAndPassword(getAuth(app), email, password);
}
  
export const signInUser = async (email, password) => {
    return signInWithEmailAndPassword(getAuth(app), email, password);
}