'use client';

import { Suspense, useEffect, useState } from 'react';
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';
import { QuantumOrchestrator } from '@/components/ui/quantum-orchestrator';
import SuspenseFallback from '@/components/ui/suspense-fallback';

// --- Configuração do Firebase ---
const firebaseConfig = {
    "projectId": "studio-4265982502-21871",
    "appId": "1:174545373080:web:2fb8c5af49a2bae8054ded",
    "storageBucket": "studio-4265982502-21871.firebasestorage.app",
    "apiKey": "AIzaSyCkkmmK5d8XPvGPUo0jBlSqGNAnE7BuEZg",
    "authDomain": "studio-4265982502-21871.firebaseapp.com",
    "measurementId": "",
    "messagingSenderId": "174545373080"
};

// Este é o componente principal que será exportado
const App = () => {
  const [items, setItems] = useState<string[]>([]);
  const [status, setStatus] = useState<string>('Conectando ao Akasha...');

  useEffect(() => {
    // A inicialização do Firebase e a lógica do Firestore agora estão dentro do useEffect
    const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
    const db = getFirestore(app);

    let unsubscribe: () => void;
    let retryCount = 0;
    const maxRetries = 5;

    const connect = () => {
      if (unsubscribe) {
        unsubscribe();
      }
      
      unsubscribe = onSnapshot(collection(db, 'tabs'), (snapshot) => {
        const data = snapshot.docs.map(doc => doc.data().name as string);
        setItems(data);
        setStatus(`Akasha sincronizado: ${new Date().toLocaleTimeString()}`);
        retryCount = 0;
      }, (error) => {
        retryCount++;
        setStatus(`Erro no Akasha (tentativa ${retryCount}/${maxRetries}): ${error.message}. Reconectando em 5s...`);
        if (retryCount < maxRetries) {
          setTimeout(connect, 5000);
        } else {
          setStatus('Falha crítica: Conexão com o Akasha perdida. Verifique a rede e as configurações do Firebase.');
        }
      });
    };

    connect();

    // Cleanup
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []); // O array de dependências vazio garante que isso rode apenas uma vez

  return (
    <div className="flex flex-col h-screen text-white cosmic-bg" suppressHydrationWarning>
      <Suspense fallback={<SuspenseFallback />}>
         <QuantumOrchestrator />
      </Suspense>
    </div>
  );
};

export default App;
