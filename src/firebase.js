import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { getAnalytics, isSupported } from 'firebase/analytics';

// Firebase configuration for Monarch Properties
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyAodGe-33HfGb4-tj3SViVNYVv6By4YCLo",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "monarch-properties-22132.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "monarch-properties-22132",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "monarch-properties-22132.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "85802793470",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:85802793470:web:02c1ef5180531c4edda8af",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-XKZVGFXT1B"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Analytics safely
let analytics = null;
if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

// Initialize Cloud Firestore
export const db = getFirestore(app);

// Central submission helper for Monarch Properties
// Specifically stores under collection: 'yoooneNibm'
export async function submitEnquiry(data) {
  try {
    const colRef = collection(db, 'yoooneNibm');
    const docRef = await addDoc(colRef, {
      ...data,
      company: 'Monarch Properties',
      project: 'YOO ONE NIBM',
      subproject: 'Tower 2 – Serenity',
      timestamp: serverTimestamp(),
      createdAtClient: new Date().toISOString(),
      status: 'NEW_LEAD'
    });
    console.log('Lead successfully submitted to yoooneNibm with ID:', docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error adding document to yoooneNibm:', error);
    return { success: false, error };
  }
}

export { app, analytics };
