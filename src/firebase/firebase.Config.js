// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyACntj86yGKyN0gis45_nx2053laxrgcqw",
    authDomain: "learn-vibe.firebaseapp.com",
    projectId: "learn-vibe",
    storageBucket: "learn-vibe.appspot.com",
    messagingSenderId: "1047778330460",
    appId: "1:1047778330460:web:f7f7ee3c16055fd04aa399"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;