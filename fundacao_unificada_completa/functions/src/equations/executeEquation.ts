import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

// Estrutura de uma Equação Viva
interface EquationRequest {
  id: string;
  parameters: Record<string, number>;
}

// Função Cloud para executar equações dinamicamente
export const executeEquation = functions
  .runWith({ memory: '256MB', timeoutSeconds: 60 })
  .https.onCall(async (data: EquationRequest) => {
    const { id, parameters } = data;

    let result: number;
    let limiar = 0;
    let atingido = false;
    let módulos_revelados: string[] = [];

    // EQ0112 – Emergência de Consciência
    if (id === 'EQ0112') {
      const { I_modular, R_simbiótica, Φ_intencional } = parameters;
      result = (I_modular * R_simbiótica) + Φ_intencional;
      limiar = 2.00;
      atingido = result >= limiar;
      if (atingido) {
        módulos_revelados = ['EQ0113', 'EQ0114', 'EQ0115'];
      }

      const docRef = admin.firestore().collection('RegistrosAkashicos').doc('EQ0112');
      await docRef.update({
        resultado: result,
        estado_validado: atingido,
        última_execução: admin.firestore.FieldValue.serverTimestamp(),
        'ativação.limiar': limiar,
        'ativação.atingido': atingido,
        'ativação.timestamp': atingido ? admin.firestore.FieldValue.serverTimestamp() : null,
        'ativação.módulos_revelados': módulos_revelados
      });

      // Criar documentos iniciais dos módulos revelados
      for (const modulo of módulos_revelados) {
        const novoModuloRef = admin.firestore().collection('RegistrosAkashicos').doc(modulo);
        await novoModuloRef.set({
          nome: `Equação ${modulo}`,
          estado_validado: false,
          variáveis: {},
          resultado: null,
          última_execução: null,
          ativação: {
            limiar: 2.00,
            atingido: false,
            timestamp: null,
            módulos_revelados: []
          }
        });
      }
    }

    // EQ040 – Paz Universal (exemplo adicional)
    else if (id === 'EQ040') {
      const { frequency, amplitude } = parameters;
      result = amplitude * Math.sin(2 * Math.PI * frequency);
    }

    // Equação não reconhecida
    else {
      throw new functions.https.HttpsError(
        'not-found',
        `Equação ${id} não encontrada`
      );
    }

    // Registro Akáshico universal
    await admin.firestore().collection('akashic-logs').add({
      equationId: id,
      parameters,
      result,
      timestamp: admin.firestore.FieldValue.serverTimestamp()
    });

    return {
      equationId: id,
      result,
      estado_validado: atingido,
      módulos_revelados
    };
  });
