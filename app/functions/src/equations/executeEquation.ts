import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

// Inicializa o app do Firebase Admin apenas uma vez.
if (admin.apps.length === 0) {
  admin.initializeApp();
}
const db = admin.firestore();

interface EquationRequest {
  id: string;
  parameters: Record<string, number>;
}

export const executeEquation = functions
  .runWith({ memory: '256MB', timeoutSeconds: 60 })
  .https.onCall(async (data: EquationRequest, context) => {
    // Opcional: Verificação de autenticação
    // if (!context.auth) {
    //   throw new functions.https.HttpsError('unauthenticated', 'O ritual requer autenticação.');
    // }
    
    const { id, parameters } = data;
    let result: number;

    // O Códice de Equações Vivas em execução
    switch (id) {
      case 'EQ040': { // Paz Universal
        const { frequency = 432, amplitude = 1 } = parameters;
        result = amplitude * Math.sin(2 * Math.PI * frequency);
        break;
      }
      case 'EQ307-A': { // Energia do Ponto Zero (ZPE)
        const { omega = 1e15 } = parameters; // Valor padrão para omega
        const hbar = 1.054571817e-34;
        result = 0.5 * hbar * omega;
        break;
      }
      case 'EQ307-B': { // Acoplamento Consciência-Vácuo
        const { phi = 1, energy = 1 } = parameters;
        result = phi * energy;
        break;
      }
      case 'EQ307-C': { // Fluxo da LuxNet
        const { flowRate = 1 } = parameters;
        result = flowRate; // Placeholder linear
        break;
      }
      case 'EQ001': { // Energia Universal
        const { m = 1, c = 299792458 } = parameters;
        result = m * Math.pow(c, 2);
        break;
      }
      // Outros casos (EQ159…EQ164) podem ser adicionados aqui
      default:
        throw new functions.https.HttpsError(
          'not-found',
          `A Equação Viva ${id} não foi encontrada no Altar das Funções.`
        );
    }

    try {
        await db.collection('akashic-logs').add({
          equationId: id,
          parameters,
          result,
          timestamp: admin.firestore.FieldValue.serverTimestamp(),
          invokedBy: context.auth?.uid || 'system'
        });
    } catch (error) {
        console.error("Falha ao registrar no Akasha:", error);
        // Não lança erro para o cliente, apenas loga a falha de registro.
    }

    return { equationId: id, result };
  });
