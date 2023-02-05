import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCPrgcymVWcfRGByvaI42v18QgsEfZU_0I",
    authDomain: "react-chat-app-8dc3b.firebaseapp.com",
    projectId: "react-chat-app-8dc3b",
    storageBucket: "react-chat-app-8dc3b.appspot.com",
    messagingSenderId: "750130919439",
    appId: "1:750130919439:web:d6c185468c35e53518cb7a"
};

// Initialize Firebase
export const Firebase = initializeApp(firebaseConfig);
export const Authentication = getAuth();
export const Storage = getStorage();