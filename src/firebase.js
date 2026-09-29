import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

// Firebase configuration for Monarch Properties
// You can supply these values via a .env file or update them directly below
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyYOUR_API_KEY_HERE",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "monarch-properties.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "monarch-properties",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "monarch-properties.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "1234567890",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:1234567890:web:abcdef123456"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore
export const db = getFirestore(app);

// Central submission helper for Monarch Properties
export async function submitEnquiry(data) {
  try {
    // Specifically saving to the dedicated collection: yoooneNibm
    const colRef = collection(db, 'yoooneNibm');
    const docRef = await addDoc(colRef, {
      ...data,
      company: 'Monarch Properties',
      project: 'YOO ONE NIBM',
      timestamp: serverTimestamp(),
      createdAtClient: new Date().toISOString(),
      status: 'NEW_LEAD'
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error adding document to yoooneNibm: ', error);
    return { success: false, error };
  }
}
