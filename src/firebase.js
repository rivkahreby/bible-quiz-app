import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, setPersistence, browserLocalPersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyADhnXhRakmj7Su43cGxm4hl4sJ9WfA1Mw",
  authDomain: "biblequizapp-cce1b.firebaseapp.com",
  projectId: "biblequizapp-cce1b",
  storageBucket: "biblequizapp-cce1b.firebasestorage.app",
  messagingSenderId: "765270751809",
  appId: "1:765270751809:web:47119c2b2b78c81d6a24c0"
};

// 1. Initialize Firebase
const app = initializeApp(firebaseConfig);

// 2. Initialize Auth
const auth = getAuth(app);

// 3. Set Persistence
setPersistence(auth, browserLocalPersistence)
  .catch((error) => {
    console.error("Persistence error:", error);
  });

const provider = new GoogleAuthProvider();

export { auth, provider };