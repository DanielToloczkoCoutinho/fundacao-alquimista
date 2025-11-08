'use client';
import { initializeApp, getApps, getApp, type FirebaseOptions } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig: FirebaseOptions = typeof window !== 'undefined' && (window as any).__firebase_config ? JSON.parse((window as any).__firebase_config) : {};

let app;
if (firebaseConfig.projectId) {
  app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
} else {
  console.warn("Firebase config not found, Firebase services will be unavailable.");
}

const auth = app ? getAuth(app) : undefined;
const db = app ? getFirestore(app) : undefined;

export { auth, db };
