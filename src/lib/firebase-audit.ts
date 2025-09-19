
'use server';

import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export interface AuditedModule {
  id: string;
  title: string;
  status: string;
  lastInvocation: string;
  connections: string[];
}

export async function auditModules(): Promise<AuditedModule[]> {
  const modulesRef = collection(db, 'modules');
  const snapshot = await getDocs(modulesRef);

  if (snapshot.empty) {
    console.warn("A coleção 'modules' está vazia ou não foi encontrada no Firestore. Nenhum módulo para auditar.");
    return [];
  }

  const report: AuditedModule[] = [];

  snapshot.forEach(doc => {
    const data = doc.data();
    report.push({
      id: doc.id,
      title: data.title || 'Sem título',
      status: data.status || 'Desconhecido',
      lastInvocation: data.lastInvocation ? new Date(data.lastInvocation.seconds * 1000).toLocaleString('pt-BR') : 'Não registrado',
      connections: data.connections || []
    });
  });

  return report;
}
