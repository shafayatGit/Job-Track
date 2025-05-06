// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
import {
    getAuth
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAQm8n0HLpntgIrQ0yy5lJ-ti0JZgD9Pu4",
    authDomain: "assignment-9-3c478.firebaseapp.com",
    projectId: "assignment-9-3c478",
    storageBucket: "assignment-9-3c478.firebasestorage.app",
    messagingSenderId: "923536576938",
    appId: "1:923536576938:web:a58749e62ac72deb625bd3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)