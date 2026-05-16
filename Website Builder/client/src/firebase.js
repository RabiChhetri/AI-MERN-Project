// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "webgenai-3e2fc.firebaseapp.com",
  projectId: "webgenai-3e2fc",
  storageBucket: "webgenai-3e2fc.firebasestorage.app",
  messagingSenderId: "424693016888",
  appId: "1:424693016888:web:5fac8580739b17bb6a39cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };