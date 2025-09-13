
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { signOut } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyDsVvfT44VM9YPdtyHFS9RGvMDFpJ-n8DY",
  authDomain: "grindtime-eea1f.firebaseapp.com",
  projectId: "grindtime-eea1f",
  storageBucket: "grindtime-eea1f.firebasestorage.app",
  messagingSenderId: "691312232886",
  appId: "1:691312232886:web:ba439afb498acb56389917"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)