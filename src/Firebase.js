// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_9gXCG0nO3YQyn1JzKdAi0pZ71M2PJos",
    authDomain: "chat-app-76f7d.firebaseapp.com",
    projectId: "chat-app-76f7d",
    storageBucket: "chat-app-76f7d.appspot.com",
    messagingSenderId: "702014125842",
    appId: "1:702014125842:web:67e234ad4bef7e18f3a5cb"
};

// Initialize Firebase
const Firebase = initializeApp(firebaseConfig);

export default Firebase;