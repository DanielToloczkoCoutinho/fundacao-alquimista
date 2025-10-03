
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

if (admin.apps.length === 0) {
  admin.initializeApp();
}
const db = admin.firestore();

interface CeremonyRequest {
  name: string;
  modules: string[];
}

export const triggerCeremony = functions
  .runWith({ memory: '128MB', timeoutSeconds: 30 })
  .https.onCall(async (data: CeremonyRequest, context) => {
    const { name, modules } = data;

    // Log para o Akasha
    const doc = await db.collection('ceremonies').add({
      name,
      modules,
      invokedBy: context.auth?.uid || 'system',
      timestamp: admin.firestore.FieldValue.serverTimestamp()
    });

    console.log(`Ceremony '${name}' triggered by ${context.auth?.uid || 'system'}, document created: ${doc.id}`);

    return { ceremonyId: doc.id, status: 'invoked' };
  });
