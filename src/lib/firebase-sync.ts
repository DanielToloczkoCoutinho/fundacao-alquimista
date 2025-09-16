// /app/lib/firebase-sync.ts
'use server';

import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { fundacaoAlquimista } from './foundation-integrator';
import { db } from './firebase'; // Importa a instância já inicializada

export async function sincronizarFundacao() {
  try {
    const colecao = collection(db, 'fundacaoAlquimista');
    await addDoc(colecao, {
      timestamp: Date.now(),
      dados: JSON.parse(JSON.stringify(fundacaoAlquimista)) // Garante que o objeto é serializável
    });
    console.log('🔗 Fundação sincronizada com Firebase.');
  } catch (error) {
    console.error("Erro ao sincronizar com Firebase:", error);
  }
}
