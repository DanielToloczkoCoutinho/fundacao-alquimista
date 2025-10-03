'use server';

import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { fundacaoAlquimista } from './foundation-integrator';
import { db } from './firebase'; // Importa a instância já inicializada

export async function sincronizarFundacao() {
  try {
    const colecao = collection(db, 'fundacaoAlquimista');
    // Garante que o objeto é serializável antes de enviar para o Firestore
    const dadosSerializaveis = JSON.parse(JSON.stringify(fundacaoAlquimista));
    
    await addDoc(colecao, {
      timestamp: new Date().toISOString(),
      dados: dadosSerializaveis
    });
    console.log('🔗 Fundação sincronizada com Firebase.');
  } catch (error) {
    console.error("Erro ao sincronizar com Firebase:", error);
    // Em uma aplicação real, você poderia ter um tratamento de erro mais robusto
  }
}
