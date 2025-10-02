const admin = require('firebase-admin');
const fs = require('fs');

// TODO: Substitua pelo caminho para seu arquivo de chave de conta de serviço
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const relatorio = JSON.parse(fs.readFileSync('relatorio_auditoria.json'));

const syncRelatorio = async () => {
  console.log('Iniciando sincronização com o Firestore...');
  const batch = db.batch();

  for (const [modulo, dados] of Object.entries(relatorio)) {
    const docRef = db.collection('auditoria_modulos').doc(modulo);
    batch.set(docRef, dados, { merge: true });
  }

  await batch.commit();
  console.log('✅ Sincronização concluída com sucesso!');
};

syncRelatorio().catch(console.error);