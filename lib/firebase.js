// lib/firebase.js
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD-BQfQzD_d531M-jDvkgbGqLu2YXFnVG8",
  authDomain: "sublimarte-13297.firebaseapp.com",
  projectId: "sublimarte-13297",
  storageBucket: "sublimarte-13297.firebasestorage.app",
  messagingSenderId: "528606561359",
  appId: "1:528606561359:web:a30177be83d82039cf563a",
  measurementId: "G-1VHK0G9YST"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { auth };