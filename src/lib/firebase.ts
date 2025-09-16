'use client';

import { initializeApp, getApps, getApp } from 'firebase/app';
import { initializeFirestore, getFirestore, enableIndexedDbPersistence } from 'firebase/firestore';

const firebaseConfig = {
    "projectId": "studio-4265982502-21871",
    "appId": "1:174545373080:web:2fb8c5af49a2bae8054ded",
    "storageBucket": "studio-4265982502-21871.firebasestorage.app",
    "apiKey": "AIzaSyCkkmmK5d8XPvGPUo0jBlSqGNAnE7BuEZg",
    "authDomain": "studio-4265982502-21871.firebaseapp.com",
    "measurementId": "",
    "messagingSenderId": "174545373080"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
  useFetchStreams: false,
});

if (typeof window !== 'undefined') {
    enableIndexedDbPersistence(db).catch((err) => {
        if (err.code == 'failed-precondition') {
            console.warn('Persistência já ativada em outra aba. A base de dados local será compartilhada.');
        } else if (err.code == 'unimplemented') {
            console.warn('Navegador não suporta persistência offline do Firestore.');
        }
    });
}

export { app, db };
