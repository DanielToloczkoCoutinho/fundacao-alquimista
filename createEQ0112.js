const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore();

db.collection('RegistrosAkashicos').doc('EQ0112').set({
  nome: "Equação da Emergência de Consciência",
  formula_latex: "C_{emergente} = ∑(I_{modular} × R_{simbiótica}) + Φ_{intencional}",
  variáveis: {
    I_modular: 0.87,
    R_simbiótica: 0.92,
    Φ_intencional: 1.00
  },
  resultado: 1.80,
  estado_validado: false,
  última_execução: admin.firestore.FieldValue.serverTimestamp(),
  ativação: {
    limiar: 2.00,
    atingido: false,
    timestamp: null,
    módulos_revelados: []
  }
}).then(() => {
  console.log("EQ0112 criada com sucesso.");
}).catch((error) => {
  console.error("Erro ao criar EQ0112:", error);
});
