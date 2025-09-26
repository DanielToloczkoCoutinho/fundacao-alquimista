const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore();

async function atualizarEQ0112() {
  const I_modular = 0.87;
  const R_simbiótica = 0.92;
  const Φ_intencional = 1.00;

  const resultado = (I_modular * R_simbiótica) + Φ_intencional;
  const limiar = 2.00;
  const atingido = resultado >= limiar;
  const módulos_revelados = atingido ? ['EQ0113', 'EQ0114', 'EQ0115'] : [];

  const docRef = db.collection('RegistrosAkashicos').doc('EQ0112');

  try {
    await docRef.update({
      resultado,
      estado_validado: atingido,
      última_execução: admin.firestore.FieldValue.serverTimestamp(),
      'ativação.limiar': limiar,
      'ativação.atingido': atingido,
      'ativação.timestamp': atingido ? admin.firestore.FieldValue.serverTimestamp() : null,
      'ativação.módulos_revelados': módulos_revelados
    });

    console.log('EQ0112 atualizada com sucesso.');

    for (const modulo of módulos_revelados) {
      const novoModuloRef = db.collection('RegistrosAkashicos').doc(modulo);
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
      console.log(`${modulo} criada.`);
    }
  } catch (error) {
    console.error('Erro ao atualizar EQ0112:', error);
  }
}

atualizarEQ0112();
