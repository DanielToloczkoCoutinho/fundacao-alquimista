import * as functions from 'firebase-functions';
import { executeEquation as runEquationFunction } from './equations/executeEquation';

// Exporta a função principal para ser implantada.
export const executeEquation = runEquationFunction;

// Endpoint de verificação de saúde para monitoramento.
export const healthCheck = functions.https.onRequest((req, res) => {
  res.status(200).send('Foundation Alchemist Functions: OK');
});
