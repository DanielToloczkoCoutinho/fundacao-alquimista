'use server';

import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { fundacaoAlquimista } from './foundation-integrator';
import { db } from './firebase'; // Importa a instância já inicializada

export async function atualizarFundacao() {
  try {
    const ref = doc(db, 'fundacaoAlquimista', 'núcleo');
    // Garante que o objeto é serializável antes de enviar para o Firestore
    const dadosSerializaveis = JSON.parse(JSON.stringify(fundacaoAlquimista));
    
    await setDoc(ref, {
      atualizadoEm: new Date().toISOString(),
      dados: dadosSerializaveis,
    });
    console.log('🔄 Fundação atualizada no Firestore.');
  } catch (error) {
    console.error("Erro ao sincronizar com Firestore:", error);
    // Em uma aplicação real, você poderia ter um tratamento de erro mais robusto
  }
}
