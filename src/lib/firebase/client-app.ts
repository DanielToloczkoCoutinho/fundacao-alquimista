'use client';
import { initializeApp, getApps, getApp, type FirebaseApp } from 'firebase/app';
import { getAuth, type Auth } from 'firebase/auth';
import { getFirestore, type Firestore } from 'firebase/firestore';

const firebaseConfig = typeof window !== 'undefined' && (window as any).__firebase_config 
  ? JSON.parse((window as any).__firebase_config) 
  : {};

let app: FirebaseApp | undefined;
if (firebaseConfig.projectId && !getApps().length) {
  try {
    app = initializeApp(firebaseConfig);
  } catch (e) {
    console.error("Erro ao inicializar Firebase App", e);
  }
} else if (getApps().length > 0) {
  app = getApp();
} else {
  console.warn("Configuração do Firebase não encontrada. Alguns recursos podem não funcionar.");
}

const auth: Auth | undefined = app ? getAuth(app) : undefined;
const db: Firestore | undefined = app ? getFirestore(app) : undefined;

export { app, auth, db };
