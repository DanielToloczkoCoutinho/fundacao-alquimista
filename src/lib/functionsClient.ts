
'use client';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { app } from './firebase'; // Reutiliza a instância inicializada do app

// Obtém a instância do Functions a partir do app principal
const funcs = getFunctions(app);

// Exporta a função "runEquation" como uma função "callable"
export const runEquation = httpsCallable(funcs, 'runEquation');

// Exporta a nova função "triggerCeremony"
export const triggerCeremony = httpsCallable(funcs, 'performCeremony');
