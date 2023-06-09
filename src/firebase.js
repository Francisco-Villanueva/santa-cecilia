// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA1S9eCe9Ld37QuSbcovup49gcchfs-1iM",
  authDomain: "santa-cecilia-db.firebaseapp.com",
  databaseURL: "https://santa-cecilia-db-default-rtdb.firebaseio.com",
  projectId: "santa-cecilia-db",
  storageBucket: "santa-cecilia-db.appspot.com",
  messagingSenderId: "279233138056",
  appId: "1:279233138056:web:e12d1d5f6b7b1c9152fe3d",
  measurementId: "G-J0F9LYXSNK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);
export const db = getDatabase(app);
