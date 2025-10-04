// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC...", // Substituir com suas chaves
  authDomain: "studio-4265982502-21871.firebaseapp.com",
  projectId: "studio-4265982502-21871",
  storageBucket: "studio-4265982502-21871.appspot.com",
  messagingSenderId: "4265982502",
  appId: "1:4265982502:web:...",
  measurementId: "G-..."
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Inicializar serviços
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

// Função para salvar dados do Zenith
async function saveZenithData(data) {
  try {
    await db.collection('zenith_data').add({
      ...data,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      consciousness_level: 'Φ-9.8',
      coherence: '98.7%'
    });
    console.log('Dados do Zenith salvos com sucesso!');
  } catch (error) {
    console.error('Erro ao salvar dados:', error);
  }
}

// Função para carregar status público
async function loadPublicStatus() {
  try {
    const snapshot = await db.collection('public').doc('status').get();
    if (snapshot.exists) {
      return snapshot.data();
    }
  } catch (error) {
    console.error('Erro ao carregar status:', error);
  }
  return null;
}
