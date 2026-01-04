import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBQzLP1jE04nkenaZcZgnUjpzap5aRDCRY",
  authDomain: "discord-clone-63827.firebaseapp.com",
  projectId: "discord-clone-63827",
  storageBucket: "discord-clone-63827.firebasestorage.app",
  messagingSenderId: "808217844292",
  appId: "1:808217844292:web:15128454435c0d57b8fa11"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {db, auth, provider};

