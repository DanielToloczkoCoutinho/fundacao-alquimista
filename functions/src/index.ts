import * as functions from 'firebase-functions';
import { executeEquation } from './equations/executeEquation';

export const nexusOrchestrator = functions.https.onRequest(async (req, res) => {
  // Permitir requisições de qualquer origem para o ambiente de desenvolvimento
  res.set('Access-Control-Allow-Origin', '*');

  if (req.method === 'OPTIONS') {
    // Pre-flight request. Reply successfully:
    res.set('Access-Control-Allow-Methods', 'POST');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.set('Access-Control-Max-Age', '3600');
    res.status(204).send('');
    return;
  }

  const { moduleId } = req.body;
  if (!moduleId) {
    res.status(400).json({ error: 'moduleId é necessário' });
    return;
  }
  
  try {
    const result = await executeEquation(moduleId);
    res.json(result);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});
