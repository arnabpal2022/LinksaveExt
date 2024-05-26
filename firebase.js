import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import dotenv from "dotenv"

dotenv.config();

const firebaseConfig = {
  apiKey: "AIzaSyBWuk7g290xp-8aagFYMnqCJfj6aXrCj2M",
  authDomain: "linksave-2d4fa.firebaseapp.com",
  projectId: "linksave-2d4fa",
  storageBucket: "linksave-2d4fa.appspot.com",
  messagingSenderId: "1068249479198",
  appId: "1:1068249479198:web:540547bb5b20f1694e960f",
  measurementId: "G-4NNQK4DLPR",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
