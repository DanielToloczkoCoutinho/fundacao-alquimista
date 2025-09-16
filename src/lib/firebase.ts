'use client';

import { initializeApp, getApps, getApp } from 'firebase/app';
import { initializeFirestore, getFirestore, enableIndexedDbPersistence, connectFirestoreEmulator } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Use initializeFirestore para forçar long-polling e resolver problemas de conexão
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
  useFetchStreams: false,
});

if (typeof window !== 'undefined') {
  // Conectar ao emulador se estiver em desenvolvimento (opcional, mas recomendado)
  if (process.env.NODE_ENV === 'development' && process.env.NEXT_PUBLIC_USE_EMULATORS === 'true') {
     connectFirestoreEmulator(db, 'localhost', 8080);
     console.log("Conectado ao Emulador Firestore.");
  }

  enableIndexedDbPersistence(db).catch((err) => {
      if (err.code === 'failed-precondition') {
          console.warn('Persistência do Firestore já ativada em outra aba. A base de dados local será compartilhada.');
      } else if (err.code === 'unimplemented') {
          console.warn('Navegador não suporta persistência offline do Firestore.');
      }
  });
}

export { app, db };
